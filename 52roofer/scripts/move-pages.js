const fs = require('fs');
const path = require('path');

// Helper function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Helper function to move file with content preservation
function moveFile(sourcePath, targetPath) {
  try {
    if (fs.existsSync(sourcePath)) {
      ensureDirectoryExists(path.dirname(targetPath));
      const content = fs.readFileSync(sourcePath, 'utf8');
      fs.writeFileSync(targetPath, content);
      fs.unlinkSync(sourcePath);
      console.log(`Moved: ${sourcePath} -> ${targetPath}`);
      return true;
    } else {
      console.log(`Source file not found: ${sourcePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error moving file ${sourcePath}:`, error);
    return false;
  }
}

function movePages() {
  console.log('Moving pages to new locations...\n');
  
  const pagesDir = path.join(process.cwd(), 'pages');
  ensureDirectoryExists(pagesDir);

  // Create necessary directories
  ['locations', 'services', 'blog', 'resources'].forEach(dir => {
    ensureDirectoryExists(path.join(pagesDir, dir));
  });

  // Move location pages
  const locationPages = [
    'warminster-wiltshire',
    'marlborough-wiltshire',
    'chippenham-wiltshire',
    'devizes-wiltshire',
    'melksham-wiltshire',
    'trowbridge-wiltshire',
    'cowley-oxford',
    'headington-oxford',
    'wolvercote-oxford',
    'jericho-oxford',
    'marston-oxford',
    'botley-oxford',
    'bradford-on-avon-wiltshire',
    'westbury-wiltshire',
    'calne-wiltshire',
    'salisbury-wiltshire',
    'rose-hill-oxford',
    'iffley-oxford',
    'blackbird-leys-oxford',
    'summertown-oxford'
  ];

  // Create a basic location page template
  const locationTemplate = (location) => `
import Head from 'next/head'
import Layout from '../../components/layout/Layout'

export default function Location() {
  return (
    <Layout>
      <Head>
        <title>Roofers in ${location.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, c => c.toUpperCase())} | 52Roofer</title>
        <meta name="description" content="Professional roofing services in ${location.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, c => c.toUpperCase())}" />
      </Head>
      <main>
        <h1>Roofers in ${location.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, c => c.toUpperCase())}</h1>
      </main>
    </Layout>
  )
}`;

  // Move or create location pages
  locationPages.forEach(location => {
    const oldPath = path.join(pagesDir, `roofers-in-${location}.tsx`);
    const newPath = path.join(pagesDir, 'locations', `${location}.tsx`);
    
    if (!moveFile(oldPath, newPath)) {
      // If old file doesn't exist, create new one from template
      fs.writeFileSync(newPath, locationTemplate(location));
      console.log(`Created: ${newPath}`);
    }
  });

  // Move service pages
  const servicePages = {
    'roofing-faqs.js': 'roofing-faqs.tsx',
    'roof-repair.js': 'roof-repair.tsx',
    'roof-maintenance-tips.js': 'roof-maintenance.tsx',
    'roof-installation-costs.js': 'roof-installation.tsx',
    'emergency-roofing.js': 'emergency-roof-repairs.tsx',
    'near-me.js': 'roofers-near-me.tsx',
    'emergency-roof-repairs-new.tsx': 'emergency-roof-repairs.tsx',
    'roofing-firms-near-me.tsx': 'roofers-near-me.tsx',
    'roofing-companies-near-me.tsx': 'roofers-near-me.tsx'
  };

  // Create a basic service page template
  const serviceTemplate = (service) => `
import Head from 'next/head'
import Layout from '../../components/layout/Layout'

export default function Service() {
  return (
    <Layout>
      <Head>
        <title>${service.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, c => c.toUpperCase())} | 52Roofer</title>
        <meta name="description" content="Professional ${service.replace(/-/g, ' ')} services" />
      </Head>
      <main>
        <h1>${service.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, c => c.toUpperCase())}</h1>
      </main>
    </Layout>
  )
}`;

  // Move or create service pages
  Object.entries(servicePages).forEach(([oldName, newName]) => {
    const oldPath = path.join(pagesDir, 'services', oldName);
    const newPath = path.join(pagesDir, 'services', newName);
    
    if (!moveFile(oldPath, newPath)) {
      // If old file doesn't exist, create new one from template
      const serviceName = newName.replace('.tsx', '');
      fs.writeFileSync(newPath, serviceTemplate(serviceName));
      console.log(`Created: ${newPath}`);
    }
  });

  // Clean up empty directories
  function removeEmptyDirs(directory) {
    const items = fs.readdirSync(directory);
    items.forEach(item => {
      const fullPath = path.join(directory, item);
      if (fs.statSync(fullPath).isDirectory()) {
        removeEmptyDirs(fullPath);
        if (fs.readdirSync(fullPath).length === 0) {
          fs.rmdirSync(fullPath);
          console.log(`Removed empty directory: ${fullPath}`);
        }
      }
    });
  }

  console.log('\nCleaning up empty directories...');
  removeEmptyDirs(pagesDir);

  console.log('\nPage organization complete!');
}

// Run the script
try {
  movePages();
} catch (error) {
  console.error('Error during page organization:', error);
}
