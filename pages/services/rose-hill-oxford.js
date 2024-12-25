import Head from "next/head";
import Layout from "../../components/Layout";

export default function rose_hill_oxford() {
  return (
    <Layout>
      <Head>
        <title>Rose Hill Oxford | 52Roofer</title>
        <meta
          name="description"
          content="Professional rose hill oxford services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Rose Hill Oxford</h1>
        <div className="prose max-w-none">
          <p>Professional rose hill oxford services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
