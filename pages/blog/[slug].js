import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const title = slug
    ? slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  return (
    <Layout>
      <Head>
        <title>{title} | 52Roofer Blog</title>
        <meta
          name="description"
          content={`${title} - Read more about roofing tips, maintenance, and professional services on the 52Roofer blog.`}
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose max-w-none">
          {/* Blog content will be loaded here */}
        </div>
      </div>
    </Layout>
  );
}
