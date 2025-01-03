const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const SITE_URL = 'https://52roofer.co.uk';
const PAGES_DIR = 'pages';

// Utility functions
const isValidPage = (file) => {
  return file.endsWith('.tsx') && 
         !file.startsWith('_') && 
         !file.startsWith('[') &&
         !file.includes('sitemap.xml');
};

const getPageUrl = (filePath) => {
  // Remove pages directory prefix and .tsx extension
  let url = filePath
    .replace(PAGES_DIR, '')
    .replace(/\.tsx$/, '')
    .replace(/\/index$/, '/');
    
  // Ensure URL starts with /
  if (!url.startsWith('/')) {
    url = '/' + url;
  }
  
  return url;
};

// Main verification functions
const findAllPages = (dir = PAGES_DIR, results = []) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAllPages(filePath, results);
    } else if (isValidPage(file)) {
      results.push(filePath);
    }
  });
  
  return results;
};

const findDuplicateRoutes = (pages) => {
  const routes = {};
  const duplicates = [];
  
  pages.forEach(page => {
    const url = getPageUrl(page);
    if (routes[url]) {
      duplicates.push({
        url,
        files: [routes[url], page]
      });
    } else {
      routes[url] = page;
    }
  });
  
  return duplicates;
};

const verifyFileImports = (file) => {
  const content = fs.readFileSync(file, 'utf8');
  const imports = content.match(/from ['"]([^'"]+)['"]/g) || [];
  const issues = [];
  
  imports.forEach(importStr => {
    const match = importStr.match(/from ['"]([^'"]+)['"]/);
    if (match) {
      const importPath = match[1];
      if (importPath.startsWith('.')) {
        const dir = path.dirname(file);
        const resolvedPath = path.resolve(dir, importPath);
        if (!fs.existsSync(resolvedPath) && !fs.existsSync(resolvedPath + '.tsx')) {
          issues.push(`Invalid import: ${importPath}`);
        }
      }
    }
  });
  
  return issues;
};

// Main verification
console.log('Starting site verification...\n');

// 1. Find all pages
console.log('Finding all pages...');
const pages = findAllPages();
console.log(`Found ${pages.length} pages\n`);

// 2. Check for duplicate routes
console.log('Checking for duplicate routes...');
const duplicates = findDuplicateRoutes(pages);
if (duplicates.length > 0) {
  console.log('Found duplicate routes:');
  duplicates.forEach(({ url, files }) => {
    console.log(`\nRoute: ${url}`);
    console.log('Defined in:');
    files.forEach(file => console.log(`- ${file}`));
  });
} else {
  console.log('No duplicate routes found\n');
}

// 3. Verify imports in each file
console.log('Verifying file imports...');
const importIssues = {};
pages.forEach(page => {
  const issues = verifyFileImports(page);
  if (issues.length > 0) {
    importIssues[page] = issues;
  }
});

if (Object.keys(importIssues).length > 0) {
  console.log('\nFound import issues:');
  Object.entries(importIssues).forEach(([file, issues]) => {
    console.log(`\nFile: ${file}`);
    issues.forEach(issue => console.log(`- ${issue}`));
  });
} else {
  console.log('All imports are valid\n');
}

// 4. Generate sitemap summary
console.log('\nGenerating sitemap summary...');
const pagesByType = {
  services: pages.filter(p => p.includes('/services/')),
  locations: pages.filter(p => p.includes('/locations/')),
  blog: pages.filter(p => p.includes('/blog/')),
  other: pages.filter(p => !p.includes('/services/') && 
                          !p.includes('/locations/') && 
                          !p.includes('/blog/'))
};

console.log('\nPage count by type:');
Object.entries(pagesByType).forEach(([type, pages]) => {
  console.log(`${type}: ${pages.length} pages`);
});

// 5. Verify build
console.log('\nVerifying build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build successful!\n');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

console.log('Site verification complete!');
