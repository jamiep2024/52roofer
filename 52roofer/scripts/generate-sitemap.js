const SitemapGenerator = require("sitemap-generator");
const fs = require("fs").promises;
const path = require("path");

// Configuration for 52roofer.com
const config = {
  baseURL: "https://52roofer.com",
  outputPath: "./public/sitemap.xml",
  urlListPath: "./scripts/url-list.json",
  maxDepth: 5,
  locations: [
    "oxford",
    "watchfield",
    "swindon",
    "reading",
    "wiltshire",
    "gloucestershire",
  ],
  services: [
    "emergency-roof-repairs",
    "roof-maintenance",
    "roof-installation",
    "guttering",
    "chimney-repairs",
    "flat-roofing",
  ],
  excludePatterns: [
    "/404",
    "/500",
    "/api/",
    "/login",
    "/logout",
    "/admin",
    "/assets/",
    ".jpg",
    ".png",
    ".gif",
    ".pdf",
  ],
};

// Generate all possible URLs
function generateStaticUrls() {
  const urls = ["/", "/about", "/contact", "/services", "/blog", "/locations"];

  // Add service pages
  config.services.forEach((service) => {
    urls.push(`/services/${service}`);
  });

  // Add location pages
  config.locations.forEach((location) => {
    urls.push(`/locations/${location}`);

    // Add service+location combinations
    config.services.forEach((service) => {
      urls.push(`/locations/${location}/services/${service}`);
    });
  });

  return urls;
}

async function generateSitemap() {
  console.log(`Starting sitemap generation for ${config.baseURL}`);
  console.log(`Current time: ${new Date().toISOString()}`);

  try {
    // Create necessary directories
    await fs.mkdir(path.dirname(config.outputPath), { recursive: true });
    await fs.mkdir(path.dirname(config.urlListPath), { recursive: true });

    // Initialize generator
    const generator = SitemapGenerator(config.baseURL, {
      stripQuerystring: true,
      filepath: config.outputPath,
      maxDepth: config.maxDepth,
      exclude: config.excludePatterns,
      lastMod: true,
      changeFreq: "weekly",
      priorityMap: [1.0, 0.8, 0.6, 0.4, 0.2],
    });

    // Track URLs
    const urlTracker = {
      discovered: new Set(),
      excluded: new Set(),
      errors: new Set(),
      staticUrls: generateStaticUrls(),
    };

    // Event handlers
    generator.on("add", (url) => {
      urlTracker.discovered.add(url);
      console.log(`Added: ${url}`);
    });

    generator.on("ignore", (url) => {
      urlTracker.excluded.add(url);
      console.log(`Ignored: ${url}`);
    });

    generator.on("error", (error) => {
      console.error("Error:", error);
      urlTracker.errors.add(error.url || "Unknown URL");
    });

    generator.on("done", async () => {
      console.log("\nSitemap generation completed!");

      // Combine and deduplicate URLs
      const allUrls = [
        ...new Set([
          ...urlTracker.staticUrls,
          ...Array.from(urlTracker.discovered),
        ]),
      ];

      // Save URL list
      const urlList = {
        generatedAt: new Date().toISOString(),
        baseURL: config.baseURL,
        statistics: {
          total: allUrls.length,
          static: urlTracker.staticUrls.length,
          discovered: urlTracker.discovered.size,
          excluded: urlTracker.excluded.size,
          errors: urlTracker.errors.size,
        },
        urls: allUrls,
      };

      await fs.writeFile(config.urlListPath, JSON.stringify(urlList, null, 2));

      // Print statistics
      console.log("\nGeneration Statistics:");
      console.log("-----------------------");
      console.log(`Total URLs: ${allUrls.length}`);
      console.log(`Static URLs: ${urlTracker.staticUrls.length}`);
      console.log(`Discovered URLs: ${urlTracker.discovered.size}`);
      console.log(`Excluded URLs: ${urlTracker.excluded.size}`);
      console.log(`Errors: ${urlTracker.errors.size}`);
      console.log("\nFiles generated:");
      console.log(`- Sitemap: ${config.outputPath}`);
      console.log(`- URL List: ${config.urlListPath}`);
    });

    // Start the crawler
    console.log("Starting crawler...");
    generator.start();

    // Add static URLs after a short delay
    setTimeout(() => {
      urlTracker.staticUrls.forEach((url) => {
        generator.queueURL(new URL(url, config.baseURL).href);
      });
    }, 1000);
  } catch (error) {
    console.error("Fatal error:", error);
    process.exit(1);
  }
}

// Handle process termination
process.on("SIGINT", () => {
  console.log("\nSitemap generation interrupted");
  process.exit(0);
});

// Run the generator
generateSitemap().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
