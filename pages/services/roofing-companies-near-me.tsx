import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { serviceAreas } from '../../data/serviceAreas';
import ServiceLayout from '../../components/ServiceLayout';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';
import HowToSchema from '../../components/seo/schemas/HowToSchema';
import ReviewSchema from '../../components/seo/schemas/ReviewSchema';
import VideoSchema from '../../components/seo/schemas/VideoSchema';
import DynamicFAQ from '../../components/FAQ/DynamicFAQ';

const areaNames = Object.values(serviceAreas).map(area => area.name);

const RoofingCompaniesNearMe = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const howToSteps = [
    {
      name: "Research Local Companies",
      text: "Start by creating a list of local roofing companies with good reputations and reviews.",
      image: "/images/research-roofing.jpg"
    },
    {
      name: "Check Credentials",
      text: "Verify licenses, insurance, and certifications of potential roofing companies.",
      image: "/images/credentials-check.jpg"
    },
    {
      name: "Get Multiple Quotes",
      text: "Request detailed quotes from at least three different roofing companies.",
      image: "/images/roofing-quote.jpg"
    },
    {
      name: "Review Past Work",
      text: "Ask for references and examples of previous roofing projects.",
      image: "/images/completed-roof.jpg"
    },
    {
      name: "Compare Warranties",
      text: "Compare warranty offerings and ensure everything is in writing.",
      image: "/images/warranty-check.jpg"
    }
  ];

  const reviews = [
    {
      author: "John Smith",
      reviewRating: 5,
      reviewBody: "Excellent service and professional workmanship. Highly recommended!",
      datePublished: "2023-11-01"
    },
    {
      author: "Sarah Johnson",
      reviewRating: 5,
      reviewBody: "Very pleased with the quality of work and attention to detail.",
      datePublished: "2023-10-15"
    },
    {
      author: "Mike Williams",
      reviewRating: 4,
      reviewBody: "Great communication throughout the project. Would use again.",
      datePublished: "2023-09-28"
    }
  ];

  const initialFAQs = [
    {
      question: "How do I choose the right roofing company?",
      answer: "Look for licensed and insured contractors, check reviews and references, get multiple quotes, and ensure they offer warranties on their work.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "What questions should I ask a roofing company?",
      answer: "Ask about their experience, licenses, insurance, warranties, timeline, materials used, and get a detailed written estimate.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "How much should I expect to pay for a new roof?",
      answer: "Costs vary depending on size, materials, and complexity. Get multiple quotes for an accurate estimate for your specific needs.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  return (
    <ServiceLayout
      heroImage="/images/services/local-roofing-hero.jpg"
      heroTitle="Find Roofing Companies Near You"
      heroDescription="Connect with trusted local roofing professionals in your area"
      serviceName="Local Roofing Companies"
    >
      <Head>
        <title>Find Roofing Companies Near Me | 52roofer.com</title>
        <meta 
          name="description" 
          content={`Discover trusted local roofing companies across ${areaNames.join(', ')}. Professional roofing services with quality workmanship guaranteed.`}
        />
        <link rel="canonical" href="https://www.52roofer.com/services/roofing-companies-near-me" />
        
        {/* Schema markup components */}
        <LocalBusinessSchema
          businessName="52Roofer"
          location={{
            name: "Oxford",
            county: "Oxfordshire",
            postcodes: ["OX1", "OX2", "OX3", "OX4"]
          }}
          url="https://www.52roofer.com"
          image="/images/services/local-roofing-hero.jpg"
        />
        
        <HowToSchema
          name="How to Choose a Roofing Company"
          description="A comprehensive guide to selecting the right roofing company for your needs"
          steps={howToSteps}
          totalTime="P1D"
        />
        
        <ReviewSchema
          itemReviewed={{
            name: "52Roofer Roofing Services",
            image: "/images/services/local-roofing-hero.jpg",
            description: "Professional roofing services across the UK"
          }}
          reviews={reviews}
          aggregateRating={{
            ratingValue: 4.8,
            reviewCount: reviews.length
          }}
        />
        
        <VideoSchema
          name="Choosing the Right Roofing Company"
          description="Expert guide on selecting a reliable roofing contractor"
          thumbnailUrl="/images/video-thumbnail.jpg"
          uploadDate="2023-11-01"
          duration="PT2M30S"
        />
      </Head>

      <div className="space-y-12">
        {/* Introduction */}
        <div>
          <p className="lead text-xl text-gray-600">
            Find reliable roofing companies in your local area across {areaNames.join(', ')}. 
            We connect you with trusted professionals who understand your specific roofing needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ... existing services content ... */}
        </div>

        {/* Video Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Guidance</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/example"
              title="Choosing the Right Roofing Company"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Dynamic FAQ Section */}
        <div className="bg-white rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <DynamicFAQ initialFAQs={initialFAQs} category="roofing" />
        </div>

        {/* Sticky CTA for Mobile */}
        <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 transition-transform duration-300 transform md:hidden ${
          isSticky ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <div className="container mx-auto flex justify-between items-center">
            <a
              href="#contact-form"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-accent-dark transition-colors w-full text-center"
            >
              Get Free Quotes
            </a>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default RoofingCompaniesNearMe;
