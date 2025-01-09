import React from 'react';
import Head from 'next/head';
import HeroImage from "../components/HeroImage";
import LeadForm from '../components/forms/LeadForm';
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';

export default function RoofersInRoseHillOxford() {
  const location = {
    name: 'Rose Hill',
    county: serviceAreas.oxfordshire.name,
    postcodes: ['OX4'],
  };

  const localBusinesses = businesses.filter(
    business => business.location === serviceAreas.oxfordshire.name
  );

  return (
    <>
      <Head>
        <title>Expert Roofers in Rose Hill, Oxford | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Rose Hill, Oxford? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving OX4 & surrounding areas."
        />
        <meta name="keywords" content="roofers Rose Hill, roofing contractors Rose Hill, roof repairs Oxford, emergency roofer Rose Hill, local roofers OX4" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Expert Roofers in Rose Hill, Oxford | Emergency Repairs & Installation" />
        <meta property="og:description" content="Looking for trusted roofers in Rose Hill, Oxford? 24/7 Emergency Service, Free Quotes. Local experts serving OX4 & surrounding areas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://52roofer.com/roofers-in-rose-hill-oxford" />
        <meta property="og:image" content="https://52roofer.com/images/hero-bg.jpg" />
        <link rel="canonical" href="https://52roofer.com/roofers-in-rose-hill-oxford" />
      </Head>

      <LocalBusinessSchema 
        businessName="52Roofer Rose Hill"
        location={location}
        url="https://52roofer.com/roofers-in-roofers-in-rose-hill-oxford"
        image="https://52roofer.com/images/hero-bg.jpg"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
          <HeroImage 
            src="/images/hero-bg.jpg"
            alt={`Roofing services in Rose Hill`}
          />            
          <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in Rose Hill
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Professional roofing services in Rose Hill, Oxford. From emergency repairs to complete installations, 
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
                Your Trusted Local Roofers in Rose Hill
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in Rose Hill? Our experienced team provides 
                  comprehensive roofing solutions throughout the OX4 area. We specialize in:
                </p>

                <ul className="mt-8 space-y-4">
                  <li>✓ Emergency Roof Repairs</li>
                  <li>✓ Complete Roof Replacements</li>
                  <li>✓ Roof Maintenance & Inspections</li>
                  <li>✓ Chimney Repairs & Repointing</li>
                  <li>✓ Guttering Services</li>
                  <li>✓ Flat Roof Specialists</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Areas We Cover in Rose Hill</h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li>• Rose Hill</li>
                  <li>• The Oval</li>
                  <li>• Rivermead Road</li>
                  <li>• Church Cowley Road</li>
                  <li>• Ashhurst Way</li>
                  <li>• Courtland Road</li>
                  <li>• Rose Hill Road</li>
                  <li>• Lenthall Road</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Why Choose Our Rose Hill Roofers?</h3>
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
                <LeadForm source="Rose Hill Landing Page" />
              </div>

              {/* Local Landmarks */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Proudly Serving Landmarks in Rose Hill
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  <li>• Rose Hill Community Centre</li>
                  <li>• Rose Hill Primary School</li>
                  <li>• Rose Hill Methodist Church</li>
                  <li>• The Oval Park</li>
                  <li>• Rose Hill Recreation Ground</li>
                  <li>• Thames Valley Police Station</li>
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
