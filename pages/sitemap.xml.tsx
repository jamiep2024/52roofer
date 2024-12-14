import { GetServerSideProps } from 'next'
import { serviceAreas } from '../data/serviceAreas';

const EXTERNAL_DATA_URL = 'https://52roofer.com';

const services = [
  'roofing-companies-near-me',
  'roofing-firms-near-me',
  'roofing-contractors',
  'roof-replacement',
  'apex-roofing',
  'advanced-roofing',
  'roofing-construction'
];

function getAllLocationPages() {
  // Get all location pages from serviceAreas
  const locationPages = Object.entries(serviceAreas).flatMap(([countyKey, county]) => {
    return county.mainTowns.map(town => {
      const townSlug = town.toLowerCase().replace(/ /g, '-');
      
      // Special cases for Wiltshire towns
      if (countyKey === 'wiltshire' && [
        'warminster', 'marlborough', 'chippenham', 'devizes', 
        'melksham', 'trowbridge', 'bradford-on-avon', 'westbury', 
        'calne', 'salisbury'
      ].includes(townSlug)) {
        return `roofers-in-${townSlug}-wiltshire`;
      }
      
      // Special cases for Oxford neighborhoods
      if (countyKey === 'oxfordshire' && [
        'blackbird-leys', 'botley', 'cowley', 'headington', 
        'wolvercote', 'jericho', 'marston', 'rose-hill', 
        'iffley', 'summertown'
      ].includes(townSlug)) {
        return `roofers-in-${townSlug}-oxford`;
      }
      
      return `roofers-in-${townSlug}`;
    });
  });

  return locationPages;
}

function generateServiceLocationUrls() {
  const urls: string[] = [];
  
  // Generate URLs for each service in each location
  Object.values(serviceAreas).forEach(area => {
    area.mainTowns.forEach(town => {
      const locationSlug = town.toLowerCase().replace(/ /g, '-');
      services.forEach(service => {
        urls.push(`${EXTERNAL_DATA_URL}/services/${service}/${locationSlug}`);
      });
    });
  });

  return urls;
}

function generateSiteMap(locationPages: string[]) {
  const serviceLocationUrls = generateServiceLocationUrls();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
           xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
     <!-- Main Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/about</loc>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/contact</loc>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/find-roofer</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>

     <!-- Blog Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog</loc>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/choosing-right-roofing-material</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/complete-guide-to-roof-maintenance</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/energy-efficient-roofing</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/new-roof-cost-guide</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/professional-roof-inspection-guide</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/signs-you-need-roof-replacement</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/slate-roofs-complete-guide</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/uk-weather-roofing-problems</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/ultimate-roof-ventilation-guide</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>

     <!-- Service Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}/services</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     ${services.map(service => `
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/${service}</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     `).join('')}
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/residential-roofing</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/commercial-roofing</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/roof-installation</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/roof-maintenance</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/emergency-roof-repairs</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/roof-inspection</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/gutter-services</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/skylight-installation</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/roof-ventilation</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>

     <!-- Service Location Pages -->
     ${serviceLocationUrls.map(url => `
     <url>
       <loc>${url}</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     `).join('')}

     <!-- Resources Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}/resources</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/resources/roofing-faq</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/resources/guides/slate-roofs</loc>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>

     <!-- County Pages -->
     ${Object.entries(serviceAreas).map(([key, county]) => `
     <url>
       <loc>${EXTERNAL_DATA_URL}/county/${key}</loc>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     `).join('')}

     <!-- Major Cities -->
     ${Object.entries(serviceAreas).map(([key, county]) => {
       const majorCities = county.mainTowns.filter(town => 
         ['Oxford', 'Reading', 'Southampton', 'Portsmouth', 'Milton Keynes', 'Swindon', 'Gloucester'].includes(town)
       );
       return majorCities.map(city => `
     <url>
       <loc>${EXTERNAL_DATA_URL}/locations/${city.toLowerCase().replace(/ /g, '-')}</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
       `).join('');
     }).join('')}

     <!-- Location Pages -->
     ${locationPages
       .map(page => `
       <url>
           <loc>${EXTERNAL_DATA_URL}/${page}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
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
  // Cache the sitemap for 12 hours
  res.setHeader('Cache-Control', 'public, s-maxage=43200, stale-while-revalidate=21600');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
