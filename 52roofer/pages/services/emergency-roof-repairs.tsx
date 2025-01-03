import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

export default function Service() {
  return (
    <Layout>
      <Head>
        <title>Emergency Roof Repairs | Professional Roofing Services | 52 Roofer</title>
        <meta name="description" content="Expert emergency roof repairs services across the UK. Professional, reliable, and affordable roofing solutions." />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Link href="/services" className="text-blue-600 hover:text-blue-800">
            Services
          </Link>
          {' > Emergency Roof Repairs'}
        </div>

        <h1 className="text-4xl font-bold mb-8">Emergency Roof Repairs</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Emergency Roof Repairs Services</h2>
          <p className="mb-4">
            Looking for reliable emergency roof repairs services? Our experienced team provides:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>24/7 emergency service</li>
            <li>Free inspections and quotes</li>
            <li>Expert workmanship</li>
            <li>Full warranty coverage</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related Services</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li>
              <Link href="/services/roof-repair" className="text-blue-600 hover:text-blue-800">
                Roof Repair
              </Link>
            </li>
            <li>
              <Link href="/services/roof-maintenance" className="text-blue-600 hover:text-blue-800">
                Roof Maintenance
              </Link>
            </li>
            <li>
              <Link href="/services/gutter-services" className="text-blue-600 hover:text-blue-800">
                Gutter Services
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Wiltshire</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/roofers-in-chippenham-wiltshire" className="text-blue-600 hover:text-blue-800">
                    Chippenham
                  </Link>
                </li>
                <li>
                  <Link href="/roofers-in-trowbridge-wiltshire" className="text-blue-600 hover:text-blue-800">
                    Trowbridge
                  </Link>
                </li>
                <li>
                  <Link href="/roofers-in-melksham-wiltshire" className="text-blue-600 hover:text-blue-800">
                    Melksham
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">More Locations</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/roofers-in-calne-wiltshire" className="text-blue-600 hover:text-blue-800">
                    Calne
                  </Link>
                </li>
                <li>
                  <Link href="/roofers-in-bradford-on-avon-wiltshire" className="text-blue-600 hover:text-blue-800">
                    Bradford-on-Avon
                  </Link>
                </li>
                <li>
                  <Link href="/roofers-in-westbury-wiltshire" className="text-blue-600 hover:text-blue-800">
                    Westbury
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
          <ul className="list-disc pl-6">
            <li>
              <Link href="/services/roof-inspection" className="text-blue-600 hover:text-blue-800">
                Professional Roof Inspections
              </Link>
            </li>
            <li>
              <Link href="/services/roof-ventilation" className="text-blue-600 hover:text-blue-800">
                Roof Ventilation Services
              </Link>
            </li>
            <li>
              <Link href="/services/skylight-installation" className="text-blue-600 hover:text-blue-800">
                Skylight Installation
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
