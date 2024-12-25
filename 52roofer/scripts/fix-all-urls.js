const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

const CONFIG = {
  currentDateTime: "2024-12-25 00:28:46",
  userLogin: "jamiep2024",
  baseUrl: "https://52roofer.com",
  batchSize: 50,
  concurrentRequests: 10,
  outputDirectory: "fixed-pages",
  sitemapsDirectory: "public/sitemaps",
  outputFile: "url-fix-report.json",
};

// URL Types and Categories
const URL_TYPES = {
  SERVICES: "services",
  LOCATIONS: "locations",
  COUNTIES: "counties",
  COMBINATIONS: "combinations",
  RESOURCES: "resources",
  BLOG: "blog",
  STATIC: "static",
};

// Template strings for different page types
const TEMPLATES = {
  service: (name, title, description) => `
import Head from 'next/head';
import Layout from '../../components/Layout';

export default function ${name}() {
    return (
        <Layout>
            <Head>
                <title>${title} | 52Roofer</title>
                <meta name="description" content="${description}" />
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">${title}</h1>
                <div className="prose max-w-none">
                    <p>${description}</p>
                </div>
            </div>
        </Layout>
    );
}`,

  location: (name, city, description) => `
import Head from 'next/head';
import Layout from '../../components/Layout';

export default function ${name}() {
    return (
        <Layout>
            <Head>
                <title>Roofing Services in ${city} | 52Roofer</title>
                <meta name="description" content="${description}" />
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">Roofing Services in ${city}</h1>
                <div className="prose max-w-none">
                    <p>${description}</p>
                </div>
            </div>
        </Layout>
    );
}`,
};

// Initialize results object
const results = {
  timestamp: CONFIG.currentDateTime,
  user: CONFIG.userLogin,
  summary: {
    total: 0,
    fixed: 0,
    redirected: 0,
    failed: 0,
    skipped: 0,
  },
  categories: {},
  urls: [],
};

// Helper Functions
function formatTitle(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function determineUrlType(url) {
  const path = new URL(url).pathname;
  if (path.startsWith("/services")) return URL_TYPES.SERVICES;
  if (path.startsWith("/locations")) return URL_TYPES.LOCATIONS;
  if (path.startsWith("/counties")) return URL_TYPES.COUNTIES;
  if (path.startsWith("/blog")) return URL_TYPES.BLOG;
  if (path.startsWith("/resources")) return URL_TYPES.RESOURCES;
  if (path.includes("/services/") && path.includes("/locations/"))
    return URL_TYPES.COMBINATIONS;
  return URL_TYPES.STATIC;
}

// URL Processing Functions
async function getAllUrls() {
  try {
    const response = await axios.get(`${CONFIG.baseUrl}/sitemap.xml`);
    const urls = response.data.match(/https:\/\/52roofer\.com[^<]*/g) || [];
    return [...new Set(urls)]; // Remove duplicates
  } catch (error) {
    console.error("Error fetching sitemap:", error.message);
    return [];
  }
}

async function checkUrl(url) {
  try {
    const response = await axios.get(url, {
      validateStatus: false,
      timeout: 10000,
    });
    return {
      url,
      status: response.status,
      type: determineUrlType(url),
      needsFix: response.status !== 200,
    };
  } catch (error) {
    return {
      url,
      status: "ERROR",
      type: determineUrlType(url),
      needsFix: true,
      error: error.message,
    };
  }
}

// Page Creation Functions
async function createServicePage(url) {
  const serviceName = url.split("/").pop();
  const title = formatTitle(serviceName);
  const description = `Professional ${title.toLowerCase()} services provided by 52Roofer.`;

  const content = TEMPLATES.service(
    serviceName.replace(/-/g, "_"),
    title,
    description,
  );

  const filePath = path.join("pages/services", `${serviceName}.js`);
  await writeFile(filePath, content);
  return filePath;
}

async function createLocationPage(url) {
  const locationName = url.split("/").pop();
  const cityName = formatTitle(locationName);
  const description = `Expert roofing services in ${cityName} and surrounding areas. Quality workmanship guaranteed.`;

  const content = TEMPLATES.location(
    locationName.replace(/-/g, "_"),
    cityName,
    description,
  );

  const filePath = path.join("pages/locations", `${locationName}.js`);
  await writeFile(filePath, content);
  return filePath;
}

// Batch Processing
async function processBatch(urls) {
  const promises = urls.map((url) => checkUrl(url));
  return Promise.all(promises);
}

// Main Execution Function
async function fixAllUrls() {
  console.log(`Starting URL fix process at: ${CONFIG.currentDateTime}`);
  console.log(`User: ${CONFIG.userLogin}\n`);

  // Create necessary directories
  await mkdir("pages/services", { recursive: true });
  await mkdir("pages/locations", { recursive: true });
  await mkdir(CONFIG.sitemapsDirectory, { recursive: true });

  // Get all URLs
  const allUrls = await getAllUrls();
  console.log(`Found ${allUrls.length} URLs to process`);

  // Process in batches
  const batches = Array.from(
    { length: Math.ceil(allUrls.length / CONFIG.batchSize) },
    (_, i) => allUrls.slice(i * CONFIG.batchSize, (i + 1) * CONFIG.batchSize),
  );

  for (let i = 0; i < batches.length; i++) {
    console.log(`\nProcessing batch ${i + 1} of ${batches.length}...`);
    const batchResults = await processBatch(batches[i]);

    for (const result of batchResults) {
      results.summary.total++;

      if (result.needsFix) {
        try {
          switch (result.type) {
            case URL_TYPES.SERVICES:
              await createServicePage(result.url);
              results.summary.fixed++;
              break;
            case URL_TYPES.LOCATIONS:
              await createLocationPage(result.url);
              results.summary.fixed++;
              break;
            default:
              results.summary.skipped++;
          }
        } catch (error) {
          results.summary.failed++;
          console.error(`Failed to fix ${result.url}:`, error.message);
        }
      }

      // Update categories summary
      results.categories[result.type] =
        (results.categories[result.type] || 0) + 1;
      results.urls.push(result);
    }

    // Progress update
    const progress = (((i + 1) / batches.length) * 100).toFixed(2);
    console.log(
      `Progress: ${progress}% (${results.summary.fixed} fixed, ${results.summary.failed} failed)`,
    );
  }

  // Generate final report
  await writeFile(CONFIG.outputFile, JSON.stringify(results, null, 2));

  // Print summary
  console.log("\n=== Final Summary ===");
  console.log(`Total URLs processed: ${results.summary.total}`);
  console.log(`Fixed: ${results.summary.fixed}`);
  console.log(`Failed: ${results.summary.failed}`);
  console.log(`Skipped: ${results.summary.skipped}`);
  console.log("\nCategory Breakdown:");
  Object.entries(results.categories).forEach(([category, count]) => {
    console.log(`${category}: ${count}`);
  });
  console.log(`\nDetailed report saved to: ${CONFIG.outputFile}`);
}

// Error Handler
process.on("unhandledRejection", (error) => {
  console.error("Unhandled rejection:", error);
  process.exit(1);
});

// Run the script
fixAllUrls().catch((error) => {
  console.error("Script failed:", error);
  process.exit(1);
});
