const fetch = require("node-fetch");
const xml2js = require("xml2js");
const fs = require("fs").promises;
const path = require("path");

const BASE_URL = "https://52roofer.com";
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

const urlStatus = {
  ok: [],
  redirects: [],
  broken: [],
  notFound: [],
};

async function checkUrl(url) {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "manual",
      timeout: 5000,
    });
    const status = response.status;

    if (status === 200) {
      urlStatus.ok.push({ url, status });
    } else if (status >= 300 && status < 400) {
      urlStatus.redirects.push({
        url,
        status,
        location: response.headers.get("location"),
      });
    } else if (status === 404) {
      urlStatus.notFound.push({ url, status });
    } else {
      urlStatus.broken.push({ url, status });
    }

    return { url, status };
  } catch (error) {
    console.error(`Error checking ${url}:`, error.message);
    urlStatus.broken.push({ url, error: error.message });
    return { url, error: error.message };
  }
}

async function parseSitemap() {
  try {
    const response = await fetch(SITEMAP_URL);
    const xmlData = await response.text();
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(xmlData);
    return result.urlset.url.map((url) => url.loc[0]);
  } catch (error) {
    console.error("Error parsing sitemap:", error);
    throw error;
  }
}

async function generateReport() {
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: 0,
      ok: urlStatus.ok.length,
      redirects: urlStatus.redirects.length,
      notFound: urlStatus.notFound.length,
      broken: urlStatus.broken.length,
    },
    details: urlStatus,
  };

  report.summary.total =
    report.summary.ok +
    report.summary.redirects +
    report.summary.notFound +
    report.summary.broken;

  await fs.writeFile(
    path.join(process.cwd(), "url-check-report.json"),
    JSON.stringify(report, null, 2),
  );

  return report;
}

async function main() {
  console.log("Starting URL check...");

  const urls = await parseSitemap();
  console.log(`Found ${urls.length} URLs in sitemap`);

  const batchSize = 10;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    await Promise.all(batch.map((url) => checkUrl(url)));
    console.log(
      `Processed ${Math.min(i + batchSize, urls.length)}/${urls.length} URLs`,
    );
  }

  const report = await generateReport();
  console.log("\nURL Check Summary:");
  console.log(`Total URLs: ${report.summary.total}`);
  console.log(`OK: ${report.summary.ok}`);
  console.log(`Redirects: ${report.summary.redirects}`);
  console.log(`404 Not Found: ${report.summary.notFound}`);
  console.log(`Other Errors: ${report.summary.broken}`);
  console.log("\nDetailed report saved to url-check-report.json");
}

main().catch(console.error);
