import Head from "next/head";
import Layout from "../../components/Layout";

export default function stow_on_the_wold() {
  return (
    <Layout>
      <Head>
        <title>Stow On The Wold | 52Roofer</title>
        <meta
          name="description"
          content="Professional stow on the wold services provided by 52Roofer."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Stow On The Wold</h1>
        <div className="prose max-w-none">
          <p>Professional stow on the wold services provided by 52Roofer.</p>
        </div>
      </div>
    </Layout>
  );
}
