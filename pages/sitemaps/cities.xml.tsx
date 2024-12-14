import { GetServerSideProps } from 'next';
import { serviceAreas } from '../../data/serviceAreas';

const EXTERNAL_DATA_URL = 'https://52roofer.com';

function generateSitemap() {
  const majorCities = Object.values(serviceAreas)
    .flatMap(county => county.mainTowns)
    .filter(town => 
      ['Oxford', 'Reading', 'Southampton', 'Portsmouth', 'Milton Keynes', 'Swindon', 'Gloucester'].includes(town)
    );

  const cityUrls = majorCities.map(city => `
     <url>
       <loc>${EXTERNAL_DATA_URL}/locations/${city.toLowerCase().replace(/ /g, '-')}</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${cityUrls}
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
