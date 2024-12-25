const fs = require("fs");
const path = require("path");

// Function to get all page files
function getAllPages(dir, baseDir = dir) {
  let pages = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!item.startsWith("_") && item !== "api") {
        pages = pages.concat(getAllPages(fullPath, baseDir));
      }
    } else if (
      item.endsWith(".tsx") &&
      !item.startsWith("_") &&
      !item.startsWith("sitemap")
    ) {
      pages.push(fullPath);
    }
  }

  return pages;
}

// Function to extract links from a file
function extractLinks(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const links = new Set();

  // Match Next.js Link components
  const linkMatches = content.match(/Link\s+href=["']([^"']+)["']/g) || [];
  linkMatches.forEach((match) => {
    const href = match.match(/href=["']([^"']+)["']/)[1];
    if (href.startsWith("/") || !href.includes("://")) {
      links.add(href.replace(/^\//, ""));
    }
  });

  // Match regular anchor tags
  const anchorMatches = content.match(/<a\s+href=["']([^"']+)["']/g) || [];
  anchorMatches.forEach((match) => {
    const href = match.match(/href=["']([^"']+)["']/)[1];
    if (href.startsWith("/") || !href.includes("://")) {
      links.add(href.replace(/^\//, ""));
    }
  });

  return Array.from(links);
}

// Function to normalize page paths for comparison
function normalizePath(pagePath) {
  return pagePath
    .replace(/^pages\//, "")
    .replace(/\.tsx$/, "")
    .replace(/\/index$/, "")
    .replace(/\[.*\]/, "*");
}

// Main analysis function
function analyzeInternalLinks() {
  console.log("Analyzing internal links...\n");

  const pagesDir = path.join(process.cwd(), "pages");
  const pageFiles = getAllPages(pagesDir);

  // Create a map of pages and their outbound links
  const linkMap = new Map();
  const inboundLinks = new Map();

  // Initialize inbound links map
  pageFiles.forEach((file) => {
    const normalizedPath = normalizePath(path.relative(pagesDir, file));
    inboundLinks.set(normalizedPath, new Set());
  });

  // Process each page
  pageFiles.forEach((file) => {
    const normalizedPath = normalizePath(path.relative(pagesDir, file));
    const links = extractLinks(file);
    linkMap.set(normalizedPath, links);

    // Record inbound links
    links.forEach((link) => {
      if (inboundLinks.has(link)) {
        inboundLinks.get(link).add(normalizedPath);
      }
    });
  });

  // Print analysis
  console.log("Internal Linking Analysis:\n");

  // Pages with no outbound links
  console.log("Pages with no outbound links:");
  linkMap.forEach((links, page) => {
    if (links.length === 0) {
      console.log(`- ${page}`);
    }
  });

  // Pages with no inbound links
  console.log("\nPages with no inbound links:");
  inboundLinks.forEach((links, page) => {
    if (links.size === 0) {
      console.log(`- ${page}`);
    }
  });

  // Print link count statistics
  console.log("\nLink count per page:");
  linkMap.forEach((links, page) => {
    const inbound = inboundLinks.get(page)?.size || 0;
    console.log(`${page}:`);
    console.log(`  Outbound links: ${links.length}`);
    console.log(`  Inbound links: ${inbound}`);
  });

  // Identify potential navigation gaps
  console.log("\nPotential navigation improvements:");

  // Check if location pages link to their parent county
  const locationPages = Array.from(linkMap.keys()).filter((page) =>
    page.startsWith("locations/"),
  );
  locationPages.forEach((page) => {
    const county = page.split("/")[1];
    if (county && !linkMap.get(page).includes(`county/${county}`)) {
      console.log(
        `- ${page} should link to its county page (county/${county})`,
      );
    }
  });

  // Check if service pages link to related blog posts
  const servicePages = Array.from(linkMap.keys()).filter((page) =>
    page.startsWith("services/"),
  );
  const blogPosts = Array.from(linkMap.keys()).filter((page) =>
    page.startsWith("blog/"),
  );
  servicePages.forEach((servicePage) => {
    const serviceType = servicePage.split("/")[1];
    const relatedPosts = blogPosts.filter((post) => post.includes(serviceType));
    if (relatedPosts.length > 0) {
      const links = linkMap.get(servicePage);
      relatedPosts.forEach((post) => {
        if (!links.includes(post)) {
          console.log(
            `- ${servicePage} could link to related blog post: ${post}`,
          );
        }
      });
    }
  });

  // Check if location-specific pages link to their main location
  const rooferPages = Array.from(linkMap.keys()).filter((page) =>
    page.startsWith("roofers-in-"),
  );
  rooferPages.forEach((page) => {
    const location = page.match(/roofers-in-(.*)/)[1];
    const mainLocation = `locations/${location}`;
    if (!linkMap.get(page).includes(mainLocation)) {
      console.log(
        `- ${page} should link to its main location page (${mainLocation})`,
      );
    }
  });
}

analyzeInternalLinks();
