import { GetServerSideProps } from "next";

const DOMAIN = "https://52roofer.com";

const ResourcesSitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Resource pages (2 total)
  const resources = ["index", "roofing-faq"].sort(); // Sort alphabetically for better organization

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${resources
        .map(
          (resource) => `
        <url>
          <loc>${DOMAIN}/resources${resource === "index" ? "" : "/" + resource}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.6</priority>
        </url>
      `,
        )
        .join("")}
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default ResourcesSitemap;
