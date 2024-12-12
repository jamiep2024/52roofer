import React from 'react';
import Head from 'next/head';
import SimpleLeadForm from '../components/forms/SimpleLeadForm';
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';

export default function RoofersInChippenhamWiltshire() {
  const location = {
    name: 'Chippenham',
    county: serviceAreas.wiltshire.name,
    postcodes: ['SN14', 'SN15'],
  };

  const localBusinesses = businesses.filter(
    business => business.location === serviceAreas.wiltshire.name
  );

  return (
    <>
      <Head>
        <title>Expert Roofers in Chippenham, Wiltshire | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Chippenham, Wiltshire? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving SN14, SN15 & surrounding areas."
        />
        <meta name="keywords" content="roofers Chippenham, roofing contractors Chippenham, roof repairs Wiltshire, emergency roofer Chippenham, local roofers SN14, SN15" />
        <link rel="canonical" href="https://52roofer.com/roofers-in-chippenham-wiltshire" />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="/images/hero-bg.jpg"
              alt="Roofing services in Chippenham, Wiltshire"
            />
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in Chippenham
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Professional roofing services in Chippenham. From emergency repairs to complete installations, 
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
                Your Trusted Local Roofers in Chippenham
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in Chippenham? Our experienced team provides 
                  comprehensive roofing solutions throughout SN14 and SN15 areas. We specialize in:
                </p>

                <ul className="mt-8 space-y-4">
                  <li>✓ Emergency Roof Repairs</li>
                  <li>✓ Complete Roof Replacements</li>
                  <li>✓ Roof Maintenance & Inspections</li>
                  <li>✓ Chimney Repairs & Repointing</li>
                  <li>✓ Guttering Services</li>
                  <li>✓ Flat Roof Specialists</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Areas We Cover in Chippenham</h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li>• Town Centre</li>
                  <li>• Monkton Park</li>
                  <li>• Pewsham</li>
                  <li>• Hardenhuish</li>
                  <li>• Cepen Park</li>
                  <li>• London Road</li>
                  <li>• Lowden</li>
                  <li>• Lackham</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Why Choose Our Chippenham Roofers?</h3>
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
                <SimpleLeadForm source="Chippenham Landing Page" />
              </div>

              {/* Local Landmarks */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Proudly Serving Landmarks in Chippenham
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  <li>• Chippenham Town Hall</li>
                  <li>• John Coles Park</li>
                  <li>• Monkton Park</li>
                  <li>• St Andrew's Church</li>
                  <li>• Chippenham Museum & Heritage Centre</li>
                  <li>• Chippenham Railway Station</li>
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
