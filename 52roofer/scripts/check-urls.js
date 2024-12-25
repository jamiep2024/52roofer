const fs = require("fs");
const path = require("path");
const https = require("https");
const { URL } = require("url");

const CONFIG = {
  currentDateTime: "2024-12-25 00:02:08",
  userLogin: "jamiep2024",
  baseUrl: "https://52roofer.com",
  outputFile: "url-check-report.json",
};

const VOICE_URLS = [
  "/services/voice-roofing-services",
  "/services/voice-roof-repairs",
  "/services/voice-roof-installation",
];

const urlsToCheck = [
  ...VOICE_URLS,
  // Add other important URLs here
  "/",
  "/services",
  "/contact",
  "/about",
];

const results = {
  timestamp: CONFIG.currentDateTime,
  user: CONFIG.userLogin,
  summary: {
    total: 0,
    ok: 0,
    redirects: 0,
    broken: 0,
    notFound: 0,
  },
  urls: [],
};

function checkUrl(url) {
  return new Promise((resolve) => {
    const fullUrl = new URL(url, CONFIG.baseUrl);

    const req = https.get(fullUrl.toString(), (res) => {
      const status = res.statusCode;
      const result = {
        url: url,
        fullUrl: fullUrl.toString(),
        status: status,
        type: getStatusType(status),
        redirectUrl: res.headers.location || null,
      };

      // Update summary
      results.summary.total++;
      if (status === 200) results.summary.ok++;
      else if (status === 404) results.summary.notFound++;
      else if (status >= 300 && status < 400) results.summary.redirects++;
      else results.summary.broken++;

      results.urls.push(result);
      resolve(result);
    });

    req.on("error", (error) => {
      const result = {
        url: url,
        fullUrl: fullUrl.toString(),
        status: "ERROR",
        type: "broken",
        error: error.message,
      };
      results.summary.total++;
      results.summary.broken++;
      results.urls.push(result);
      resolve(result);
    });

    req.end();
  });
}

function getStatusType(status) {
  if (status === 200) return "ok";
  if (status === 404) return "not_found";
  if (status >= 300 && status < 400) return "redirect";
  return "broken";
}

async function runUrlCheck() {
  console.log(`Starting URL check at: ${CONFIG.currentDateTime}`);
  console.log(`User: ${CONFIG.userLogin}\n`);

  // Check all URLs
  for (const url of urlsToCheck) {
    const result = await checkUrl(url);
    console.log(`Checking ${url}: ${result.status} (${result.type})`);
  }

  // Save results
  fs.writeFileSync(CONFIG.outputFile, JSON.stringify(results, null, 2));

  // Print summary
  console.log("\nCheck completed!");
  console.log("Summary:");
  console.log("-".repeat(40));
  console.log(`Total URLs checked: ${results.summary.total}`);
  console.log(`OK (200): ${results.summary.ok}`);
  console.log(`Redirects (3xx): ${results.summary.redirects}`);
  console.log(`Not Found (404): ${results.summary.notFound}`);
  console.log(`Broken: ${results.summary.broken}`);
  console.log("\nDetailed report saved to:", CONFIG.outputFile);

  // Print problematic URLs
  if (results.urls.some((u) => u.type !== "ok")) {
    console.log("\nProblematic URLs:");
    console.log("-".repeat(40));
    results.urls
      .filter((u) => u.type !== "ok")
      .forEach((u) => {
        console.log(`${u.url}: ${u.status} (${u.type})`);
        if (u.redirectUrl) console.log(`  → Redirects to: ${u.redirectUrl}`);
      });
  }
}

runUrlCheck().catch(console.error);
