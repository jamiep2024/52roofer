const fetch = require("node-fetch");
const fs = require("fs").promises;

async function verifyUrls() {
  const sitemapUrl = "https://52roofer.com/sitemap.xml";
  console.log(`Verifying URLs from ${sitemapUrl}`);

  try {
    const response = await fetch(sitemapUrl);
    const xml = await response.text();
    const urls = xml
      .match(/<loc>(.*?)<\/loc>/g)
      .map((loc) => loc.replace("<loc>", "").replace("</loc>", ""));

    const results = {
      total: urls.length,
      ok: [],
      redirects: [],
      errors: [],
    };

    for (const url of urls) {
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (res.ok) {
          results.ok.push(url);
        } else if (res.status >= 300 && res.status < 400) {
          results.redirects.push({ url, status: res.status });
        } else {
          results.errors.push({ url, status: res.status });
        }
      } catch (error) {
        results.errors.push({ url, error: error.message });
      }
    }

    await fs.writeFile(
      "url-verification-results.json",
      JSON.stringify(results, null, 2),
    );

    console.log(`
Verification Complete:
Total URLs: ${results.total}
OK: ${results.ok.length}
Redirects: ${results.redirects.length}
Errors: ${results.errors.length}
    `);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

verifyUrls();
