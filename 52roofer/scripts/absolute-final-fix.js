const fs = require('fs');
const path = require('path');

// Delete ALL files that shouldn't exist
const deleteAllUnwantedFiles = () => {
  console.log('Deleting all unwanted files...');

  // Directories to delete
  const dirsToDelete = [
    'pages/county',
    'pages/location',
    'pages/locations/oxford',
    'pages/services/roofing-companies-near-me',
    'pages/services/[service]',
    'pages/sitemaps',
    'pages/resources',
    'src',
    'components/templates'
  ];

  // Delete directories
  dirsToDelete.forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`Deleted directory: ${dir}`);
    }
  });

  // Files to delete
  const filesToDelete = [
    // Old location files
    ...fs.readdirSync('pages')
      .filter(f => f.startsWith('roofers-in-') && f.endsWith('.tsx'))
      .map(f => path.join('pages', f)),
    
    // Old service files
    'pages/services.tsx',
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
    'pages/services/emergency-roofing.tsx',
    'pages/services/near-me.tsx',
    'pages/services/roof-installation-costs.tsx',
    'pages/services/roof-maintenance-tips.tsx',
    'pages/services/roofing-faqs.tsx',
    
    // Old .js files
    'pages/services/roof-repair-schema.js',
    'pages/services/roofing-faqs.js',
    'pages/services/roof-maintenance-tips.js',
    'pages/services/roof-repair.js',
    'pages/services/near-me.js',
    'pages/services/roof-installation-costs.js',
    'pages/services/emergency-roofing.js',
    'src/index.js',
    'src/styles.css',
    
    // Old dynamic route files
    'pages/services/[service].tsx',
    'pages/services/[service]/[location].tsx',
    'pages/locations/[city].tsx',
    'pages/locations/[slug].tsx',
    'pages/location/[city].tsx',
    'pages/location/[slug].tsx',
    'pages/county/[slug].tsx',
    
    // Other old files
    'pages/locations.tsx',
    'pages/locations/locationsList.tsx',
    'pages/locations/gloucester.tsx',
    'pages/find-roofer.tsx',
    'pages/resources/index.tsx',
    'pages/resources/roofing-faq.tsx',
    'data/locationData.js'
  ];

  // Delete files
  filesToDelete.forEach(file => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`Deleted: ${file}`);
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

  const countFilesInDir = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        countFilesInDir(fullPath);
      } else if (item.endsWith('.tsx') && !item.startsWith('_') && !item.startsWith('[')) {
        const relativePath = path.relative('pages', dir);
        if (relativePath.startsWith('locations')) {
          counts.locations++;
        } else if (relativePath.startsWith('services')) {
          counts.services++;
        } else if (relativePath.startsWith('blog')) {
          counts.blog++;
        } else {
          counts.other++;
        }
      }
    });
  };

  countFilesInDir('pages');

  console.log('Page counts:');
  console.log('- Locations:', counts.locations);
  console.log('- Services:', counts.services);
  console.log('- Blog:', counts.blog);
  console.log('- Other:', counts.other);
  console.log('Total:', Object.values(counts).reduce((a, b) => a + b, 0));
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
console.log('Starting absolute final fixes...');
deleteAllUnwantedFiles();
countPages();
verifyStructure();
console.log('\nAbsolute final fixes complete!');
