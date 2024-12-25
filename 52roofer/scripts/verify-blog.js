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

async function verifyBlog() {
  console.log("Checking blog pages...\n");

  const blogPosts = [
    "choosing-right-roofing-material",
    "complete-guide-to-roof-maintenance",
    "energy-efficient-roofing",
    "new-roof-cost-guide",
    "professional-roof-inspection-guide",
    "signs-you-need-roof-replacement",
    "uk-weather-roofing-problems",
    "ultimate-roof-ventilation-guide",
  ].sort();

  // Check URLs
  console.log("Checking blog URLs...");
  const results = await Promise.all(
    blogPosts.map((post) => checkUrl(`${DOMAIN}/blog/${post}`)),
  );

  // Group results by status
  const ok = results.filter((r) => r.ok);
  const redirects = results.filter((r) => r.status >= 300 && r.status < 400);
  const notFound = results.filter((r) => r.status === 404);
  const errors = results.filter(
    (r) => r.status === "ERROR" || (r.status >= 500 && r.status < 600),
  );

  // Print successful URLs
  if (ok.length > 0) {
    console.log("\n✅ Working URLs:", ok.length);
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

verifyBlog().catch(console.error);
