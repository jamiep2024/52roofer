import Head from "next/head";
import Layout from "../../components/Layout";

export default function reigate() {
  return (
    <Layout>
      <Head>
        <title>Reigate | 52Roofer</title>
        <meta
          name="description"
          content="Professional reigate services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Reigate</h1>
        <div className="prose max-w-none">
          <p>Professional reigate services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
