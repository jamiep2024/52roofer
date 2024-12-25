const fs = require("fs");
const fetch = require("node-fetch");
const cheerio = require("cheerio");

// Configuration
const CONFIG = {
  baseUrl: "https://52roofer.com",
  currentDateTime: "2024-12-24 23:25:24",
  userLogin: "jamiep2024",
  locations: [], // Will be populated from sitemap
  services: [
    "roof-repairs",
    "roof-replacement",
    "emergency-roofing",
    "commercial-roofing",
    "residential-roofing",
    "roof-maintenance",
    "gutter-installation",
    "roof-inspection",
  ],
};

async function getAllUrls() {
  const urls = new Set();

  // Add homepage
  urls.add(CONFIG.baseUrl);

  try {
    // Get locations from sitemap
    console.log("Fetching sitemap for locations...");
    const response = await fetch(`${CONFIG.baseUrl}/sitemap.xml`);
    const text = await response.text();
    const locationMatches = text.match(/roofers-in-(.*?)</g) || [];

    const locations = locationMatches
      .map((match) => match.replace("roofers-in-", "").replace("<", ""))
      .filter((location) => location.length > 0);

    console.log(`Found ${locations.length} locations`);

    // Generate all URLs
    locations.forEach((location) => {
      // Add location page
      urls.add(`${CONFIG.baseUrl}/roofers-in-${location}`);

      // Add service pages for each location
      CONFIG.services.forEach((service) => {
        urls.add(
          `${CONFIG.baseUrl}/services/${service}/roofers-in-${location}`,
        );
      });
    });

    // Add service index pages
    CONFIG.services.forEach((service) => {
      urls.add(`${CONFIG.baseUrl}/services/${service}`);
    });

    return Array.from(urls);
  } catch (error) {
    console.error("Error generating URLs:", error);
    return [];
  }
}

async function checkUrl(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": `URLChecker/1.0 (user:${CONFIG.userLogin})`,
      },
    });

    const html = await response.text();
    const $ = cheerio.load(html);

    // Get the location from URL
    const locationMatch = url.match(/roofers-in-(.*?)$/);
    const location = locationMatch ? locationMatch[1] : "";

    // Get the service from URL
    const serviceMatch = url.match(/services\/(.*?)(\/|$)/);
    const service = serviceMatch ? serviceMatch[1] : "";

    // Generate appropriate meta description
    let metaDescription = "";
    if (location && service) {
      metaDescription = `Professional ${service.replace(/-/g, " ")} services in ${location.replace(/-/g, " ")}. Expert roofing solutions from 52Roofer. Licensed, insured, and trusted local roofers. Free estimates!`;
    } else if (location) {
      metaDescription = `Expert roofing services in ${location.replace(/-/g, " ")}. Professional roofers providing repairs, installations, and maintenance. Licensed and insured. Free estimates!`;
    } else if (service) {
      metaDescription = `Professional ${service.replace(/-/g, " ")} services. Expert roofing solutions across all areas. Licensed, insured, and trusted roofers. Free estimates!`;
    }

    // Generate schema markup
    const schema = {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      name: "52Roofer",
      url: url,
      description: metaDescription,
      areaServed: location ? location.replace(/-/g, " ") : "Multiple Areas",
      priceRange: "$$",
      paymentAccepted: ["Cash", "Credit Card", "Check"],
      currenciesAccepted: "USD",
      sameAs: [
        "https://www.facebook.com/52roofer",
        "https://twitter.com/52roofer",
      ],
    };

    return {
      url,
      status: response.status,
      needsSchema: $('script[type="application/ld+json"]').length === 0,
      needsMetaDescription: $('meta[name="description"]').length === 0,
      needsCanonical: $('link[rel="canonical"]').length === 0,
      proposedFixes: {
        schema: JSON.stringify(schema, null, 2),
        metaDescription,
        canonical: url,
      },
    };
  } catch (error) {
    return {
      url,
      status: "error",
      error: error.message,
    };
  }
}

async function main() {
  const startTime = new Date();
  console.log("Generating complete URL list...");

  const urls = await getAllUrls();
  console.log(`Found ${urls.length} total URLs to check`);

  const results = [];
  const batchSize = 20;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const progress = ((i / urls.length) * 100).toFixed(1);
    console.log(`Progress: ${progress}% (${i}/${urls.length})`);

    const batchResults = await Promise.all(batch.map((url) => checkUrl(url)));
    results.push(...batchResults);
  }

  // Generate fixes
  const fixes = {
    pages: results.map((result) => ({
      url: result.url,
      fixes: {
        addSchema: result.needsSchema ? result.proposedFixes.schema : null,
        addMetaDescription: result.needsMetaDescription
          ? result.proposedFixes.metaDescription
          : null,
        addCanonical: result.needsCanonical
          ? result.proposedFixes.canonical
          : null,
      },
    })),
  };

  // Save fixes to file
  fs.writeFileSync("site-fixes.json", JSON.stringify(fixes, null, 2));
  console.log("\nFixes have been generated and saved to site-fixes.json");

  const endTime = new Date();
  console.log(`\nTotal time: ${(endTime - startTime) / 1000} seconds`);
}

main().catch(console.error);
