import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from "../../components/Layout";

export default function Page() {
  const router = useRouter();
  const { location } = router.query; // This will grab the dynamic parameter
  
  return (
    <Layout>
      <Head>
        <title>52Roofer - Professional Roofing Services in {location}</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Professional Roofing Services in {location}
        </h1>
        {/* Page content will be added here */}
      </div>
    </Layout>
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  }
}

module.exports = {
  extends: ['next/core-web-configs', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Add any specific rules here
  }
}

