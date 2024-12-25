cat > (scripts / generate - sitemap.ts) << "EOL";
import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";
import path from "path";

async function generateSitemap(): Promise<void> {
  try {
    const prettierConfig = await prettier.resolveConfig("./.prettierrc");
    const pages = await globby([
      "pages/**/*.tsx",
      "pages/**/*.ts",
      "pages/**/*.js",
      "pages/**/*.jsx",
      "!pages/_*.tsx",
      "!pages/_*.ts",
      "!pages/api",
      "!pages/404.tsx",
    ]);

    const siteUrl = "https://52roofer.com";

    const staticPages = pages.map((page) => {
      const path = page
        .replace("pages", "")
        .replace(/\.(tsx|ts|jsx|js)$/, "")
        .replace(/\/index$/, "");
      return path === "/index" ? "" : path;
    });

    // Add dynamic routes here if needed
    const dynamicRoutes = [
      "/services/residential-roofing",
      "/services/commercial-roofing",
      "/services/roof-maintenance",
      "/services/emergency-roof-repairs",
      "/locations",
      "/blog",
    ];

    const allRoutes = [...staticPages, ...dynamicRoutes];

    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allRoutes
          .map((route) => {
            return `
              <url>
                <loc>${`${siteUrl}${route}`}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>daily</changefreq>
                <priority>${route === "" ? "1.0" : "0.7"}</priority>
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

    // Ensure the public directory exists
    const publicDir = path.join(process.cwd(), "public");
    writeFileSync(path.join(publicDir, "sitemap.xml"), formatted);
    console.log("✅ Sitemap generated successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
  }
}

generateSitemap().catch(console.error);
EOL;
