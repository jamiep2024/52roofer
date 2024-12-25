const fs = require("fs");
const path = require("path");

const pagesDir = path.join(process.cwd(), "pages");

// Get all location pages
const locationPages = fs
  .readdirSync(pagesDir)
  .filter((file) => file.startsWith("roofers-in-") && file.endsWith(".tsx"));

locationPages.forEach((file) => {
  let content = fs.readFileSync(path.join(pagesDir, file), "utf8");

  // Only update if LocalBusinessSchema isn't already imported
  if (!content.includes("LocalBusinessSchema")) {
    // Add import
    content = content.replace(
      "import { businesses } from '../data/businesses';",
      "import { businesses } from '../data/businesses';\nimport LocalBusinessSchema from '../components/seo/LocalBusinessSchema';",
    );

    // Add schema component
    const locationName = file
      .replace("roofers-in-", "")
      .replace("-oxford.tsx", "")
      .replace("-wiltshire.tsx", "")
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    content = content.replace("<Head>", `<Head>`);

    content = content.replace(
      "</Head>",
      `</Head>\n\n      <LocalBusinessSchema 
        businessName="52Roofer ${locationName}"
        location={location}
        url="https://52roofer.com/roofers-in-${file.replace(".tsx", "")}"
        image="https://52roofer.com/images/hero-bg.jpg"
      />`,
    );

    fs.writeFileSync(path.join(pagesDir, file), content);
  }
});
