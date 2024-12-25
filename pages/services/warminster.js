import Head from "next/head";
import Layout from "../../components/Layout";

export default function warminster() {
  return (
    <Layout>
      <Head>
        <title>Warminster | 52Roofer</title>
        <meta
          name="description"
          content="Professional warminster services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Warminster</h1>
        <div className="prose max-w-none">
          <p>Professional warminster services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
