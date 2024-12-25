import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

// URLs to exclude from verification
const EXCLUDED_URLS = [
  '/services/voice-roofing-services',
  '/services/voice-roof-repairs',
  '/services/voice-roof-installation'
];

const BASE_URL = 'https://52roofer.com';
const PAGES_DIR = path.join(process.cwd(), 'pages');

async function verifyPage(filePath) {
  // Convert file path to URL path
  const urlPath = filePath
    .replace(PAGES_DIR, '')
    .replace(/\.[jt]sx?$/, '')
    .replace(/\/index$/, '/');

  // Skip excluded URLs
  if (EXCLUDED_URLS.includes(urlPath)) {
    console.log(`Skipping excluded URL: ${urlPath}`);
    return null;
  }

  const url = `${BASE_URL}${urlPath}`;
  const issues = {
    url,
    schemaIssues: [],
    statusCode: null,
    redirectChain: []
  };

  try {
    // Check HTTP status and redirect chain
    const response = await fetch(url, { redirect: 'manual' });
    issues.statusCode = response.status;

    if (response.status === 301 || response.status === 302) {
      let currentUrl = url;
      let redirectCount = 0;
      const maxRedirects = 10;

      while (redirectCount < maxRedirects) {
        const redirectResponse = await fetch(currentUrl, { redirect: 'manual' });
        if (redirectResponse.status !== 301 && redirectResponse.status !== 302) {
          break;
        }
        currentUrl = new URL(redirectResponse.headers.get('location'), currentUrl).toString();
        issues.redirectChain.push(currentUrl);
        redirectCount++;
      }
    }

    // Check schema markup if page is accessible
    if (response.status === 200) {
      const html = await response.text();
      const root = parse(html);
      const schemas = root.querySelectorAll('script[type="application/ld+json"]');

      // Check for duplicate schema types
      const schemaTypes = new Set();
      schemas.forEach(schema => {
        try {
          const data = JSON.parse(schema.text);
          if (data['@graph']) {
            data['@graph'].forEach(item => {
              if (schemaTypes.has(item['@type'])) {
                issues.schemaIssues.push(`Duplicate schema type: ${item['@type']}`);
              }
              schemaTypes.add(item['@type']);
            });
          } else if (schemaTypes.has(data['@type'])) {
            issues.schemaIssues.push(`Duplicate schema type: ${data['@type']}`);
          } else {
            schemaTypes.add(data['@type']);
          }

          // Check for missing @id in schema
          if (!data['@id'] && !data['@graph']) {
            issues.schemaIssues.push('Missing @id in schema');
          } else if (data['@graph']) {
            data['@graph'].forEach(item => {
              if (!item['@id']) {
                issues.schemaIssues.push(`Missing @id in schema type: ${item['@type']}`);
              }
            });
          }
        } catch (e) {
          issues.schemaIssues.push(`Invalid JSON in schema: ${e.message}`);
        }
      });
    }
  } catch (error) {
    issues.schemaIssues.push(`Error checking URL: ${error.message}`);
  }

  return issues;
}

async function scanSite() {
  const files = await glob('**/*.{tsx,jsx}', { cwd: PAGES_DIR });
  const results = {
    total: 0,
    schema: 0,
    status404: 0,
    status301: 0,
    issues: []
  };

  for (const file of files) {
    // Skip API routes, excluded pages, and special Next.js pages
    if (
      file.startsWith('api/') ||
      file.startsWith('_') ||
      EXCLUDED_URLS.some(url => file.includes(url))
    ) {
      continue;
    }

    results.total++;
    const issues = await verifyPage(path.join(PAGES_DIR, file));
    
    if (issues && (issues.schemaIssues.length > 0 || issues.statusCode !== 200)) {
      if (issues.schemaIssues.length > 0) results.schema++;
      if (issues.statusCode === 404) results.status404++;
      if (issues.statusCode === 301) results.status301++;
      results.issues.push(issues);
    }
  }

  // Save results to file
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPagesScanned: results.total,
      pagesWithSchemaIssues: results.schema,
      pages404: results.status404,
      pages301: results.status301
    },
    details: results.issues
  };

  fs.writeFileSync(
    'site-health-report.json',
    JSON.stringify(report, null, 2)
  );

  console.log('Site Health Summary:');
  console.log('-------------------');
  console.log(`Total pages scanned: ${results.total}`);
  console.log(`Pages with schema issues: ${results.schema}`);
  console.log(`Pages with 404 errors: ${results.status404}`);
  console.log(`Pages with 301 redirects: ${results.status301}`);
  console.log('\nDetailed report saved to site-health-report.json');
}

scanSite().catch(console.error);
