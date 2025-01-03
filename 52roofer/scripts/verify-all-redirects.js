const fs = require('fs');
const path = require('path');
const https = require('https');

const SITE_URL = 'https://52roofer.com';

// Helper function to check a URL
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

async function verifyRedirects() {
  console.log('Verifying redirects and URLs...\n');

  // Collect all URLs to check
  const urlsToCheck = [];

  // Add location pages
  const locations = [
    'warminster-wiltshire',
    'marlborough-wiltshire',
    'chippenham-wiltshire',
    'devizes-wiltshire',
    'melksham-wiltshire',
    'trowbridge-wiltshire',
    'cowley-oxford',
    'headington-oxford',
    'wolvercote-oxford',
    'jericho-oxford',
    'marston-oxford',
    'botley-oxford',
    'bradford-on-avon-wiltshire',
    'westbury-wiltshire',
    'calne-wiltshire',
    'salisbury-wiltshire',
    'rose-hill-oxford',
    'iffley-oxford',
    'blackbird-leys-oxford',
    'summertown-oxford'
  ];

  // Check both old and new location URLs
  locations.forEach(location => {
    urlsToCheck.push(`/roofers-in-${location}`); // Old URL
    urlsToCheck.push(`/locations/${location}`); // New URL
    urlsToCheck.push(`/services/roofing-companies-near-me/${location}`); // Old service+location URL
  });

  // Add service pages
  const services = [
    'roof-repair',
    'roof-installation',
    'emergency-roof-repairs',
    'roof-maintenance',
    'roof-replacement',
    'commercial-roofing',
    'residential-roofing',
    'roofers-near-me'
  ];

  services.forEach(service => {
    urlsToCheck.push(`/services/${service}`);
  });

  // Add old .js pages that should redirect
  const jsPages = [
    'roofing-faqs',
    'roof-repair',
    'roof-maintenance-tips',
    'roof-installation-costs',
    'emergency-roofing',
    'near-me'
  ];

  jsPages.forEach(page => {
    urlsToCheck.push(`/services/${page}.js`);
  });

  // Add voice pages that should redirect
  const voicePages = [
    'voice-roofing-services',
    'voice-roof-repairs',
    'voice-roof-installation'
  ];

  voicePages.forEach(page => {
    urlsToCheck.push(`/services/${page}`);
  });

  // Check URLs in batches
  console.log(`Checking ${urlsToCheck.length} URLs...\n`);
  const results = [];
  const batchSize = 10;

  for (let i = 0; i < urlsToCheck.length; i += batchSize) {
    const batch = urlsToCheck.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(url => checkUrl(url)));
    results.push(...batchResults);
    process.stdout.write('.');
  }
  console.log('\n');

  // Analyze results
  const redirects = results.filter(r => r.statusCode === 301 || r.statusCode === 302);
  const notFound = results.filter(r => r.statusCode === 404);
  const ok = results.filter(r => r.statusCode === 200);
  const errors = results.filter(r => r.statusCode >= 400 && r.statusCode !== 404);

  // Print report
  console.log('\nURL Check Results:');
  console.log('=================');
  console.log(`Total URLs checked: ${results.length}`);
  console.log(`OK (200): ${ok.length}`);
  console.log(`Redirects (301/302): ${redirects.length}`);
  console.log(`Not Found (404): ${notFound.length}`);
  console.log(`Other Errors: ${errors.length}\n`);

  if (redirects.length > 0) {
    console.log('\nRedirects:');
    redirects.forEach(r => {
      console.log(`${r.url} -> ${r.location}`);
    });
  }

  if (notFound.length > 0) {
    console.log('\n404 Not Found:');
    notFound.forEach(r => {
      console.log(r.url);
    });
  }

  if (errors.length > 0) {
    console.log('\nOther Errors:');
    errors.forEach(r => {
      console.log(`${r.url} (${r.statusCode})`);
    });
  }

  // Save report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: results.length,
      ok: ok.length,
      redirects: redirects.length,
      notFound: notFound.length,
      errors: errors.length
    },
    redirects: redirects.map(r => ({
      from: r.url,
      to: r.location
    })),
    notFound: notFound.map(r => r.url),
    errors: errors.map(r => ({
      url: r.url,
      statusCode: r.statusCode
    }))
  };

  fs.writeFileSync(
    path.join(process.cwd(), 'redirect-check-report.json'),
    JSON.stringify(report, null, 2)
  );

  console.log('\nDetailed report saved to redirect-check-report.json');
}

// Run the verification
try {
  verifyRedirects();
} catch (error) {
  console.error('Error during verification:', error);
}
