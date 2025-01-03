const fs = require('fs');
const path = require('path');

// Define the base directories we need
const directories = [
  'pages',
  'pages/api',
  'pages/blog',
  'pages/county',
  'pages/locations',
  'pages/services',
  'pages/services/roofing-companies-near-me',
  'pages/sitemaps',
  'components',
  'components/forms',
  'components/layout',
  'components/seo',
  'components/seo/schemas',
  'components/optimization',
  'public',
  'public/images',
  'public/sitemaps',
  'styles',
  'utils',
  'types',
  'data'
];

// Create directories
function createDirectories() {
  console.log('Creating directory structure...');
  
  directories.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

// Create placeholder files to maintain directory structure
function createPlaceholderFiles() {
  console.log('\nCreating placeholder files...');

  const placeholders = [
    'pages/index.tsx',
    'pages/api/sitemap.ts',
    'pages/blog/index.tsx',
    'pages/locations/index.tsx',
    'pages/services/index.tsx',
    'styles/globals.css',
    'public/robots.txt',
    'public/sitemap.xml'
  ];

  placeholders.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (!fs.existsSync(fullPath)) {
      fs.writeFileSync(fullPath, '// Placeholder file');
      console.log(`Created placeholder: ${file}`);
    }
  });
}

// Main function
function setupDirectoryStructure() {
  console.log('Setting up project directory structure...\n');
  
  try {
    createDirectories();
    createPlaceholderFiles();
    console.log('\nDirectory structure setup complete!');
  } catch (error) {
    console.error('Error setting up directory structure:', error);
  }
}

setupDirectoryStructure();
