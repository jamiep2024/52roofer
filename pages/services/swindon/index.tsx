import Head from "next/head";
import Layout from "../../components/Layout";

export default function swindon() {
  return (
    <Layout>
      <Head>
        <title>Swindon | 52Roofer</title>
        <meta
          name="description"
          content="Professional swindon services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Swindon</h1>
        <div className="prose max-w-none">
          <p>Professional swindon services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
