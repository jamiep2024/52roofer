// scripts/generate-sitemap.ts
import globby from "globby";
import prettier from "prettier";

async function generate(): Promise<string> {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "pages/**/*.{tsx,ts,js}",
    "pages/**/\\[*\\]*.{tsx,ts,js}", // Include dynamic routes
    "!pages/_*.tsx",
    "!pages/api",
    "!pages/404.tsx",
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace("pages", "")
            .replace(".tsx", "")
            .replace(".ts", "")
            .replace(".js", "")
            .replace("/index", "");
          return `
            <url>
              <loc>${`https://52roofer.com${path}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  return formatted;
}

export default generate;
