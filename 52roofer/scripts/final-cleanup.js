const fs = require('fs');
const path = require('path');

// Delete old files and directories
const cleanupOldFiles = () => {
  console.log('Cleaning up old files...');

  // List of directories to delete
  const dirsToDelete = [
    'pages/county',
    'pages/location',
    'pages/services/roofing-companies-near-me',
    'pages/services/[service]',
    'pages/sitemaps'
  ];

  // Delete directories
  dirsToDelete.forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true });
      console.log(`Deleted directory: ${dir}`);
    }
  });

  // List of old files to delete
  const filesToDelete = [
    // Old location pages
    ...fs.readdirSync('pages')
      .filter(f => f.startsWith('roofers-in-') && f.endsWith('.tsx'))
      .map(f => path.join('pages', f)),
    
    // Old service pages
    'pages/services/roofing-firms-near-me.tsx',
    'pages/services/roofing-construction.tsx',
    'pages/services/roofing-contractors.tsx',
    'pages/services/roofing-companies-near-me.tsx',
    'pages/services/conversational-roofing-template.tsx',
    'pages/services/voice-roofing-services.tsx',
    'pages/services/voice-roof-repairs.tsx',
    'pages/services/voice-roof-installation.tsx',
    'pages/services/advanced-roofing.tsx',
    'pages/services/apex-roofing.tsx',
    'pages/services/emergency-roof-repairs-new.tsx',
    
    // Old .js files
    'pages/services/roof-repair-schema.js',
    'pages/services/roofing-faqs.js',
    'pages/services/roof-maintenance-tips.js',
    'pages/services/roof-repair.js',
    'pages/services/near-me.js',
    'pages/services/roof-installation-costs.js',
    'pages/services/emergency-roofing.js',
    
    // Old dynamic route files
    'pages/services/[service].tsx',
    'pages/services/[service]/[location].tsx',
    'pages/locations/[city].tsx',
    'pages/locations/[slug].tsx',
    'pages/location/[city].tsx',
    'pages/location/[slug].tsx'
  ];

  // Delete files
  filesToDelete.forEach(file => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`Deleted: ${file}`);
    }
  });
};

// Count pages by type
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

// Verify directory structure
const verifyStructure = () => {
  console.log('\nVerifying directory structure...');
  
  const expectedDirs = [
    'pages/locations',
    'pages/services',
    'pages/blog'
  ];

  expectedDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created missing directory: ${dir}`);
    }
  });

  console.log('\nFinal directory structure:');
  const logDir = (dir, prefix = '') => {
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

  console.log('\nPages:');
  logDir('pages');
};

// Execute cleanup
console.log('Starting final cleanup...');
cleanupOldFiles();
countPages();
verifyStructure();
console.log('\nFinal cleanup complete!');
