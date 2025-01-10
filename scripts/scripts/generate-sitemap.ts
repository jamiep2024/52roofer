import { writeFileSync } from "fs";
import globby from "globby";
import prettier from "prettier";

async function generateSitemap() {
  const pages: string[] = await globby([
    "pages/**/*.{tsx,mdx}",
    "!pages/_*.tsx",
    "!pages/api",
    "!pages/404.tsx"
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace("pages", "")
            .replace(".tsx", "")
            .replace(".mdx", "")
            .replace("/index", "");
          return `
            <url>
              <loc>https://52roofer.com${path}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  const formatted = await prettier.format(sitemap, {
    parser: "html"
  });

  writeFileSync("52roofer/public/sitemap.xml", formatted, "utf8");
}

(async () => {
  try {
    await generateSitemap();
    console.log('Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
})();
