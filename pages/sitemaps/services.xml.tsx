import { GetServerSideProps } from "next";

const DOMAIN = "https://52roofer.com";

const ServicesSitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Only include working service pages (18 total)
  const services = [
    "advanced-roofing",
    "apex-roofing",
    "commercial-roofing",
    "residential-roofing",
    "roof-inspection",
    "roof-installation",
    "roof-maintenance",
    "roof-replacement",
    "roof-ventilation",
    "roofing-companies-near-me",
    "roofing-construction",
    "roofing-contractors",
    "roofing-firms-near-me",
    "roofers-near-me",
    "skylight-installation",
    "voice-roof-installation",
    "voice-roof-repairs",
    "voice-roofing-services",
  ].sort(); // Sort alphabetically for better organization

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${services
        .map(
          (service) => `
        <url>
          <loc>${DOMAIN}/services/${service}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.9</priority>
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

export default ServicesSitemap;
