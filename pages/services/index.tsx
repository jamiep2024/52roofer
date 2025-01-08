import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Voice-Enabled Roofing Services | 52Roofer</title>
        <meta
          name="description"
          content="Access our roofing services through voice commands. Professional roofing solutions made easy."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Voice-Enabled Roofing Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Roofing Services</h2>
            <Link
              href="/services/voice-roofing-services"
              className="text-blue-600 hover:text-blue-800 block mb-2"
            >
              Voice Roofing Services →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Roof Repairs</h2>
            <Link
              href="/services/voice-roof-repairs"
              className="text-blue-600 hover:text-blue-800 block mb-2"
            >
              Voice Roof Repairs →
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Roof Installation</h2>
            <Link
              href="/services/voice-roof-installation"
              className="text-blue-600 hover:text-blue-800 block mb-2"
            >
              Voice Roof Installation →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
