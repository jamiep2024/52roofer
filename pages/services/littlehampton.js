import Head from "next/head";
import Layout from "../../components/Layout";

export default function littlehampton() {
  return (
    <Layout>
      <Head>
        <title>Littlehampton | 52Roofer</title>
        <meta
          name="description"
          content="Professional littlehampton services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Littlehampton</h1>
        <div className="prose max-w-none">
          <p>Professional littlehampton services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
