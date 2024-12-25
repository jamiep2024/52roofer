import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";
import fs from "fs/promises";

const DOMAIN = "https://52roofer.com";

// List of services from combinations.xml.tsx
const services = [
  "advanced-roofing",
  "apex-roofing",
  "commercial-roofing",
  "residential-roofing",
  "roof-inspection",
  "roof-installation",
  "roof-maintenance",
  "roof-replacement",
  "roof-ventilation",
  "roofing-companies-near-me",
  "roofing-construction",
  "roofing-contractors",
  "roofing-firms-near-me",
  "roofers-near-me",
  "skylight-installation",
  "voice-roof-installation",
  "voice-roof-repairs",
  "voice-roofing-services",
];

// List of locations (you can expand this based on your needs)
const locations = [
  "oxford",
  "blackbird-leys-oxford",
  "botley-oxford",
  "cowley-oxford",
  "headington-oxford",
  "iffley-oxford",
  "jericho-oxford",
  "marston-oxford",
  "rose-hill-oxford",
  "summertown-oxford",
  "wolvercote-oxford",
  "bradford-on-avon-wiltshire",
  "calne-wiltshire",
  "chippenham-wiltshire",
  "devizes-wiltshire",
  "marlborough-wiltshire",
  "melksham-wiltshire",
  "salisbury-wiltshire",
  "trowbridge-wiltshire",
  "warminster-wiltshire",
  "westbury-wiltshire",
];

// List of counties
const counties = [
  "berkshire",
  "oxfordshire",
  "wiltshire",
  "gloucestershire",
  "hampshire",
  "surrey",
  "buckinghamshire",
  "west-sussex",
];

async function getSitemapUrls() {
  const urls = [];

  // Add service pages
  services.forEach((service) => {
    urls.push(`services/${service}`);
  });

  // Add location pages
  locations.forEach((location) => {
    urls.push(`roofers-in-${location}`);
  });

  // Add service+location combinations for dynamic services
  const dynamicServices = [
    "roofing-companies-near-me",
    "roofing-firms-near-me",
    "roofing-contractors",
    "roof-replacement",
    "apex-roofing",
    "advanced-roofing",
    "roofing-construction",
  ];

  dynamicServices.forEach((service) => {
    locations.forEach((location) => {
      urls.push(`services/${service}/${location}`);
    });
  });

  // Add county pages
  counties.forEach((county) => {
    urls.push(`county/${county}`);
  });

  // Add blog pages
  const blogPosts = [
    "choosing-right-roofing-material",
    "complete-guide-to-roof-maintenance",
    "uk-weather-roofing-problems",
    "energy-efficient-roofing",
    "ultimate-roof-ventilation-guide",
    "new-roof-cost-guide",
    "professional-roof-inspection-guide",
    "signs-you-need-roof-replacement",
  ];
  blogPosts.forEach((post) => {
    urls.push(`blog/${post}`);
  });

  // Add resource pages
  urls.push("resources/roofing-faq");

  // Add static pages
  urls.push("about");
  urls.push("contact");
  urls.push("find-roofer");
  urls.push("services");
  urls.push("locations");

  // Return full URLs
  return urls.map((url) => `${DOMAIN}/${url}`);
}

async function checkUrl(url) {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "manual", // This allows us to detect 301/302 redirects
    });

    const status = response.status;
    const result = {
      url,
      status,
      isOk: status === 200,
      is404: status === 404,
      is301: status === 301,
      is302: status === 302,
      redirectUrl: response.headers.get("location"),
    };

    return result;
  } catch (error) {
    return {
      url,
      status: "ERROR",
      isOk: false,
      error: error.message,
    };
  }
}

async function main() {
  console.log("Getting URLs from sitemap...");
  const urls = await getSitemapUrls();
  console.log(`Found ${urls.length} URLs`);

  console.log("\nChecking URLs...");
  const results = await Promise.all(urls.map(checkUrl));

  // Group results by status
  const ok = results.filter((r) => r.isOk);
  const notFound = results.filter((r) => r.is404);
  const redirects = results.filter((r) => r.is301 || r.is302);
  const errors = results.filter((r) => r.status === "ERROR");

  // Generate report
  const report = {
    summary: {
      total: results.length,
      ok: ok.length,
      notFound: notFound.length,
      redirects: redirects.length,
      errors: errors.length,
    },
    notFound: notFound.map((r) => r.url),
    redirects: redirects.map((r) => ({
      from: r.url,
      to: r.redirectUrl,
      type: r.is301 ? "301" : "302",
    })),
    errors: errors.map((r) => ({
      url: r.url,
      error: r.error,
    })),
  };

  // Save report
  await fs.writeFile(
    "combination-urls-report.json",
    JSON.stringify(report, null, 2),
  );

  // Print summary
  console.log("\nResults Summary:");
  console.log(`Total URLs checked: ${report.summary.total}`);
  console.log(`OK (200): ${report.summary.ok}`);
  console.log(`Not Found (404): ${report.summary.notFound}`);
  console.log(`Redirects (301/302): ${report.summary.redirects}`);
  console.log(`Errors: ${report.summary.errors}`);

  if (notFound.length > 0) {
    console.log("\n404 Not Found URLs:");
    notFound.forEach((r) => console.log(`- ${r.url}`));
  }

  if (redirects.length > 0) {
    console.log("\nRedirects:");
    redirects.forEach((r) =>
      console.log(
        `- ${r.url} -> ${r.redirectUrl} (${r.is301 ? "301" : "302"})`,
      ),
    );
  }

  if (errors.length > 0) {
    console.log("\nErrors:");
    errors.forEach((r) => console.log(`- ${r.url}: ${r.error}`));
  }

  console.log("\nFull report saved to combination-urls-report.json");
}

main().catch(console.error);
