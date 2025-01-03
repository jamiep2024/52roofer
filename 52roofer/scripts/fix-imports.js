const fs = require('fs');
const path = require('path');

// Function to fix imports in a file
const fixImports = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common import paths based on new file location depth
  const importFixes = [
    {
      from: /from ['"]\.\.\/\.\.\/components\//g,
      to: 'from \'../../../components/'
    },
    {
      from: /from ['"]\.\.\/components\//g,
      to: 'from \'../../components/'
    },
    {
      from: /from ['"]\.\/components\//g,
      to: 'from \'../components/'
    }
  ];

  importFixes.forEach(({from, to}) => {
    content = content.replace(from, to);
  });

  fs.writeFileSync(filePath, content);
  console.log(`Fixed imports in: ${filePath}`);
};

// Process all location pages
const processLocationPages = () => {
  const locationDirs = ['pages/locations/oxford', 'pages/locations/wiltshire'];
  
  locationDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        if (file.endsWith('.tsx')) {
          fixImports(path.join(dir, file));
        }
      });
    }
  });
};

console.log('Starting import path fixes...');
processLocationPages();
console.log('Import path fixes complete!');

// Now let's verify the structure is correct
console.log('\nVerifying directory structure:');
const logDir = (dir, prefix = '') => {
  if (!fs.existsSync(dir)) return;
  
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      console.log(`${prefix}📁 ${item}/`);
      logDir(fullPath, prefix + '  ');
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      console.log(`${prefix}📄 ${item}`);
    }
  });
};

console.log('\nPages structure:');
logDir('pages');

console.log('\nComponents structure:');
logDir('components');
