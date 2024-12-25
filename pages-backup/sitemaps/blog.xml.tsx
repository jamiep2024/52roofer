import { GetServerSideProps } from "next";

const DOMAIN = "https://52roofer.com";

const BlogSitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Blog pages (8 total)
  const blogPosts = [
    "choosing-right-roofing-material",
    "complete-guide-to-roof-maintenance",
    "energy-efficient-roofing",
    "new-roof-cost-guide",
    "professional-roof-inspection-guide",
    "signs-you-need-roof-replacement",
    "uk-weather-roofing-problems",
    "ultimate-roof-ventilation-guide",
  ].sort(); // Sort alphabetically for better organization

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${blogPosts
        .map(
          (post) => `
        <url>
          <loc>${DOMAIN}/blog/${post}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
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

export default BlogSitemap;
