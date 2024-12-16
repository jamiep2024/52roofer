import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import LocalBusinessSchema from '../../components/seo/LocalBusinessSchema';
import HowToSchema from '../../components/seo/schemas/HowToSchema';
import ReviewSchema from '../../components/seo/schemas/ReviewSchema';
import VideoSchema from '../../components/seo/schemas/VideoSchema';
import FAQSchema from '../../components/seo/schemas/FAQSchema';
import DynamicFAQ from '../../components/FAQ/DynamicFAQ';
import { serviceAreas } from '../../data/serviceAreas';
import Head from 'next/head';

interface FAQ {
  question: string;
  answer: string;
  views: number;
  lastUpdated: string;
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

  // Template for creating reviews - customize for each service
  const reviews = [
    {
      author: "Sample Name",
      reviewRating: 5,
      reviewBody: `Asked my device '${config.serviceName.toLowerCase()} near me' and found these experts. Great service!`,
      datePublished: new Date().toISOString().split('T')[0]
    }
  ];

  // Template for creating how-to steps - customize for each service
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

  // Template for meta descriptions - customize for each service
  const metaDescriptions = [
    `Need ${config.serviceName.toLowerCase()}? Just ask "Hey Google, find ${config.serviceName.toLowerCase()} near me". Available in ${areaNames.slice(0, 3).join(', ')} and surrounding areas.`,
    `Looking for ${config.serviceName.toLowerCase()}? Say "Alexa, find ${config.serviceName.toLowerCase()}" to discover our services in ${areaNames.slice(0, 3).join(', ')}.`,
    `Want ${config.serviceName.toLowerCase()}? Tell Siri "I need ${config.serviceName.toLowerCase()}" and we'll help. Professional service in ${areaNames.slice(0, 3).join(', ')} area.`
  ];

  // Template for schema data - customize for each service
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

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": config.initialFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <ServiceLayout
      heroImage="/images/hero-bg.jpg"
      heroTitle={config.heroTitle}
      heroDescription={config.heroDescription}
      serviceName={config.serviceName}
    >
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
          {JSON.stringify(schemaData)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
        
        <LocalBusinessSchema
          businessName="52Roofer"
          location={{
            name: "Oxford",
            county: "Oxfordshire",
            postcodes: ["OX1", "OX2", "OX3", "OX4"],
            coordinates: {
              latitude: 51.7520,
              longitude: -1.2577
            }
          }}
          url="https://www.52roofer.com"
          image="/images/hero-bg.jpg"
          rating={{
            ratingValue: 4.9,
            reviewCount: reviews.length
          }}
        />
        
        <HowToSchema
          name={`How to Get ${config.serviceName}`}
          description={`Step-by-step guide to getting ${config.serviceName.toLowerCase()} from professionals`}
          steps={howToSteps}
          totalTime={config.timeRequired}
        />
        
        <ReviewSchema
          itemReviewed={{
            name: `52Roofer ${config.serviceName}`,
            image: "/images/hero-bg.jpg",
            description: `Professional ${config.serviceName.toLowerCase()} service`
          }}
          reviews={reviews}
          aggregateRating={{
            ratingValue: 4.9,
            reviewCount: reviews.length
          }}
        />
        
        <VideoSchema
          name={`${config.serviceName} Guide`}
          description={`Learn about our ${config.serviceName.toLowerCase()} process and options`}
          thumbnailUrl="/images/hero-bg.jpg"
          uploadDate="2023-12-01"
          duration="PT5M"
          embedUrl="https://www.youtube.com/embed/example"
        />
      </Head>

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

        {/* Comprehensive Solution Process */}
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

        {/* Voice Search Optimization Section */}
        <div className="bg-gradient-to-br from-primary-50 to-accent/5 p-8 rounded-2xl mt-12">
          <h2 className="text-2xl font-semibold text-primary-600 mb-6">Popular Voice Search Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Ask Your Device:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>{`"Hey Google, find ${config.serviceName.toLowerCase()}"`}</li>
                <li>{`"Alexa, I need ${config.serviceName.toLowerCase()}"`}</li>
                <li>{`"Siri, best roofers for ${config.serviceName.toLowerCase()}"`}</li>
                <li>{`"OK Google, ${config.serviceName.toLowerCase()} near me"`}</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">We Specialize In:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Professional service</li>
                <li>• Quality materials</li>
                <li>• Expert workmanship</li>
                <li>• Customer satisfaction</li>
              </ul>
            </div>
          </div>
        </div>

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
  );
};

export default ConversationalRoofingTemplate;
