import Head from "next/head";
import Layout from "../components/Layout";

import { NextPage } from 'next';

export const Page: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>
          52Roofer - Professional Roofing Services in services/roof replacement
        </title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Professional Roofing Services in services/roof replacement
        </h1>
        {/* Page content will be added here */}
      </div>
    </Layout>
  );
}
