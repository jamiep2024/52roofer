const fs = require('fs');
const path = require('path');

// All service variations
const services = [
    'advanced-roofing',
    'apex-roofing',
    'commercial-roofing',
    'emergency-roof-repair',
    'emergency-roof-repairs',
    'emergency-roof-repairs-new',
    'gutter-service',
    'gutter-services',
    'residential-roofing',
    'roof-inspection',
    'roof-installation',
    'roof-maintenance',
    'roof-replacement',
    'roof-ventilation',
    'roofers-near-me',
    'roofing-companies-near-me',
    'roofing-construction',
    'roofing-contractors',
    'roofing-firms-near-me',
    'skylight-installation',
    'voice-roof-installation',
    'voice-roof-repairs',
    'voice-roofing-services'
];

// All locations including special cases
const locations = [
    // Major cities
    'oxford',
    'reading',
    'southampton',
    'portsmouth',
    'milton-keynes',
    'swindon',
    'gloucester',
    
    // Oxford areas
    'blackbird-leys-oxford',
    'botley-oxford',
    'cowley-oxford',
    'headington-oxford',
    'wolvercote-oxford',
    'jericho-oxford',
    'marston-oxford',
    'rose-hill-oxford',
    'iffley-oxford',
    'summertown-oxford',
    
    // Wiltshire towns with special suffix
    'warminster-wiltshire',
    'marlborough-wiltshire',
    'chippenham-wiltshire',
    'devizes-wiltshire',
    'melksham-wiltshire',
    'trowbridge-wiltshire',
    'bradford-on-avon-wiltshire',
    'westbury-wiltshire',
    'calne-wiltshire',
    'salisbury-wiltshire',
    
    // Regular towns
    'abingdon',
    'aldershot',
    'amersham',
    'andover',
    'ascot',
    'aylesbury',
    'banbury',
    'basingstoke',
    'beaconsfield',
    'bicester',
    'bracknell',
    'buckingham',
    'burgess-hill',
    'camberley',
    'cheltenham',
    'chesham',
    'chichester',
    'crawley',
    'didcot',
    'dorking',
    'eastleigh',
    'epsom',
    'fareham',
    'farnborough',
    'farnham',
    'gerrards-cross',
    'gosport',
    'guildford',
    'haywards-heath',
    'henley-on-thames',
    'high-wycombe',
    'horsham',
    'leatherhead',
    'maidenhead',
    'marlow',
    'newbury',
    'princes-risborough',
    'redhill',
    'reigate',
    'slough',
    'staines',
    'thame',
    'wallingford',
    'winchester',
    'windsor',
    'witney',
    'woking',
    'wokingham'
];

// Counties
const counties = [
    'berkshire',
    'buckinghamshire',
    'gloucestershire',
    'hampshire',
    'oxfordshire',
    'surrey',
    'sussex',
    'wiltshire'
];

// Calculate total expected pages
const totalLocationPages = locations.length; // Each location has a dedicated page
const totalServicePages = services.length; // Each service has a dedicated page
const totalServiceLocationPages = services.length * locations.length; // Each service in each location
const totalCountyPages = counties.length; // Each county has a dedicated page
const totalStaticPages = 15; // Home, About, Contact, Blog index, individual blog posts, etc.

const expectedTotal = 1951; // Total required pages

console.log('Expected page counts:');
console.log(`Location pages: ${totalLocationPages}`);
console.log(`Service pages: ${totalServicePages}`);
console.log(`Service-location pages: ${totalServiceLocationPages}`);
console.log(`Static pages: ${totalStaticPages}`);
console.log(`Total expected pages: ${expectedTotal}`);

// Generate all URLs
const urls = new Set();

// Add main pages
[
    '/',
    '/about',
    '/contact',
    '/find-roofer',
    '/blog',
    '/blog/choosing-right-roofing-material',
    '/blog/complete-guide-to-roof-maintenance',
    '/blog/energy-efficient-roofing',
    '/blog/new-roof-cost-guide',
    '/blog/professional-roof-inspection-guide',
    '/blog/signs-you-need-roof-replacement',
    '/blog/slate-roofs-complete-guide',
    '/blog/uk-weather-roofing-problems',
    '/blog/ultimate-roof-ventilation-guide',
    '/services',
    '/resources',
    '/resources/roofing-faq',
    '/resources/guides/slate-roofs'
].forEach(url => urls.add(url));

// Add county pages
counties.forEach(county => {
    urls.add(`/county/${county}`);
});

// Add location pages (both formats)
locations.forEach(location => {
    urls.add(`/roofers-in-${location}`);
    urls.add(`/location/${location}`);
    urls.add(`/locations/${location}`);
});

// Add service pages
services.forEach(service => {
    urls.add(`/services/${service}`);
});

// Add service-location pages
services.forEach(service => {
    locations.forEach(location => {
        urls.add(`/services/${service}/${location}`);
    });
});

// Convert Set to Array for final processing
const urlArray = Array.from(urls);

// Write URLs to sitemap file
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlArray.map(url => {
    let priority = '0.8';
    let changefreq = 'weekly';
    
    if (url === '/') {
        priority = '1.0';
        changefreq = 'daily';
    } else if (url.startsWith('/services/')) {
        priority = '0.9';
        changefreq = 'weekly';
    } else if (url.startsWith('/blog/')) {
        priority = '0.7';
        changefreq = 'monthly';
    } else if (url.startsWith('/contact') || url.startsWith('/about') || url.startsWith('/resources/roofing-faq')) {
        priority = '0.8';
        changefreq = 'monthly';
    } else if (url.startsWith('/roofers-in-') || url.startsWith('/location/') || url.startsWith('/locations/')) {
        priority = '0.9';
        changefreq = 'weekly';
    }
    
    return `  <url>
    <loc>https://52roofer.com${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);

console.log(`\nGenerated sitemap with ${urlArray.length} URLs`);
if (urlArray.length !== expectedTotal) {
    console.log(`WARNING: Generated URL count (${urlArray.length}) doesn't match expected total (${expectedTotal})`);
    console.log('\nMissing pages:', expectedTotal - urlArray.length);
}

// Save URL list for inspection
fs.writeFileSync('url-list.txt', urlArray.sort().join('\n'));
console.log('\nURL list saved to url-list.txt');
