import { promises as fs } from 'fs';
import { resolve } from 'path';
import { globby } from 'globby';
import * as prettier from 'prettier';

export async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "pages/**/*.tsx",
    "pages/**/*.ts",
    "pages/**/*.js",
    "!pages/_*.tsx",
    "!pages/api",
    "!pages/404.tsx",
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page: string) => {
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

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  await fs.writeFile(resolve("public/sitemap.xml"), formatted);
}

export default { generateSitemap };
