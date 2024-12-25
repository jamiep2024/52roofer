import { GetServerSideProps } from 'next'
import { serviceAreas } from '../data/serviceAreas';

const EXTERNAL_DATA_URL = 'https://52roofer.com';

// Services that should have location-specific pages
const locationSpecificServices = [
  'roofing-companies-near-me',
  'roofing-firms-near-me',
  'roofing-contractors',
  'roof-replacement',
  'apex-roofing',
  'advanced-roofing',
  'roofing-construction'
];

// Services that should NOT have location-specific pages
const generalServices = [
  'residential-roofing',
  'commercial-roofing',
  'roof-installation',
  'roof-maintenance',
  'emergency-roof-repair',
  'roof-inspection',
  'gutter-service',
  'skylight-installation',
  'roof-ventilation',
  'voice-roof-repairs',
  'voice-roof-installation',
  'voice-roofing-services',
  'emergency-roof-repairs-new'
];

// All services combined for general service pages
const allServices = [...locationSpecificServices, ...generalServices];

// Oxford neighborhoods
const oxfordNeighborhoods = [
  'blackbird-leys',
  'botley',
  'cowley',
  'headington',
  'wolvercote',
  'jericho',
  'marston',
  'rose-hill',
  'iffley',
  'summertown'
];

// Wiltshire special towns
const wiltshireSpecialTowns = [
  'warminster',
  'marlborough',
  'chippenham',
  'devizes',
  'melksham',
  'trowbridge',
  'bradford-on-avon',
  'westbury',
  'calne',
  'salisbury'
];

// Blog posts
const blogPosts = [
  'choosing-right-roofing-material',
  'complete-guide-to-roof-maintenance',
  'energy-efficient-roofing',
  'new-roof-cost-guide',
  'professional-roof-inspection-guide',
  'signs-you-need-roof-replacement',
  'slate-roofs-complete-guide',
  'uk-weather-roofing-problems',
  'ultimate-roof-ventilation-guide'
];

// Resource pages
const resourcePages = [
  'roofing-faq',
  'guides/slate-roofs'
];

function getAllLocationPages(): string[] {
  const locationPages: string[] = [];

  // Get all location pages from serviceAreas
  Object.entries(serviceAreas).forEach(([countyKey, county]) => {
    county.mainTowns.forEach(town => {
      const townSlug = town.toLowerCase().replace(/ /g, '-');
      
      // Add regular town page
      locationPages.push(`roofers-in-${townSlug}`);
      
      // Add special case for Wiltshire towns
      if (countyKey === 'wiltshire' && wiltshireSpecialTowns.includes(townSlug)) {
        locationPages.push(`roofers-in-${townSlug}-wiltshire`);
      }

      // Add location page variants
      locationPages.push(`location/${townSlug}`);
      locationPages.push(`locations/${townSlug}`);
    });
  });

  // Add Oxford neighborhoods
  oxfordNeighborhoods.forEach(neighborhood => {
    locationPages.push(`roofers-in-${neighborhood}-oxford`);
    locationPages.push(`location/${neighborhood}-oxford`);
    locationPages.push(`locations/${neighborhood}-oxford`);
  });

  return locationPages;
}

function generateServiceLocationUrls(): string[] {
  const urls: string[] = [];
  
  // Generate URLs for all towns
  Object.values(serviceAreas).forEach(area => {
    area.mainTowns.forEach(town => {
      const locationSlug = town.toLowerCase().replace(/ /g, '-');
      
      // Regular service-location combinations
      locationSpecificServices.forEach(service => {
        urls.push(`${EXTERNAL_DATA_URL}/services/${service}/${locationSlug}`);
      });

      // Special case for Wiltshire towns
      if (wiltshireSpecialTowns.includes(locationSlug)) {
        locationSpecificServices.forEach(service => {
          urls.push(`${EXTERNAL_DATA_URL}/services/${service}/${locationSlug}-wiltshire`);
        });
      }
    });
  });

  // Generate URLs for Oxford neighborhoods
  oxfordNeighborhoods.forEach(neighborhood => {
    locationSpecificServices.forEach(service => {
      urls.push(`${EXTERNAL_DATA_URL}/services/${service}/${neighborhood}-oxford`);
    });
  });

  // Add service index pages
  allServices.forEach(service => {
    urls.push(`${EXTERNAL_DATA_URL}/services/${service}`);
  });

  return urls;
}

function generateSiteMap(locationPages: string[]) {
  const serviceLocationUrls = generateServiceLocationUrls();
  const currentDate = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
           xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
     <!-- Main Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/about</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/contact</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/find-roofer</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>

     <!-- Blog Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     ${blogPosts.map(post => `
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/${post}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     `).join('')}

     <!-- Service Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}/services</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>

     <!-- Service Location Pages -->
     ${serviceLocationUrls.map(url => `
     <url>
       <loc>${url}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     `).join('')}

     <!-- Resources Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}/resources</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     ${resourcePages.map(page => `
     <url>
       <loc>${EXTERNAL_DATA_URL}/resources/${page}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     `).join('')}

     <!-- County Pages -->
     ${Object.entries(serviceAreas).map(([key, county]) => `
     <url>
       <loc>${EXTERNAL_DATA_URL}/county/${key}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     `).join('')}

     <!-- Location Pages -->
     ${locationPages
       .map(page => `
       <url>
           <loc>${EXTERNAL_DATA_URL}/${page}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.9</priority>
       </url>
     `)
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Get all location pages
  const locationPages = getAllLocationPages();
  
  // Generate the XML sitemap with the locations data
  const sitemap = generateSiteMap(locationPages);

  res.setHeader('Content-Type', 'text/xml');
  // No caching - always generate fresh
  res.setHeader('Cache-Control', 'no-store, must-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
