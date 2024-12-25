import { GetServerSideProps } from "next";

const DOMAIN = "https://52roofer.co.uk";

const CountiesSitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // County pages (8 total)
  const counties = [
    "berkshire",
    "buckinghamshire",
    "gloucestershire",
    "hampshire",
    "oxfordshire",
    "surrey",
    "west-sussex",
    "wiltshire",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${counties
        .map(
          (county) => `
        <url>
          <loc>${DOMAIN}/county/${county}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
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

export default CountiesSitemap;
