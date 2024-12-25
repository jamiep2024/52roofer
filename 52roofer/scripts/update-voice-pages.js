const fs = require("fs");
const path = require("path");

const CONFIG = {
  currentDateTime: "2024-12-24 23:48:43",
  userLogin: "jamiep2024",
  baseUrl: "https://52roofer.com",
};

// First, create the services directory if it doesn't exist
const servicesDir = path.join("pages", "services");
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

// Create services index page
const servicesIndexContent = `
import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Services() {
    return (
        <Layout>
            <Head>
                <title>Voice-Enabled Roofing Services | 52Roofer</title>
                <meta name="description" content="Access our roofing services through voice commands. Professional roofing solutions made easy." />
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Voice-Enabled Roofing Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Roofing Services</h2>
                        <Link href="/services/voice-roofing-services" 
                              className="text-blue-600 hover:text-blue-800 block mb-2">
                            Voice Roofing Services →
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Roof Repairs</h2>
                        <Link href="/services/voice-roof-repairs" 
                              className="text-blue-600 hover:text-blue-800 block mb-2">
                            Voice Roof Repairs →
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Roof Installation</h2>
                        <Link href="/services/voice-roof-installation" 
                              className="text-blue-600 hover:text-blue-800 block mb-2">
                            Voice Roof Installation →
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}`;

fs.writeFileSync(path.join(servicesDir, "index.js"), servicesIndexContent);

// Create individual voice service pages
const pages = [
  {
    name: "voice-roofing-services",
    title: "Voice Roofing Services",
    description:
      "Access our professional roofing services through voice commands. Get instant assistance for all your roofing needs.",
  },
  {
    name: "voice-roof-repairs",
    title: "Voice Roof Repairs",
    description:
      "Voice-activated roof repair services. Quick and efficient response to all repair needs.",
  },
  {
    name: "voice-roof-installation",
    title: "Voice Roof Installation",
    description:
      "Schedule and manage your roof installation through voice commands. Professional installation services.",
  },
];

pages.forEach((page) => {
  const content = `
import Head from 'next/head';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function ${page.name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")}() {
    return (
        <Layout>
            <Head>
                <title>${page.title} | 52Roofer</title>
                <meta name="description" content="${page.description}" />
                <link rel="canonical" href="${CONFIG.baseUrl}/services/${page.name}" />
            </Head>
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <Link href="/services" className="text-blue-600 hover:text-blue-800">← Back to Services</Link>
                </div>
                <h1 className="text-4xl font-bold mb-6">${page.title}</h1>
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Available Voice Commands</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>"Get a roofing quote"</li>
                        <li>"Schedule an inspection"</li>
                        <li>"Emergency roof repair"</li>
                        <li>"Contact a roofing specialist"</li>
                    </ul>
                </div>
                <div className="prose max-w-none">
                    <h2>How It Works</h2>
                    <p>Simply speak your request, and our voice-enabled system will guide you to the right service.</p>
                </div>
            </div>
        </Layout>
    );
}`;

  fs.writeFileSync(path.join(servicesDir, `${page.name}.js`), content);
  console.log(`Created/Updated: ${page.name}.js`);
});

console.log("\nAll voice service pages have been updated successfully!");
