const fs = require("fs");
const path = require("path");
const axios = require("axios");

const CONFIG = {
  currentDateTime: "2024-12-25 00:31:30",
  userLogin: "jamiep2024",
  baseUrl: "https://52roofer.com",
  outputFile: "category-fixes-report.json",
};

// Load previous results
const previousResults = JSON.parse(fs.readFileSync("url-fix-report.json"));

async function applyCategoryFixes() {
  console.log("Starting category-specific fixes...\n");

  // 1. Fix Services (1821 URLs)
  console.log("Fixing Services Pages...");
  await fixServicesPages();

  // 2. Fix Static Pages (110 URLs)
  console.log("\nFixing Static Pages...");
  await fixStaticPages();

  // 3. Fix Blog Pages (10 URLs)
  console.log("\nFixing Blog Pages...");
  await fixBlogPages();

  // 4. Fix Resource Pages (3 URLs)
  console.log("\nFixing Resource Pages...");
  await fixResourcePages();

  // 5. Fix Location Pages (7 URLs)
  console.log("\nFixing Location Pages...");
  await fixLocationPages();
}

async function fixServicesPages() {
  const serviceUrls = previousResults.urls.filter((u) => u.type === "services");

  // Create services sitemap
  const servicesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${serviceUrls
  .map(
    (url) => `
    <url>
        <loc>${url.url}</loc>
        <lastmod>${CONFIG.currentDateTime.split(" ")[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`,
  )
  .join("")}
</urlset>`;

  fs.writeFileSync("public/sitemaps/services.xml", servicesXml);

  // Create dynamic service handler
  const serviceHandler = `
import Head from 'next/head';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function ServicePage() {
    const router = useRouter();
    const { service } = router.query;
    const title = service ? service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';

    return (
        <Layout>
            <Head>
                <title>{title} | 52Roofer</title>
                <meta name="description" content={\`Professional \${title} services by 52Roofer. Expert solutions for all your roofing needs.\`} />
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">{title}</h1>
                <div className="prose max-w-none">
                    {/* Dynamic content will be loaded here */}
                </div>
            </div>
        </Layout>
    );
}`;

  fs.writeFileSync("pages/services/[service].js", serviceHandler);
}

async function fixStaticPages() {
  const staticUrls = previousResults.urls.filter((u) => u.type === "static");

  // Create static pages sitemap
  const staticXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls
  .map(
    (url) => `
    <url>
        <loc>${url.url}</loc>
        <lastmod>${CONFIG.currentDateTime.split(" ")[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>`,
  )
  .join("")}
</urlset>`;

  fs.writeFileSync("public/sitemaps/static.xml", staticXml);
}

async function fixBlogPages() {
  const blogUrls = previousResults.urls.filter((u) => u.type === "blog");

  // Create blog sitemap
  const blogXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogUrls
  .map(
    (url) => `
    <url>
        <loc>${url.url}</loc>
        <lastmod>${CONFIG.currentDateTime.split(" ")[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>`,
  )
  .join("")}
</urlset>`;

  fs.writeFileSync("public/sitemaps/blog.xml", blogXml);

  // Create dynamic blog handler
  const blogHandler = `
import Head from 'next/head';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
    const title = slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';

    return (
        <Layout>
            <Head>
                <title>{title} | 52Roofer Blog</title>
                <meta name="description" content={\`\${title} - Read more about roofing tips, maintenance, and professional services on the 52Roofer blog.\`} />
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">{title}</h1>
                <div className="prose max-w-none">
                    {/* Blog content will be loaded here */}
                </div>
            </div>
        </Layout>
    );
}`;

  fs.writeFileSync("pages/blog/[slug].js", blogHandler);
}

async function fixResourcePages() {
  const resourceUrls = previousResults.urls.filter(
    (u) => u.type === "resources",
  );

  // Create resources sitemap
  const resourcesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${resourceUrls
  .map(
    (url) => `
    <url>
        <loc>${url.url}</loc>
        <lastmod>${CONFIG.currentDateTime.split(" ")[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>`,
  )
  .join("")}
</urlset>`;

  fs.writeFileSync("public/sitemaps/resources.xml", resourcesXml);
}

async function fixLocationPages() {
  const locationUrls = previousResults.urls.filter(
    (u) => u.type === "locations",
  );

  // Create locations sitemap
  const locationsXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locationUrls
  .map(
    (url) => `
    <url>
        <loc>${url.url}</loc>
        <lastmod>${CONFIG.currentDateTime.split(" ")[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`,
  )
  .join("")}
</urlset>`;

  fs.writeFileSync("public/sitemaps/locations.xml", locationsXml);

  // Create dynamic location handler
  const locationHandler = `
import Head from 'next/head';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function LocationPage() {
    const router = useRouter();
    const { location } = router.query;
    const title = location ? location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';

    return (
        <Layout>
            <Head>
                <title>Roofing Services in {title} | 52Roofer</title>
                <meta name="description" content={\`Professional roofing services in \${title}. Local experts providing quality roofing solutions.\`} />
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">Roofing Services in {title}</h1>
                <div className="prose max-w-none">
                    {/* Location-specific content will be loaded here */}
                </div>
            </div>
        </Layout>
    );
}`;

  fs.writeFileSync("pages/locations/[location].js", locationHandler);
}

// Run the fixes
applyCategoryFixes()
  .then(() => {
    console.log("\nCategory fixes completed!");
    console.log(`Total pages processed: ${previousResults.urls.length}`);
    console.log("\nNext steps:");
    console.log("1. Run: npm run build");
    console.log("2. Start server: npm run dev");
    console.log("3. Verify fixes: node scripts/verify-urls.js");
  })
  .catch((error) => {
    console.error("Error applying fixes:", error);
    process.exit(1);
  });
