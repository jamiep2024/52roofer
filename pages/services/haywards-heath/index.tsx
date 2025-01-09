import Head from "next/head";
import Layout from "../../components/Layout";

export default function haywards_heath() {
  return (
    <Layout>
      <Head>
        <title>Haywards Heath | 52Roofer</title>
        <meta
          name="description"
          content="Professional haywards heath services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Haywards Heath</h1>
        <div className="prose max-w-none">
          <p>Professional haywards heath services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
