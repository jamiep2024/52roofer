const fs = require("fs");
const path = require("path");

// Configuration with current date/time
const CONFIG = {
  currentDateTime: "2024-12-24 23:32:32",
  userLogin: "jamiep2024",
  NEXT_PAGES_DIR: "pages",
  FIXED_PAGES_DIR: "fixed-pages",
  BACKUP_DIR: "pages-backup",
};

console.log(`Starting implementation at: ${CONFIG.currentDateTime}`);
console.log(`User: ${CONFIG.userLogin}`);

// Create backup directory
if (!fs.existsSync(CONFIG.BACKUP_DIR)) {
  fs.mkdirSync(CONFIG.BACKUP_DIR, { recursive: true });
  console.log(`Created backup directory: ${CONFIG.BACKUP_DIR}`);
}

// Ensure fixed-pages directory exists
if (!fs.existsSync(CONFIG.FIXED_PAGES_DIR)) {
  console.error("Error: fixed-pages directory not found!");
  process.exit(1);
}

// Backup existing pages
console.log("\nCreating backup of current pages...");
fs.cpSync(CONFIG.NEXT_PAGES_DIR, CONFIG.BACKUP_DIR, { recursive: true });
console.log("Backup completed successfully");

// Read all fixed files
const fixedFiles = fs.readdirSync(CONFIG.FIXED_PAGES_DIR);
let implementedCount = 0;
let errorCount = 0;

console.log(`\nFound ${fixedFiles.length} files to process`);

fixedFiles.forEach((file, index) => {
  try {
    // Read the fixes
    const fixes = fs.readFileSync(
      path.join(CONFIG.FIXED_PAGES_DIR, file),
      "utf8",
    );

    // Convert filename back to route path
    const routePath = file
      .replace(".html", "")
      .replace(/_/g, "/")
      .replace(/^index$/, "");

    // Determine the Next.js page file path
    const pageFilePath = path.join(CONFIG.NEXT_PAGES_DIR, `${routePath}.tsx`);
    const jsPageFilePath = path.join(CONFIG.NEXT_PAGES_DIR, `${routePath}.js`);

    // Check for both .tsx and .js files
    const existingFilePath = fs.existsSync(pageFilePath)
      ? pageFilePath
      : fs.existsSync(jsPageFilePath)
        ? jsPageFilePath
        : null;

    if (existingFilePath) {
      // Read existing page content
      let pageContent = fs.readFileSync(existingFilePath, "utf8");

      // Extract fixes
      const metaMatch = fixes.match(
        /<meta name="description" content="([^"]+)">/,
      );
      const canonicalMatch = fixes.match(
        /<link rel="canonical" href="([^"]+)">/,
      );
      const schemaMatch = fixes.match(
        /<script type="application\/ld\+json">\n([\s\S]+?)\n<\/script>/,
      );

      // Update Head section
      if (!pageContent.includes("import Head")) {
        pageContent = `import Head from 'next/head'\n${pageContent}`;
      }

      if (!pageContent.includes("<Head>")) {
        pageContent = pageContent.replace(
          /return\s*\(/,
          "return (\n<>\n<Head>",
        );
        pageContent = pageContent.replace(
          /(<\/[^>]+>)\s*$/,
          "</Head>\n$1\n</>",
        );
      }

      // Remove existing meta tags to avoid duplicates
      pageContent = pageContent.replace(/<meta name="description"[^>]+>/g, "");
      pageContent = pageContent.replace(/<link rel="canonical"[^>]+>/g, "");
      pageContent = pageContent.replace(
        /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
        "",
      );

      // Insert new meta tags
      let headContent = "";
      if (metaMatch) {
        headContent += `\n        <meta name="description" content="${metaMatch[1]}" />`;
      }
      if (canonicalMatch) {
        headContent += `\n        <link rel="canonical" href="${canonicalMatch[1]}" />`;
      }
      if (schemaMatch) {
        headContent += `\n        <script type="application/ld+json">\n        ${schemaMatch[1]}\n        </script>`;
      }

      // Add the head content
      pageContent = pageContent.replace(
        /<\/Head>/,
        `${headContent}\n      </Head>`,
      );

      // Save the updated page
      fs.writeFileSync(existingFilePath, pageContent);
      implementedCount++;

      // Log progress
      if ((index + 1) % 50 === 0 || index === fixedFiles.length - 1) {
        console.log(
          `Progress: ${Math.round(((index + 1) / fixedFiles.length) * 100)}% (${index + 1}/${fixedFiles.length})`,
        );
      }
    } else {
      console.log(`Warning: No matching page file found for ${routePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
});

// Final report
console.log("\nImplementation Summary:");
console.log("---------------------");
console.log(`Total files processed: ${fixedFiles.length}`);
console.log(`Successfully updated: ${implementedCount}`);
console.log(`Errors encountered: ${errorCount}`);
console.log(`Backup location: ${CONFIG.BACKUP_DIR}`);
console.log(`Completed at: ${new Date().toISOString()}`);
