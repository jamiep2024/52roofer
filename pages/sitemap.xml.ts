import { GetServerSideProps } from "next";
import { serviceAreas } from "../data/serviceAreas";

const EXTERNAL_DATA_URL = "https://52roofer.com";

function generateSiteMap(urls: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${urls
       .map((url) => {
         return `
       <url>
           <loc>${url}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function generateAllUrls() {
  return Object.keys(serviceAreas).map((area) => `${EXTERNAL_DATA_URL}/${area}`);
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const urls = generateAllUrls();
    console.log("Generated URLs:", urls);

    res.setHeader("Content-Type", "text/xml");
    res.write(generateSiteMap(urls));
    res.end();
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }

  return {
    props: {},
  };
};

export default function SiteMap() {
  return null;
}
