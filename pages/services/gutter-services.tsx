import Head from "next/head";
import Layout from "../../components/Layout";

export default function gutter_services() {
  return (
    <Layout>
      <Head>
        <title>Gutter Services | 52Roofer</title>
        <meta
          name="description"
          content="Professional gutter services services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Gutter Services</h1>
        <div className="prose max-w-none">
          <p>Professional gutter services services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
