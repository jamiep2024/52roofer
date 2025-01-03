const fs = require('fs');
const path = require('path');
const https = require('https');

const SITE_URL = 'https://52roofer.com';
const PAGES_DIR = path.join(process.cwd(), 'pages');

// Helper function to get all page files
function getAllPages(dir = PAGES_DIR) {
  let pages = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('_') && item !== 'api') {
      pages = pages.concat(getAllPages(fullPath));
    } else if (
      (item.endsWith('.tsx') || item.endsWith('.js')) &&
      !item.startsWith('_') &&
      !item.startsWith('.')
    ) {
      pages.push(fullPath);
    }
  }

  return pages;
}

// Helper function to extract links from a file
function extractLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const links = new Set();

  // Match Next.js Link components
  const linkMatches = content.match(/Link\s+href=["']([^"']+)["']/g) || [];
  linkMatches.forEach(match => {
    const href = match.match(/href=["']([^"']+)["']/)[1];
    if (href.startsWith('/') || !href.includes('://')) {
      links.add(href);
    }
  });

  // Match regular anchor tags
  const anchorMatches = content.match(/<a\s+href=["']([^"']+)["']/g) || [];
  anchorMatches.forEach(match => {
    const href = match.match(/href=["']([^"']+)["']/)[1];
    if (href.startsWith('/') || !href.includes('://')) {
      links.add(href);
    }
  });

  return Array.from(links);
}

// Helper function to check if a URL exists
async function checkUrl(url) {
  return new Promise((resolve) => {
    const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`;
    const req = https.get(fullUrl, {
      timeout: 5000,
      headers: {
        'User-Agent': '52roofer-url-checker/1.0'
      }
    }, (res) => {
      resolve({
        url,
        statusCode: res.statusCode,
        location: res.headers.location
      });
    });

    req.on('error', () => {
      resolve({
        url,
        statusCode: 404,
        error: 'Request failed'
      });
    });

    req.end();
  });
}

// Main function to fix URLs
async function fixUrls() {
  console.log('Starting URL fixes...\n');

  // Get all pages
  const pages = getAllPages();
  console.log(`Found ${pages.length} pages to process\n`);

  // Extract and check all internal links
  const allLinks = new Set();
  const pageLinks = new Map();

  pages.forEach(page => {
    const links = extractLinks(page);
    pageLinks.set(page, links);
    links.forEach(link => allLinks.add(link));
  });

  console.log(`Found ${allLinks.size} unique internal links\n`);

  // Check all URLs
  console.log('Checking URLs...');
  const results = [];
  const uniqueUrls = Array.from(allLinks);

  for (let i = 0; i < uniqueUrls.length; i += 10) {
    const batch = uniqueUrls.slice(i, i + 10);
    const batchResults = await Promise.all(batch.map(url => checkUrl(url)));
    results.push(...batchResults);
    process.stdout.write('.');
  }
  console.log('\n');

  // Analyze results
  const redirects = results.filter(r => r.statusCode === 301 || r.statusCode === 302);
  const notFound = results.filter(r => r.statusCode === 404);
  const errors = results.filter(r => r.statusCode >= 400 && r.statusCode !== 404);

  // Print report
  console.log('\nURL Check Results:');
  console.log('=================');
  console.log(`Total URLs checked: ${results.length}`);
  console.log(`Redirects found: ${redirects.length}`);
  console.log(`404 errors: ${notFound.length}`);
  console.log(`Other errors: ${errors.length}\n`);

  if (redirects.length > 0) {
    console.log('\nRedirects:');
    redirects.forEach(r => {
      console.log(`${r.url} -> ${r.location}`);
    });
  }

  if (notFound.length > 0) {
    console.log('\n404 Errors:');
    notFound.forEach(r => {
      console.log(r.url);
      // Find pages containing this broken link
      pageLinks.forEach((links, page) => {
        if (links.includes(r.url)) {
          console.log(`  Referenced in: ${path.relative(PAGES_DIR, page)}`);
        }
      });
    });
  }

  if (errors.length > 0) {
    console.log('\nOther Errors:');
    errors.forEach(r => {
      console.log(`${r.url} (${r.statusCode})`);
    });
  }

  // Generate report file
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalUrls: results.length,
      redirects: redirects.length,
      notFound: notFound.length,
      errors: errors.length
    },
    redirects: redirects.map(r => ({
      from: r.url,
      to: r.location
    })),
    notFound: notFound.map(r => ({
      url: r.url,
      referencedIn: Array.from(pageLinks.entries())
        .filter(([_, links]) => links.includes(r.url))
        .map(([page]) => path.relative(PAGES_DIR, page))
    })),
    errors: errors.map(r => ({
      url: r.url,
      statusCode: r.statusCode
    }))
  };

  fs.writeFileSync(
    path.join(process.cwd(), 'url-check-report.json'),
    JSON.stringify(report, null, 2)
  );

  console.log('\nDetailed report saved to url-check-report.json');
}

// Run the script
fixUrls().catch(console.error);
