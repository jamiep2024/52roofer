import React from 'react';
import Head from 'next/head';
import HeroImage from "../components/HeroImage";
import LeadForm from '../components/forms/LeadForm';
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';

export default function RoofersInMelksham() {
  const location = {
    name: 'Melksham',
    county: 'Wiltshire',
    postcodes: ["SN1-SN16","SN25-SN26","BA12-BA15","SP1-SP5"],
  };

  const localBusinesses = businesses.filter(
    business => business.location === serviceAreas.wiltshire.name
  );

  return (
    <>
      <Head>
        <title>Expert Roofers in Melksham | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Melksham? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving SN1-SN16 & surrounding areas."
        />
        <meta name="keywords" content="roofers Melksham, roofing contractors Melksham, roof repairs Melksham, emergency roofer Melksham, local roofers SN1-SN16" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Expert Roofers in Melksham | Emergency Repairs & Installation" />
        <meta property="og:description" content="Looking for trusted roofers in Melksham? 24/7 Emergency Service, Free Quotes. Local experts serving SN1-SN16 & surrounding areas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://52roofer.com/roofers-in-melksham" />
        <meta property="og:image" content="https://52roofer.com/images/hero-bg.jpg" />
        <link rel="canonical" href="https://52roofer.com/roofers-in-melksham" />
      </Head>

      <LocalBusinessSchema 
        businessName="52Roofer Melksham"
        location={location}
        url="https://52roofer.com/roofers-in-melksham"
        image="https://52roofer.com/images/hero-bg.jpg"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <HeroImage 
              src="/images/hero-bg.jpg"
              alt={`Roofing services in Melksham`}
            />            
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in Melksham
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Professional roofing services in Melksham, Wiltshire. From emergency repairs to complete installations, 
              our local experts are here to help. Available 24/7 with free quotes.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Your Trusted Local Roofers in Melksham
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in Melksham? Our experienced team provides 
                  comprehensive roofing solutions throughout the SN1-SN16 area. We specialize in:
                </p>

                <ul className="mt-8 space-y-4">
                  <li>✓ Emergency Roof Repairs</li>
                  <li>✓ Complete Roof Replacements</li>
                  <li>✓ Roof Maintenance & Inspections</li>
                  <li>✓ Chimney Repairs & Repointing</li>
                  <li>✓ Guttering Services</li>
                  <li>✓ Flat Roof Specialists</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Why Choose Our Melksham Roofers?</h3>
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
                <LeadForm source="Melksham Landing Page" />
              </div>

              {/* Coverage Areas */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Areas We Cover in Melksham
                </h3>
                <p className="text-gray-600 mb-4">
                  We provide comprehensive roofing services throughout Melksham and surrounding areas, 
                  covering all SN1-SN16, SN25-SN26, BA12-BA15, SP1-SP5 postcodes.
                </p>
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