import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function ServicePage() {
  const router = useRouter();
  const { service } = router.query;
  const title = service
    ? service
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  return (
    <Layout>
      <Head>
        <title>{title} | 52Roofer</title>
        <meta
          name="description"
          content={`Professional ${title} services by 52Roofer. Expert solutions for all your roofing needs.`}
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose max-w-none">
          {/* Dynamic content will be loaded here */}
        </div>
      </div>
    </Layout>
  );
}
