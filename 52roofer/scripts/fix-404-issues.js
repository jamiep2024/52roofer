const fs = require("fs");
const path = require("path");

const CONFIG = {
  currentDateTime: "2024-12-25 00:07:06",
  userLogin: "jamiep2024",
};

// Create directory structure for sitemaps
const sitemapsDir = path.join("public", "sitemaps");
if (!fs.existsSync(sitemapsDir)) {
  fs.mkdirSync(sitemapsDir, { recursive: true });
}

// Create basic sitemap templates
const sitemaps = {
  "services.xml": `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://52roofer.com/services/voice-roofing-services</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
        <loc>https://52roofer.com/services/voice-roof-repairs</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
        <loc>https://52roofer.com/services/voice-roof-installation</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
</urlset>`,

  "resources.xml": `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://52roofer.com/resources</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
</urlset>`,

  "locations.xml": `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Location URLs will be dynamically generated -->
</urlset>`,

  "blog.xml": `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Blog URLs will be dynamically generated -->
</urlset>`,
};

// Create service pages
const servicePages = [
  {
    slug: "gutter-services",
    title: "Gutter Services",
    description:
      "Professional gutter installation, repair, and maintenance services.",
  },
  {
    slug: "emergency-roof-repairs",
    title: "Emergency Roof Repairs",
    description:
      "24/7 emergency roof repair services for all types of roofing emergencies.",
  },
];

// Create service pages
servicePages.forEach((service) => {
  const content = `
import Head from 'next/head';
import Layout from '../../components/Layout';

export default function ${service.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")}() {
    return (
        <Layout>
            <Head>
                <title>${service.title} | 52Roofer</title>
                <meta name="description" content="${service.description}" />
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">${service.title}</h1>
                <div className="prose max-w-none">
                    <p>${service.description}</p>
                </div>
            </div>
        </Layout>
    );
}`;

  const servicePath = path.join("pages", "services", `${service.slug}.js`);
  fs.writeFileSync(servicePath, content);
  console.log(`Created service page: ${servicePath}`);
});

// Create dynamic route handlers
const dynamicRoutes = {
  "pages/services/[service].js": `
import Head from 'next/head';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function ServicePage() {
    const router = useRouter();
    const { service } = router.query;

    return (
        <Layout>
            <Head>
                <title>{service} | 52Roofer</title>
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">{service}</h1>
            </div>
        </Layout>
    );
}`,

  "pages/locations/[city].js": `
import Head from 'next/head';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function CityPage() {
    const router = useRouter();
    const { city } = router.query;

    return (
        <Layout>
            <Head>
                <title>Roofing Services in {city} | 52Roofer</title>
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">Roofing Services in {city}</h1>
            </div>
        </Layout>
    );
}`,
};

// Create dynamic route handlers
Object.entries(dynamicRoutes).forEach(([file, content]) => {
  const filePath = path.join(file);
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, content);
  console.log(`Created dynamic route handler: ${filePath}`);
});

// Create sitemaps
Object.entries(sitemaps).forEach(([filename, content]) => {
  const filepath = path.join(sitemapsDir, filename);
  fs.writeFileSync(filepath, content);
  console.log(`Created sitemap: ${filepath}`);
});

console.log("\nFix completed! Please:");
console.log("1. Rebuild the project: npm run build");
console.log("2. Restart the development server: npm run dev");
console.log("3. Re-run URL verification: node scripts/verify-urls.js");
