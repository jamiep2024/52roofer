import fetch from "node-fetch";
import fs from "fs";
import path from "path";

const DOMAIN = "https://52roofer.com";

async function checkUrl(url) {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "manual",
    });

    const status = response.status;
    const location = response.headers.get("location");

    return {
      url,
      status,
      redirect: location || null,
      ok: response.ok,
    };
  } catch (error) {
    return {
      url,
      status: "ERROR",
      error: error.message,
      ok: false,
    };
  }
}

async function verifyLocationSitemaps() {
  console.log("Getting location URLs...\n");

  const urls = [];
  const pagesDir = path.join(process.cwd(), "pages");

  // Get county pages
  const countyDir = path.join(pagesDir, "county");
  if (fs.existsSync(countyDir)) {
    const countyPages = fs
      .readdirSync(countyDir)
      .filter((file) => file.endsWith(".tsx") && !file.startsWith("["))
      .map((file) => `/county/${file.replace(".tsx", "")}`);
    urls.push(...countyPages);
  }

  // Get city pages
  const cityPages = fs
    .readdirSync(pagesDir)
    .filter((file) => file.startsWith("roofers-in-") && file.endsWith(".tsx"))
    .map((file) => `/${file.replace(".tsx", "")}`);
  urls.push(...cityPages);

  console.log(`Found ${urls.length} location URLs to check\n`);

  console.log("Checking URLs in batches...");
  const results = [];
  const batchSize = 50;

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize).map((url) => `${DOMAIN}${url}`);
    const batchResults = await Promise.all(batch.map(checkUrl));
    results.push(...batchResults);
    console.log(
      `Checked ${Math.min(i + batchSize, urls.length)}/${urls.length} URLs`,
    );
  }

  console.log("\nResults:\n");

  // Group results by status
  const ok = results.filter((r) => r.ok);
  const redirects = results.filter((r) => r.status >= 300 && r.status < 400);
  const notFound = results.filter((r) => r.status === 404);
  const errors = results.filter(
    (r) => r.status === "ERROR" || (r.status >= 500 && r.status < 600),
  );

  // Print successful URLs
  if (ok.length > 0) {
    console.log("✅ Working URLs:", ok.length);
    console.log("Sample of working URLs:");
    ok.slice(0, 5).forEach((r) => console.log(`   ${r.url} (${r.status})`));
    console.log();
  }

  // Print redirects
  if (redirects.length > 0) {
    console.log("⚠️  Redirects:");
    redirects.forEach((r) =>
      console.log(`   ${r.url} -> ${r.redirect} (${r.status})`),
    );
    console.log();
  }

  // Print 404s
  if (notFound.length > 0) {
    console.log("❌ Not Found (404):");
    notFound.forEach((r) => console.log(`   ${r.url}`));
    console.log();
  }

  // Print errors
  if (errors.length > 0) {
    console.log("🚫 Errors:");
    errors.forEach((r) =>
      console.log(`   ${r.url} (${r.status}${r.error ? ": " + r.error : ""})`),
    );
    console.log();
  }

  // Print summary
  console.log("Summary:");
  console.log(`Total URLs checked: ${results.length}`);
  console.log(`✅ Working: ${ok.length}`);
  console.log(`⚠️  Redirects: ${redirects.length}`);
  console.log(`❌ Not Found: ${notFound.length}`);
  console.log(`🚫 Errors: ${errors.length}`);

  if (redirects.length > 0 || notFound.length > 0 || errors.length > 0) {
    process.exit(1);
  }
}

verifyLocationSitemaps().catch(console.error);
