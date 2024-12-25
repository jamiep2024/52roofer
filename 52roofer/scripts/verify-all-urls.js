import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import service areas data
const serviceAreas = {
  berkshire: {
    name: "Berkshire",
    postcodes: ["RG1-RG31", "RG40-RG45", "SL1-SL6"],
    mainTowns: [
      "Reading",
      "Newbury",
      "Windsor",
      "Maidenhead",
      "Bracknell",
      "Slough",
      "Wokingham",
      "Thatcham",
      "Hungerford",
      "Ascot",
    ],
  },
  oxfordshire: {
    name: "Oxfordshire",
    postcodes: [
      "OX1-OX5",
      "OX9-OX14",
      "OX18",
      "OX20",
      "OX25-OX29",
      "OX33",
      "OX39",
      "OX44",
      "OX49",
    ],
    mainTowns: [
      "Oxford",
      "Banbury",
      "Bicester",
      "Witney",
      "Didcot",
      "Abingdon",
      "Thame",
      "Henley-on-Thames",
      "Wallingford",
      "Chipping Norton",
    ],
  },
  wiltshire: {
    name: "Wiltshire",
    postcodes: ["SN1-SN16", "SN25-SN26", "BA12-BA15", "SP1-SP5"],
    mainTowns: [
      "Swindon",
      "Salisbury",
      "Chippenham",
      "Trowbridge",
      "Marlborough",
      "Devizes",
      "Warminster",
      "Melksham",
      "Calne",
      "Corsham",
    ],
  },
  gloucestershire: {
    name: "Gloucestershire",
    postcodes: ["GL1-GL20", "GL50-GL56"],
    mainTowns: [
      "Gloucester",
      "Cheltenham",
      "Stroud",
      "Cirencester",
      "Tewkesbury",
      "Dursley",
      "Tetbury",
      "Stow-on-the-Wold",
      "Moreton-in-Marsh",
      "Fairford",
    ],
  },
  hampshire: {
    name: "Hampshire",
    postcodes: ["SO14-SO53", "PO1-PO17", "RG21-RG29"],
    mainTowns: [
      "Southampton",
      "Portsmouth",
      "Winchester",
      "Basingstoke",
      "Andover",
      "Aldershot",
      "Farnborough",
      "Eastleigh",
      "Fareham",
      "Gosport",
    ],
  },
  surrey: {
    name: "Surrey",
    postcodes: ["GU1-GU35", "KT1-KT24", "RH1-RH11"],
    mainTowns: [
      "Guildford",
      "Woking",
      "Farnham",
      "Epsom",
      "Redhill",
      "Reigate",
      "Staines",
      "Dorking",
      "Camberley",
      "Leatherhead",
    ],
  },
  buckinghamshire: {
    name: "Buckinghamshire",
    postcodes: ["HP1-HP23", "MK1-MK19"],
    mainTowns: [
      "Milton Keynes",
      "High Wycombe",
      "Aylesbury",
      "Amersham",
      "Marlow",
      "Buckingham",
      "Chesham",
      "Beaconsfield",
      "Princes Risborough",
      "Gerrards Cross",
    ],
  },
  westSussex: {
    name: "West Sussex",
    postcodes: ["BN11-BN18", "PO18-PO22", "RH10-RH20"],
    mainTowns: [
      "Crawley",
      "Worthing",
      "Horsham",
      "Chichester",
      "Bognor Regis",
      "Littlehampton",
      "East Grinstead",
      "Haywards Heath",
      "Burgess Hill",
      "Shoreham-by-Sea",
    ],
  },
};

// Helper function to check if a file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    return false;
  }
}

// Get all expected URLs
function getAllExpectedUrls() {
  const urls = new Set();

  // Add static pages
  const staticPages = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/blog",
    "/resources",
  ];
  staticPages.forEach((url) => urls.add(url));

  // Add service pages
  const servicePages = [
    "/services/roof-installation",
    "/services/roof-replacement",
    "/services/roof-maintenance",
    "/services/roof-repair",
    "/services/emergency-roof-repairs",
    "/services/skylight-installation",
    "/services/roof-ventilation",
    "/services/gutter-services",
    "/services/roof-inspection",
    "/services/commercial-roofing",
    "/services/residential-roofing",
    "/services/advanced-roofing",
    "/services/apex-roofing",
    "/services/roofing-firms-near-me",
    "/services/roofing-construction",
    "/services/roofing-contractors",
    "/services/roofing-companies-near-me",
    "/services/emergency-roofing",
    "/services/roofers-near-me",
  ];
  servicePages.forEach((url) => urls.add(url));

  // Add blog pages
  const blogPages = [
    "/blog/choosing-right-roofing-material",
    "/blog/complete-guide-to-roof-maintenance",
    "/blog/uk-weather-roofing-problems",
    "/blog/energy-efficient-roofing",
    "/blog/ultimate-roof-ventilation-guide",
    "/blog/new-roof-cost-guide",
    "/blog/professional-roof-inspection-guide",
    "/blog/signs-you-need-roof-replacement",
  ];
  blogPages.forEach((url) => urls.add(url));

  // Add location pages from serviceAreas
  Object.entries(serviceAreas).forEach(([countyKey, county]) => {
    // Add county page
    urls.add(`/county/${countyKey}`);

    // Add town pages
    county.mainTowns.forEach((town) => {
      urls.add(`/roofers-in-${town.toLowerCase().replace(/\s+/g, "-")}`);
    });
  });

  return urls;
}

// Get all sitemap URLs
function getSitemapUrls() {
  const urls = new Set();
  const sitemapsDir = path.join(__dirname, "../pages/sitemaps");

  if (fs.existsSync(sitemapsDir)) {
    const sitemaps = fs
      .readdirSync(sitemapsDir)
      .filter((file) => file.endsWith(".tsx") || file.endsWith(".js"));

    for (const sitemap of sitemaps) {
      const content = fs.readFileSync(path.join(sitemapsDir, sitemap), "utf8");
      const matches = content.match(/['"]\/[^'"]+['"]/g) || [];
      matches.forEach((match) => urls.add(match.replace(/['"]/g, "")));
    }
  }

  return urls;
}

// Check a single URL
async function checkUrl(url) {
  // Convert URL to file path
  const segments = url.split("/").filter(Boolean);
  let filePath;

  if (segments.length === 0) {
    filePath = path.join(__dirname, "../pages/index.tsx");
  } else {
    const possiblePaths = [
      path.join(__dirname, "../pages", ...segments) + ".tsx",
      path.join(__dirname, "../pages", ...segments) + ".js",
      path.join(__dirname, "../pages", ...segments, "index.tsx"),
      path.join(__dirname, "../pages", ...segments, "index.js"),
    ];
    filePath = possiblePaths.find((p) => fileExists(p));
  }

  if (!filePath) {
    return {
      url,
      status: "404",
      error: "File not found",
    };
  }

  // Check for broken internal links
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const internalLinks = content.match(/href=["']\/(.*?)["']/g) || [];
    const brokenLinks = [];

    for (const link of internalLinks) {
      const linkPath = link.match(/href=["']\/(.*?)["']/)[1];
      const segments = linkPath.split("/");

      // Skip dynamic routes and anchor links
      if (linkPath.includes("#") || segments.some((s) => s.startsWith("["))) {
        continue;
      }

      // Check if the linked page exists
      const possiblePaths = [
        path.join(__dirname, "../pages", linkPath + ".tsx"),
        path.join(__dirname, "../pages", linkPath + ".js"),
        path.join(__dirname, "../pages", linkPath, "index.tsx"),
        path.join(__dirname, "../pages", linkPath, "index.js"),
      ];

      if (!possiblePaths.some((p) => fileExists(p))) {
        brokenLinks.push(linkPath);
      }
    }

    return {
      url,
      status: brokenLinks.length > 0 ? "HAS_BROKEN_LINKS" : "OK",
      brokenLinks: brokenLinks.length > 0 ? brokenLinks : null,
    };
  } catch (err) {
    return {
      url,
      status: "ERROR",
      error: err.message,
    };
  }
}

// Main verification function
async function verifyAllUrls() {
  console.log("Starting full URL verification...");

  // Get all expected URLs
  const expectedUrls = getAllExpectedUrls();
  console.log(`Found ${expectedUrls.size} expected URLs`);

  // Get all sitemap URLs
  const sitemapUrls = getSitemapUrls();
  console.log(`Found ${sitemapUrls.size} URLs in sitemaps`);

  const results = {
    totalExpectedUrls: expectedUrls.size,
    urlsInSitemap: sitemapUrls.size,
    urlsWithBrokenLinks: 0,
    urlsWithErrors: 0,
    missingFromSitemap: [],
    details: [],
  };

  // Check each expected URL
  for (const url of expectedUrls) {
    const result = await checkUrl(url);

    // Check if URL is in sitemap
    if (!sitemapUrls.has(url)) {
      results.missingFromSitemap.push(url);
    }

    // Count issues
    if (result.status === "HAS_BROKEN_LINKS") {
      results.urlsWithBrokenLinks++;
    } else if (result.status === "ERROR") {
      results.urlsWithErrors++;
    }

    results.details.push(result);

    // Log issues immediately
    if (result.status !== "OK") {
      console.log("\nIssue found:");
      console.log(JSON.stringify(result, null, 2));
    }
  }

  // Save results to file
  const reportPath = path.join(__dirname, "../url-verification-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  // Print summary
  console.log("\nVerification Summary:");
  console.log(`Total URLs expected: ${results.totalExpectedUrls}`);
  console.log(`URLs in sitemaps: ${results.urlsInSitemap}`);
  console.log(`URLs with broken links: ${results.urlsWithBrokenLinks}`);
  console.log(`URLs with errors: ${results.urlsWithErrors}`);
  console.log(
    `URLs missing from sitemaps: ${results.missingFromSitemap.length}`,
  );
  console.log(`\nDetailed report saved to: ${reportPath}`);
}

verifyAllUrls().catch(console.error);
