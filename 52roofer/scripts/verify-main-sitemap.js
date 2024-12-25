import fetch from "node-fetch";

const DOMAIN = "https://www.52roofer.com";
const ALT_DOMAIN = "https://52roofer.com";

const urls = [
  "", // homepage
  "/about",
  "/contact",
  "/find-roofer",
  "/services",
  "/locations",
  "/blog",
  "/resources",
];

async function checkUrl(url) {
  const results = [];

  // Check both www and non-www versions
  for (const domain of [DOMAIN, ALT_DOMAIN]) {
    try {
      const response = await fetch(`${domain}${url}`, {
        method: "HEAD",
        redirect: "manual", // This allows us to detect 301/302 redirects
      });

      const status = response.status;
      const location = response.headers.get("location");

      results.push({
        url: `${domain}${url}`,
        status,
        redirect: location || null,
        ok: response.ok,
      });
    } catch (error) {
      results.push({
        url: `${domain}${url}`,
        status: "ERROR",
        error: error.message,
        ok: false,
      });
    }
  }

  return results;
}

async function verifyMainSitemap() {
  console.log("Verifying main sitemap URLs...\n");

  const allResults = await Promise.all(urls.map(checkUrl));
  const results = allResults.flat();

  console.log("Results:\n");

  // Group results by status
  const ok = results.filter((r) => r.ok);
  const redirects = results.filter((r) => r.status >= 300 && r.status < 400);
  const notFound = results.filter((r) => r.status === 404);
  const errors = results.filter(
    (r) => r.status === "ERROR" || (r.status >= 500 && r.status < 600),
  );

  // Print successful URLs
  if (ok.length > 0) {
    console.log("✅ Working URLs:");
    ok.forEach((r) => console.log(`   ${r.url} (${r.status})`));
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

  // Print recommendations
  if (redirects.length > 0 || notFound.length > 0 || errors.length > 0) {
    console.log("\nRecommendations:");

    if (redirects.length > 0) {
      console.log(
        "- Update sitemap to use final URLs instead of redirected ones",
      );
    }

    if (notFound.length > 0) {
      console.log("- Create missing pages or remove them from sitemap");
    }

    if (errors.length > 0) {
      console.log("- Investigate server errors and fix underlying issues");
    }

    process.exit(1);
  }
}

verifyMainSitemap().catch(console.error);
