const fs = require('fs');
const path = require('path');

// Delete old files and directories
const cleanupOldFiles = () => {
  console.log('Cleaning up old files...');

  // Delete old location pages
  const oldLocationPages = fs.readdirSync('pages')
    .filter(f => f.startsWith('roofers-in-') && f.endsWith('.tsx'))
    .map(f => path.join('pages', f));

  oldLocationPages.forEach(file => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`Deleted: ${file}`);
    }
  });

  // Delete old county directory
  if (fs.existsSync('pages/county')) {
    fs.rmSync('pages/county', { recursive: true });
    console.log('Deleted: pages/county directory');
  }

  // Delete old roofing-companies-near-me directory
  const nearMeDir = 'pages/services/roofing-companies-near-me';
  if (fs.existsSync(nearMeDir)) {
    fs.rmSync(nearMeDir, { recursive: true });
    console.log(`Deleted: ${nearMeDir} directory`);
  }

  // Delete other duplicate service files
  const duplicateServices = [
    'pages/services/roofing-firms-near-me.tsx',
    'pages/services/roofing-companies-near-me.tsx',
    'pages/services/emergency-roof-repairs-new.tsx',
    'pages/services/advanced-roofing.tsx',
    'pages/services/apex-roofing.tsx',
    'pages/services/conversational-roofing-template.tsx',
    'pages/services/voice-roofing-services.tsx',
    'pages/services/voice-roof-repairs.tsx',
    'pages/services/voice-roof-installation.tsx'
  ];

  duplicateServices.forEach(file => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`Deleted: ${file}`);
    }
  });
};

// Update sitemap.xml.tsx
const updateSitemap = () => {
  console.log('\nUpdating sitemap...');

  const content = `import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://52roofer.co.uk';

function generateSitemapXml(urls: string[]): string {
  return \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\${urls.map(url => \`  <url>
    <loc>\${SITE_URL}\${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>\${url === '/' ? '1.0' : '0.8'}</priority>
  </url>\`).join('\\n')}
</urlset>\`;
}

function getPages(dir: string, urlPrefix: string = ''): string[] {
  const urls: string[] = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively get pages from subdirectories
      urls.push(...getPages(filePath, \`\${urlPrefix}/\${file}\`));
    } else if (file.endsWith('.tsx') && !file.startsWith('_') && !file.startsWith('[')) {
      // Add page URL, removing .tsx extension and converting index to /
      const pageUrl = \`\${urlPrefix}/\${file.replace(/\\.tsx$/, '').replace(/index$/, '')}\`;
      urls.push(pageUrl.replace(/\\/+/g, '/'));
    }
  });

  return urls;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Get all page URLs
  const pagesDir = path.join(process.cwd(), 'pages');
  const urls = getPages(pagesDir);

  // Generate sitemap XML
  const sitemap = generateSitemapXml(urls);

  // Set headers
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

// This default export is required
export default function Sitemap() {
  return null;
}`;

  fs.writeFileSync('pages/sitemap.xml.tsx', content);
  console.log('Updated: pages/sitemap.xml.tsx');
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

  const countInDir = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        countInDir(fullPath);
      } else if (file.endsWith('.tsx') && !file.startsWith('_') && !file.startsWith('[')) {
        if (dir.includes('/locations/')) {
          counts.locations++;
        } else if (dir.includes('/services/')) {
          counts.services++;
        } else if (dir.includes('/blog/')) {
          counts.blog++;
        } else {
          counts.other++;
        }
      }
    });
  };

  countInDir('pages');

  console.log('Page counts:');
  console.log('- Locations:', counts.locations);
  console.log('- Services:', counts.services);
  console.log('- Blog:', counts.blog);
  console.log('- Other:', counts.other);
  console.log('Total:', Object.values(counts).reduce((a, b) => a + b, 0));
};

// Execute cleanup and verification
console.log('Starting cleanup and verification...');
cleanupOldFiles();
updateSitemap();
countPages();
console.log('\nCleanup and verification complete!');
