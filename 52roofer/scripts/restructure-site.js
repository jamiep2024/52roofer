// Restructure site to follow consistent patterns
const fs = require('fs');
const path = require('path');

const SITE_STRUCTURE = {
  // Core pages
  'pages/index.tsx': 'Home page',
  'pages/about.tsx': 'About page',
  'pages/contact.tsx': 'Contact page',
  
  // Services section
  'pages/services/index.tsx': 'Services landing page',
  'pages/services/[service].tsx': 'Dynamic service pages',
  
  // Locations section  
  'pages/locations/index.tsx': 'Locations landing page',
  'pages/locations/[county]/index.tsx': 'County landing pages',
  'pages/locations/[county]/[city].tsx': 'City pages',
  
  // Blog section
  'pages/blog/index.tsx': 'Blog landing page',
  'pages/blog/[slug].tsx': 'Blog post pages',
  
  // Resources section
  'pages/resources/index.tsx': 'Resources landing page',
  'pages/resources/[slug].tsx': 'Resource pages',
  
  // API routes
  'pages/api/sitemap.xml.ts': 'Sitemap generation',
  'pages/api/submit-lead.ts': 'Lead form submission'
};

// Components structure
const COMPONENTS = {
  'layout': [
    'Layout.tsx', // Main layout wrapper
    'Header.tsx',
    'Footer.tsx',
    'Navigation.tsx'
  ],
  'seo': [
    'SEO.tsx', // Base SEO component
    'LocalBusinessSchema.tsx',
    'schemas/FAQSchema.tsx',
    'schemas/HowToSchema.tsx',
    'schemas/ReviewSchema.tsx'
  ],
  'pages': [
    'ServicePage.tsx', // Template for service pages
    'LocationPage.tsx', // Template for location pages
    'BlogPost.tsx', // Template for blog posts
    'ResourcePage.tsx' // Template for resource pages
  ],
  'forms': [
    'LeadForm.tsx',
    'ContactForm.tsx'
  ],
  'common': [
    'Button.tsx',
    'Card.tsx',
    'Hero.tsx'
  ]
};

// Data structure
const DATA_FILES = {
  'data/services.ts': 'Service definitions and metadata',
  'data/locations.ts': 'Location data and metadata',
  'data/blog-posts.ts': 'Blog post data',
  'data/resources.ts': 'Resource page data'
};

// Utility functions
const createDirectoryIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const moveFile = (oldPath, newPath) => {
  if (fs.existsSync(oldPath)) {
    createDirectoryIfNotExists(path.dirname(newPath));
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${oldPath} to ${newPath}`);
  }
};

const deleteFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted ${filePath}`);
  }
};

// Main restructuring functions
const restructurePages = () => {
  // Create core structure
  Object.keys(SITE_STRUCTURE).forEach(pagePath => {
    createDirectoryIfNotExists(path.dirname(pagePath));
  });

  // Move location pages to new structure
  const locationFiles = fs.readdirSync('pages')
    .filter(f => f.startsWith('roofers-in-') && f.endsWith('.tsx'));

  locationFiles.forEach(file => {
    const match = file.match(/roofers-in-(.+)-(.+)\.tsx$/);
    if (match) {
      const [_, city, county] = match;
      const newPath = `pages/locations/${county}/${city}.tsx`;
      moveFile(`pages/${file}`, newPath);
    }
  });

  // Consolidate near-me variants
  const nearMeVariants = [
    'pages/services/roofers-near-me.tsx',
    'pages/services/roofing-companies-near-me.tsx',
    'pages/services/roofing-firms-near-me.tsx'
  ];

  // Keep only roofers-near-me.tsx and delete others
  nearMeVariants.slice(1).forEach(deleteFile);

  // Remove .js duplicates where .tsx exists
  fs.readdirSync('pages/services')
    .filter(f => f.endsWith('.js'))
    .forEach(jsFile => {
      const tsxFile = jsFile.replace('.js', '.tsx');
      if (fs.existsSync(`pages/services/${tsxFile}`)) {
        deleteFile(`pages/services/${jsFile}`);
      }
    });
};

const restructureComponents = () => {
  Object.entries(COMPONENTS).forEach(([dir, files]) => {
    const componentDir = `components/${dir}`;
    createDirectoryIfNotExists(componentDir);
    files.forEach(file => {
      const filePath = `${componentDir}/${file}`;
      createDirectoryIfNotExists(path.dirname(filePath));
    });
  });
};

const restructureData = () => {
  Object.keys(DATA_FILES).forEach(filePath => {
    createDirectoryIfNotExists(path.dirname(filePath));
  });
};

// Execute restructuring
const restructureSite = () => {
  console.log('Starting site restructuring...');
  
  restructurePages();
  restructureComponents();
  restructureData();
  
  console.log('Site restructuring complete');
};

module.exports = {
  restructureSite,
  SITE_STRUCTURE,
  COMPONENTS,
  DATA_FILES
};
