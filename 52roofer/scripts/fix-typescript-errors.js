import { promises as fs } from "fs";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { sync as globSync } from "glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fixLocationPage(filePath) {
  let content = await fs.readFile(filePath, "utf8");

  // Get location name from file path
  const fileName = path.basename(filePath, ".tsx");
  const location = fileName.replace("roofers-in-", "").replace(/-/g, " ");
  const title = `Expert Roofers in ${location} | Emergency Repairs & Installation`;
  const description = `Looking for trusted roofers in ${location}? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving the area.`;

  // Remove duplicate LocalBusinessSchema import if exists
  const imports = content.match(/import.*LocalBusinessSchema.*\r?\n/g) || [];
  if (imports.length > 1) {
    // Keep first occurrence, remove others
    const firstImport = imports[0];
    content = content.replace(/import.*LocalBusinessSchema.*\r?\n/g, "");
    content = firstImport + content;
  }

  // Fix SEO component props
  content = content.replace(
    /<SEO\s+title="[^"]*"\s+description="[^"]*"\s*\/>/,
    `<SEO title="${title}" description="${description}" />`,
  );

  // Fix Layout structure more carefully
  if (!content.includes("</Layout>")) {
    content = content.replace(
      /return\s*\(\s*(<SEO[\s\S]*?\/>)\s*/,
      "return (\n    <Layout>\n      $1\n",
    );
    content = content.replace(/(\s*)\}\s*$/m, "$1    </Layout>\n$1  );\n}\n");
  }

  // Fix JSON-LD script formatting if needed
  if (content.includes('<script type="application/ld+json">')) {
    content = content.replace(
      /(<script type="application\/ld\+json">)\s*\{/g,
      "$1 dangerouslySetInnerHTML={{ __html: `{",
    );
    content = content.replace(/\}(\s*<\/script>)/g, "}`}} />");
  }

  // Ensure export statement ends with semicolon
  if (!content.endsWith(";\n")) {
    content += ";\n";
  }

  await fs.writeFile(filePath, content, "utf8");
}

async function fixServicePage(filePath) {
  let content = await fs.readFile(filePath, "utf8");
  const ext = path.extname(filePath);

  // Fix Layout structure
  if (!content.includes("</Layout>")) {
    content = content.replace(
      /return\s*\(\s*/,
      "return (\n    <Layout>\n      ",
    );
    content = content.replace(/(\s*)\}\s*$/m, "$1    </Layout>\n$1  );\n}\n");
  }

  // Ensure export statement ends with semicolon
  if (!content.endsWith(";\n")) {
    content += ";\n";
  }

  await fs.writeFile(filePath, content, "utf8");
}

async function fixBlogPage(filePath) {
  let content = await fs.readFile(filePath, "utf8");

  // Fix Layout structure if needed
  if (!content.includes("</Layout>")) {
    content = content.replace(
      /return\s*\(\s*/,
      "return (\n    <Layout>\n      ",
    );
    content = content.replace(/(\s*)\}\s*$/m, "$1    </Layout>\n$1  );\n}\n");
  }

  // Ensure export statement ends with semicolon
  if (!content.endsWith(";\n")) {
    content += ";\n";
  }

  await fs.writeFile(filePath, content, "utf8");
}

async function fixAllPages() {
  try {
    // Fix location pages
    const locationPages = globSync("pages/roofers-in-*.tsx");
    for (const page of locationPages) {
      await fixLocationPage(page);
      console.log(`Fixed location page: ${page}`);
    }

    // Fix service pages
    const servicePages = globSync("pages/services/**/*.{tsx,js}");
    for (const page of servicePages) {
      await fixServicePage(page);
      console.log(`Fixed service page: ${page}`);
    }

    // Fix blog pages
    const blogPages = globSync("pages/blog/**/*.tsx");
    for (const page of blogPages) {
      await fixBlogPage(page);
      console.log(`Fixed blog page: ${page}`);
    }

    // Fix other specific pages
    const otherPages = [
      "pages/about.tsx",
      "pages/contact.tsx",
      "pages/find-roofer.tsx",
      "pages/index.tsx",
      "pages/locations/locationsList.tsx",
      "pages/resources/roofing-faq.tsx",
      "pages/locations/oxford/headington.tsx",
    ];

    for (const page of otherPages) {
      if (existsSync(page)) {
        await fixBlogPage(page);
        console.log(`Fixed other page: ${page}`);
      }
    }

    console.log("All pages fixed successfully!");
  } catch (error) {
    console.error("Error fixing pages:", error);
    process.exit(1);
  }
}

fixAllPages().catch(console.error);
