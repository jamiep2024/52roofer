import React from 'react';
import Head from 'next/head';
import HeroImage from "../components/HeroImage";
import SimpleLeadForm from '../components/forms/SimpleLeadForm';
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';

export default function RoofersInWolvercoteOxford() {
  const location = {
    name: 'Wolvercote',
    county: serviceAreas.oxfordshire.name,
    postcodes: ['OX2'],
  };

  const localBusinesses = businesses.filter(business => {
    // Check if business is in Oxfordshire
    const isInCounty = business.location === serviceAreas.oxfordshire.name;
    
    // Check if business serves OX2 postcode area
    const servesPostcode = business.serviceAreas.some(area => {
      // Handle postcode ranges like 'OX1-OX5'
      if (area.includes('-')) {
        const [start, end] = area.split('-');
        const areaPrefix = start.replace(/\d+$/, ''); // Get prefix (e.g., 'OX')
        const startNum = parseInt(start.replace(/^\D+/, '')); // Get start number
        const endNum = parseInt(end.replace(/^\D+/, '')); // Get end number
        const targetNum = parseInt(location.postcodes[0].replace(/^\D+$/, '')); // Get target number (2 from OX2)
        return areaPrefix === location.postcodes[0].replace(/\d+$/, '') && // Check prefix matches
               targetNum >= startNum && targetNum <= endNum; // Check number is in range
      }
      // Handle single postcodes
      return area === location.postcodes[0];
    });

    return isInCounty && servesPostcode;
  });

  return (
    <>
      <Head>
        <title>Expert Roofers in Wolvercote, Oxford | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Wolvercote, Oxford? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving OX2 & surrounding areas."
        />
        <meta name="keywords" content="roofers Wolvercote, roofing contractors Wolvercote, roof repairs Oxford, emergency roofer Wolvercote, local roofers OX2" />
        <link rel="canonical" href="https://52roofer.com/roofers-in-wolvercote-oxford" />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <HeroImage 
              src="/images/hero-bg.jpg"
              alt={`Roofing services in Wolvercote`}
            />
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in Wolvercote
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Professional roofing services in Wolvercote. From emergency repairs to complete installations, 
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
                Your Trusted Local Roofers in Wolvercote
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in Wolvercote? Our experienced team provides 
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

                <h3 className="text-2xl font-semibold mt-12 mb-4">Areas We Cover in Wolvercote</h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li>• Upper Wolvercote</li>
                  <li>• Lower Wolvercote</li>
                  <li>• Wolvercote Green</li>
                  <li>• Godstow</li>
                  <li>• Port Meadow</li>
                  <li>• Wolvercote Common</li>
                  <li>• Peartree</li>
                  <li>• Jordan Hill</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Why Choose Our Wolvercote Roofers?</h3>
                <ul className="space-y-4">
                  <li>✓ Available 24/7 for emergencies</li>
                  <li>✓ Free, no-obligation quotes</li>
                  <li>✓ Fully insured and qualified team</li>
                  <li>✓ Competitive local rates</li>
                  <li>✓ Outstanding customer service</li>
                </ul>

                {/* Local Businesses Section */}
                {localBusinesses.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-6">Local Roofing Companies Serving Wolvercote</h3>
                    <div className="space-y-8">
                      {localBusinesses.map(business => (
                        <div key={business.id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                          <h4 className="text-xl font-semibold text-gray-900">{business.name}</h4>
                          <div className="mt-2 text-gray-600">{business.description}</div>
                          <div className="mt-4 flex items-center space-x-4">
                            <div className="flex items-center">
                              <span className="text-yellow-400">★</span>
                              <span className="ml-1 text-gray-700">{business.rating.toFixed(1)}</span>
                              <span className="ml-1 text-gray-500">({business.reviewCount} reviews)</span>
                            </div>
                            {business.featured && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Featured
                              </span>
                            )}
                          </div>
                          {business.badges && business.badges.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {business.badges.map(badge => (
                                <span key={badge} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  {badge}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                            {business.phone && (
                              <div>
                                <span className="font-medium">Phone:</span> {business.phone}
                              </div>
                            )}
                            {business.availability && (
                              <div>
                                <span className="font-medium">Hours:</span> {business.availability}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get Your Free Quote Today
                </h3>
                <SimpleLeadForm source="Wolvercote Landing Page" />
              </div>

              {/* Local Landmarks */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Proudly Serving Landmarks in Wolvercote
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  <li>• St Peter's Church</li>
                  <li>• Wolvercote Mill</li>
                  <li>• Port Meadow</li>
                  <li>• Godstow Abbey</li>
                  <li>• Wolvercote Lakes</li>
                  <li>• The Plough Inn</li>
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
