const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://52roofer.com';
const PAGES_DIR = path.join(process.cwd(), 'pages');

// Helper function to get all pages recursively
function getAllPages(dir = PAGES_DIR) {
  let pages = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!item.startsWith('_') && !['api', 'sitemaps'].includes(item)) {
        pages = pages.concat(getAllPages(fullPath));
      }
    } else if (
      (item.endsWith('.tsx') || item.endsWith('.ts')) &&
      !item.startsWith('_') &&
      !item.startsWith('.') &&
      !item.includes('[') && // Exclude dynamic routes
      !item.includes('sitemap')
    ) {
      pages.push(fullPath);
    }
  }

  return pages;
}

// Helper function to convert file path to URL
function pathToUrl(filePath) {
  const relativePath = path.relative(PAGES_DIR, filePath);
  return `${SITE_URL}/${relativePath
    .replace(/\\/g, '/')
    .replace(/\.tsx?$/, '')
    .replace(/\/index$/, '')}`;
}

// Generate sitemap XML
function generateSitemap() {
  console.log('Generating sitemap...\n');

  const pages = getAllPages();
  console.log(`Found ${pages.length} pages\n`);

  // Group pages by type
  const pageGroups = {
    locations: [],
    services: [],
    blog: [],
    other: []
  };

  pages.forEach(page => {
    const url = pathToUrl(page);
    if (url.includes('/locations/')) {
      pageGroups.locations.push(url);
    } else if (url.includes('/services/')) {
      pageGroups.services.push(url);
    } else if (url.includes('/blog/')) {
      pageGroups.blog.push(url);
    } else {
      pageGroups.other.push(url);
    }
  });

  // Generate individual sitemaps
  const sitemapsDir = path.join(process.cwd(), 'public', 'sitemaps');
  if (!fs.existsSync(sitemapsDir)) {
    fs.mkdirSync(sitemapsDir, { recursive: true });
  }

  // Helper function to create sitemap content
  function createSitemapContent(urls, changefreq = 'weekly', priority = '0.8') {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  }

  // Create individual sitemaps
  Object.entries(pageGroups).forEach(([type, urls]) => {
    if (urls.length > 0) {
      const sitemapPath = path.join(sitemapsDir, `${type}.xml`);
      fs.writeFileSync(sitemapPath, createSitemapContent(urls));
      console.log(`Created ${type} sitemap with ${urls.length} URLs`);
    }
  });

  // Create sitemap index
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(pageGroups)
    .filter(type => pageGroups[type].length > 0)
    .map(type => `  <sitemap>
    <loc>${SITE_URL}/sitemaps/${type}.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapIndex);
  console.log('\nCreated sitemap index');

  // Create robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsTxt);
  console.log('Created robots.txt');

  console.log('\nSitemap generation complete!');
}

// Run the generator
try {
  generateSitemap();
} catch (error) {
  console.error('Error generating sitemap:', error);
}
