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

const VoiceRoofRepairs: React.FC = () => {
  const areaNames = Object.values(serviceAreas).map(area => area.name);

  const reviews = [
    {
      author: "James Wilson",
      reviewRating: 5,
      reviewBody: "Asked my phone 'fix leaking roof near me during storm' at 11 PM. These guys responded immediately, explained what materials they'd use, and even helped with my insurance claim!",
      datePublished: "2023-12-15"
    },
    {
      author: "Emma Davis",
      reviewRating: 5,
      reviewBody: "Used voice search to find 'emergency roof repairs in heavy rain' - they came quickly, fixed the leak, and gave great advice about preventing future problems. Really understood what I needed.",
      datePublished: "2023-12-10"
    }
  ];

  const howToSteps = [
    {
      name: "Contact Emergency Team",
      text: "Call our 24/7 emergency line or use voice search to find us",
      image: "/images/hero-bg.jpg"
    },
    {
      name: "Quick Assessment",
      text: "Our experts quickly evaluate the damage and required repairs",
      image: "/images/hero-bg.jpg"
    },
    {
      name: "Emergency Repairs",
      text: "Professional repairs using quality materials",
      image: "/images/hero-bg.jpg"
    },
    {
      name: "Prevention Plan",
      text: "Get advice on preventing future issues",
      image: "/images/hero-bg.jpg"
    }
  ];

  const initialFAQs = [
    {
      question: "Hey Google, my roof is leaking and it's raining - what should I do?",
      answer: "First, place buckets under leaks and move valuables. Call us for emergency repairs - we're available 24/7 and typically arrive within 1-2 hours. While waiting, take photos for insurance if safe. We'll not only fix the immediate leak but also check for underlying issues like damaged flashing or worn shingles that could cause future problems. We can also advise on preventive measures and help with insurance documentation.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how much does it cost to fix a roof leak and how long will it last?",
      answer: "Repair costs typically range from £150-£500, depending on the damage extent. Small repairs (few tiles) cost £150-£250, while larger issues might be £300-£500+. Our repairs usually last 10-15 years with proper maintenance. We use high-grade materials that match your existing roof and provide a workmanship warranty. If the repair cost is significant, we can discuss whether a full replacement might be more cost-effective long-term.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, what causes roof leaks and how can I prevent them?",
      answer: "Leaks often result from weather damage, aging materials, or poor installation. Common causes include cracked tiles, damaged flashing around chimneys, blocked gutters, and condensation issues. Prevention includes regular maintenance, gutter cleaning, and annual inspections. We can create a maintenance plan tailored to your roof type and local weather conditions to prevent future problems.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Siri, can someone fix my roof today?",
      answer: "Yes! We offer same-day emergency roof repairs with most fixes completed within hours. Our local teams are available 24/7 for urgent repairs, and we'll give you a clear timeline when we assess the damage.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, what should I ask a roofer?",
      answer: "Important questions include: How quickly can you respond? What's your emergency call-out process? Do you provide temporary repairs in bad weather? What warranties do you offer? We're happy to answer all these questions and more.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  // Schema markup data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "52Roofer Emergency Roof Repairs",
    "image": "/images/hero-bg.jpg",
    "description": `24/7 emergency roof repair services in ${areaNames.slice(0, 3).join(', ')} and surrounding areas. Fast response for leaks, storm damage, and urgent repairs.`,
    "priceRange": "££",
    "areaServed": areaNames.join(', '),
    "availableLanguage": "English",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Emergency Roof Repairs",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Leak Repairs",
          "description": "Emergency repairs for roof leaks"
        },
        {
          "@type": "OfferCatalog",
          "name": "Storm Damage Repairs",
          "description": "Urgent repairs for storm-damaged roofs"
        }
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.52roofer.com/services/voice-roof-repairs?location={location}",
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
        "name": "Emergency Roof Repairs",
        "item": "https://www.52roofer.com/services/voice-roof-repairs"
      }
    ]
  };

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": initialFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Meta description variations for voice search
  const metaDescriptions = [
    `Need urgent roof repairs? Just ask "Hey Google, find emergency roof repairs near me". Available 24/7 in ${areaNames.slice(0, 3).join(', ')} and surrounding areas.`,
    `Having roof problems? Say "Alexa, I need a roof repair service" to find us. Expert roofers available now in ${areaNames.slice(0, 3).join(', ')}.`,
    `Looking for roof repairs? Tell Siri "My roof is leaking" and we'll help. Fast response in ${areaNames.slice(0, 3).join(', ')} area.`
  ];

  return (
    <ServiceLayout
      heroImage="/images/hero-bg.jpg"
      heroTitle="Need Your Roof Fixed? Just Ask!"
      heroDescription="Voice-activated roof repair service - just ask your device to find us"
      serviceName="Roof Repairs"
    >
      <Head>
        <title>Emergency Roof Repairs Near Me | Voice-Activated 24/7 Service</title>
        {metaDescriptions.map((desc, index) => (
          <meta 
            key={index}
            name={index === 0 ? "description" : `description-${index + 1}`}
            content={desc}
          />
        ))}
        <meta name="keywords" content="roof repairs near me, emergency roof repair, fix leaking roof, roof repair service, local roofers, 24/7 roof repairs, storm damage repair, voice activated roofing" />
        <link rel="canonical" href="https://www.52roofer.com/services/voice-roof-repairs" />
        
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
          name="How to Get Emergency Roof Repairs"
          description="Step-by-step guide to getting emergency roof repairs when you need them"
          steps={howToSteps}
          totalTime="PT2H"
        />
        
        <ReviewSchema
          itemReviewed={{
            name: "52Roofer Emergency Roof Repairs",
            image: "/images/hero-bg.jpg",
            description: "24/7 emergency roof repair services"
          }}
          reviews={reviews}
          aggregateRating={{
            ratingValue: 4.9,
            reviewCount: reviews.length
          }}
        />
        
        <VideoSchema
          name="Emergency Roof Repair Guide"
          description="Learn about our emergency roof repair process and what to expect"
          thumbnailUrl="/images/hero-bg.jpg"
          uploadDate="2023-12-01"
          duration="PT5M"
          embedUrl="https://www.youtube.com/embed/example"
        />
      </Head>

      {/* Rest of your existing component content */}
      
      {/* Additional Voice Search Optimization Section */}
      <div className="bg-gradient-to-br from-primary-50 to-accent/5 p-8 rounded-2xl mt-12">
        <h2 className="text-2xl font-semibold text-primary-600 mb-6">Popular Voice Search Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Ask Your Device:</h3>
            <ul className="space-y-3 text-gray-700">
              <li>"Hey Google, find emergency roof repairs"</li>
              <li>"Alexa, I need a roofer near me"</li>
              <li>"Siri, my roof is leaking"</li>
              <li>"OK Google, roof repair service"</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">We'll Help With:</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Immediate leak fixes</li>
              <li>• Storm damage repairs</li>
              <li>• Emergency weatherproofing</li>
              <li>• Insurance claim assistance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rest of your existing component content */}
    </ServiceLayout>
  );
};

export default VoiceRoofRepairs;
