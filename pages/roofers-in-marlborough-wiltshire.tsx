import React from 'react';
import Head from 'next/head';
import SimpleLeadForm from '../components/forms/SimpleLeadForm';
import HeroImage from '../components/HeroImage'; // Assuming HeroImage is a component
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';

export default function RoofersInMarlboroughWiltshire() {
  const location = {
    name: 'Marlborough',
    county: serviceAreas.wiltshire.name,
    postcodes: ['SN8'],
  };

  const localBusinesses = businesses.filter(
    business => business.location === serviceAreas.wiltshire.name
  );

  return (
    <>
      <Head>
        <title>Expert Roofers in Marlborough, Wiltshire | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Marlborough, Wiltshire? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving SN8 & surrounding areas."
        />
        <meta name="keywords" content="roofers Marlborough, roofing contractors Marlborough, roof repairs Wiltshire, emergency roofer Marlborough, local roofers SN8" />
        <link rel="canonical" href="https://52roofer.com/roofers-in-marlborough-wiltshire" />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gray-900">
          <HeroImage src="/path/to/new/hero-image.jpg" alt="Hero Image" />
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in Marlborough
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
                Your Trusted Local Roofers in Marlborough
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in Marlborough? Our experienced team provides 
                  comprehensive roofing solutions throughout the SN8 area. We specialize in:
                </p>

                <ul className="mt-8 space-y-4">
                  <li>✓ Emergency Roof Repairs</li>
                  <li>✓ Complete Roof Replacements</li>
                  <li>✓ Roof Maintenance & Inspections</li>
                  <li>✓ Chimney Repairs & Repointing</li>
                  <li>✓ Guttering Services</li>
                  <li>✓ Flat Roof Specialists</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Areas We Cover in Marlborough</h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li>• High Street</li>
                  <li>• Manton</li>
                  <li>• Savernake</li>
                  <li>• Mildenhall</li>
                  <li>• Preshute</li>
                  <li>• Kennet Valley</li>
                  <li>• College Fields</li>
                  <li>• Barton Park</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Why Choose Our Marlborough Roofers?</h3>
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
                <SimpleLeadForm source="Marlborough Landing Page" />
              </div>

              {/* Local Landmarks */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Proudly Serving Landmarks in Marlborough
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  <li>• Marlborough College</li>
                  <li>• The Merchant's House</li>
                  <li>• St Mary's Church</li>
                  <li>• Marlborough High Street</li>
                  <li>• Savernake Forest</li>
                  <li>• The Green</li>
                </ul>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Contact Us
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  <li><span className="font-medium">Phone:</span> 07990101321</li>
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
                Fill out the form below and our Marlborough team will get back to you within 24 hours.
              </p>
            </div>

            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
              <SimpleLeadForm source="Marlborough Page" />
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
