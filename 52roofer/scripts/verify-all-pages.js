import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PAGES_DIR = path.join(__dirname, "../pages");

// Helper function to check if a file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    return false;
  }
}

// Helper function to get all pages recursively
function getAllPages(dir) {
  let results = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip sitemaps directory and api directory
      if (item !== "sitemaps" && item !== "api") {
        results = results.concat(getAllPages(fullPath));
      }
    } else if (item.endsWith(".tsx") || item.endsWith(".js")) {
      // Skip dynamic route files and special Next.js files
      if (!item.startsWith("[") && !item.startsWith("_")) {
        results.push(fullPath);
      }
    }
  }

  return results;
}

// Check a single page for broken links
function checkPage(pagePath) {
  try {
    const content = fs.readFileSync(pagePath, "utf8");
    const internalLinks = content.match(/href=["']\/(.*?)["']/g) || [];
    const brokenLinks = [];

    for (const link of internalLinks) {
      const linkPath = link.match(/href=["']\/(.*?)["']/)[1];
      const segments = linkPath.split("/");

      // Skip dynamic routes and anchor links
      if (linkPath.includes("#") || segments.some((s) => s.startsWith("["))) {
        continue;
      }

      // Check if the linked page exists
      const possiblePaths = [
        path.join(PAGES_DIR, `${linkPath}.tsx`),
        path.join(PAGES_DIR, `${linkPath}.js`),
        path.join(PAGES_DIR, linkPath, "index.tsx"),
        path.join(PAGES_DIR, linkPath, "index.js"),
      ];

      if (!possiblePaths.some((p) => fileExists(p))) {
        brokenLinks.push(linkPath);
      }
    }

    return {
      file: pagePath.replace(PAGES_DIR, ""),
      status: brokenLinks.length > 0 ? "HAS_BROKEN_LINKS" : "OK",
      brokenLinks: brokenLinks.length > 0 ? brokenLinks : null,
    };
  } catch (err) {
    return {
      file: pagePath.replace(PAGES_DIR, ""),
      status: "ERROR",
      error: err.message,
    };
  }
}

// Get all sitemap URLs
function getSitemapUrls() {
  const urls = new Set();
  const sitemapsDir = path.join(PAGES_DIR, "sitemaps");

  if (fs.existsSync(sitemapsDir)) {
    const sitemaps = fs
      .readdirSync(sitemapsDir)
      .filter((file) => file.endsWith(".tsx") || file.endsWith(".js"));

    for (const sitemap of sitemaps) {
      const content = fs.readFileSync(path.join(sitemapsDir, sitemap), "utf8");
      const matches = content.match(/['"]\/[^'"]+['"]/g) || [];
      matches.forEach((match) => urls.add(match.replace(/['"]/g, "")));
    }
  }

  return urls;
}

// Main verification function
async function verifyAllPages() {
  console.log("Starting full site verification...");

  // Get all pages
  const pages = getAllPages(PAGES_DIR);
  console.log(`Found ${pages.length} pages to check`);

  // Get all sitemap URLs
  const sitemapUrls = getSitemapUrls();
  console.log(`Found ${sitemapUrls.size} URLs in sitemaps`);

  const results = {
    totalPages: pages.length,
    pagesInSitemap: sitemapUrls.size,
    pagesWithBrokenLinks: 0,
    pagesWithErrors: 0,
    missingFromSitemap: [],
    details: [],
  };

  // Check each page
  for (const page of pages) {
    const result = checkPage(page);

    // Convert file path to URL path
    const urlPath =
      "/" +
      result.file
        .replace(/\\/g, "/")
        .replace(/^\//, "")
        .replace(/\.(tsx|js)$/, "");

    // Check if page is in sitemap
    if (!sitemapUrls.has(urlPath)) {
      results.missingFromSitemap.push(urlPath);
    }

    // Count issues
    if (result.status === "HAS_BROKEN_LINKS") {
      results.pagesWithBrokenLinks++;
    } else if (result.status === "ERROR") {
      results.pagesWithErrors++;
    }

    results.details.push(result);

    // Log issues immediately
    if (result.status !== "OK") {
      console.log("\nIssue found:");
      console.log(JSON.stringify(result, null, 2));
    }
  }

  // Save results to file
  const reportPath = path.join(
    __dirname,
    "../full-site-verification-report.json",
  );
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  // Print summary
  console.log("\nVerification Summary:");
  console.log(`Total pages checked: ${results.totalPages}`);
  console.log(`Pages in sitemaps: ${results.pagesInSitemap}`);
  console.log(`Pages with broken links: ${results.pagesWithBrokenLinks}`);
  console.log(`Pages with errors: ${results.pagesWithErrors}`);
  console.log(
    `Pages missing from sitemaps: ${results.missingFromSitemap.length}`,
  );
  console.log(`\nDetailed report saved to: ${reportPath}`);
}

verifyAllPages().catch(console.error);
