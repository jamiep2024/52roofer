import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';
import Head from 'next/head';
import HeroImage from "../components/HeroImage";
import LeadForm from '../components/forms/LeadForm';
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';

export default function RoofersInBlackbirdLeysOxford() {
  const location = {
    name: 'Blackbird Leys',
    county: serviceAreas.oxfordshire.name,
    postcodes: ['OX4'],
  };

  const localBusinesses = businesses.filter(
    business => business.location === serviceAreas.oxfordshire.name
  );

  return (
    <Layout>
      <SEO title="Expert Roofers in Blackbird Leys | Emergency Repairs & Installation" description="Looking for trusted roofers in Blackbird Leys? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving the area." />
      
      <Head>
        <title>Expert Roofers in Blackbird Leys, Oxford | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Blackbird Leys, Oxford? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving OX4 & surrounding areas."
        />
        <meta name="keywords" content="roofers Blackbird Leys, roofing contractors Blackbird Leys, roof repairs Oxford, emergency roofer Blackbird Leys, local roofers OX4" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Expert Roofers in Blackbird Leys, Oxford | Emergency Repairs & Installation" />
        <meta property="og:description" content="Looking for trusted roofers in Blackbird Leys, Oxford? 24/7 Emergency Service, Free Quotes. Local experts serving OX4 & surrounding areas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://52roofer.com/roofers-in-blackbird-leys-oxford" />
        <meta property="og:image" content="https://52roofer.com/images/hero-bg.jpg" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/roofers-in-blackbird-leys-oxford#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/roofers-in-blackbird-leys-oxford",
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
      "@id": "https://52roofer.com/roofers-in-blackbird-leys-oxford#webpage",
      "url": "https://52roofer.com/roofers-in-blackbird-leys-oxford",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/roofers-in-blackbird-leys-oxford#faq",
      "mainEntity": []
    }
  ]
}`}} />
      
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/roofers-in-blackbird-leys-oxford#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/roofers-in-blackbird-leys-oxford",
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
      "@id": "https://52roofer.com/roofers-in-blackbird-leys-oxford#webpage",
      "url": "https://52roofer.com/roofers-in-blackbird-leys-oxford",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/roofers-in-blackbird-leys-oxford#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <LocalBusinessSchema 
        businessName="52Roofer Blackbird Leys"
        location={location}
        url="https://52roofer.com/roofers-in-blackbird-leys-oxford"
        image="https://52roofer.com/images/hero-bg.jpg"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <HeroImage 
              src="/images/hero-bg.jpg"
              alt="Roofing services in Blackbird Leys"
            />            
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in Blackbird Leys
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Professional roofing services in Blackbird Leys, Oxford. From emergency repairs to complete installations, 
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
                Your Trusted Local Roofers in Blackbird Leys
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in Blackbird Leys? Our experienced team provides 
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

                <h3 className="text-2xl font-semibold mt-12 mb-4">Areas We Cover in Blackbird Leys</h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li>• Greater Leys</li>
                  <li>• Blackbird Leys Estate</li>
                  <li>• Knights Road</li>
                  <li>• Cuddesdon Way</li>
                  <li>• Windale Avenue</li>
                  <li>• Pegasus Road</li>
                  <li>• Field Avenue</li>
                  <li>• Sandy Lane</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Why Choose Our Blackbird Leys Roofers?</h3>
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
                <LeadForm source="Blackbird Leys Landing Page" />
              </div>

              {/* Local Landmarks */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Proudly Serving Landmarks in Blackbird Leys
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                  <li>• Blackbird Leys Leisure Centre</li>
                  <li>• The Leys Pool and Leisure Centre</li>
                  <li>• Oxford City Football Club</li>
                  <li>• Spindleberry Nature Reserve</li>
                  <li>• Blackbird Leys Park</li>
                  <li>• The Oxford Academy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600
  };
};
