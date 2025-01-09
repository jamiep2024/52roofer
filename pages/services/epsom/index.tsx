import Head from "next/head";
import Layout from "../../components/Layout";

export default function epsom() {
  return (
    <Layout>
      <Head>
        <title>Epsom | 52Roofer</title>
        <meta
          name="description"
          content="Professional epsom services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Epsom</h1>
        <div className="prose max-w-none">
          <p>Professional epsom services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
