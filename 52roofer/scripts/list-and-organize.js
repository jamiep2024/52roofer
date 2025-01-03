const fs = require('fs');
const path = require('path');

// Helper function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Helper function to write file with directory creation
function writeFile(filePath, content) {
  ensureDirectoryExists(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
  console.log(`Created/Updated: ${filePath}`);
}

function organizeFiles() {
  console.log('Starting file organization...\n');
  
  const pagesDir = path.join(process.cwd(), 'pages');
  ensureDirectoryExists(pagesDir);

  // Create base directories
  const directories = [
    'pages/locations',
    'pages/services',
    'pages/blog',
    'pages/resources',
    'pages/api',
    'components',
    'components/layout',
    'components/seo',
    'public',
    'styles'
  ];

  directories.forEach(dir => {
    ensureDirectoryExists(path.join(process.cwd(), dir));
  });

  // Create base pages
  const basePages = {
    'pages/index.tsx': `
import Head from 'next/head'
import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>52Roofer - Professional Roofing Services</title>
        <meta name="description" content="Professional roofing services across the UK" />
      </Head>
      <main>
        <h1>Welcome to 52Roofer</h1>
      </main>
    </Layout>
  )
}`,
    'pages/services/index.tsx': `
import Head from 'next/head'
import Layout from '../../components/layout/Layout'

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Our Roofing Services | 52Roofer</title>
      </Head>
      <main>
        <h1>Our Services</h1>
      </main>
    </Layout>
  )
}`,
    'pages/locations/index.tsx': `
import Head from 'next/head'
import Layout from '../../components/layout/Layout'

export default function Locations() {
  return (
    <Layout>
      <Head>
        <title>Service Locations | 52Roofer</title>
      </Head>
      <main>
        <h1>Our Service Areas</h1>
      </main>
    </Layout>
  )
}`,
    'pages/blog/index.tsx': `
import Head from 'next/head'
import Layout from '../../components/layout/Layout'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Roofing Blog | 52Roofer</title>
      </Head>
      <main>
        <h1>Roofing Blog</h1>
      </main>
    </Layout>
  )
}`
  };

  // Create base pages
  Object.entries(basePages).forEach(([filePath, content]) => {
    writeFile(path.join(process.cwd(), filePath), content);
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

  locationPages.forEach(location => {
    const oldPath = path.join(pagesDir, `roofers-in-${location}.tsx`);
    const newPath = path.join(pagesDir, 'locations', `${location}.tsx`);
    
    if (fs.existsSync(oldPath)) {
      const content = fs.readFileSync(oldPath, 'utf8');
      writeFile(newPath, content);
      fs.unlinkSync(oldPath);
      console.log(`Moved: ${oldPath} -> ${newPath}`);
    }
  });

  // Move service pages
  const servicePages = {
    'roofing-faqs.js': 'roofing-faqs.tsx',
    'roof-maintenance-tips.js': 'roof-maintenance-tips.tsx',
    'roof-repair.js': 'roof-repair.tsx',
    'near-me.js': 'roofers-near-me.tsx',
    'roof-installation-costs.js': 'roof-installation-costs.tsx',
    'emergency-roofing.js': 'emergency-roof-repairs.tsx',
    'emergency-roof-repairs-new.tsx': 'emergency-roof-repairs.tsx',
    'roofing-firms-near-me.tsx': 'roofers-near-me.tsx',
    'roofing-companies-near-me.tsx': 'roofers-near-me.tsx'
  };

  Object.entries(servicePages).forEach(([oldName, newName]) => {
    const oldPath = path.join(pagesDir, 'services', oldName);
    const newPath = path.join(pagesDir, 'services', newName);
    
    if (fs.existsSync(oldPath)) {
      const content = fs.readFileSync(oldPath, 'utf8');
      writeFile(newPath, content);
      fs.unlinkSync(oldPath);
      console.log(`Moved: ${oldPath} -> ${newPath}`);
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

  console.log('\nFile organization complete!');
}

// Run the script
try {
  organizeFiles();
} catch (error) {
  console.error('Error during file organization:', error);
}
