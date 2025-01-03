import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function OxfordshirePage() {
  return (
    <Layout>
      <Head>
        <title>Roofers in Oxfordshire | 52 Roofer</title>
        <meta name="description" content="Find reliable roofing services across Oxfordshire. Expert roofers for repairs, installations, and maintenance in Oxford, Banbury, Bicester, and surrounding areas." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Roofers in Oxfordshire</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Roofing Services Across Oxfordshire</h2>
          <p className="mb-4">
            Looking for professional roofing services in Oxfordshire? Our network of experienced roofers covers:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Oxford</li>
            <li>Banbury</li>
            <li>Bicester</li>
            <li>Witney</li>
            <li>Didcot</li>
            <li>Abingdon</li>
            <li>And all surrounding areas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Emergency roof repairs</li>
            <li>Roof installations and replacements</li>
            <li>Roof maintenance and inspections</li>
            <li>Gutter services</li>
            <li>Commercial and residential roofing</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
