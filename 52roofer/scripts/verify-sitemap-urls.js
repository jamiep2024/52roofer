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

// Convert URL path to file path
function urlToFilePath(urlPath) {
  // Remove trailing slashes and add .tsx extension
  const relativePath = urlPath.replace(/^\//, "").replace(/\/$/, "");

  // Skip empty paths or paths that are just directory names
  if (
    !relativePath ||
    relativePath === "locations" ||
    relativePath === "county"
  ) {
    return null;
  }

  // Handle index routes
  if (relativePath === "") return path.join(PAGES_DIR, "index.tsx");

  // Handle dynamic routes
  if (relativePath.includes("[") && relativePath.includes("]")) {
    return path.join(PAGES_DIR, `${relativePath}.tsx`);
  }

  // Check both .tsx and .js extensions
  const tsxPath = path.join(PAGES_DIR, `${relativePath}.tsx`);
  const jsPath = path.join(PAGES_DIR, `${relativePath}.js`);

  if (fileExists(tsxPath)) return tsxPath;
  if (fileExists(jsPath)) return jsPath;

  return null;
}

// Check a single URL
async function checkUrl(url) {
  const filePath = urlToFilePath(url);

  if (!filePath) {
    return {
      url,
      status: "404",
      error: "File not found",
      file: null,
    };
  }

  if (!fileExists(filePath)) {
    return {
      url,
      status: "404",
      error: "File does not exist",
      file: filePath,
    };
  }

  // Read file content to check for internal links
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const internalLinks = content.match(/href=["']\/(.*?)["']/g) || [];
    const brokenLinks = [];

    for (const link of internalLinks) {
      const linkPath = link.match(/href=["']\/(.*?)["']/)[1];
      const linkFilePath = urlToFilePath("/" + linkPath);

      if (!linkFilePath || !fileExists(linkFilePath)) {
        brokenLinks.push(linkPath);
      }
    }

    return {
      url,
      status: "OK",
      file: filePath,
      brokenLinks: brokenLinks.length > 0 ? brokenLinks : null,
    };
  } catch (err) {
    return {
      url,
      status: "ERROR",
      error: err.message,
      file: filePath,
    };
  }
}

// Main function to check all sitemaps
async function verifySitemaps() {
  const sitemaps = [
    "blog.xml.tsx",
    "services.xml.tsx",
    "resources.xml.tsx",
    "locations.xml.tsx",
  ];

  const results = {
    total: 0,
    ok: 0,
    errors: 0,
    details: {},
  };

  for (const sitemap of sitemaps) {
    const sitemapPath = path.join(PAGES_DIR, "sitemaps", sitemap);

    try {
      const content = fs.readFileSync(sitemapPath, "utf8");
      // Extract paths from the sitemap content
      const paths =
        content
          .match(/['"]\/[^'"]+['"]/g)
          ?.map((path) => path.replace(/['"]/g, ""))
          .filter((path) => {
            // Filter out paths that are just directory names
            const segments = path.split("/").filter(Boolean);
            return (
              segments.length > 1 ||
              (segments.length === 1 &&
                segments[0] !== "locations" &&
                segments[0] !== "county")
            );
          }) || [];

      console.log(`\nChecking ${sitemap}...`);
      results.details[sitemap] = [];

      for (const url of paths) {
        const result = await checkUrl(url);
        results.total++;

        if (result.status === "OK") {
          results.ok++;
        } else {
          results.errors++;
          console.log(`\nIssue found in ${sitemap}:`);
          console.log(JSON.stringify(result, null, 2));
        }

        results.details[sitemap].push(result);
      }
    } catch (err) {
      console.error(`Error processing ${sitemap}:`, err);
    }
  }

  // Save results to a file
  const reportPath = path.join(
    __dirname,
    "../sitemap-verification-report.json",
  );
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  console.log("\nVerification Summary:");
  console.log(`Total URLs checked: ${results.total}`);
  console.log(`OK: ${results.ok}`);
  console.log(`Errors: ${results.errors}`);
  console.log(`\nDetailed report saved to: ${reportPath}`);
}

verifySitemaps().catch(console.error);
