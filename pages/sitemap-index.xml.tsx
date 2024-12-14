import { GetServerSideProps } from 'next';

const EXTERNAL_DATA_URL = 'https://52roofer.com';

function generateSitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Main Pages Sitemap -->
      <sitemap>
        <loc>${EXTERNAL_DATA_URL}/sitemaps/main.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>
      
      <!-- Blog Pages Sitemap -->
      <sitemap>
        <loc>${EXTERNAL_DATA_URL}/sitemaps/blog.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>
      
      <!-- Service Pages Sitemap -->
      <sitemap>
        <loc>${EXTERNAL_DATA_URL}/sitemaps/services.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>
      
      <!-- Resource Pages Sitemap -->
      <sitemap>
        <loc>${EXTERNAL_DATA_URL}/sitemaps/resources.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>
      
      <!-- County Pages Sitemap -->
      <sitemap>
        <loc>${EXTERNAL_DATA_URL}/sitemaps/counties.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>
      
      <!-- Major Cities Sitemap -->
      <sitemap>
        <loc>${EXTERNAL_DATA_URL}/sitemaps/cities.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>
      
      <!-- Location Pages Sitemap -->
      <sitemap>
        <loc>${EXTERNAL_DATA_URL}/sitemaps/locations.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>
    </sitemapindex>
  `;
}

function SitemapIndex() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemapIndex = generateSitemapIndex();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
  res.write(sitemapIndex);
  res.end();

  return {
    props: {},
  };
};

export default SitemapIndex;
