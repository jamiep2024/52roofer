const fs = require("fs").promises;
const path = require("path");
const glob = require("glob");

const REDIRECTS_MAP = {
  // Existing redirects
  "/location/": "/locations/",
  "/service/": "/services/",
  "/areas/": "/locations/",
  "/services/maintenance": "/services/roof-maintenance",
  "/services/emergency-repairs": "/services/emergency-roof-repairs",
  "/emergency/": "/services/emergency-roof-repairs/",
  "/residential/": "/services/residential-roofing/",
  "/commercial/": "/services/commercial-roofing/",
  "/repairs/": "/services/roof-repairs/",
  "/replacement/": "/services/roof-replacement/",
  "/contact-us": "/contact",
  "/about-us": "/about",

  // New redirects for roofing-specific URLs
  "/estimate": "/quote",
  "/free-estimate": "/quote",
  "/roofing-estimate": "/quote",
  "/roof-types": "/services/roof-types",
  "/shingles": "/services/shingle-options",
  "/metal-roofing": "/services/metal-roofs",
  "/flat-roofing": "/services/flat-roofs",
  "/tile-roofing": "/services/tile-roofs",
  "/warranty": "/services/warranty-information",
  "/insurance": "/services/insurance-claims",
  "/maintenance": "/services/roof-maintenance",
  "/inspection": "/services/roof-inspection",
  "/projects": "/portfolio",
  "/gallery": "/portfolio",
  "/testimonials": "/reviews",
  "/reviews": "/testimonials",
  "/emergency": "/services/emergency-roof-repairs",
  "/blog/": "/news/",
  "/articles/": "/news/",
  "/gutters": "/services/gutter-installation",
  "/siding": "/services/siding-installation",
  "/windows": "/services/window-installation",
  "/financing": "/payment-options",
  "/payment": "/payment-options",
  "/company": "/about",
  "/team": "/about/team",
  "/careers": "/about/careers",
  "/faq": "/resources/faq",
  "/resources": "/resources/guides",
};

async function readUrlReport() {
  try {
    const reportPath = path.join(process.cwd(), "url-check-report.json");
    const reportData = await fs.readFile(reportPath, "utf8");
    return JSON.parse(reportData);
  } catch (error) {
    console.error("Error reading URL report:", error);
    throw error;
  }
}

async function generateNextRedirects() {
  const report = await readUrlReport();
  const redirects = [];

  report.details.notFound.forEach(({ url }) => {
    try {
      const parsedUrl = new URL(url);
      const pathName = parsedUrl.pathname;

      for (const [oldPath, newPath] of Object.entries(REDIRECTS_MAP)) {
        if (pathName.startsWith(oldPath)) {
          redirects.push({
            source: pathName,
            destination: pathName.replace(oldPath, newPath),
            permanent: true,
          });
          break;
        }
      }
    } catch (error) {
      console.warn(`Invalid URL: ${url}`);
    }
  });

  return redirects;
}

async function updateNextConfig() {
  const configPath = path.join(process.cwd(), "next.config.js");
  const redirects = await generateNextRedirects();

  try {
    let configContent = await fs.readFile(configPath, "utf8");

    if (!configContent.includes("async redirects()")) {
      configContent = configContent.replace(
        "const nextConfig = {",
        `const nextConfig = {
  async redirects() {
    return ${JSON.stringify(redirects, null, 2)};
  },`,
      );
    } else {
      configContent = configContent.replace(
        /async redirects\(\) {[\s\S]*?return \[([\s\S]*?)\];}/,
        `async redirects() {
    return ${JSON.stringify(redirects, null, 2)};
  }`,
      );
    }

    await fs.writeFile(configPath, configContent);
    console.log(`Updated next.config.js with ${redirects.length} redirects`);
  } catch (error) {
    console.error("Error updating next.config.js:", error);
    throw error;
  }
}

async function updateInternalLinks() {
  try {
    const files = glob.sync("src/**/*.{ts,tsx,js,jsx}");
    let updatedFiles = 0;

    for (const file of files) {
      let content = await fs.readFile(file, "utf8");
      let updated = false;

      for (const [oldPath, newPath] of Object.entries(REDIRECTS_MAP)) {
        if (content.includes(oldPath)) {
          content = content.replace(new RegExp(oldPath, "g"), newPath);
          updated = true;
        }
      }

      if (updated) {
        await fs.writeFile(file, content);
        updatedFiles++;
        console.log(`Updated links in ${file}`);
      }
    }

    console.log(`Updated ${updatedFiles} files with new URLs`);
  } catch (error) {
    console.error("Error updating internal links:", error);
    throw error;
  }
}

async function main() {
  try {
    console.log("Starting URL fixes...");

    try {
      await fs.access("url-check-report.json");
    } catch {
      console.error(
        "Please run npm run check-links first to generate the URL report",
      );
      process.exit(1);
    }

    await updateNextConfig();
    await updateInternalLinks();

    console.log("URL fixes completed successfully");
  } catch (error) {
    console.error("Error fixing URLs:", error);
    process.exit(1);
  }
}

main();
