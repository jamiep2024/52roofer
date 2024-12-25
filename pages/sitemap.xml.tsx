import { GetServerSideProps } from "next";

const DOMAIN = "https://52roofer.co.uk";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemaps = [
    `${DOMAIN}/sitemaps/main.xml`,
    `${DOMAIN}/sitemaps/counties.xml`,
    `${DOMAIN}/sitemaps/locations.xml`,
    `${DOMAIN}/sitemaps/services.xml`,
    `${DOMAIN}/sitemaps/blog.xml`,
    `${DOMAIN}/sitemaps/resources.xml`,
    `${DOMAIN}/sitemaps/combinations.xml`,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemaps
        .map(
          (url) => `
        <sitemap>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </sitemap>
      `,
        )
        .join("")}
    </sitemapindex>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
