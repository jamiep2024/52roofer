import React from 'react';
import Head from 'next/head';
import HeroImage from "../components/HeroImage";
import LeadForm from '../components/forms/LeadForm';
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';

export default function RoofersInSummertownOxford() {
  const location = {
    name: 'Summertown',
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
        <title>Expert Roofers in Summertown, Oxford | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Summertown, Oxford? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving OX2 & surrounding areas."
        />
        <meta name="keywords" content="roofers Summertown, roofing contractors Summertown, roof repairs Oxford, emergency roofer Summertown, local roofers OX2" />
        <link rel="canonical" href="https://52roofer.com/roofers-in-summertown-oxford" />
      </Head>

      <LocalBusinessSchema 
        businessName="52Roofer Summertown"
        location={location}
        url="https://52roofer.com/roofers-in-roofers-in-summertown-oxford"
        image="https://52roofer.com/images/hero-bg.jpg"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <HeroImage 
              src="/images/hero-bg.jpg"
              alt={`Roofing services in Summertown`}
            />
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in Summertown, Oxford
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Professional roofing services in Summertown. From emergency repairs to complete installations, 
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
                Your Trusted Local Roofers in Summertown
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in Summertown? Our experienced team provides 
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

                <h3 className="text-2xl font-semibold mt-12 mb-4">Areas We Cover in Summertown</h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li>• North Oxford</li>
                  <li>• Waterways</li>
                  <li>• Park Town</li>
                  <li>• Wolvercote</li>
                  <li>• Cutteslowe</li>
                  <li>• St Margaret's</li>
                  <li>• Sunnymead</li>
                  <li>• Walton Manor</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Why Choose Our Summertown Roofers?</h3>
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
                <LeadForm source="Summertown Landing Page" />
              </div>

              {/* Local Landmarks */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Proudly Serving Landmarks in Summertown
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  <li>• Summertown Shopping Parade</li>
                  <li>• St Edward's School</li>
                  <li>• Summer Fields School</li>
                  <li>• Alexandra Park</li>
                  <li>• North Oxford Golf Club</li>
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
