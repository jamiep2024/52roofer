import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function Service() {
  return (
    <Layout>
      <Head>
        <title>Roof Inspection | Professional Roofing Services | 52 Roofer</title>
        <meta name="description" content="Expert roof inspection services across the UK. Professional, reliable, and affordable roofing solutions." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Roof Inspection</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Roof Inspection Services</h2>
          <p className="mb-4">
            Looking for reliable roof inspection services? Our experienced team provides:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>24/7 emergency service</li>
            <li>Free inspections and quotes</li>
            <li>Expert workmanship</li>
            <li>Full warranty coverage</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}