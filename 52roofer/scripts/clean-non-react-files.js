const fs = require('fs');
const path = require('path');

// Files to delete
const DELETE_PATTERNS = [
  // Non-React files
  '**/*.js',
  
  // Template/test files
  '**/conversational-roofing-template.tsx',
  '**/voice-*.tsx',
  
  // Keep these JS files as they are needed
  '!next.config.js',
  '!postcss.config.js',
  '!tailwind.config.js',
  '!scripts/**/*.js'
];

// Function to check if a file should be deleted
const shouldDelete = (filePath) => {
  // Don't delete if it's in node_modules
  if (filePath.includes('node_modules')) {
    return false;
  }

  // Don't delete config files
  const keepFiles = [
    'next.config.js',
    'postcss.config.js',
    'tailwind.config.js'
  ];
  if (keepFiles.includes(path.basename(filePath))) {
    return false;
  }

  // Don't delete script files
  if (filePath.startsWith('scripts/')) {
    return false;
  }

  // Delete .js files that have .tsx equivalents
  if (filePath.endsWith('.js')) {
    const tsxVersion = filePath.replace('.js', '.tsx');
    if (fs.existsSync(tsxVersion)) {
      return true;
    }
  }

  // Delete template and test files
  if (filePath.includes('conversational-roofing-template') ||
      filePath.includes('voice-')) {
    return true;
  }

  return false;
};

const deleteFile = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error deleting ${filePath}:`, err);
  }
};

const cleanFiles = () => {
  console.log('Starting cleanup of non-React files...');
  
  // Get all files recursively
  const getAllFiles = (dir) => {
    let files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        files = files.concat(getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    });
    
    return files;
  };

  // Process pages directory
  console.log('\nCleaning pages directory...');
  const pageFiles = getAllFiles('pages');
  pageFiles.forEach(file => {
    if (shouldDelete(file)) {
      deleteFile(file);
    }
  });

  // Process components directory
  console.log('\nCleaning components directory...');
  const componentFiles = getAllFiles('components');
  componentFiles.forEach(file => {
    if (shouldDelete(file)) {
      deleteFile(file);
    }
  });

  // Process src directory if it exists
  if (fs.existsSync('src')) {
    console.log('\nCleaning src directory...');
    const srcFiles = getAllFiles('src');
    srcFiles.forEach(file => {
      if (shouldDelete(file)) {
        deleteFile(file);
      }
    });
  }

  console.log('\nCleanup complete!');
  
  // Log remaining structure
  console.log('\nRemaining Next.js/React files:');
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
};

// Execute cleanup
cleanFiles();
