import { readFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getAllPages(dir) {
  const pages = [];
  const files = readdirSync(dir);

  files.forEach((file) => {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules, .next, and other non-page directories
      if (
        ![
          "node_modules",
          ".next",
          "api",
          "components",
          "styles",
          "public",
          "scripts",
          "types",
          "utils",
          "config",
          "data",
        ].includes(file)
      ) {
        pages.push(...getAllPages(fullPath));
      }
    } else if (file.endsWith(".tsx") || file.endsWith(".js")) {
      if (!file.startsWith("_") && !file.includes("[")) {
        try {
          const content = readFileSync(fullPath, "utf8");

          // Convert file path to URL path
          let urlPath = fullPath
            .replace(process.cwd() + "/pages", "") // Remove pages directory
            .replace(/\.(tsx|js)$/, "") // Remove extension
            .replace("/index", ""); // Remove index

          // Check if the page has required components
          const hasLayout =
            content.includes("Layout") ||
            content.includes("ServiceLayout") ||
            content.includes("LocationLayout");
          const hasSEO =
            content.includes("SEO") || content.includes("AdvancedSEO");
          const hasSchema = content.includes("Schema");

          pages.push({
            path: urlPath,
            format: {
              hasLayout,
              hasSEO,
              hasSchema,
              issues: [],
            },
          });

          // Check for potential issues
          if (!hasLayout) {
            pages[pages.length - 1].format.issues.push(
              "Missing Layout component",
            );
          }
          if (!hasSEO) {
            pages[pages.length - 1].format.issues.push("Missing SEO component");
          }
          if (!hasSchema) {
            pages[pages.length - 1].format.issues.push(
              "Missing Schema component",
            );
          }
        } catch (error) {
          console.error(`Error processing ${fullPath}:`, error);
        }
      }
    }
  });

  return pages;
}

const pagesDir = join(process.cwd(), "pages");
const allPages = getAllPages(pagesDir);

console.log("Total pages found:", allPages.length);
console.log("\nPages with formatting issues:");
allPages.forEach((page) => {
  if (page.format.issues.length > 0) {
    console.log(`\n${page.path}:`);
    page.format.issues.forEach((issue) => console.log(`- ${issue}`));
  }
});

// Count pages by type
const pageTypes = {
  main: 0,
  blog: 0,
  service: 0,
  location: 0,
  oxfordNeighborhoods: 0,
  wiltshireSpecialTowns: 0,
  serviceLocation: 0,
  county: 0,
  resource: 0,
};

allPages.forEach((page) => {
  const path = page.path;
  if (path.startsWith("/blog/")) pageTypes.blog++;
  else if (path.startsWith("/services/")) pageTypes.service++;
  else if (path.startsWith("/county/")) pageTypes.county++;
  else if (path.startsWith("/resources/")) pageTypes.resource++;
  else if (path.startsWith("/roofers-in-")) {
    if (path.includes("-oxford")) pageTypes.oxfordNeighborhoods++;
    else if (path.includes("-wiltshire")) pageTypes.wiltshireSpecialTowns++;
    else pageTypes.location++;
  } else if (
    path === "/" ||
    path === "/about" ||
    path === "/contact" ||
    path === "/find-roofer"
  )
    pageTypes.main++;
});

console.log("\nPage count by type:");
Object.entries(pageTypes).forEach(([type, count]) => {
  console.log(`${type}: ${count}`);
});
