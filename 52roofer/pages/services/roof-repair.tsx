import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function RoofRepairPage() {
  return (
    <Layout>
      <Head>
        <title>Professional Roof Repair Services | 52 Roofer</title>
        <meta name="description" content="Expert roof repair services for all types of roofing problems. Fast response, quality workmanship, and competitive pricing." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Professional Roof Repair Services</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Roof Repair Services</h2>
          <p className="mb-4">
            We provide comprehensive roof repair services to address all types of roofing issues:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Emergency leak repairs</li>
            <li>Tile and slate replacement</li>
            <li>Chimney repairs</li>
            <li>Gutter maintenance</li>
            <li>Storm damage repairs</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>24/7 emergency service</li>
            <li>Free inspections and quotes</li>
            <li>Expert workmanship</li>
            <li>Full warranty coverage</li>
            <li>Competitive pricing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Common Roof Problems We Fix</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Leaking roofs</li>
            <li>Missing or damaged tiles</li>
            <li>Weather damage</li>
            <li>Structural issues</li>
            <li>Poor installation fixes</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
