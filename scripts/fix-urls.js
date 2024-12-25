import { promises as fs } from 'fs';
import path from 'path';
import glob from 'glob';

interface RedirectMap {
  [key: string]: string;
}

interface UrlReport {
  details: {
    notFound: Array<{
      url: string;
      status?: number;
    }>;
  };
  summary?: {
    total: number;
    notFound: number;
  };
}

interface Redirect {
  source: string;
  destination: string;
  permanent: boolean;
}

const REDIRECTS_MAP: RedirectMap = {
  // Basic redirects
  "/location/": "/locations/",
  "/service/": "/services/",
  "/areas/": "/locations/",
  
  // Service specific redirects
  "/services/maintenance": "/services/roof-maintenance",
  "/services/emergency-repairs": "/services/emergency-roof-repairs",
  "/emergency/": "/services/emergency-roof-repairs/",
  "/residential/": "/services/residential-roofing/",
  "/commercial/": "/services/commercial-roofing/",
  "/repairs/": "/services/roof-repairs/",
  "/replacement/": "/services/roof-replacement/",
  
  // Common roofing terms
  "/estimate": "/quote",
  "/free-estimate": "/quote",
  "/quote-request": "/quote",
  "/roof-estimate": "/quote",
  "/roofing-estimate": "/quote",
  "/get-quote": "/quote",
  "/request-quote": "/quote",
  
  // Roofing Services
  "/metal-roofing": "/services/metal-roofs",
  "/slate-roofing": "/services/slate-roofs",
  "/flat-roofing": "/services/flat-roofs",
  "/tile-roofing": "/services/tile-roofs",
  "/shingle-roofing": "/services/shingle-roofs",
  "/tpo-roofing": "/services/commercial-roofing",
  "/epdm-roofing": "/services/commercial-roofing",
  "/roof-coating": "/services/roof-coating",
  "/roof-sealing": "/services/roof-maintenance",
  
  // Additional services
  "/gutters": "/services/gutter-services",
  "/gutter-repair": "/services/gutter-services",
  "/gutter-installation": "/services/gutter-services",
  "/siding": "/services/siding-services",
  "/vinyl-siding": "/services/siding-services",
  "/inspection": "/services/roof-inspection",
  "/maintenance": "/services/maintenance",
  "/storm-damage": "/services/emergency-roof-repairs",
  "/leak-repair": "/services/emergency-roof-repairs",
  "/skylight": "/services/skylight-installation",
  
  // Info pages
  "/about-us": "/about",
  "/our-team": "/about",
  "/contact-us": "/contact",
  "/blog": "/news",
  "/articles": "/news",
  "/posts": "/news",
  
  // Location based
  "/service-area": "/locations",
  "/coverage": "/locations",
  "/areas-served": "/locations",
  "/zip-codes": "/locations",
  "/cities": "/locations",
  
  // Resources
  "/faq": "/resources/faq",
  "/faqs": "/resources/faq",
  "/gallery": "/portfolio",
  "/projects": "/portfolio",
  "/completed-work": "/portfolio",
  "/testimonials": "/reviews",
  "/reviews": "/testimonials",
  "/financing": "/payment-options",
  "/warranty": "/services/warranty",
  "/insurance": "/services/insurance-claims",
  "/insurance-claims": "/services/insurance-claims",
  
  // Special pages
  "/emergency-service": "/services/emergency-roof-repairs",
  "/24-hour": "/services/emergency-roof-repairs",
  "/careers": "/about/careers",
  "/jobs": "/about/careers"
};

function normalizeUrl(url: string): string {
  return url.toLowerCase()
    .replace(/\/+$/, '')  // Remove trailing slashes
    .replace(/^\/+/, '/') // Ensure single leading slash
    .replace(/\/{2,}/g, '/'); // Replace multiple slashes with single
}

async function readUrlReport(): Promise<UrlReport> {
  try {
    const reportPath = path.join(process.cwd(), "url-check-report.json");
    const reportData = await fs.readFile(reportPath, "utf8");
    return JSON.parse(reportData) as UrlReport;
  } catch (error) {
    console.error("Error reading URL report:", error);
    throw error;
  }
}

async function generateNextRedirects(): Promise<Redirect[]> {
  const report = await readUrlReport();
  const redirects = new Set<Redirect>();
  
  console.log(`Processing ${report.details.notFound.length} 404 URLs...`);

  report.details.notFound.forEach(({ url }) => {
    try {
      const parsedUrl = new URL(url);
      let pathName = normalizeUrl(parsedUrl.pathname);

      // Try exact matches first
      if (REDIRECTS_MAP[pathName]) {
        redirects.add({
          source: pathName,
          destination: REDIRECTS_MAP[pathName],
          permanent: true
        });
        return;
      }

      // Try pattern matching for partial URLs
      for (const [oldPath, newPath] of Object.entries(REDIRECTS_MAP)) {
        if (pathName.startsWith(oldPath)) {
          const newUrl = pathName.replace(oldPath, newPath);
          redirects.add({
            source: pathName,
            destination: newUrl,
            permanent: true
          });
          break;
        }
      }

      // Handle trailing slashes
      if (!redirects.has({ source: pathName, destination: '', permanent: true } as Redirect) && !pathName.endsWith('/')) {
        const pathWithSlash = `${pathName}/`;
        if (REDIRECTS_MAP[pathWithSlash]) {
          redirects.add({
            source: pathName,
            destination: REDIRECTS_MAP[pathWithSlash],
            permanent: true
          });
        }
      }
    } catch (error) {
      console.warn(`Invalid URL: ${url}`, error);
    }
  });

  console.log(`Generated ${redirects.size} redirects`);
  return Array.from(redirects);
}

async function updateNextConfig(): Promise<void> {
  const configPath = path.join(process.cwd(), "next.config.js");
  const redirects = await generateNextRedirects();

  try {
    let configContent = await fs.readFile(configPath, "utf8");
    const redirectsJson = JSON.stringify(redirects, null, 2);
    
    if (!configContent.includes("async redirects()")) {
      configContent = configContent.replace(
        "const nextConfig = {",
        `const nextConfig = {
  async redirects() {
    return ${redirectsJson};
  },`
      );
    } else {
      configContent = configContent.replace(
        /async redirects\(\) {[\s\S]*?return \[([\s\S]*?)\];}/,
        `async redirects() {
    return ${redirectsJson};
  }`
      );
    }

    await fs.writeFile(configPath, configContent);
    console.log(`Updated next.config.js with ${redirects.length} redirects`);
  } catch (error) {
    if (error instanceof Error && (error as NodeJS.ErrnoException).code === 'ENOENT') {
      // Create next.config.js if it doesn't exist
      const newConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return ${JSON.stringify(redirects, null, 2)};
  }
};

module.exports = nextConfig;
`;
      await fs.writeFile(configPath, newConfig);
      console.log(`Created next.config.js with ${redirects.length} redirects`);
    } else {
      console.error("Error updating next.config.js:", error);
      throw error;
    }
  }
}

async function updateInternalLinks(): Promise<void> {
  try {
    const files = glob.sync("src/**/*.{ts,tsx,js,jsx,mdx}");
    let updatedFiles = 0;
    
    for (const file of files) {
      let content = await fs.readFile(file, "utf8");
      let updated = false;

      for (const [oldPath, newPath] of Object.entries(REDIRECTS_MAP)) {
        if (content.includes(oldPath)) {
          content = content.replace(new RegExp(oldPath.replace(/\//g, '\\/'), 'g'), newPath);
          updated = true;
        }
      }

      if (updated) {
        await fs.writeFile(file, content);
        updatedFiles++;
        console.log(`Updated links in ${file}`);
      }
    }

    console.log(`Updated ${updatedFiles} files with new URLs`);
  } catch (error) {
    console.error("Error updating internal links:", error);
    throw error;
  }
}

async function main(): Promise<void> {
  try {
    console.log("Starting URL fixes...");
    
    try {
      await fs.access("url-check-report.json");
    } catch {
      console.error("Please run npm run check-links first to generate the URL report");
      process.exit(1);
    }

    await updateNextConfig();
    await updateInternalLinks();
    
    console.log("URL fixes completed successfully");
  } catch (error) {
    console.error("Error fixing URLs:", error);
    process.exit(1);
  }
}

main().catch(console.error);