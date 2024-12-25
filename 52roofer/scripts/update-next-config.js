const fs = require("fs").promises;
const path = require("path");

async function updateNextConfig() {
  const configPath = path.join(process.cwd(), "next.config.js");

  try {
    // Generate redirects for all URL patterns
    const redirects = [
      // Redirect old service pages
      {
        source: "/services/:service.js",
        destination: "/services/:service",
        permanent: true,
      },
      // Redirect old location pages to new dynamic route
      {
        source: "/roofers-in-:location",
        destination: "/locations/:location",
        permanent: true,
      },
      // Redirect old county pages
      {
        source: "/county/:county",
        destination: "/locations/:county",
        permanent: true,
      },
      // Redirect nested location pages
      {
        source: "/locations/:city/:area",
        destination: "/locations/:area",
        permanent: true,
      },
      // Handle potential variations of location URLs
      {
        source: "/location/:city",
        destination: "/locations/:city",
        permanent: true,
      },
      // Redirect service+location combinations
      {
        source: "/services/:service/:location",
        destination: "/locations/:location",
        permanent: true,
      },
    ];

    // Read existing next.config.js
    let content = await fs.readFile(configPath, "utf8");

    // Check if redirects already exist
    if (content.includes("async redirects()")) {
      // Update existing redirects
      const redirectsSection = `  async redirects() {
    return ${JSON.stringify(redirects, null, 2)};
  }`;

      content = content.replace(
        /async redirects\(\) {[\s\S]*?}/,
        redirectsSection,
      );
    } else {
      // Add new redirects section
      content = content.replace(
        "module.exports = {",
        `module.exports = {
  async redirects() {
    return ${JSON.stringify(redirects, null, 2)};
  },`,
      );
    }

    // Add other necessary Next.js configurations
    if (!content.includes("typescript")) {
      content = content.replace(
        "module.exports = {",
        `module.exports = {
  typescript: {
    ignoreBuildErrors: false,
  },`,
      );
    }

    // Add image optimization config if not present
    if (!content.includes("images")) {
      content = content.replace(
        "module.exports = {",
        `module.exports = {
  images: {
    domains: ['localhost'],
    minimumCacheTTL: 60,
  },`,
      );
    }

    await fs.writeFile(configPath, content);
    console.log("Updated next.config.js with redirects and configurations");
  } catch (error) {
    console.error("Error updating next.config.js:", error);
  }
}

updateNextConfig();
