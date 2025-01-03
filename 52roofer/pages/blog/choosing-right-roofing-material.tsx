import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function ChoosingRoofingMaterialPage() {
  return (
    <Layout>
      <Head>
        <title>Guide to Choosing the Right Roofing Material | 52 Roofer</title>
        <meta name="description" content="Comprehensive guide to selecting the best roofing material for your home. Compare costs, durability, and aesthetics of different roofing options." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <article>
          <h1 className="text-4xl font-bold mb-8">Guide to Choosing the Right Roofing Material</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Popular Roofing Materials</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Asphalt Shingles</h3>
              <p className="mb-4">
                The most common roofing material in the UK, asphalt shingles offer:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Affordable pricing</li>
                <li>Easy installation</li>
                <li>15-30 year lifespan</li>
                <li>Wide variety of colors</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Slate Tiles</h3>
              <p className="mb-4">
                A premium option with exceptional benefits:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>100+ year lifespan</li>
                <li>Natural appearance</li>
                <li>Fire resistant</li>
                <li>Environmentally friendly</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Clay Tiles</h3>
              <p className="mb-4">
                Traditional and durable roofing choice:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>50+ year lifespan</li>
                <li>Classic appearance</li>
                <li>Weather resistant</li>
                <li>Low maintenance</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Factors to Consider</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Budget and long-term costs</li>
              <li>Local climate conditions</li>
              <li>House style and architecture</li>
              <li>Local building regulations</li>
              <li>Installation requirements</li>
              <li>Maintenance needs</li>
            </ul>
          </section>
        </article>
      </main>
    </Layout>
  );
}
