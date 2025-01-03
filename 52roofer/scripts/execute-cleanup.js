const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Execute cleanup in stages
console.log('Starting site cleanup...');

// Stage 1: Delete .js files that have .tsx equivalents
console.log('\nStage 1: Removing redundant .js files...');
const findJsFiles = (dir) => {
  const jsFiles = [];
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      jsFiles.push(...findJsFiles(fullPath));
    } else if (file.endsWith('.js')) {
      const tsxVersion = fullPath.replace('.js', '.tsx');
      if (fs.existsSync(tsxVersion)) {
        jsFiles.push(fullPath);
      }
    }
  });
  
  return jsFiles;
};

const jsFiles = findJsFiles('pages');
jsFiles.forEach(file => {
  fs.unlinkSync(file);
  console.log(`Deleted: ${file}`);
});

// Stage 2: Delete template and test files
console.log('\nStage 2: Removing template and test files...');
const templatesAndTests = [
  'pages/services/conversational-roofing-template.tsx',
  'pages/services/voice-roofing-services.tsx',
  'pages/services/voice-roof-repairs.tsx',
  'pages/services/voice-roof-installation.tsx',
  'components/templates/conversational-roofing-template.tsx'
];

templatesAndTests.forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`Deleted: ${file}`);
  }
});

// Stage 3: Standardize location pages structure
console.log('\nStage 3: Standardizing location pages...');

// Create locations directory structure
const locationDirs = [
  'pages/locations',
  'pages/locations/oxford',
  'pages/locations/wiltshire'
];

locationDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Move location pages to standardized structure
const moveLocationPages = () => {
  const files = fs.readdirSync('pages');
  files.forEach(file => {
    if (file.startsWith('roofers-in-') && file.endsWith('.tsx')) {
      const match = file.match(/roofers-in-(.+)-(.+)\.tsx$/);
      if (match) {
        const [_, city, county] = match;
        const newPath = `pages/locations/${county}/${city}.tsx`;
        const oldPath = `pages/${file}`;
        
        // Ensure directory exists
        fs.mkdirSync(path.dirname(newPath), { recursive: true });
        
        // Move file
        fs.renameSync(oldPath, newPath);
        console.log(`Moved: ${oldPath} -> ${newPath}`);
      }
    }
  });
};

moveLocationPages();

// Stage 4: Clean up roofing-companies-near-me duplicates
console.log('\nStage 4: Cleaning up duplicate near-me pages...');
const nearMeDir = 'pages/services/roofing-companies-near-me';
if (fs.existsSync(nearMeDir)) {
  fs.rmSync(nearMeDir, { recursive: true, force: true });
  console.log(`Deleted directory: ${nearMeDir}`);
}

// Stage 5: Update sitemap configuration
console.log('\nStage 5: Updating sitemap configuration...');

const sitemapConfig = {
  siteUrl: 'https://52roofer.co.uk',
  generateRobotsTxt: true,
  exclude: [
    '/api/*',
    '/templates/*',
    '/_*'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
};

fs.writeFileSync(
  'next-sitemap.config.js',
  `module.exports = ${JSON.stringify(sitemapConfig, null, 2)}`
);

console.log('Created next-sitemap.config.js');

// Final stage: Run next build to verify everything works
console.log('\nFinal stage: Running build to verify changes...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

console.log('\nCleanup complete! Site structure has been standardized.');

// Log remaining structure
console.log('\nFinal site structure:');
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

console.log('\nComponents:');
logDir('components');
