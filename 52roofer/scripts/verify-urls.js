const https = require("https");
const fs = require("fs");
const path = require("path");
const { parseStringPromise } = require("xml2js");
const express = require("express");
const app = express();

const SITE_URL = "https://52roofer.com";
const SITEMAP_PATH = path.join(process.cwd(), "public", "sitemap.xml");
const BATCH_SIZE = 50; // Check URLs in batches to avoid overwhelming the server
const DELAY_BETWEEN_BATCHES = 2000; // 2 seconds delay between batches

// Helper function to delay execution
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function checkUrl(url, retries = 3) {
  return new Promise(async (resolve) => {
    const tryRequest = async (attemptsLeft) => {
      try {
        const response = await new Promise((resolve, reject) => {
          const req = https.get(
            url,
            {
              timeout: 10000, // 10 second timeout
              headers: {
                "User-Agent": "52roofer-sitemap-validator/1.0",
              },
            },
            (res) => {
              const statusCode = res.statusCode;
              const location = res.headers.location;

              // Collect response body for error analysis
              let body = "";
              res.on("data", (chunk) => (body += chunk));
              res.on("end", () => {
                if (statusCode === 301 || statusCode === 302) {
                  resolve({
                    url,
                    statusCode,
                    redirect: location,
                    type: "301/302 Redirect",
                    body: body.substring(0, 500), // First 500 chars only
                  });
                } else if (statusCode === 404) {
                  resolve({
                    url,
                    statusCode,
                    type: "404 Not Found",
                    body: body.substring(0, 500),
                  });
                } else if (statusCode >= 400) {
                  resolve({
                    url,
                    statusCode,
                    type: `Error ${statusCode}`,
                    body: body.substring(0, 500),
                  });
                } else {
                  resolve({
                    url,
                    statusCode,
                    type: "OK",
                  });
                }
              });
            },
          );

          req.on("error", reject);
          req.end();
        });

        return response;
      } catch (error) {
        if (attemptsLeft > 0) {
          await delay(2000); // Wait 2 seconds before retry
          return await tryRequest(attemptsLeft - 1);
        }
        return {
          url,
          error: error.message,
          type: "Error",
          retried: true,
        };
      }
    };

    const result = await tryRequest(retries);
    resolve(result);
  });
}

async function processBatch(urls, startIndex, batchSize) {
  const batch = urls.slice(startIndex, startIndex + batchSize);
  const results = await Promise.all(batch.map((url) => checkUrl(url)));
  return results;
}

async function main() {
  try {
    // Read sitemap
    const sitemapXml = fs.readFileSync(SITEMAP_PATH, "utf8");
    const sitemap = await parseStringPromise(sitemapXml);

    const urls = sitemap.urlset.url.map((u) => u.loc[0]);
    console.log(`Found ${urls.length} URLs in sitemap\n`);

    // Process URLs in batches
    const results = [];
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      console.log(
        `Checking URLs ${i + 1} to ${Math.min(i + BATCH_SIZE, urls.length)} of ${urls.length}...`,
      );
      const batchResults = await processBatch(urls, i, BATCH_SIZE);
      results.push(...batchResults);

      if (i + BATCH_SIZE < urls.length) {
        await delay(DELAY_BETWEEN_BATCHES);
      }
    }

    // Group results by status
    const redirects = results.filter((r) => r.type === "301/302 Redirect");
    const notFound = results.filter((r) => r.type === "404 Not Found");
    const otherErrors = results.filter((r) => r.type.startsWith("Error"));
    const ok = results.filter((r) => r.type === "OK");

    // Print summary
    console.log("\n=== Summary ===");
    console.log(`Total URLs checked: ${results.length}`);
    console.log(`OK: ${ok.length}`);
    console.log(`301/302 Redirects: ${redirects.length}`);
    console.log(`404 Not Found: ${notFound.length}`);
    console.log(`Other Errors: ${otherErrors.length}\n`);

    // Print details for issues
    if (redirects.length > 0) {
      console.log("=== Redirects ===");
      redirects.forEach((r) => {
        console.log(`${r.url} -> ${r.redirect}`);
      });
      console.log();
    }

    if (notFound.length > 0) {
      console.log("=== 404 Not Found ===");
      notFound.forEach((r) => {
        console.log(`${r.url}`);
        if (r.body) console.log(`Response: ${r.body}\n`);
      });
      console.log();
    }

    if (otherErrors.length > 0) {
      console.log("=== Other Errors ===");
      otherErrors.forEach((r) => {
        console.log(`${r.url}: ${r.error || r.statusCode}`);
        if (r.body) console.log(`Response: ${r.body}\n`);
      });
    }

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: results.length,
        ok: ok.length,
        redirects: redirects.length,
        notFound: notFound.length,
        otherErrors: otherErrors.length,
      },
      redirects: redirects.map((r) => ({
        from: r.url,
        to: r.redirect,
      })),
      notFound: notFound.map((r) => ({
        url: r.url,
        response: r.body,
      })),
      otherErrors: otherErrors.map((r) => ({
        url: r.url,
        error: r.error || r.statusCode,
        response: r.body,
      })),
    };

    fs.writeFileSync(
      path.join(process.cwd(), "url-check-report.json"),
      JSON.stringify(report, null, 2),
    );

    console.log("\nDetailed report saved to url-check-report.json");

    app.get("/locations/:slug", (req, res) => {
      res.redirect("/locations");
    });

    app.get("/county/:slug", (req, res) => {
      res.redirect("/locations");
    });

    app.get("/services/:service/:location", (req, res) => {
      res.redirect("/services");
    });

    app.get("/locations/:slug", (req, res) => {
      res.status(404).send("Page not found");
    });

    app.get("/county/:slug", (req, res) => {
      res.status(404).send("Page not found");
    });

    app.get("/services/:service/:location", (req, res) => {
      res.status(404).send("Page not found");
    });

    app.get("/locations/:slug", (req, res) => {
      res.redirect("/locations");
    });

    app.get("/county/:slug", (req, res) => {
      res.redirect("/locations");
    });

    app.get("/services/:service/:location", (req, res) => {
      res.redirect("/services");
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
