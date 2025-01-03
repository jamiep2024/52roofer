const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Verify page structure and formatting
const verifyPageStructure = () => {
  console.log('Verifying page structure and formatting...\n');
  const issues = [];

  // Expected directory structure
  const expectedDirs = [
    'pages/services',
    'pages/locations',
    'pages/blog',
    'pages/api',
    'components',
    'public/images',
    'public/sitemaps'
  ];

  // Check directory structure
  expectedDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      issues.push(`Missing directory: ${dir}`);
    }
  });

  // Get all pages
  const pages = glob.sync('pages/**/*.tsx', {
    ignore: ['pages/_*.tsx', 'pages/api/**']
  });

  // Verify each page
  pages.forEach(page => {
    const content = fs.readFileSync(page, 'utf8');

    // Check imports
    if (!content.includes('import React')) {
      issues.push(`${page}: Missing React import`);
    }
    if (!content.includes('import { NextPage }')) {
      issues.push(`${page}: Missing NextPage type`);
    }

    // Check basic structure
    if (!content.includes('export default')) {
      issues.push(`${page}: Missing default export`);
    }

    // Check component structure
    if (content.includes('function') && !content.includes('NextPage')) {
      issues.push(`${page}: Component not typed as NextPage`);
    }

    // Check for proper formatting
    if (content.includes('  function') || content.includes('function  ')) {
      issues.push(`${page}: Incorrect function formatting`);
    }

    // Verify internal links
    const links = content.match(/href=["']([^"']+)["']/g) || [];
    links.forEach(link => {
      const href = link.match(/href=["']([^"']+)["']/)[1];
      if (href.startsWith('/')) {
        const targetPath = path.join('pages', href.slice(1) + '.tsx');
        if (!fs.existsSync(targetPath) && !href.includes('[')) {
          issues.push(`${page}: Broken internal link to ${href}`);
        }
      }
    });
  });

  // Report results
  if (issues.length === 0) {
    console.log('✅ All pages follow correct structure and formatting');
    console.log('✅ No broken internal links found');
  } else {
    console.log('❌ Found structure/formatting issues:');
    issues.forEach(issue => console.log(`- ${issue}`));
  }

  return issues.length === 0;
};

// Verify URL structure
const verifyUrlStructure = () => {
  console.log('\nVerifying URL structure...\n');
  const issues = [];

  // Expected URL patterns
  const patterns = {
    services: /^\/services\/[a-z0-9-]+$/,
    locations: /^\/locations\/[a-z0-9-]+$/,
    blog: /^\/blog\/[a-z0-9-]+$/
  };

  // Get all pages
  const pages = glob.sync('pages/**/*.tsx', {
    ignore: ['pages/_*.tsx', 'pages/api/**', 'pages/**/index.tsx']
  });

  // Check each page's URL structure
  pages.forEach(page => {
    const urlPath = '/' + page
      .replace('pages/', '')
      .replace('.tsx', '')
      .replace(/\/index$/, '');

    // Skip dynamic routes
    if (urlPath.includes('[')) return;

    // Verify URL follows expected pattern
    const section = urlPath.split('/')[1];
    if (patterns[section] && !patterns[section].test(urlPath)) {
      issues.push(`Invalid URL structure: ${urlPath}`);
    }
  });

  // Report results
  if (issues.length === 0) {
    console.log('✅ All URLs follow correct structure');
  } else {
    console.log('❌ Found URL structure issues:');
    issues.forEach(issue => console.log(`- ${issue}`));
  }

  return issues.length === 0;
};

// Run verification
const structureValid = verifyPageStructure();
const urlsValid = verifyUrlStructure();

if (structureValid && urlsValid) {
  console.log('\n✅ All checks passed - site structure is valid');
  console.log('\nSafe to proceed with adding new pages');
} else {
  console.log('\n❌ Please fix reported issues before adding new pages');
}
