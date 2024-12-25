import Head from "next/head";
import Layout from "../../components/Layout";

export default function milton_keynes() {
  return (
    <Layout>
      <Head>
        <title>Milton Keynes | 52Roofer</title>
        <meta
          name="description"
          content="Professional milton keynes services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Milton Keynes</h1>
        <div className="prose max-w-none">
          <p>Professional milton keynes services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
