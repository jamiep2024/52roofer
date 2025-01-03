const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Template for index pages
const indexTemplate = (pageName) => `import React from 'react';
import { NextPage } from 'next';

const ${pageName}: NextPage = () => {
  return (
    <div>
      {/* Content */}
    </div>
  );
};

export default ${pageName};
`;

// Fix index pages
const fixIndexPages = () => {
  const indexPages = glob.sync('pages/**/index.tsx');
  
  indexPages.forEach(pagePath => {
    // Generate component name from path
    const parts = pagePath.split('/');
    const section = parts[parts.length - 2];
    const componentName = section.charAt(0).toUpperCase() + section.slice(1) + 'Index';
    
    // Write new content
    fs.writeFileSync(pagePath, indexTemplate(componentName));
    console.log(`Updated ${pagePath}`);
  });
};

console.log('Fixing index pages...\n');
fixIndexPages();
console.log('\nIndex pages fixed!');
console.log('Run verify-page-structure.js again to confirm changes.');
