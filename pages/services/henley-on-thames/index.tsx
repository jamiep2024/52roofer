import Head from "next/head";
import Layout from "../../components/Layout";

export default function henley_on_thames() {
  return (
    <Layout>
      <Head>
        <title>Henley On Thames | 52Roofer</title>
        <meta
          name="description"
          content="Professional henley on thames services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Henley On Thames</h1>
        <div className="prose max-w-none">
          <p>Professional henley on thames services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
