const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Base URL for the site
const BASE_URL = 'https://52roofer.co.uk'; // Update this with your actual domain

// Priority and change frequency mappings
const PRIORITIES = {
  index: 1.0,
  services: 0.9,
  locations: 0.8,
  blog: 0.7,
  other: 0.5
};

const CHANGE_FREQ = {
  index: 'daily',
  services: 'weekly',
  locations: 'weekly',
  blog: 'weekly',
  other: 'monthly'
};

// Helper to get page type
const getPageType = (filePath) => {
  if (filePath.includes('index.tsx')) return 'index';
  if (filePath.includes('/services/')) return 'services';
  if (filePath.includes('/locations/') || filePath.includes('roofers-in-')) return 'locations';
  if (filePath.includes('/blog/')) return 'blog';
  return 'other';
};

// Helper to convert file path to URL
const filePathToUrl = (filePath) => {
  return filePath
    .replace(/^pages/, '')
    .replace(/\.tsx?$/, '')
    .replace(/\/index$/, '')
    .replace(/\[([^\]]+)\]/g, ':$1');
};

// Generate sitemap XML
const generateSitemap = () => {
  const pages = glob.sync('pages/**/*.{tsx,ts}', {
    ignore: ['pages/_*.tsx', 'pages/api/**', 'pages/**/[*']
  });

  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  pages.forEach(page => {
    const type = getPageType(page);
    const url = BASE_URL + filePathToUrl(page);
    
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${CHANGE_FREQ[type]}</changefreq>\n`;
    xml += `    <priority>${PRIORITIES[type]}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
};

// Generate sitemap index XML
const generateSitemapIndex = () => {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add main sitemap
  xml += '  <sitemap>\n';
  xml += `    <loc>${BASE_URL}/sitemap.xml</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += '  </sitemap>\n';
  
  // Add section sitemaps
  ['services', 'locations', 'blog'].forEach(section => {
    xml += '  <sitemap>\n';
    xml += `    <loc>${BASE_URL}/sitemaps/${section}.xml</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '  </sitemap>\n';
  });
  
  xml += '</sitemapindex>';
  
  return xml;
};

// Save sitemap files
const saveSitemaps = () => {
  const mainSitemap = generateSitemap();
  const sitemapIndex = generateSitemapIndex();
  
  // Ensure directories exist
  if (!fs.existsSync('public/sitemaps')) {
    fs.mkdirSync('public/sitemaps', { recursive: true });
  }
  
  // Save main sitemap
  fs.writeFileSync('public/sitemap.xml', mainSitemap);
  console.log('✅ Generated main sitemap.xml');
  
  // Save sitemap index
  fs.writeFileSync('public/sitemaps/index.xml', sitemapIndex);
  console.log('✅ Generated sitemap index');
  
  // Generate section sitemaps
  ['services', 'locations', 'blog'].forEach(section => {
    const sectionPages = glob.sync(`pages/${section}/**/*.{tsx,ts}`, {
      ignore: ['pages/_*.tsx', 'pages/api/**', 'pages/**/[*']
    });
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    sectionPages.forEach(page => {
      const url = BASE_URL + filePathToUrl(page);
      const today = new Date().toISOString().split('T')[0];
      
      xml += '  <url>\n';
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${CHANGE_FREQ[section]}</changefreq>\n`;
      xml += `    <priority>${PRIORITIES[section]}</priority>\n`;
      xml += '  </url>\n';
    });
    
    xml += '</urlset>';
    
    fs.writeFileSync(`public/sitemaps/${section}.xml`, xml);
    console.log(`✅ Generated ${section} sitemap`);
  });
};

// Run sitemap generation
console.log('Generating sitemaps...');
saveSitemaps();
console.log('\nSitemap generation complete! Files saved in public/sitemaps/');
