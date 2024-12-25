import Head from "next/head";
import Layout from "../../components/Layout";

export default function thame() {
  return (
    <Layout>
      <Head>
        <title>Thame | 52Roofer</title>
        <meta
          name="description"
          content="Professional thame services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Thame</h1>
        <div className="prose max-w-none">
          <p>Professional thame services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
