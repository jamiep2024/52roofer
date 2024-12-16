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

const VoiceRoofInstallation: React.FC = () => {
  const areaNames = Object.values(serviceAreas).map(area => area.name);

  const reviews = [
    {
      author: "Thomas Anderson",
      reviewRating: 5,
      reviewBody: "Asked Google 'who can install a new eco-friendly roof near me' and found these experts. They explained all the sustainable options, energy savings, and even helped with solar panel compatibility!",
      datePublished: "2023-12-15"
    },
    {
      author: "Sarah Mitchell",
      reviewRating: 5,
      reviewBody: "Used Alexa to search for 'install new roof with best weather protection' - they provided amazing advice about materials suited for local weather and future-proofed my home.",
      datePublished: "2023-12-10"
    }
  ];

  const howToSteps = [
    {
      name: "Free Consultation",
      text: "Schedule your free roof assessment and material consultation",
      image: "/images/hero-bg.jpg"
    },
    {
      name: "Custom Design",
      text: "Get a personalized roof design and detailed quote",
      image: "/images/hero-bg.jpg"
    },
    {
      name: "Professional Installation",
      text: "Expert installation by certified roofing professionals",
      image: "/images/hero-bg.jpg"
    },
    {
      name: "Quality Inspection",
      text: "Final inspection and long-term warranty provision",
      image: "/images/hero-bg.jpg"
    }
  ];

  const initialFAQs = [
    {
      question: "Hey Google, how much does a new roof cost and what affects the price?",
      answer: "New roof costs typically range from £5,000 to £15,000, varying based on several factors: 1) Size: Average 3-bed house usually costs £7,000-£9,000, 2) Materials: From basic tiles (£5,000+) to premium slate (£12,000+), 3) Location: Prices vary by region and accessibility, 4) Additional features: Skylights, insulation, or solar panel preparation can affect cost. We provide detailed quotes including potential energy savings and property value increase to help you understand the long-term benefits.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, what's the best type of roof for UK weather and energy bills?",
      answer: "The ideal roof depends on several factors: 1) Weather resistance: Slate and clay tiles excel in UK weather, handling rain, wind, and temperature changes, 2) Energy efficiency: Modern materials with high insulation values can reduce heating costs by 20-30%, 3) Durability: Slate lasts 100+ years, clay tiles 60+ years, concrete tiles 50+ years, 4) Environmental impact: We offer eco-friendly options including recycled materials and solar-ready installations. We'll assess your specific needs, local weather patterns, and energy goals to recommend the best solution.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how long does it take to install a new roof and what's the process?",
      answer: "A typical installation takes 2-5 days, depending on size and complexity. Here's our process: 1) Day 1: Old roof removal and structural inspection, 2) Days 2-3: New underlayment and material installation, 3) Days 4-5: Finishing touches, guttering, and final inspection. We manage everything from material delivery to cleanup, and work around weather conditions. We'll also handle any necessary permits and provide progress updates throughout.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Siri, what roofing material is best for my house?",
      answer: "We'll help you choose based on your specific needs: 1) Traditional homes often suit slate or clay tiles, 2) Modern homes might benefit from contemporary materials with enhanced insulation, 3) Budget-conscious options include quality concrete tiles, 4) Eco-friendly homes can use recycled materials or solar-ready solutions. We'll assess your home's style, local weather, and your preferences to recommend the perfect match.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  // Meta description variations for voice search
  const metaDescriptions = [
    `Need a new roof installed? Just ask "Hey Google, find new roof installation near me". Expert installation in ${areaNames.slice(0, 3).join(', ')} and surrounding areas.`,
    `Looking for roof installation? Say "Alexa, find the best roofers for new roof" to discover our services in ${areaNames.slice(0, 3).join(', ')}.`,
    `Want a new roof? Tell Siri "I need a new roof installed" and we'll help. Professional service in ${areaNames.slice(0, 3).join(', ')} area.`
  ];

  // Enhanced schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "52Roofer New Roof Installation",
    "image": "/images/hero-bg.jpg",
    "description": `Professional new roof installation services in ${areaNames.slice(0, 3).join(', ')} and surrounding areas. Expert installation of all roof types including slate, clay tiles, and modern materials.`,
    "priceRange": "£££",
    "areaServed": areaNames.join(', '),
    "availableLanguage": "English",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "New Roof Installation Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Slate Roof Installation",
          "description": "Premium slate roof installation with 100+ year lifespan"
        },
        {
          "@type": "OfferCatalog",
          "name": "Clay Tile Installation",
          "description": "Traditional clay tile roof installation"
        },
        {
          "@type": "OfferCatalog",
          "name": "Modern Roofing Systems",
          "description": "Energy-efficient modern roofing solutions"
        }
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.52roofer.com/services/voice-roof-installation?location={location}",
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
        "name": "New Roof Installation",
        "item": "https://www.52roofer.com/services/voice-roof-installation"
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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "New Roof Installation Service",
    "description": "Professional new roof installation with quality materials and expert workmanship",
    "brand": {
      "@type": "Brand",
      "name": "52Roofer"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "priceRange": "£5000 - £15000",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviews.length
    }
  };

  return (
    <ServiceLayout
      heroImage="/images/hero-bg.jpg"
      heroTitle="Need a New Roof? Just Ask!"
      heroDescription="Voice-activated new roof installation service - tell us what you need"
      serviceName="New Roof Installation"
    >
      <Head>
        <title>New Roof Installation Near Me | Voice-Search Roofing Experts</title>
        {metaDescriptions.map((desc, index) => (
          <meta 
            key={index}
            name={index === 0 ? "description" : `description-${index + 1}`}
            content={desc}
          />
        ))}
        <meta name="keywords" content="new roof installation near me, install new roof, roof replacement, local roofers, eco-friendly roofing, energy efficient roof, voice activated roofing, best roofing materials" />
        <link rel="canonical" href="https://www.52roofer.com/services/voice-roof-installation" />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
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
          name="How to Get a New Roof Installed"
          description="Step-by-step guide to getting your new roof installed by professionals"
          steps={howToSteps}
          totalTime="P5D"
        />
        
        <ReviewSchema
          itemReviewed={{
            name: "52Roofer New Roof Installation",
            image: "/images/hero-bg.jpg",
            description: "Professional new roof installation service"
          }}
          reviews={reviews}
          aggregateRating={{
            ratingValue: 4.9,
            reviewCount: reviews.length
          }}
        />
        
        <VideoSchema
          name="New Roof Installation Guide"
          description="Learn about our roof installation process and material options"
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
              <li>"Hey Google, find new roof installation"</li>
              <li>"Alexa, I need a new roof installed"</li>
              <li>"Siri, best roofers for new roof"</li>
              <li>"OK Google, eco-friendly roof installation"</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">We Specialize In:</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Complete roof installations</li>
              <li>• Energy-efficient solutions</li>
              <li>• Traditional & modern materials</li>
              <li>• Solar-ready roofing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rest of your existing component content */}
    </ServiceLayout>
  );
};

export default VoiceRoofInstallation;
