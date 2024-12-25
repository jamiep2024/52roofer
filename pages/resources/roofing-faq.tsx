import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I have my roof inspected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's recommended to have your roof professionally inspected at least once a year and after any major storms. Regular inspections can help identify potential issues before they become serious problems."
          </Layout>

        );
}

    },
    {
      "@type": "Question",
      "name": "How long does a typical roof last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The lifespan of a roof depends on the material used. Asphalt shingles typically last 20-25 years, metal roofs 40-70 years, and slate roofs can last over 100 years with proper maintenance."
      }
    },
    {
      "@type": "Question",
      "name": "What are signs that I need a new roof?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common signs include: missing or damaged shingles, leaks, daylight visible through the roof boards, sagging roof deck, excessive granules in gutters, and age of the roof exceeding 20 years."
      }
    }
  ]
};

// Get array of area names for display
const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofingFAQ = () => {
  const faqs = [
    {
      question: "How often should I have my roof inspected?",
      answer: "It's recommended to have your roof professionally inspected at least once a year and after any major storms. Regular inspections can help identify potential issues before they become serious problems."
    },
    {
      question: "How long does a typical roof last?",
      answer: "The lifespan of a roof depends on the material used. Asphalt shingles typically last 20-25 years, metal roofs 40-70 years, and slate roofs can last over 100 years with proper maintenance."
    },
    {
      question: "What are signs that I need a new roof?",
      answer: "Common signs include: missing or damaged shingles, leaks, daylight visible through the roof boards, sagging roof deck, excessive granules in gutters, and age of the roof exceeding 20 years."
    },
    {
      question: "How much does a new roof cost?",
      answer: "The cost varies significantly based on factors like roof size, material choice, and location. A typical residential roof replacement can range from £5,000 to £15,000 or more."
    },
    {
      question: "Can I repair the roof myself?",
      answer: "While minor repairs might be possible for DIY enthusiasts, it's generally recommended to use professional roofers for safety reasons and to ensure proper repairs that won't void warranties."
    },
    {
      question: "How long does it take to replace a roof?",
      answer: "Most residential roof replacements can be completed in 1-3 days, depending on the size and complexity of the roof, weather conditions, and chosen materials."
    }
  ];

  return (
    <Layout>
      <Layout>
<SEO title="" description="" />
    <>
      <Head>
        <title>Roofing FAQ | Common Roofing Questions Answered | 52roofer.com</title>
        <meta name="description" content="Find answers to common roofing questions. Expert advice on roof maintenance, repairs, replacement, and costs from trusted roofing professionals." />
        <meta name="keywords" content="roofing FAQ, roof maintenance questions, roof repair FAQ, roofing costs, roof replacement questions" />
        <link rel="canonical" href="https://www.52roofer.com/resources/roofing-faq" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/resources/roofing-faq#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/resources/roofing-faq",
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
      "@id": "https://52roofer.com/resources/roofing-faq#webpage",
      "url": "https://52roofer.com/resources/roofing-faq",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/resources/roofing-faq#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Roofing Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert answers to common roofing questions from professionals across {areaNames.join(', ')}.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {faq.question}
              </h2>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-12">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Still Have Questions?</h2>
          <p className="text-blue-800 mb-4">
            Our network of experienced roofers across {areaNames.join(', ')} is ready to help answer your specific questions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoofingFAQ;
