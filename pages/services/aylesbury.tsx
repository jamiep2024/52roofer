import Head from "next/head";
import Layout from "../../components/Layout";

export default function aylesbury() {
  return (
    <Layout>
      <Head>
        <title>Aylesbury | 52Roofer</title>
        <meta
          name="description"
          content="Professional aylesbury services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Aylesbury</h1>
        <div className="prose max-w-none">
          <p>Professional aylesbury services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
