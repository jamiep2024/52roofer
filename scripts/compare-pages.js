const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

async function main() {
  // Read sitemap if it exists
  const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
  if (!fs.existsSync(sitemapPath)) {
    console.log("No sitemap.xml found in public directory");
    return;
  }

  // Read pages directory
  const pagesDir = path.join(process.cwd(), "pages");
  if (!fs.existsSync(pagesDir)) {
    console.log("No pages directory found");
    return;
  }

  // Parse sitemap
  const sitemapXml = fs.readFileSync(sitemapPath, "utf8");
  const parser = new xml2js.Parser();

  try {
    const result = await parser.parseStringPromise(sitemapXml);
    const sitemapUrls = new Set(
      result.urlset.url.map((u) => {
        const url = new URL(u.loc[0]);
        return url.pathname;
      }),
    );

    // Get all page files
    const pageFiles = getAllFiles(pagesDir);
    const pageRoutes = pageFiles.map((file) => {
      return filePathToRoute(file, pagesDir);
    });

    // Compare
    console.log("Pages not in sitemap:");
    pageRoutes.forEach((route) => {
      if (!sitemapUrls.has(route)) {
        console.log(route);
      }
    });

    console.log("\nSitemap URLs not matching pages:");
    sitemapUrls.forEach((url) => {
      if (!pageRoutes.includes(url)) {
        console.log(url);
      }
    });
  } catch (error) {
    console.error("Error comparing pages:", error);
  }
}

function getAllFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (
      item.endsWith(".tsx") ||
      item.endsWith(".ts") ||
      item.endsWith(".js")
    ) {
      files.push(fullPath);
    }
  });

  return files;
}

function filePathToRoute(filePath, pagesDir) {
  const relativePath = path.relative(pagesDir, filePath);
  return (
    "/" +
    relativePath
      .replace(/\.[^/.]+$/, "") // Remove extension
      .replace(/\/index$/, "") // Remove index
      .replace(/\[([^\]]+)\]/g, ":$1")
  ); // Convert [param] to :param
}

main().catch(console.error);
