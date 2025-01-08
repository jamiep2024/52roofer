import Head from "next/head";
import Layout from "../../components/Layout";

export default function horsham() {
  return (
    <Layout>
      <Head>
        <title>Horsham | 52Roofer</title>
        <meta
          name="description"
          content="Professional horsham services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Horsham</h1>
        <div className="prose max-w-none">
          <p>Professional horsham services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
