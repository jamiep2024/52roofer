import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

// Get array of area names for display
const areaNames = Object.values(serviceAreas).map(area => area.name);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Much Does a New Roof Cost? Complete Price Guide 2024",
  "description": "Comprehensive guide to roof replacement costs in the UK, including materials, labour, and regional price variations.",
  "image": "https://www.52roofer.com/images/blog/roof-cost-guide.jpg",
  "author": {
    "@type": "Organization",
    "name": "52roofer.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "52roofer.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.52roofer.com/images/logo.png"
        </Layout>

      );
}

  },
  "datePublished": "2024-01-25",
  "dateModified": "2024-01-25"
};

const RoofCostGuidePage = () => {
  const costFactors = [
    {
      factor: "Roof Size",
      description: "Larger roofs require more materials and labour"
    },
    {
      factor: "Material Choice",
      description: "From basic tiles to premium slate options"
    },
    {
      factor: "Property Access",
      description: "Scaffolding and access requirements"
    },
    {
      factor: "Additional Work",
      description: "Repairs to underlying structure if needed"
    }
  ];

  return (
    <Layout>
      <Layout>
<SEO title="" description="" />
    <>
      <Head>
        <title>How Much Does a New Roof Cost? Price Guide 2024 | 52roofer.com</title>
        <meta 
          name="description" 
          content="Comprehensive guide to roof replacement costs in 2024. Learn about material costs, labour charges, and factors affecting roof installation prices."
        />
        <meta 
          name="keywords" 
          content="roof cost, roof replacement cost, new roof price, roofing materials cost, roof installation price" 
        />
        <link rel="canonical" href="https://www.52roofer.com/blog/new-roof-cost-guide" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/blog/new-roof-cost-guide#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/blog/new-roof-cost-guide",
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
      "@id": "https://52roofer.com/blog/new-roof-cost-guide#webpage",
      "url": "https://52roofer.com/blog/new-roof-cost-guide",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/blog/new-roof-cost-guide#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How Much Does a New Roof Cost? Complete Price Guide 2024
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding roof replacement costs across {areaNames.join(', ')}. Get informed about material costs, labour charges, and what affects the final price.
            </p>
          </header>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Factors Affecting Roof Costs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {costFactors.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.factor}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Average Roof Replacement Costs</h2>
            <p className="text-gray-600 mb-6">
              The cost of a new roof can vary significantly based on several factors. Here's a breakdown of average costs:
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Material Costs (Average per m²)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Concrete Tiles: £35-45 per m²</li>
                <li>Clay Tiles: £45-65 per m²</li>
                <li>Slate Tiles: £75-100 per m²</li>
                <li>Metal Roofing: £50-70 per m²</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Costs to Consider</h2>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Scaffolding (£800-1,500)</li>
              <li>Skip Hire (£200-300)</li>
              <li>Structural Repairs (if needed)</li>
              <li>Guttering Replacement (if required)</li>
            </ul>

            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get an Accurate Quote</h2>
              <p className="text-gray-600 mb-6">
                For an accurate quote specific to your property, contact our network of trusted roofers across {areaNames.join(', ')}. They'll provide detailed assessments and competitive prices.
              </p>
              <Link
                href="/find-roofer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90"
              >
                Get a Quote
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for Managing Roof Replacement Costs</h2>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Get multiple quotes from reputable roofers</li>
              <li>Consider long-term value when choosing materials</li>
              <li>Plan for potential additional repairs</li>
              <li>Check if insurance can cover any costs</li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
};

export default RoofCostGuidePage;
