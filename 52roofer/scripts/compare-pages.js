const fs = require("fs");
const path = require("path");
const { parseString } = require("xml2js");

// Function to get all page files
function getPageFiles(dir, baseDir = dir) {
  let pages = [];
  console.log(`Scanning directory: ${dir}`);

  try {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (!item.startsWith("_") && item !== "api") {
          pages = pages.concat(getPageFiles(fullPath, baseDir));
        }
      } else if (
        item.endsWith(".tsx") &&
        !item.startsWith("_") &&
        !item.startsWith("sitemap")
      ) {
        // Convert file path to URL path
        const relativePath = path.relative(baseDir, fullPath);
        let urlPath = relativePath
          .replace(/\.tsx$/, "")
          .replace(/\/index$/, "")
          .replace(/\\/g, "/");

        // Skip dynamic route files
        if (urlPath.includes("[") && urlPath.includes("]")) {
          console.log(`Skipping dynamic route: ${urlPath}`);
          continue;
        }

        console.log(`Found page: ${urlPath}`);
        pages.push(urlPath);
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error);
  }

  return pages;
}

// Function to extract URLs from sitemap
function getSitemapUrls(xmlContent) {
  return new Promise((resolve, reject) => {
    console.log("Parsing sitemap XML...");
    parseString(xmlContent, (err, result) => {
      if (err) {
        console.error("Error parsing sitemap XML:", err);
        reject(err);
        return;
      }

      try {
        const urls = result.urlset.url.map((url) => {
          const fullUrl = url.loc[0];
          const cleanUrl = fullUrl.replace("https://52roofer.com/", "");
          console.log(`Found sitemap URL: ${cleanUrl}`);
          return cleanUrl;
        });

        resolve(urls);
      } catch (error) {
        console.error("Error processing sitemap URLs:", error);
        reject(error);
      }
    });
  });
}

async function comparePages() {
  try {
    console.log("Starting page comparison...\n");

    // Get pages from filesystem
    const pagesDir = path.join(process.cwd(), "pages");
    console.log(`Reading pages from: ${pagesDir}`);
    const pageFiles = getPageFiles(pagesDir);
    console.log("\nPages found in filesystem:", pageFiles.length);
    console.log("Filesystem pages:");
    pageFiles.sort().forEach((page) => console.log(`- ${page}`));

    // Get URLs from sitemap
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    console.log(`\nReading sitemap from: ${sitemapPath}`);
    const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
    const sitemapUrls = await getSitemapUrls(sitemapContent);
    console.log("\nURLs found in sitemap:", sitemapUrls.length);
    console.log("Sitemap URLs:");
    sitemapUrls.sort().forEach((url) => console.log(`- ${url}`));

    // Find pages that are in filesystem but not in sitemap
    const missingFromSitemap = pageFiles.filter(
      (page) => !sitemapUrls.includes(page),
    );
    console.log(
      "\nPages in filesystem but not in sitemap:",
      missingFromSitemap.length,
    );
    missingFromSitemap.sort().forEach((page) => console.log(`- ${page}`));

    // Find URLs that are in sitemap but not in filesystem
    const missingFromFiles = sitemapUrls.filter(
      (url) => !pageFiles.includes(url),
    );
    console.log(
      "\nURLs in sitemap but not in filesystem:",
      missingFromFiles.length,
    );
    missingFromFiles.sort().forEach((url) => console.log(`- ${url}`));

    console.log("\nSummary:");
    console.log(`Total filesystem pages: ${pageFiles.length}`);
    console.log(`Total sitemap URLs: ${sitemapUrls.length}`);
    console.log(`Missing from sitemap: ${missingFromSitemap.length}`);
    console.log(`Missing from filesystem: ${missingFromFiles.length}`);
  } catch (error) {
    console.error("Error during comparison:", error);
  }
}

// Install xml2js if not already installed
try {
  require("xml2js");
} catch (e) {
  console.log("Installing xml2js...");
  require("child_process").execSync("npm install xml2js");
}

comparePages().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
