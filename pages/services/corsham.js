import Head from "next/head";
import Layout from "../../components/Layout";

export default function corsham() {
  return (
    <Layout>
      <Head>
        <title>Corsham | 52Roofer</title>
        <meta
          name="description"
          content="Professional corsham services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Corsham</h1>
        <div className="prose max-w-none">
          <p>Professional corsham services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
