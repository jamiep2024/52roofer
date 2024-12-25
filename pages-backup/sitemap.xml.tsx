import SEO from "../components/seo/SEO";
import Layout from "../components/layout/Layout";
import { GetServerSideProps } from "next";
import { serviceAreas } from "../data/serviceAreas";

const EXTERNAL_DATA_URL = "https://52roofer.com";

// All services including the new ones
const services = [
  "roofing-companies-near-me",
  "roofing-firms-near-me",
  "roofing-contractors",
  "roof-replacement",
  "apex-roofing",
  "advanced-roofing",
  "roofing-construction",
  "residential-roofing",
  "commercial-roofing",
  "roof-installation",
  "roof-maintenance",
  "emergency-roof-repairs",
  "roof-inspection",
  "gutter-services",
  "skylight-installation",
  "roof-ventilation",
  "voice-roof-repairs",
  "voice-roof-installation",
  "voice-roofing-services",
  "emergency-roof-repairs-new",
];

// Oxford neighborhoods
const oxfordNeighborhoods = [
  "blackbird-leys",
  "botley",
  "cowley",
  "headington",
  "wolvercote",
  "jericho",
  "marston",
  "rose-hill",
  "iffley",
  "summertown",
];

// Wiltshire special towns
const wiltshireSpecialTowns = [
  "warminster",
  "marlborough",
  "chippenham",
  "devizes",
  "melksham",
  "trowbridge",
  "bradford-on-avon",
  "westbury",
  "calne",
  "salisbury",
];

function getAllLocationPages(): string[] {
  const locationPages: string[] = [];

  // Get all location pages from serviceAreas
  Object.entries(serviceAreas).forEach(([countyKey, county]) => {
    county.mainTowns.forEach((town) => {
      const townSlug = town.toLowerCase().replace(/ /g, "-");

      // Add regular town page
      locationPages.push(`roofers-in-${townSlug}`);

      // Add special case for Wiltshire towns
      if (
        countyKey === "wiltshire" &&
        wiltshireSpecialTowns.includes(townSlug)
      ) {
        locationPages.push(`roofers-in-${townSlug}-wiltshire`);
      }
    });
  });

  // Add Oxford neighborhoods
  oxfordNeighborhoods.forEach((neighborhood) => {
    locationPages.push(`roofers-in-${neighborhood}-oxford`);
  });

  return locationPages;
}

function generateServiceLocationUrls(): string[] {
  const urls: string[] = [];

  // Generate URLs for each service in each location
  Object.values(serviceAreas).forEach((area) => {
    area.mainTowns.forEach((town) => {
      const locationSlug = town.toLowerCase().replace(/ /g, "-");
      services.forEach((service) => {
        urls.push(`${EXTERNAL_DATA_URL}/services/${service}/${locationSlug}`);
      });
    });
  });

  // Add service pages for Oxford neighborhoods
  oxfordNeighborhoods.forEach((neighborhood) => {
    services.forEach((service) => {
      urls.push(
        `${EXTERNAL_DATA_URL}/services/${service}/${neighborhood}-oxford`,
      );
    });
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
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/choosing-right-roofing-material</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/complete-guide-to-roof-maintenance</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/energy-efficient-roofing</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/new-roof-cost-guide</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/professional-roof-inspection-guide</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/signs-you-need-roof-replacement</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/slate-roofs-complete-guide</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/uk-weather-roofing-problems</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/ultimate-roof-ventilation-guide</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>

     <!-- Service Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}/services</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     ${services
       .map(
         (service) => `
     <url>
       <loc>${EXTERNAL_DATA_URL}/services/${service}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     `,
       )
       .join("")}

     <!-- Service Location Pages -->
     ${serviceLocationUrls
       .map(
         (url) => `
     <url>
       <loc>${url}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     `,
       )
       .join("")}

     <!-- Resources Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}/resources</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/resources/roofing-faq</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/resources/guides/slate-roofs</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>

     <!-- County Pages -->
     ${Object.entries(serviceAreas)
       .map(
         ([key, county]) => `
     <url>
       <loc>${EXTERNAL_DATA_URL}/county/${key}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     `,
       )
       .join("")}

     <!-- Major Cities -->
     ${Object.entries(serviceAreas)
       .map(([key, county]) => {
         const majorCities = county.mainTowns.filter((town) =>
           [
             "Oxford",
             "Reading",
             "Southampton",
             "Portsmouth",
             "Milton Keynes",
             "Swindon",
             "Gloucester",
           ].includes(town),
         );
         return majorCities
           .map(
             (city) => `
     <url>
       <loc>${EXTERNAL_DATA_URL}/locations/${city.toLowerCase().replace(/ /g, "-")}</loc>
       <lastmod>${currentDate}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
       `,
           )
           .join("");
       })
       .join("")}

     <!-- Location Pages -->
     ${locationPages
       .map(
         (page) => `
       <url>
           <loc>${EXTERNAL_DATA_URL}/${page}</loc>
           <lastmod>${currentDate}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.9</priority>
       </url>
     `,
       )
       .join("")}
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

  res.setHeader("Content-Type", "text/xml");
  // No caching - always generate fresh
  res.setHeader("Cache-Control", "no-store, must-revalidate");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
