const fs = require('fs');
const path = require('path');

// Define new structure
const newStructure = {
  pages: {
    locations: {
      '[location].tsx': null,
      'oxford.tsx': null
    },
    services: {
      '[service].tsx': null,
      'commercial-roofing': {
        '[location].tsx': null
      }
    }
  },
  components: {
    locations: {
      'LocationDetails.tsx': null,
      'LocationLandingPage.tsx': null
    },
    services: {
      'ServiceLayout.tsx': null
    }
  },
  data: {
    'locations.ts': null,
    'services.ts': null
  }
};

// Create directory structure
function createStructure(basePath, structure) {
  for (const [name, contents] of Object.entries(structure)) {
    const newPath = path.join(basePath, name);
    if (contents === null) {
      // Create empty file
      fs.writeFileSync(newPath, '');
    } else {
      // Create directory and recurse
      fs.mkdirSync(newPath, { recursive: true });
      createStructure(newPath, contents);
    }
  }
}

// Move and rename files
function reorganizeFiles() {
  // Move location pages
  const fixedPages = fs.readdirSync('fixed-pages');
  fixedPages.forEach(file => {
    if (file.startsWith('_roofers-in-')) {
      const location = file.replace('_roofers-in-', '').replace('.html', '');
      const newPath = `pages/locations/${location}.tsx`;
      fs.renameSync(`fixed-pages/${file}`, newPath);
    }
  });

  // Move service pages
  const servicePages = fs.readdirSync('fixed-pages');
  servicePages.forEach(file => {
    if (file.startsWith('_services_')) {
      const [service, location] = file
        .replace('_services_', '')
        .replace('.html', '')
        .split('_roofers-in-');
      const newPath = `pages/services/${service}/${location}.tsx`;
      fs.renameSync(`fixed-pages/${file}`, newPath);
    }
  });

  // Move components
  const components = fs.readdirSync('components');
  components.forEach(file => {
    if (file.includes('Location')) {
      fs.renameSync(
        `components/${file}`,
        `components/locations/${file}`
      );
    } else if (file.includes('Service')) {
      fs.renameSync(
        `components/${file}`,
        `components/services/${file}`
      );
    }
  });

  // Consolidate data files
  if (fs.existsSync('data/locationData.js')) {
    fs.renameSync('data/locationData.js', 'data/locations.ts');
  }
  if (fs.existsSync('data/locationData.ts')) {
    fs.unlinkSync('data/locationData.ts');
  }
}

// Cleanup old directories
function cleanup() {
  fs.rmdirSync('fixed-pages', { recursive: true });
  
  // Remove duplicate scripts
  const scripts = fs.readdirSync('scripts');
  scripts.forEach(file => {
    if (file.match(/scripts\/scripts/)) {
      fs.rmdirSync(`scripts/${file}`, { recursive: true });
    }
  });
}

// Execute reorganization
try {
  createStructure('.', newStructure);
  reorganizeFiles();
  cleanup();
  console.log('Project reorganization complete!');
} catch (error) {
  console.error('Error during reorganization:', error);
}
