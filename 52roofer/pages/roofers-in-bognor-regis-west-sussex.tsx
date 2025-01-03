import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function Location() {
  return (
    <Layout>
      <Head>
        <title>Roofers in bognor regis, West Sussex | 52 Roofer</title>
        <meta name="description" content="Professional roofing services in bognor regis, West Sussex. Expert roofers for repairs, installations, and maintenance." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Roofers in bognor regis, West Sussex</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Local Roofing Services in bognor regis</h2>
          <p className="mb-4">
            Looking for reliable roofing services in bognor regis, West Sussex? Our experienced team provides:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Emergency roof repairs</li>
            <li>Roof installations and replacements</li>
            <li>Roof maintenance and inspections</li>
            <li>Gutter services</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}