import Head from "next/head";
import Layout from "../../components/Layout";

export default function milton_keynes() {
  return (
    <Layout>
      <Head>
        <title>Roofing Services in Milton Keynes | 52Roofer</title>
        <meta
          name="description"
          content="Expert roofing services in Milton Keynes and surrounding areas. Quality workmanship guaranteed."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">
          Roofing Services in Milton Keynes
        </h1>
        <div className="prose max-w-none">
          <p>
            Expert roofing services in Milton Keynes and surrounding areas.
            Quality workmanship guaranteed.
          </p>
        </div>
      </div>
    </Layout>
  );
}
