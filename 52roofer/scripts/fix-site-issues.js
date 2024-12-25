const fs = require("fs");
const path = require("path");
const { glob } = require("glob");

const PAGES_DIR = path.join(process.cwd(), "pages");

const EXCLUDED_URLS = [
  "/services/voice-roofing-services",
  "/services/voice-roof-repairs",
  "/services/voice-roof-installation",
];

const getConsolidatedSchema = (config) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": `https://52roofer.com${config.path}#organization`,
      name: "52Roofer",
      url: `https://52roofer.com${config.path}`,
      image: "https://52roofer.com/images/hero-bg.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Oxford",
        addressRegion: "Oxfordshire",
        addressCountry: "GB",
      },
    },
    {
      "@type": "WebPage",
      "@id": `https://52roofer.com${config.path}#webpage`,
      url: `https://52roofer.com${config.path}`,
      name: config.title,
      isPartOf: { "@id": "https://52roofer.com/#website" },
    },
    {
      "@type": "FAQPage",
      "@id": `https://52roofer.com${config.path}#faq`,
      mainEntity: config.faqs || [],
    },
  ],
});

async function fixSchemaIssues(filePath) {
  try {
    console.log(`Fixing schema issues for: ${filePath}`);
    const content = fs.readFileSync(filePath, "utf8");
    const relativePath = path.relative(PAGES_DIR, filePath);
    const urlPath =
      "/" + relativePath.replace(/\.[jt]sx?$/, "").replace(/\/index$/, "");
    if (EXCLUDED_URLS.includes(urlPath)) {
      console.log(`Skipping excluded URL: ${urlPath}`);
      return;
    }
    const schemaMatch = content.match(
      /type="application\/ld\+json"[^>]*>\s*({[\s\S]*?})\s*<\/script>/g,
    );
    const configMatch = content.match(/const\s+config\s*=\s*({[\s\S]*?});/);
    let pageConfig = {
      path: urlPath,
      title: "Roofing Services",
      faqs: [],
    };
    if (configMatch) {
      try {
        const configStr = configMatch[1]
          .replace(/(\w+):/g, '"$1":')
          .replace(/'/g, '"')
          .replace(/,(\s*[}\]])/g, "$1");
        pageConfig = { ...pageConfig, ...JSON.parse(configStr) };
      } catch (e) {
        console.warn(`Warning: Could not parse config in ${filePath}`);
      }
    }
    const newSchema = getConsolidatedSchema(pageConfig);
    const schemaScript = `<script type="application/ld+json">${JSON.stringify(newSchema, null, 2)}</script>`;
    let newContent;
    if (schemaMatch) {
      newContent = content.replace(
        /<script type="application\/ld\+json"[\s\S]*?<\/script>/g,
        schemaScript,
      );
    } else {
      newContent = content.replace("</Head>", `  ${schemaScript}\n</Head>`);
    }
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed schema in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing schema issues for ${filePath}:`, error);
  }
}

async function fixRoutingIssues() {
  try {
    console.log("Fixing routing issues...");
    const nextConfigPath = path.join(process.cwd(), "next.config.js");
    const nextConfig = fs.readFileSync(nextConfigPath, "utf8");
    const updatedConfig = nextConfig.replace(
      /async redirects\(\) {[\s\S]*?return \[([\s\S]*?)\]}/,
      (match, redirects) => {
        const existingRedirects = redirects.trim();
        return `async redirects() {
      return [
        {
          source: '/location/:path*',
          destination: '/locations/:path*',
          permanent: true
        },
        ${existingRedirects}
      ]
    }`;
      },
    );
    fs.writeFileSync(nextConfigPath, updatedConfig);
    console.log("Updated routing configuration in next.config.js");
  } catch (error) {
    console.error("Error fixing routing issues:", error);
  }
}

async function updateSitemap() {
  try {
    console.log("Updating sitemap...");
    const files = await glob("**/*.{tsx,jsx}", { cwd: PAGES_DIR });
    const urls = [];
    for (const file of files) {
      if (
        file.startsWith("api/") ||
        file.startsWith("_") ||
        EXCLUDED_URLS.some((url) => file.includes(url))
      ) {
        continue;
      }
      const urlPath =
        "/" + file.replace(/\.[jt]sx?$/, "").replace(/\/index$/, "");
      urls.push(`https://52roofer.com${urlPath}`);
    }
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`,
      )
      .join("")}
</urlset>`;
    fs.writeFileSync(path.join(process.cwd(), "public/sitemap.xml"), sitemap);
    console.log("Updated sitemap.xml");
  } catch (error) {
    console.error("Error updating sitemap:", error);
  }
}

async function fixAllIssues() {
  try {
    console.log("Starting site-wide fixes...");
    const files = await glob("**/*.{tsx,jsx}", { cwd: PAGES_DIR });
    console.log(`Found ${files.length} files.`);
    for (const file of files) {
      console.log(`Processing file: ${file}`);
      await fixSchemaIssues(path.join(PAGES_DIR, file));
    }
    await fixRoutingIssues();
    await updateSitemap();
    console.log("Completed all fixes");
  } catch (error) {
    console.error("Error during fixAllIssues:", error);
  }
}

fixAllIssues().catch((error) => {
  console.error("Error during fixAllIssues:", error);
});
