import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React, { useState } from 'react';
import Head from 'next/head';
import { businesses } from '../data/businesses';
import BusinessCard from '../components/business/BusinessCard';

type RoofingIssue = {
  id: string;
  label: string;
  description: string;
};

const roofingIssues: RoofingIssue[] = [
  {
    id: 'leak',
    label: 'Roof Leak',
    description: 'Water damage or visible leaks in your roof',
  },
  {
    id: 'tiles',
    label: 'Damaged Tiles',
    description: 'Missing, cracked, or broken roof tiles',
  },
  {
    id: 'guttering',
    label: 'Guttering Issues',
    description: 'Blocked or damaged gutters',
  },
  {
    id: 'inspection',
    label: 'Roof Inspection',
    description: 'General roof condition assessment',
  },
];

const locations = [
  'Berkshire',
  'Buckinghamshire',
  'Gloucestershire',
  'Hampshire',
  'Oxfordshire',
  'Surrey',
  'West Sussex',
  'Wiltshire',
];

export default function FindRoofer() {
  const [location, setLocation] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [details, setDetails] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 1. Validate the location
    if (!location) return;

    setShowResults(true);
    console.log({ location, selectedIssue, details });
  };

  return (
<Layout>
<SEO title="" description="" />
    <>
      <Head>
        <title>Find a Roofer - 52roofer.com</title>
        <meta name="description" content="Find trusted local roofers in your area. Simply enter your location and describe your roofing needs." />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/find-roofer#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/find-roofer",
      "image": "https://52roofer.com/images/hero-bg.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Oxford",
        "addressRegion": "Oxfordshire",
        "addressCountry": "GB"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://52roofer.com/find-roofer#webpage",
      "url": "https://52roofer.com/find-roofer",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/find-roofer#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {!showResults ? (
            <div className="mx-auto max-w-2xl">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
                  Find a Trusted Local Roofer
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Location Input */}
                  <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      Your Location
                    </label>
                    <div className="mt-1">
                      <select
                        id="location"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        required
                      >
                        <option value="">Enter your location</option>
                        {locations.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Roofing Issue Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What type of roofing work do you need?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {roofingIssues.map((issue) => (
                        <div
                          key={issue.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            selectedIssue === issue.id
                              ? 'border-accent bg-accent/5'
                              : 'border-gray-200 hover:border-accent/50'
                          }`}
                          onClick={() => setSelectedIssue(issue.id)}
                        >
                          <h3 className="font-medium text-gray-900">{issue.label}</h3>
                          <p className="text-sm text-gray-500 mt-1">{issue.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="input-field mt-1"
                      placeholder="Please provide any additional details about your roofing needs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button type="submit" className="w-full btn-primary">
                      Find Roofers Near Me
                    </button>
                  </div>
                </form>

                <div className="mt-8 text-center text-sm text-gray-500">
                  <p>By submitting this form, you'll be connected with trusted local roofers in your area.</p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Available Roofers Near {location}
                </h2>
                <button
                  onClick={() => setShowResults(false)}
                  className="text-accent hover:text-accent/90 font-medium"
                >
                  Modify Search
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businesses
                  .filter((business) => business.location === location)
                  .map((business) => (
                    <BusinessCard key={business.id} business={business} />
                  ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  These are the best-matched roofers for your area and requirements.
                  Contact them directly for quotes and availability.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
</Layout>
  );
};
