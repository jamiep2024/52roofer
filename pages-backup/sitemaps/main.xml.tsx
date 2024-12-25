import { GetServerSideProps } from "next";

const DOMAIN = "https://52roofer.com";

const MainSitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Main pages
  const urls = [
    "", // homepage
    "/about",
    "/contact",
    "/find-roofer",
    "/services", // services index
    "/locations", // locations index
    "/blog", // blog index
    "/resources", // resources index
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${DOMAIN}${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>${url === "" ? "1.0" : "0.8"}</priority>
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

export default MainSitemap;
