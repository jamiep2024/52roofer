const https = require("https");
const fs = require("fs").promises;

const DOMAIN = "https://52roofer.co.uk";

async function checkUrl(url) {
  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        const status = res.statusCode;
        const location = res.headers.location;

        resolve({
          url,
          status,
          redirect: status >= 300 && status < 400 ? location : null,
          ok: status >= 200 && status < 300,
        });
      })
      .on("error", (err) => {
        resolve({
          url,
          status: "error",
          error: err.message,
          ok: false,
        });
      });
  });
}

async function verifySitemapUrls(urls) {
  console.log(`Checking ${urls.length} URLs...\n`);

  const results = {
    ok: [],
    redirects: [],
    errors: [],
    notFound: [],
  };

  for (const url of urls) {
    const result = await checkUrl(url);

    if (result.ok) {
      results.ok.push(url);
    } else if (result.status >= 300 && result.status < 400) {
      results.redirects.push({
        from: url,
        to: result.redirect,
      });
    } else if (result.status === 404) {
      results.notFound.push(url);
    } else {
      results.errors.push({
        url,
        status: result.status,
        error: result.error,
      });
    }

    // Log progress
    process.stdout.write(".");
  }

  console.log("\n\nResults:");
  console.log("--------");
  console.log(`✓ ${results.ok.length} URLs OK`);

  if (results.redirects.length > 0) {
    console.log("\n301 Redirects:");
    results.redirects.forEach(({ from, to }) => {
      console.log(`${from} -> ${to}`);
    });
  }

  if (results.notFound.length > 0) {
    console.log("\n404 Not Found:");
    results.notFound.forEach((url) => console.log(url));
  }

  if (results.errors.length > 0) {
    console.log("\nErrors:");
    results.errors.forEach(({ url, status, error }) => {
      console.log(`${url}: ${status} ${error || ""}`);
    });
  }

  return results;
}

// Export for use in other scripts
module.exports = {
  checkUrl,
  verifySitemapUrls,
};

// Allow running directly
if (require.main === module) {
  const [, , sitemapPath] = process.argv;
  if (!sitemapPath) {
    console.error("Please provide a sitemap path");
    process.exit(1);
  }

  fs.readFile(sitemapPath, "utf8")
    .then((content) => {
      const urls = content.match(/(?<=<loc>).*?(?=<\/loc>)/g) || [];
      return verifySitemapUrls(urls);
    })
    .catch(console.error);
}
