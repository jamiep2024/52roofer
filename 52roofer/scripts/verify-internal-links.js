const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get all TSX/TS files in pages directory
const getPageFiles = () => {
  return glob.sync('pages/**/*.{tsx,ts}', {
    ignore: ['pages/_*.tsx', 'pages/api/**']
  });
};

// Extract href values from a file's content
const extractLinks = (content) => {
  const hrefRegex = /href=["']([^"']+)["']/g;
  const links = [];
  let match;

  while ((match = hrefRegex.exec(content)) !== null) {
    links.push(match[1]);
  }

  return links;
};

// Validate internal link path exists
const validateInternalLink = (link, pagesDir) => {
  // Remove leading slash and query params
  const cleanPath = link.replace(/^\//, '').split('?')[0];
  
  // Check if file exists
  const possiblePaths = [
    path.join(pagesDir, `${cleanPath}.tsx`),
    path.join(pagesDir, `${cleanPath}.ts`),
    path.join(pagesDir, cleanPath, 'index.tsx'),
    path.join(pagesDir, cleanPath, 'index.ts')
  ];

  return possiblePaths.some(p => fs.existsSync(p));
};

// Main verification function
const verifyLinks = () => {
  const pagesDir = path.join(process.cwd(), 'pages');
  const issues = [];
  const pageFiles = getPageFiles();

  pageFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const links = extractLinks(content);
    
    links.forEach(link => {
      // Only check internal links (starting with / or relative)
      if (link.startsWith('http') || link.startsWith('mailto:')) {
        return;
      }

      if (!validateInternalLink(link, pagesDir)) {
        issues.push({
          file,
          link,
          error: 'Broken internal link - target page does not exist'
        });
      }
    });
  });

  return issues;
};

// Generate report
const generateReport = (issues) => {
  if (issues.length === 0) {
    console.log('✅ No broken internal links found');
    return;
  }

  console.log('❌ Found broken internal links:');
  console.log('------------------------------');
  
  issues.forEach(({file, link, error}) => {
    console.log(`\nFile: ${file}`);
    console.log(`Link: ${link}`);
    console.log(`Error: ${error}`);
  });

  console.log('\nTotal issues:', issues.length);
};

// Run verification
const issues = verifyLinks();
generateReport(issues);
