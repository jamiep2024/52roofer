import { GetServerSideProps } from 'next';
import { serviceAreas } from '../../data/serviceAreas';

const EXTERNAL_DATA_URL = 'https://52roofer.com';

function generateSitemap() {
  const locationUrls = Object.entries(serviceAreas).flatMap(([countyKey, county]) => {
    return county.mainTowns.map(town => {
      const townSlug = town.toLowerCase().replace(/ /g, '-');
      let pageSlug = `roofers-in-${townSlug}`;
      
      // Special cases for Wiltshire towns
      if (countyKey === 'wiltshire' && [
        'warminster', 'marlborough', 'chippenham', 'devizes', 
        'melksham', 'trowbridge', 'bradford-on-avon', 'westbury', 
        'calne', 'salisbury'
      ].includes(townSlug)) {
        pageSlug = `roofers-in-${townSlug}-wiltshire`;
      }
      
      // Special cases for Oxford neighborhoods
      if (countyKey === 'oxfordshire' && [
        'blackbird-leys', 'botley', 'cowley', 'headington', 
        'wolvercote', 'jericho', 'marston', 'rose-hill', 
        'iffley', 'summertown'
      ].includes(townSlug)) {
        pageSlug = `roofers-in-${townSlug}-oxford`;
      }
      
      return `
     <url>
       <loc>${EXTERNAL_DATA_URL}/${pageSlug}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>`;
    });
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${locationUrls}
   </urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSitemap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
