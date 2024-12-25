const fs = require("fs");
const path = require("path");

const outputDir = "fixed-pages";

console.log("Verifying fixes...");

// Read all fixed files
const files = fs.readdirSync(outputDir);

const stats = {
  total: files.length,
  withMeta: 0,
  withCanonical: 0,
  withSchema: 0,
};

files.forEach((file) => {
  const content = fs.readFileSync(path.join(outputDir, file), "utf8");

  if (content.includes('<meta name="description"')) stats.withMeta++;
  if (content.includes('<link rel="canonical"')) stats.withCanonical++;
  if (content.includes('<script type="application/ld+json"'))
    stats.withSchema++;
});

console.log("\nVerification Results:");
console.log("--------------------");
console.log(`Total files processed: ${stats.total}`);
console.log(`Files with meta description: ${stats.withMeta}`);
console.log(`Files with canonical tag: ${stats.withCanonical}`);
console.log(`Files with schema markup: ${stats.withSchema}`);
