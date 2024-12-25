const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Function to extract links from a file
function extractLinks(content) {
  const links = [];

  // Match href and src attributes
  const hrefMatches = content.match(/href=["'](\/[^"']+)["']/g) || [];
  const srcMatches = content.match(/src=["'](\/[^"']+)["']/g) || [];

  // Extract paths from matches
  hrefMatches.forEach((match) => {
    const link = match.match(/href=["'](\/[^"']+)["']/)[1];
    links.push(link);
  });

  srcMatches.forEach((match) => {
    const link = match.match(/src=["'](\/[^"']+)["']/)[1];
    links.push(link);
  });

  return links;
}

// Function to check if a path exists in pages directory
function checkPath(link) {
  const pagesDir = path.join(__dirname, "../pages");
  const publicDir = path.join(__dirname, "../public");

  // Remove query parameters and hash
  const cleanLink = link.split("?")[0].split("#")[0];

  // Check if it's a file in public directory
  if (fs.existsSync(path.join(publicDir, cleanLink))) {
    return true;
  }

  // Convert link to potential file paths
  const possiblePaths = [
    path.join(pagesDir, `${cleanLink}.tsx`),
    path.join(pagesDir, `${cleanLink}/index.tsx`),
    path.join(pagesDir, cleanLink.replace(/\/$/, ".tsx")),
  ];

  return possiblePaths.some((p) => fs.existsSync(p));
}

// Main function to check all links
function checkAllLinks() {
  const pagesDir = path.join(__dirname, "../pages");
  const files = glob.sync("**/*.tsx", { cwd: pagesDir });
  const brokenLinks = [];

  files.forEach((file) => {
    const content = fs.readFileSync(path.join(pagesDir, file), "utf8");
    const links = extractLinks(content);

    links.forEach((link) => {
      if (!checkPath(link)) {
        brokenLinks.push({ file, link });
      }
    });
  });

  return brokenLinks;
}

// Run the check
const brokenLinks = checkAllLinks();
console.log("Broken Links Found:");
console.log(JSON.stringify(brokenLinks, null, 2));
