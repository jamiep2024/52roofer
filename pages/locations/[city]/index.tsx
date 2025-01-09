import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function CityPage() {
  const router = useRouter();
  const { city } = router.query;

  return (
    <Layout>
      <Head>
        <title>Roofing Services in {city} | 52Roofer</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Roofing Services in {city}</h1>
      </div>
    </Layout>
  );
}
