import React from 'react';
import Head from 'next/head';
import HeroImage from "../components/HeroImage";
import LeadForm from '../components/forms/LeadForm';
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';

export default function RoofersInSouthampton() {
  const location = {
    name: 'Southampton',
    county: 'Hampshire',
    postcodes: ["SO14-SO53","PO1-PO17","RG21-RG29"],
  };

  const localBusinesses = businesses.filter(
    business => business.location === serviceAreas.hampshire.name
  );

  return (
    <>
      <Head>
        <title>Expert Roofers in Southampton | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Southampton? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving SO14-SO53 & surrounding areas."
        />
        <meta name="keywords" content="roofers Southampton, roofing contractors Southampton, roof repairs Southampton, emergency roofer Southampton, local roofers SO14-SO53" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Expert Roofers in Southampton | Emergency Repairs & Installation" />
        <meta property="og:description" content="Looking for trusted roofers in Southampton? 24/7 Emergency Service, Free Quotes. Local experts serving SO14-SO53 & surrounding areas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://52roofer.com/roofers-in-southampton" />
        <meta property="og:image" content="https://52roofer.com/images/hero-bg.jpg" />
        <link rel="canonical" href="https://52roofer.com/roofers-in-southampton" />
      </Head>

      <LocalBusinessSchema 
        businessName="52Roofer Southampton"
        location={location}
        url="https://52roofer.com/roofers-in-southampton"
        image="https://52roofer.com/images/hero-bg.jpg"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <HeroImage 
              src="/images/hero-bg.jpg"
              alt={`Roofing services in Southampton`}
            />            
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in Southampton
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Professional roofing services in Southampton, Hampshire. From emergency repairs to complete installations, 
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
                Your Trusted Local Roofers in Southampton
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in Southampton? Our experienced team provides 
                  comprehensive roofing solutions throughout the SO14-SO53 area. We specialize in:
                </p>

                <ul className="mt-8 space-y-4">
                  <li>✓ Emergency Roof Repairs</li>
                  <li>✓ Complete Roof Replacements</li>
                  <li>✓ Roof Maintenance & Inspections</li>
                  <li>✓ Chimney Repairs & Repointing</li>
                  <li>✓ Guttering Services</li>
                  <li>✓ Flat Roof Specialists</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Why Choose Our Southampton Roofers?</h3>
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
                <LeadForm source="Southampton Landing Page" />
              </div>

              {/* Coverage Areas */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Areas We Cover in Southampton
                </h3>
                <p className="text-gray-600 mb-4">
                  We provide comprehensive roofing services throughout Southampton and surrounding areas, 
                  covering all SO14-SO53, PO1-PO17, RG21-RG29 postcodes.
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