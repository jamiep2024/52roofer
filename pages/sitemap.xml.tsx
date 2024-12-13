import { GetServerSideProps } from 'next'
import { businesses } from '../data/businesses';
import fs from 'fs';
import path from 'path';

const EXTERNAL_DATA_URL = 'https://52roofer.com';

function getLocationPages() {
  const pagesDirectory = path.join(process.cwd(), 'pages');
  const files = fs.readdirSync(pagesDirectory);
  
  return files
    .filter(file => file.startsWith('roofers-in-') && file.endsWith('.tsx'))
    .map(file => file.replace('.tsx', ''));
}

function generateSiteMap(locations: string[], locationPages: string[]) {
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
       <image:image>
         <image:loc>${EXTERNAL_DATA_URL}/images/hero-bg.jpg</image:loc>
         <image:title>52Roofer - Professional Roofing Services</image:title>
         <image:caption>Find trusted local roofers in South England</image:caption>
       </image:image>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
       <image:image>
         <image:loc>${EXTERNAL_DATA_URL}/images/services-hero.jpg</image:loc>
         <image:title>Professional Roofing Services</image:title>
         <image:caption>Comprehensive roofing solutions for your home</image:caption>
       </image:image>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/about</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/contact</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     
     <!-- Location Pages -->
     ${locations
       .map((location) => {
         const locationSlug = location.toLowerCase();
         const localBusinesses = businesses.filter(b => b.location === location);
         return `
       <url>
           <loc>${EXTERNAL_DATA_URL}/location/${locationSlug}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.9</priority>
           <image:image>
             <image:loc>${EXTERNAL_DATA_URL}/images/locations/${locationSlug}.jpg</image:loc>
             <image:title>Roofers in ${location}</image:title>
             <image:caption>Professional roofing services in ${location}</image:caption>
           </image:image>
       </url>
       ${localBusinesses.map(business => `
       <url>
           <loc>${EXTERNAL_DATA_URL}/roofer/${business.id}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
       `).join('')}
     `;
       })
       .join('')}

     <!-- Specific Location Pages -->
     ${locationPages
       .map(page => `
       <url>
           <loc>${EXTERNAL_DATA_URL}/${page}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.9</priority>
           <image:image>
             <image:loc>${EXTERNAL_DATA_URL}/images/hero-bg.jpg</image:loc>
             <image:title>Professional Roofing Services</image:title>
             <image:caption>Expert roofing services in ${page.replace('roofers-in-', '').replace(/-/g, ' ')}</image:caption>
           </image:image>
       </url>
     `)
       .join('')}
     
     <!-- Service Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/roof-repairs</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
       <image:image>
         <image:loc>${EXTERNAL_DATA_URL}/images/services/repairs.jpg</image:loc>
         <image:title>Professional Roof Repairs</image:title>
         <image:caption>Expert roof repair services in South England</image:caption>
       </image:image>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/roof-installation</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
       <image:image>
         <image:loc>${EXTERNAL_DATA_URL}/images/services/installation.jpg</image:loc>
         <image:title>New Roof Installation</image:title>
         <image:caption>Professional roof installation services</image:caption>
       </image:image>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/emergency-repairs</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
       <image:image>
         <image:loc>${EXTERNAL_DATA_URL}/images/services/emergency.jpg</image:loc>
         <image:title>24/7 Emergency Roof Repairs</image:title>
         <image:caption>Emergency roofing services available 24/7</image:caption>
       </image:image>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/maintenance</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
       <image:image>
         <image:loc>${EXTERNAL_DATA_URL}/images/services/maintenance.jpg</image:loc>
         <image:title>Roof Maintenance Services</image:title>
         <image:caption>Professional roof maintenance and inspections</image:caption>
       </image:image>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const locations = ['Oxfordshire', 'Gloucestershire', 'Wiltshire', 'Berkshire'];
  const locationPages = getLocationPages();
  
  // Generate the XML sitemap with the locations data
  const sitemap = generateSiteMap(locations, locationPages);

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
