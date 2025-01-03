import React from 'react';
import Link from 'next/link';
import ServiceLayout from '../../components/ServiceLayout';
import DynamicFAQ from '../../components/FAQ/DynamicFAQ';
import InternalLinkingSection from './InternalLinkingSection';
import { serviceAreas } from '../../data/serviceAreas';
import Head from 'next/head';

interface FAQ {
  question: string;
  answer: string;
  views: number;
  lastUpdated: string;
}

interface RelatedContent {
  title: string;
  path: string;
  description: string;
}

interface PageConfig {
  title: string;
  serviceName: string;
  serviceType: string;
  priceRange: string;
  timeRequired: string;
  heroTitle: string;
  heroDescription: string;
  initialFAQs: FAQ[];
  relatedServices?: RelatedContent[];
  relatedBlogPosts?: RelatedContent[];
  relatedLocations?: RelatedContent[];
  mainContent: {
    introSection: {
      title: string;
      description: string;
      features: string[];
    };
    problemSolvingSection: {
      title: string;
      problems: Array<{
        emoji: string;
        title: string;
        description: string;
        features: string[];
      }>;
    };
    processSection: {
      title: string;
      steps: Array<{
        title: string;
        description: string;
        features: string[];
      }>;
    };
  };
}

const ConversationalRoofingTemplate: React.FC<{ config: PageConfig }> = ({ config }) => {
  const areaNames = Object.values(serviceAreas).map(area => area.name);

  // Previous template constants remain unchanged
  const reviews = [
    {
      author: "Sample Name",
      reviewRating: 5,
      reviewBody: `Asked my device '${config.serviceName.toLowerCase()} near me' and found these experts. Great service!`,
      datePublished: new Date().toISOString().split('T')[0]
    }
  ];

  const howToSteps = [
    {
      name: "Initial Contact",
      text: "Contact us through voice search or our website",
      image: "/images/hero-bg.jpg"
    },
    {
      name: "Assessment",
      text: "Get a professional assessment of your needs",
      image: "/images/hero-bg.jpg"
    }
  ];

  const metaDescriptions = [
    `Need ${config.serviceName.toLowerCase()}? Just ask "Hey Google, find ${config.serviceName.toLowerCase()} near me". Available in ${areaNames.slice(0, 3).join(', ')} and surrounding areas.`,
    `Looking for ${config.serviceName.toLowerCase()}? Say "Alexa, find ${config.serviceName.toLowerCase()}" to discover our services in ${areaNames.slice(0, 3).join(', ')}.`,
    `Want ${config.serviceName.toLowerCase()}? Tell Siri "I need ${config.serviceName.toLowerCase()}" and we'll help. Professional service in ${areaNames.slice(0, 3).join(', ')} area.`
  ];

  // Previous schema data remains unchanged
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": `52Roofer ${config.serviceName}`,
    "image": "/images/hero-bg.jpg",
    "description": `Professional ${config.serviceName.toLowerCase()} services in ${areaNames.slice(0, 3).join(', ')} and surrounding areas.`,
    "priceRange": config.priceRange,
    "areaServed": areaNames.join(', '),
    "availableLanguage": "English",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://www.52roofer.com/services/${config.serviceType}?location={location}`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "query-input": "required name=location"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.52roofer.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.52roofer.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": config.serviceName,
        "item": `https://www.52roofer.com/services/${config.serviceType}`
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{config.title} Near Me | Voice-Search Roofing Experts</title>
        {metaDescriptions.map((desc, index) => (
          <meta 
            key={index}
            name={index === 0 ? "description" : `description-${index + 1}`}
            content={desc}
          />
        ))}
        <meta 
          name="keywords" 
          content={`${config.serviceName.toLowerCase()} near me, local roofers, voice activated roofing, ${config.serviceType}, roofing services`} 
        />
        <link rel="canonical" href={`https://www.52roofer.com/services/${config.serviceType}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "RoofingContractor",
                "@id": "https://52roofer.com/#organization",
                "name": `52Roofer ${config.serviceName}`,
                "image": "https://52roofer.com/images/hero-bg.jpg",
                "description": `Professional ${config.serviceName.toLowerCase()} services in ${areaNames.slice(0, 3).join(', ')} and surrounding areas.`,
                "priceRange": config.priceRange,
                "areaServed": areaNames.join(', '),
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Oxford",
                  "addressRegion": "Oxfordshire",
                  "addressCountry": "GB"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 51.7520,
                  "longitude": -1.2577
                },
                "url": "https://52roofer.com",
                "telephone": "+44-000-000-0000",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": reviews.length
                }
              },
              breadcrumbSchema,
              {
                "@type": "FAQPage",
                "@id": `https://52roofer.com/services/${config.serviceType}#faq`,
                "mainEntity": config.initialFAQs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              },
              {
                "@type": "HowTo",
                "name": `How to Get ${config.serviceName}`,
                "description": `Step-by-step guide to getting ${config.serviceName.toLowerCase()} from professionals`,
                "estimatedCost": {
                  "@type": "MonetaryAmount",
                  "currency": "GBP",
                  "value": config.priceRange
                },
                "step": config.mainContent.processSection.steps.map((step, index) => ({
                  "@type": "HowToStep",
                  "position": index + 1,
                  "name": step.title,
                  "text": step.description,
                  "itemListElement": step.features.map(feature => ({
                    "@type": "HowToTip",
                    "text": feature
                  }))
                })),
                "totalTime": config.timeRequired
              }
            ]
          })}
        </script>
      </Head>

      <ServiceLayout
        heroImage="/images/hero-bg.jpg"
        heroTitle={config.heroTitle}
        heroDescription={config.heroDescription}
        serviceName={config.serviceName}
      >
        <div className="space-y-12">
          {/* Voice-Search Optimized Introduction */}
          <div className="bg-gradient-to-br from-primary-50 to-accent/5 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-primary-600 mb-4">{config.mainContent.introSection.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {config.mainContent.introSection.description}
            </p>
            <div className="bg-white p-6 rounded-xl mt-4">
              <h3 className="text-xl font-semibold mb-3">Why Voice-Activated Roofing?</h3>
              <ul className="space-y-3 text-gray-700">
                {config.mainContent.introSection.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Multi-Intent Problem Solving Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6">{config.mainContent.problemSolvingSection.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.mainContent.problemSolvingSection.problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <span className="text-3xl">{problem.emoji}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                    <p className="text-gray-600">{problem.description}</p>
                    <ul className="mt-2 text-sm text-gray-500">
                      {problem.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-br from-accent/5 to-primary-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6">{config.mainContent.processSection.title}</h2>
            <div className="space-y-6">
              {config.mainContent.processSection.steps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{index + 1}. {step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="mt-3 text-sm text-gray-500">
                    {step.features.map((feature, featureIndex) => (
                      <p key={featureIndex}>• {feature}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internal Linking Section */}
          <InternalLinkingSection
            relatedServices={config.relatedServices}
            relatedBlogPosts={config.relatedBlogPosts}
            relatedLocations={config.relatedLocations}
          />

          {/* FAQ Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6">Common Questions About {config.serviceName}</h2>
            <DynamicFAQ initialFAQs={config.initialFAQs} category={config.serviceType} />
          </div>

          {/* Location-Aware Service Section */}
          <div className="bg-gradient-to-br from-primary-50 to-accent/5 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6">Local Services Near You</h2>
            <p className="text-lg text-gray-700 mb-6">
              We provide {config.serviceName.toLowerCase()} across {areaNames.slice(0, 5).join(', ')}, and surrounding areas. Our local teams understand your area's specific needs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {areaNames.slice(0, 8).map((area, index) => (
                <div key={index} className="bg-white p-3 rounded-lg text-center shadow-sm">
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

export default ConversationalRoofingTemplate;
