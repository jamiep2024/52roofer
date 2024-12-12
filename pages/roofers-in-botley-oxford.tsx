import React from 'react';
import Head from 'next/head';
import { HeroImage, SimpleLeadForm } from "../components";
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';

export default function RoofersInBotleyOxford() {
  const location = {
    name: 'Botley',
    city: 'Oxford',
    county: serviceAreas.oxfordshire.name,
    postcodes: ['OX2'],
  };

  const localBusinesses = businesses.filter(
    business => business.location === serviceAreas.oxfordshire.name
  );

  return (
    <>
      <Head>
        <title>Expert Roofers in Botley, Oxford | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Botley, Oxford? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving OX2 & surrounding areas."
        />
        <meta name="keywords" content="roofers Botley, roofing contractors Botley, roof repairs Oxford, emergency roofer Botley, local roofers OX2" />
        <link rel="canonical" href="https://52roofer.com/roofers-in-botley-oxford" />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gray-900">
          <HeroImage src="/path/to/new/hero-image.jpg" alt="Hero Image" />
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in Botley
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Your trusted local roofers for all your roofing needs.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Your Trusted Local Roofers in Botley
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in Botley? Our experienced team provides 
                  comprehensive roofing solutions throughout the OX2 area. We specialize in:
                </p>

                <ul className="mt-8 space-y-4">
                  <li>✓ Emergency Roof Repairs</li>
                  <li>✓ Complete Roof Replacements</li>
                  <li>✓ Roof Maintenance & Inspections</li>
                  <li>✓ Chimney Repairs & Repointing</li>
                  <li>✓ Guttering Services</li>
                  <li>✓ Flat Roof Specialists</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Areas We Cover in Botley</h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li>• North Hinksey</li>
                  <li>• Dean Court</li>
                  <li>• Cumnor Hill</li>
                  <li>• West Oxford</li>
                  <li>• Osney</li>
                  <li>• New Botley</li>
                  <li>• Seacourt</li>
                  <li>• Wytham</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Why Choose Our Botley Roofers?</h3>
                <ul className="space-y-4">
                  <li>✓ Available 24/7 for emergencies</li>
                  <li>✓ Free, no-obligation quotes</li>
                  <li>✓ Fully insured and qualified team</li>
                  <li>✓ Competitive local rates</li>
                  <li>✓ Outstanding customer service</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get Your Free Quote Today
                </h3>
                <SimpleLeadForm source="Botley Landing Page" />
              </div>

              {/* Local Landmarks */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Proudly Serving Landmarks in Botley
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  <li>• Seacourt Tower</li>
                  <li>• Botley Shopping Centre</li>
                  <li>• West Oxford Community Centre</li>
                  <li>• Raleigh Park</li>
                  <li>• Matthew Arnold School</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600
  };
};
