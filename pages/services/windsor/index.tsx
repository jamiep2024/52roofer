import Head from "next/head";
import Layout from "../../components/Layout";

export default function windsor() {
  return (
    <Layout>
      <Head>
        <title>Windsor | 52Roofer</title>
        <meta
          name="description"
          content="Professional windsor services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Windsor</h1>
        <div className="prose max-w-none">
          <p>Professional windsor services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}