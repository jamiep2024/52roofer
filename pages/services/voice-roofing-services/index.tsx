import Head from "next/head";
import Layout from "../../../components/layout/Layout";
import Link from "next/link";

export default function VoiceRoofingServices() {
  return (
    <Layout>
      <Head>
        <title>Voice Roofing Services | 52Roofer</title>
        <meta
          name="description"
          content="Access our professional roofing services through voice commands. Get instant assistance for all your roofing needs."
        />
        <link
          rel="canonical"
          href="https://52roofer.com/services/voice-roofing-services"
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/services">
            &larr; Back to Services
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-6">Voice Roofing Services</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Available Voice Commands
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>"Get a roofing quote"</li>
            <li>"Schedule an inspection"</li>
            <li>"Emergency roof repair"</li>
            <li>"Contact a roofing specialist"</li>
          </ul>
        </div>
        <div className="prose max-w-none">
          <h2>How It Works</h2>
          <p>
            Simply speak your request, and our voice-enabled system will guide
            you to the right service.
          </p>
        </div>
      </div>
    </Layout>
  );
}
