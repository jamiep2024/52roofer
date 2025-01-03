const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Add required imports and types to a file
const addImportsAndTypes = (content, filePath) => {
  // Skip if already has imports
  if (content.includes('import React')) {
    return content;
  }

  const imports = `import React from 'react';
import { NextPage } from 'next';
`;

  // Extract component name from file path
  const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  // Add NextPage type to component
  const contentWithType = content.replace(
    /const\s+(\w+)\s*=\s*\(/,
    `const $1: NextPage = (`
  );

  return imports + contentWithType;
};

// Fix location page URLs
const fixLocationUrls = () => {
  const locationPages = glob.sync('pages/locations/**/*.tsx');
  
  locationPages.forEach(pagePath => {
    // Skip index files
    if (pagePath.endsWith('index.tsx')) return;

    const parts = pagePath.split('/');
    const county = parts[2];
    const city = parts[3].replace('.tsx', '');
    
    // Create new path with correct format
    const newPath = `pages/roofers-in-${city}-${county}.tsx`;
    
    // Read content and update imports/types
    let content = fs.readFileSync(pagePath, 'utf8');
    content = addImportsAndTypes(content, newPath);
    
    // Write to new location
    fs.writeFileSync(newPath, content);
    
    // Remove old file
    fs.unlinkSync(pagePath);
    
    console.log(`Moved ${pagePath} to ${newPath}`);
  });
};

// Fix service page structure
const fixServicePages = () => {
  const servicePages = glob.sync('pages/services/*.tsx');
  
  servicePages.forEach(pagePath => {
    // Skip index and dynamic files
    if (pagePath.includes('index.tsx') || pagePath.includes('[')) return;
    
    let content = fs.readFileSync(pagePath, 'utf8');
    content = addImportsAndTypes(content, pagePath);
    
    fs.writeFileSync(pagePath, content);
    console.log(`Updated ${pagePath}`);
  });
};

// Fix other pages
const fixOtherPages = () => {
  const otherPages = glob.sync('pages/*.tsx');
  
  otherPages.forEach(pagePath => {
    // Skip _app and other special files
    if (pagePath.includes('_')) return;
    
    let content = fs.readFileSync(pagePath, 'utf8');
    content = addImportsAndTypes(content, pagePath);
    
    fs.writeFileSync(pagePath, content);
    console.log(`Updated ${pagePath}`);
  });
};

console.log('Fixing page structure...\n');

// Run fixes
fixLocationUrls();
fixServicePages();
fixOtherPages();

console.log('\nPage structure fixes complete!');
console.log('Run verify-page-structure.js again to confirm changes.');
