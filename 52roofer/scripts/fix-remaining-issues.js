const fs = require('fs');
const path = require('path');

// Move Oxford locations to Oxfordshire
const fixOxfordLocations = () => {
  console.log('Fixing Oxford locations...');
  
  const oxfordDir = 'pages/locations/oxford';
  const oxfordshireDir = 'pages/locations/oxfordshire';
  
  if (fs.existsSync(oxfordDir)) {
    // Move any files from oxford/ to oxfordshire/
    const files = fs.readdirSync(oxfordDir);
    files.forEach(file => {
      if (file.endsWith('.tsx')) {
        const oldPath = path.join(oxfordDir, file);
        const newPath = path.join(oxfordshireDir, file);
        if (!fs.existsSync(newPath)) {
          fs.renameSync(oldPath, file);
          console.log(`Moved: ${oldPath} -> ${newPath}`);
        }
      }
    });
    
    // Remove empty oxford directory
    if (fs.readdirSync(oxfordDir).length === 0) {
      fs.rmdirSync(oxfordDir);
      console.log('Removed empty oxford directory');
    }
  }
};

// Delete remaining old files
const deleteRemainingFiles = () => {
  console.log('\nDeleting remaining old files...');
  
  const filesToDelete = [
    // Old location files
    'pages/locations.tsx',
    'pages/locations/locationsList.tsx',
    'pages/locations/gloucester.tsx',
    'pages/find-roofer.tsx',
    
    // Old service files
    'pages/services.tsx',
    
    // Old resource files
    'pages/resources/index.tsx',
    'pages/resources/roofing-faq.tsx',
    
    // Old dynamic route files
    'pages/services/[service]/[location].tsx',
    'pages/services/[service].tsx',
    'pages/locations/[city].tsx',
    'pages/locations/[slug].tsx',
    'pages/location/[city].tsx',
    'pages/location/[slug].tsx',
    
    // Old template files
    'src/index.js',
    'src/styles.css'
  ];

  filesToDelete.forEach(file => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`Deleted: ${file}`);
    }
  });

  // Delete empty directories
  ['src', 'pages/resources'].forEach(dir => {
    if (fs.existsSync(dir) && fs.readdirSync(dir).length === 0) {
      fs.rmdirSync(dir);
      console.log(`Deleted empty directory: ${dir}`);
    }
  });
};

// Count pages accurately
const countPages = () => {
  console.log('\nCounting pages by type...');
  
  const counts = {
    locations: 0,
    services: 0,
    blog: 0,
    other: 0
  };

  const processFile = (file, dir) => {
    if (file.startsWith('_') || file.startsWith('[') || !file.endsWith('.tsx')) {
      return;
    }

    if (dir.includes('/locations/')) {
      counts.locations++;
    } else if (dir.includes('/services/')) {
      counts.services++;
    } else if (dir.includes('/blog/')) {
      counts.blog++;
    } else {
      counts.other++;
    }
  };

  const processDir = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        processDir(fullPath);
      } else {
        processFile(item, dir);
      }
    });
  };

  processDir('pages');

  console.log('Page counts:');
  console.log('- Locations:', counts.locations);
  console.log('- Services:', counts.services);
  console.log('- Blog:', counts.blog);
  console.log('- Other:', counts.other);
  console.log('Total:', Object.values(counts).reduce((a, b) => a + b, 0));

  return counts;
};

// Verify final structure
const verifyStructure = () => {
  console.log('\nVerifying final structure...');
  
  const logDir = (dir, prefix = '') => {
    const items = fs.readdirSync(dir).sort();
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
};

// Execute fixes
console.log('Starting final fixes...');
fixOxfordLocations();
deleteRemainingFiles();
countPages();
verifyStructure();
console.log('\nFinal fixes complete!');
