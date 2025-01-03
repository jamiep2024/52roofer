const fs = require('fs');
const path = require('path');
const glob = require('glob');
const https = require('https');
const http = require('http');

// Helper to make HTTP requests with redirect tracking
const checkUrl = (url) => {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const request = protocol.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)'
      }
    }, (response) => {
      const status = response.statusCode;
      
      if (status >= 300 && status < 400) {
        resolve({
          url,
          status,
          location: response.headers.location,
          type: 'redirect'
        });
      } else if (status === 404) {
        resolve({
          url,
          status,
          type: '404'
        });
      } else if (status >= 200 && status < 300) {
        resolve({
          url,
          status,
          type: 'success'
        });
      } else {
        resolve({
          url,
          status,
          type: 'error'
        });
      }
    });

    request.on('error', (error) => {
      resolve({
        url,
        error: error.message,
        type: 'error'
      });
    });

    request.on('timeout', () => {
      request.destroy();
      resolve({
        url,
        error: 'timeout',
        type: 'error'
      });
    });
  });
};

// Extract all URLs from content
const extractUrls = (content) => {
  const urlRegex = /(href|src)=["']([^"']+)["']/g;
  const urls = new Set();
  let match;

  while ((match = urlRegex.exec(content)) !== null) {
    const url = match[2];
    if (url.startsWith('http')) {
      urls.add(url);
    }
  }

  return Array.from(urls);
};

// Main verification function
const verifyUrls = async () => {
  const issues = {
    redirects: [],
    notFound: [],
    errors: []
  };

  // Get all TSX/TS files
  const files = glob.sync('pages/**/*.{tsx,ts}', {
    ignore: ['pages/_*.tsx', 'pages/api/**']
  });

  // Extract and check URLs
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const urls = extractUrls(content);
    
    for (const url of urls) {
      const result = await checkUrl(url);
      
      if (result.type === 'redirect') {
        issues.redirects.push({
          file,
          url: result.url,
          status: result.status,
          location: result.location
        });
      } else if (result.type === '404') {
        issues.notFound.push({
          file,
          url: result.url
        });
      } else if (result.type === 'error') {
        issues.errors.push({
          file,
          url: result.url,
          error: result.error
        });
      }
    }
  }

  return issues;
};

// Generate report
const generateReport = (issues) => {
  console.log('\nURL Verification Report');
  console.log('=====================\n');

  if (issues.redirects.length > 0) {
    console.log('🔄 Redirects Found:');
    issues.redirects.forEach(({file, url, status, location}) => {
      console.log(`\nFile: ${file}`);
      console.log(`URL: ${url}`);
      console.log(`Status: ${status}`);
      console.log(`Redirects to: ${location}`);
    });
  }

  if (issues.notFound.length > 0) {
    console.log('\n❌ 404 Not Found:');
    issues.notFound.forEach(({file, url}) => {
      console.log(`\nFile: ${file}`);
      console.log(`URL: ${url}`);
    });
  }

  if (issues.errors.length > 0) {
    console.log('\n⚠️ Errors:');
    issues.errors.forEach(({file, url, error}) => {
      console.log(`\nFile: ${file}`);
      console.log(`URL: ${url}`);
      console.log(`Error: ${error}`);
    });
  }

  if (issues.redirects.length === 0 && issues.notFound.length === 0 && issues.errors.length === 0) {
    console.log('✅ All URLs are valid and working correctly');
  }

  console.log('\nSummary:');
  console.log(`- Redirects: ${issues.redirects.length}`);
  console.log(`- 404s: ${issues.notFound.length}`);
  console.log(`- Errors: ${issues.errors.length}`);
};

// Run verification
console.log('Checking URLs... This may take a few minutes.');
verifyUrls().then(generateReport);
