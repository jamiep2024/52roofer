const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { DOMParser } = require('@xmldom/xmldom');

// Helper to parse XML
const parseXML = (xmlContent) => {
  const parser = new DOMParser();
  return parser.parseFromString(xmlContent, 'text/xml');
};

// Get all URLs from a sitemap
const getUrlsFromSitemap = (xmlDoc) => {
  const urls = new Set();
  const locations = xmlDoc.getElementsByTagName('loc');
  
  for (let i = 0; i < locations.length; i++) {
    urls.add(locations[i].textContent);
  }
  
  return urls;
};

// Get all expected URLs from pages directory
const getExpectedUrls = () => {
  const baseUrl = 'https://52roofer.co.uk';
  const urls = new Set();
  
  const pages = glob.sync('pages/**/*.{tsx,ts}', {
    ignore: ['pages/_*.tsx', 'pages/api/**', 'pages/**/[*']
  });
  
  pages.forEach(page => {
    const url = page
      .replace(/^pages/, '')
      .replace(/\.tsx?$/, '')
      .replace(/\/index$/, '')
      .replace(/\[([^\]]+)\]/g, ':$1');
      
    urls.add(`${baseUrl}${url}`);
  });
  
  return urls;
};

// Verify sitemap structure
const verifySitemapStructure = (xmlDoc) => {
  const issues = [];
  
  // Check root element
  const rootElement = xmlDoc.documentElement;
  if (rootElement.nodeName !== 'urlset' && rootElement.nodeName !== 'sitemapindex') {
    issues.push('Invalid root element: should be urlset or sitemapindex');
  }
  
  // Check namespace
  const xmlns = rootElement.getAttribute('xmlns');
  if (xmlns !== 'http://www.sitemaps.org/schemas/sitemap/0.9') {
    issues.push('Invalid or missing xmlns attribute');
  }
  
  // Check required elements for each URL
  const urls = xmlDoc.getElementsByTagName('url');
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const loc = url.getElementsByTagName('loc')[0];
    const lastmod = url.getElementsByTagName('lastmod')[0];
    const changefreq = url.getElementsByTagName('changefreq')[0];
    const priority = url.getElementsByTagName('priority')[0];
    
    if (!loc) issues.push(`URL #${i + 1}: Missing loc element`);
    if (!lastmod) issues.push(`URL #${i + 1}: Missing lastmod element`);
    if (!changefreq) issues.push(`URL #${i + 1}: Missing changefreq element`);
    if (!priority) issues.push(`URL #${i + 1}: Missing priority element`);
  }
  
  return issues;
};

// Main verification function
const verifySitemaps = () => {
  console.log('Verifying sitemaps...\n');
  
  // Get expected URLs
  const expectedUrls = getExpectedUrls();
  console.log(`Expected URLs: ${expectedUrls.size}`);
  
  // Verify main sitemap
  const mainSitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
  const mainDoc = parseXML(mainSitemap);
  const mainUrls = getUrlsFromSitemap(mainDoc);
  console.log(`URLs in main sitemap: ${mainUrls.size}`);
  
  // Verify section sitemaps
  const sections = ['services', 'locations', 'blog'];
  const sectionUrls = new Map();
  
  sections.forEach(section => {
    const sitemapPath = `public/sitemaps/${section}.xml`;
    if (fs.existsSync(sitemapPath)) {
      const sectionDoc = parseXML(fs.readFileSync(sitemapPath, 'utf8'));
      const urls = getUrlsFromSitemap(sectionDoc);
      sectionUrls.set(section, urls);
      console.log(`URLs in ${section} sitemap: ${urls.size}`);
      
      // Verify structure
      const issues = verifySitemapStructure(sectionDoc);
      if (issues.length > 0) {
        console.log(`\nStructure issues in ${section} sitemap:`);
        issues.forEach(issue => console.log(`- ${issue}`));
      }
    }
  });
  
  // Check for missing URLs
  const allSitemapUrls = new Set([
    ...mainUrls,
    ...Array.from(sectionUrls.values()).flatMap(urls => Array.from(urls))
  ]);
  
  const missingUrls = new Set(
    Array.from(expectedUrls).filter(url => !allSitemapUrls.has(url))
  );
  
  const extraUrls = new Set(
    Array.from(allSitemapUrls).filter(url => !expectedUrls.has(url))
  );
  
  // Report results
  console.log('\nVerification Results:');
  console.log('--------------------');
  
  if (missingUrls.size > 0) {
    console.log('\n❌ Missing URLs:');
    missingUrls.forEach(url => console.log(`- ${url}`));
  } else {
    console.log('\n✅ All expected URLs are present in sitemaps');
  }
  
  if (extraUrls.size > 0) {
    console.log('\n⚠️ Extra URLs found:');
    extraUrls.forEach(url => console.log(`- ${url}`));
  } else {
    console.log('\n✅ No unexpected URLs in sitemaps');
  }
  
  // Verify sitemap index
  const sitemapIndex = fs.readFileSync('public/sitemaps/index.xml', 'utf8');
  const indexDoc = parseXML(sitemapIndex);
  const indexUrls = getUrlsFromSitemap(indexDoc);
  
  console.log('\nSitemap Index:');
  console.log('-------------');
  console.log(`Found ${indexUrls.size} sitemaps in index`);
  
  return missingUrls.size === 0 && extraUrls.size === 0;
};

// Run verification
console.log('Installing required dependency...');
require('child_process').execSync('npm install @xmldom/xmldom', { stdio: 'inherit' });

const success = verifySitemaps();
if (success) {
  console.log('\n✅ All sitemaps are valid and complete');
  console.log('\nYou can now submit your sitemap to Google Search Console:');
  console.log('1. Go to https://search.google.com/search-console');
  console.log('2. Select your property');
  console.log('3. Navigate to Sitemaps section');
  console.log('4. Submit https://52roofer.co.uk/sitemaps/index.xml');
} else {
  console.log('\n❌ Please fix the reported issues before submitting to Google');
}
