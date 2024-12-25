import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function standardizePage(content, type) {
  // Check if imports are present
  const hasLayoutImport = content.includes("import Layout");
  const hasSEOImport = content.includes("import SEO");
  const hasSchemaImport = content.includes("import Schema");

  let standardizedContent = content;

  // Add imports if missing
  if (!hasLayoutImport) {
    standardizedContent = `import Layout from '../components/layout/Layout';\n${standardizedContent}`;
  }
  if (!hasSEOImport) {
    standardizedContent = `import SEO from '../components/seo/SEO';\n${standardizedContent}`;
  }
  if (!hasSchemaImport && (type === "service" || type === "location")) {
    standardizedContent = `import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';\n${standardizedContent}`;
  }

  // Add components if missing
  if (!content.includes("<Layout")) {
    standardizedContent = standardizedContent
      .replace("return (", "return (\n<Layout>")
      .replace(/(\s*)\)\s*;\s*\n*\s*}\s*$/, "\n</Layout>$1);\n}");
  }

  if (!content.includes("<SEO")) {
    standardizedContent = standardizedContent.replace(
      "<Layout>",
      '<Layout>\n<SEO title="" description="" />',
    );
  }

  if (
    !content.includes("Schema") &&
    (type === "service" || type === "location")
  ) {
    standardizedContent = standardizedContent.replace(
      "<Layout>",
      "<Layout>\n<LocalBusinessSchema />",
    );
  }

  return standardizedContent;
}

function getAllFiles(dir) {
  const files = [];
  const entries = readdirSync(dir);

  entries.forEach((entry) => {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip non-page directories
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
        ].includes(entry)
      ) {
        files.push(...getAllFiles(fullPath));
      }
    } else if (entry.endsWith(".tsx") || entry.endsWith(".js")) {
      if (!entry.startsWith("_") && !entry.includes("[")) {
        files.push(fullPath);
      }
    }
  });

  return files;
}

function getPageType(filePath) {
  if (filePath.includes("/services/")) return "service";
  if (filePath.includes("/blog/")) return "blog";
  if (filePath.includes("roofers-in-") || filePath.includes("/locations/"))
    return "location";
  return "other";
}

const pagesDir = join(process.cwd(), "pages");
const files = getAllFiles(pagesDir);
let standardizedCount = 0;

files.forEach((file) => {
  try {
    const content = readFileSync(file, "utf8");
    const type = getPageType(file);
    const standardizedContent = standardizePage(content, type);

    if (content !== standardizedContent) {
      writeFileSync(file, standardizedContent);
      standardizedCount++;
      console.log(`Standardized: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
});

console.log(`\nStandardization complete. ${standardizedCount} files updated.`);
