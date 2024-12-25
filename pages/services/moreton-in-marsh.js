import Head from "next/head";
import Layout from "../../components/Layout";

export default function moreton_in_marsh() {
  return (
    <Layout>
      <Head>
        <title>Moreton In Marsh | 52Roofer</title>
        <meta
          name="description"
          content="Professional moreton in marsh services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Moreton In Marsh</h1>
        <div className="prose max-w-none">
          <p>Professional moreton in marsh services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
