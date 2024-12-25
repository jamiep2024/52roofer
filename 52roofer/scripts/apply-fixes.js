const fs = require("fs");
const path = require("path");

// Read the fixes file
const fixes = JSON.parse(fs.readFileSync("site-fixes.json", "utf8"));

console.log("Starting to apply fixes...");
console.log(`Total pages to process: ${fixes.pages.length}`);

// Create a directory for the fixed files
const outputDir = "fixed-pages";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fixes.pages.forEach((page, index) => {
  const { url, fixes: pageFixes } = page;

  // Convert URL to filepath
  const urlPath = new URL(url).pathname;
  const filepath = path.join(outputDir, `${urlPath.replace(/\//g, "_")}.html`);

  // Generate the HTML fixes
  let fixedContent = `<!-- Fixed content for ${url} -->\n`;

  // Add meta description if needed
  if (pageFixes.addMetaDescription) {
    fixedContent += `<meta name="description" content="${pageFixes.addMetaDescription}">\n`;
  }

  // Add canonical if needed
  if (pageFixes.addCanonical) {
    fixedContent += `<link rel="canonical" href="${pageFixes.addCanonical}">\n`;
  }

  // Add schema if needed
  if (pageFixes.addSchema) {
    fixedContent += `<script type="application/ld+json">\n${pageFixes.addSchema}\n</script>\n`;
  }

  // Save the fixes
  fs.writeFileSync(filepath, fixedContent);

  // Log progress
  if ((index + 1) % 50 === 0) {
    console.log(`Processed ${index + 1} pages`);
  }
});

console.log("\nAll fixes have been generated!");
console.log(`Fixed files can be found in the '${outputDir}' directory`);
