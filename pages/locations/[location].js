import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function LocationPage() {
  const router = useRouter();
  const { location } = router.query;
  const title = location
    ? location
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  return (
    <Layout>
      <Head>
        <title>Roofing Services in {title} | 52Roofer</title>
        <meta
          name="description"
          content={`Professional roofing services in ${title}. Local experts providing quality roofing solutions.`}
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Roofing Services in {title}</h1>
        <div className="prose max-w-none">
          {/* Location-specific content will be loaded here */}
        </div>
      </div>
    </Layout>
  );
}
