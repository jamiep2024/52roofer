const fs = require("fs");
const path = require("path");

const CONFIG = {
  currentDateTime: "2024-12-24 23:43:28",
  userLogin: "jamiep2024",
  baseUrl: "https://52roofer.com",
};

const VOICE_URLS = [
  {
    path: "/services/voice-roofing-services",
    fileName: "voice-roofing-services.js",
    title: "Voice Roofing Services",
    metaDesc:
      "Access professional roofing services through voice commands. Get instant assistance for all your roofing needs.",
  },
  {
    path: "/services/voice-roof-repairs",
    fileName: "voice-roof-repairs.js",
    title: "Voice Roof Repairs",
    metaDesc:
      "Get immediate voice-activated roof repair assistance. Quick and efficient service for all repair needs.",
  },
  {
    path: "/services/voice-roof-installation",
    fileName: "voice-roof-installation.js",
    title: "Voice Roof Installation",
    metaDesc:
      "Professional roof installation services with voice-activated scheduling and consultation.",
  },
];

console.log(`Starting URL check at: ${CONFIG.currentDateTime}`);
console.log(`User: ${CONFIG.userLogin}\n`);

// Ensure services directory exists
const servicesDir = path.join("pages", "services");
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
  console.log("Created services directory");
}

VOICE_URLS.forEach((page) => {
  const filePath = path.join("pages", "services", page.fileName);

  // Create page content
  const pageContent = `import Head from 'next/head';
import Layout from '../../components/Layout';

export default function ${page.title.replace(/\s+/g, "")}() {
    return (
        <Layout>
            <Head>
                <title>${page.title} | 52Roofer</title>
                <meta name="description" content="${page.metaDesc}" />
                <link rel="canonical" href="${CONFIG.baseUrl}${page.path}" />
                <script type="application/ld+json">
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "${page.title}",
                        "provider": {
                            "@type": "RoofingContractor",
                            "name": "52Roofer",
                            "url": "${CONFIG.baseUrl}"
                        },
                        "serviceType": "Roofing",
                        "description": "${page.metaDesc}"
                    }
                </script>
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">${page.title}</h1>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Voice Commands Available:</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>"Get a roofing quote"</li>
                        <li>"Schedule an inspection"</li>
                        <li>"Emergency roof repair"</li>
                        <li>"Contact roofing contractor"</li>
                    </ul>
                </div>

                <div className="prose max-w-none">
                    <h2>How to Use Voice Commands</h2>
                    <p>Simply click the microphone button and speak one of the available commands. Our system will automatically process your request and direct you to the appropriate service.</p>
                    
                    <h2>Available Services</h2>
                    <ul>
                        <li>Roof Inspections</li>
                        <li>Emergency Repairs</li>
                        <li>Maintenance Services</li>
                        <li>New Installations</li>
                        <li>Consultations</li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}`;

  // Write or update the file
  fs.writeFileSync(filePath, pageContent);
  console.log(`Created/Updated: ${page.path}`);
});

// Create or update index file for services
const servicesIndexPath = path.join("pages", "services", "index.js");
const servicesIndexContent = `import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Services() {
    return (
        <Layout>
            <Head>
                <title>Roofing Services | 52Roofer</title>
                <meta name="description" content="Comprehensive roofing services including voice-activated assistance, repairs, installations, and maintenance." />
                <link rel="canonical" href="${CONFIG.baseUrl}/services" />
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Our Services</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Voice Services */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Voice-Enabled Services</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services/voice-roofing-services" className="text-blue-600 hover:text-blue-800">
                                    Voice Roofing Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/voice-roof-repairs" className="text-blue-600 hover:text-blue-800">
                                    Voice Roof Repairs
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/voice-roof-installation" className="text-blue-600 hover:text-blue-800">
                                    Voice Roof Installation
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}`;

fs.writeFileSync(servicesIndexPath, servicesIndexContent);
console.log("Created/Updated: /services index page");

console.log(
  "\nAll voice service pages have been created/updated successfully!",
);
