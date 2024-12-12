import React from 'react';
import Head from 'next/head';
import SimpleLeadForm from '../components/forms/SimpleLeadForm';
import HeroImage from '../components/HeroImage'; // Assuming HeroImage component is defined in this file
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';

export default function RoofersInWarminsterWiltshire() {
  const location = {
    name: 'Warminster',
    county: serviceAreas.wiltshire.name,
    postcodes: ['BA12'],
  };

  const localBusinesses = businesses.filter(
    business => business.location === serviceAreas.wiltshire.name
  );

  return (
    <>
      <Head>
        <title>Expert Roofers in Warminster, Wiltshire | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Warminster, Wiltshire? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving BA12 & surrounding areas."
        />
        <meta name="keywords" content="roofers Warminster, roofing contractors Warminster, roof repairs Wiltshire, emergency roofer Warminster, local roofers BA12" />
        <link rel="canonical" href="https://52roofer.com/roofers-in-warminster-wiltshire" />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gray-900">
          <HeroImage src="/path/to/new/hero-image.jpg" alt="Hero Image" />
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in Warminster
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
                Your Trusted Local Roofers in Warminster
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in Warminster? Our experienced team provides 
                  comprehensive roofing solutions throughout the BA12 area. We specialize in:
                </p>

                <ul className="mt-8 space-y-4">
                  <li>✓ Emergency Roof Repairs</li>
                  <li>✓ Complete Roof Replacements</li>
                  <li>✓ Roof Maintenance & Inspections</li>
                  <li>✓ Chimney Repairs & Repointing</li>
                  <li>✓ Guttering Services</li>
                  <li>✓ Flat Roof Specialists</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Areas We Cover in Warminster</h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li>• Town Centre</li>
                  <li>• Warminster Common</li>
                  <li>• Sambourne</li>
                  <li>• Bugley</li>
                  <li>• Copheap</li>
                  <li>• Newport</li>
                  <li>• The Dene</li>
                  <li>• Bishopstrow</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Why Choose Our Warminster Roofers?</h3>
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
                <SimpleLeadForm source="Warminster Landing Page" />
              </div>

              {/* Local Landmarks */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Proudly Serving Landmarks in Warminster
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  <li>• Lake Pleasure Grounds</li>
                  <li>• Warminster Park</li>
                  <li>• St Denys Church</li>
                  <li>• Athenaeum Centre</li>
                  <li>• Warminster School</li>
                  <li>• Longleat Safari Park (nearby)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="quote-form" className="bg-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Get Your Free Roofing Quote
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below and our Warminster team will get back to you within 24 hours.
              </p>
            </div>

            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
              <SimpleLeadForm source="Warminster Page" />
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
