import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function RoofingCompaniesOxfordPage() {
  return (
    <Layout>
      <Head>
        <title>Roofing Companies in Oxford | 52 Roofer</title>
        <meta name="description" content="Find trusted roofing companies in Oxford. Professional roofers offering repairs, installations, and maintenance services across Oxford and surrounding areas." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Roofing Companies in Oxford</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Local Roofing Services</h2>
          <p className="mb-4">
            Looking for reliable roofing companies in Oxford? Our network of professional roofers provides:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Emergency repairs</li>
            <li>Complete roof replacements</li>
            <li>Maintenance services</li>
            <li>Gutter repairs and cleaning</li>
            <li>Chimney repairs</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Areas We Cover in Oxford</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Oxford City Centre</li>
            <li>Headington</li>
            <li>Cowley</li>
            <li>Jericho</li>
            <li>Summertown</li>
            <li>Marston</li>
            <li>Botley</li>
            <li>And all surrounding areas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Oxford Roofers?</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Local expertise and knowledge</li>
            <li>Fast response times</li>
            <li>Fully insured and qualified</li>
            <li>Competitive pricing</li>
            <li>Quality workmanship guarantee</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
