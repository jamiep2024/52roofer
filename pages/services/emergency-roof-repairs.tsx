import Head from "next/head";
import Layout from "../../components/Layout";

export default function emergency_roof_repairs() {
  return (
    <Layout>
      <Head>
        <title>Emergency Roof Repairs | 52Roofer</title>
        <meta
          name="description"
          content="Professional emergency roof repairs services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Emergency Roof Repairs</h1>
        <div className="prose max-w-none">
          <p>
            Professional emergency roof repairs services provided by 52Roofer.
          </p>
        </div>
      </div>
    </Layout>
  );
}
