import { promises as fs } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function verifySiteStructure() {
  const pagesDir = join(process.cwd(), "pages");
  const issues = [];

  try {
    // Check for any remaining .js files in pages
    async function checkDirectory(dir) {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = join(dir, entry.name);

        if (entry.isDirectory()) {
          await checkDirectory(fullPath);
        } else if (
          entry.name.endsWith(".js") &&
          !entry.name.includes(".config.js") &&
          !entry.name.includes("api/")
        ) {
          issues.push(`Found .js file that should be .tsx: ${fullPath}`);
        }
      }
    }

    await checkDirectory(pagesDir);

    // Verify dynamic routes exist
    const requiredFiles = [
      "pages/locations/[city].tsx",
      "pages/services/[service].tsx",
      "pages/location/[slug].tsx",
    ];

    for (const file of requiredFiles) {
      try {
        await fs.access(join(process.cwd(), file));
      } catch {
        issues.push(`Missing required dynamic route: ${file}`);
      }
    }

    // Check for old-style location pages
    const files = await fs.readdir(pagesDir);
    const oldLocationPages = files.filter(
      (f) => f.startsWith("roofers-in-") && f.endsWith(".tsx"),
    );
    if (oldLocationPages.length > 0) {
      issues.push(
        `Found ${oldLocationPages.length} old-style location pages that should be migrated:`,
      );
      oldLocationPages.forEach((page) => {
        issues.push(`  - ${page}`);
      });
    }

    // Verify next.config.js has required sections
    const nextConfig = await fs.readFile(
      join(process.cwd(), "next.config.js"),
      "utf8",
    );
    if (!nextConfig.includes("redirects()")) {
      issues.push("next.config.js missing redirects configuration");
    }
    if (!nextConfig.includes("typescript")) {
      issues.push("next.config.js missing TypeScript configuration");
    }

    // Check for inconsistent service page formats
    const servicesDir = join(pagesDir, "services");
    const serviceFiles = await fs.readdir(servicesDir);
    const jsServicePages = serviceFiles.filter((f) => f.endsWith(".js"));
    if (jsServicePages.length > 0) {
      issues.push(
        `Found ${jsServicePages.length} service pages still in .js format:`,
      );
      jsServicePages.forEach((page) => {
        issues.push(`  - services/${page}`);
      });
    }

    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      issues: issues,
      status: issues.length === 0 ? "PASS" : "FAIL",
      recommendations: [],
    };

    if (issues.length > 0) {
      report.recommendations = [
        "Run convert-service-pages.js to convert remaining .js files to .tsx",
        "Run standardize-location-pages.js to migrate old location pages",
        "Run update-next-config.js to ensure all redirects are in place",
      ];
    }

    // Write report
    await fs.writeFile(
      "site-structure-verification.json",
      JSON.stringify(report, null, 2),
    );

    console.log("\nSite structure verification complete");
    console.log(`Status: ${report.status}`);
    console.log(`Found ${issues.length} issues`);
    if (issues.length > 0) {
      console.log("\nIssues found:");
      issues.forEach((issue) => console.log(`- ${issue}`));
      console.log("\nRecommendations:");
      report.recommendations.forEach((rec) => console.log(`- ${rec}`));
    }
  } catch (error) {
    console.error("Error verifying site structure:", error);
  }
}

verifySiteStructure();
