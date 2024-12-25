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

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface Step {
  name: string;
  text: string;
  image: string;
}

interface Review {
  author: string;
  reviewRating: number;
  reviewBody: string;
  datePublished: string;
}

interface FAQ {
  question: string;
  answer: string;
  views: number;
  lastUpdated: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB');
};

const RoofingConstruction: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const areaNames = Object.values(serviceAreas).map(area => area.name);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
      setShowMobileNav(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services: Service[] = [
    {
      title: "New Construction",
      description: "Complete roofing systems for new builds",
      icon: "🏗️"
    },
    {
      title: "Project Planning",
      description: "Detailed planning and design services",
      icon: "📋"
    },
    {
      title: "Custom Solutions",
      description: "Tailored roofing construction options",
      icon: "⚙️"
    },
    {
      title: "Quality Control",
      description: "Rigorous construction standards",
      icon: "✅"
    }
  ];

  const benefits: Benefit[] = [
    {
      title: "Expert Design",
      description: "Professional architectural planning",
      icon: "📐"
    },
    {
      title: "Quality Build",
      description: "Superior construction methods",
      icon: "🏗️"
    },
    {
      title: "Long-term Value",
      description: "Durable and lasting results",
      icon: "💎"
    }
  ];

  const howToSteps: Step[] = [
    {
      name: "Research Local Companies",
      text: "Start by creating a list of local roofing companies with good reputations and reviews.",
      image: "/images/how-to/research-companies.png"
    },
    {
      name: "Check Credentials",
      text: "Verify licenses, insurance, and certifications of potential roofing companies.",
      image: "/images/how-to/check-credentials.png"
    },
    {
      name: "Get Multiple Quotes",
      text: "Request detailed quotes from at least three different roofing companies.",
      image: "/images/how-to/get-quotes.png"
    },
    {
      name: "Review Past Work",
      text: "Ask for references and examples of previous roofing projects.",
      image: "/images/how-to/review-work.png"
    },
    {
      name: "Compare Warranties",
      text: "Compare warranty offerings and ensure everything is in writing.",
      image: "/images/how-to/warranty.png"
    }
  ];

  const reviews: Review[] = [
    {
      author: "William Parker",
      reviewRating: 5,
      reviewBody: "Outstanding construction work on our new build project. Professional team and excellent results.",
      datePublished: "2023-11-28"
    },
    {
      author: "Sarah Mitchell",
      reviewRating: 5,
      reviewBody: "The attention to detail in planning and construction was impressive. Highly recommended.",
      datePublished: "2023-11-12"
    },
    {
      author: "David Lewis",
      reviewRating: 4,
      reviewBody: "Great communication throughout the construction process. Quality workmanship.",
      datePublished: "2023-10-25"
    }
  ];

  const initialFAQs: FAQ[] = [
    {
      question: "What is involved in roofing construction?",
      answer: "Roofing construction includes design planning, material selection, structural assessment, installation, and quality control throughout the build process.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "How long does roofing construction take?",
      answer: "Timeline varies by project scope - new builds typically take 1-2 weeks, while complex designs may require 2-4 weeks for completion.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "What construction methods are used?",
      answer: "Methods include traditional timber framing, steel construction, truss systems, and modern prefabricated components depending on design requirements.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "What materials are recommended?",
      answer: "Material choice depends on design, budget, and climate - options include slate, clay tiles, metal roofing, and high-grade synthetic materials.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "What warranties cover construction?",
      answer: "Construction typically includes structural warranties (10-25 years), workmanship guarantees (5-10 years), and material warranties (20-50 years).",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const voiceSearchContent = `
    Need professional roofing construction services? We connect you with expert contractors 
    specializing in new builds and complete roofing systems. From design to completion, 
    our network of verified construction specialists ensures quality workmanship. Find 
    experienced roofing construction experts in ${areaNames.join(', ')}.
  `;

  return (
    <ServiceLayout
      heroImage="/images/services/local-roofing-hero.jpg"
      heroTitle="Professional Roofing Construction"
      heroDescription="Expert roofing construction and new build services"
      serviceName="Roofing Construction"
    >
      <div className="space-y-12">
        <Head>
          <title>Professional Roofing Construction Services | 52roofer.com</title>
          <meta 
            name="description" 
            content={`Expert roofing construction services across ${areaNames.join(', ')}. Quality workmanship and professional project management.`}
          />
          <link rel="canonical" href="https://www.52roofer.com/services/roofing-construction" />
          
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
            image="/images/services/local-roofing-hero.jpg"
            rating={{
              ratingValue: 4.8,
              reviewCount: reviews.length
            }}
          />
          
          <HowToSchema
            name="How to Choose a Roofing Construction Service"
            description="A comprehensive guide to selecting the right roofing construction company"
            steps={howToSteps}
            totalTime="P1D"
          />
          
          <ReviewSchema
            itemReviewed={{
              name: "52Roofer Construction Services",
              image: "/images/services/local-roofing-hero.jpg",
              description: "Professional roofing construction services across the UK"
            }}
            reviews={reviews}
            aggregateRating={{
              ratingValue: 4.8,
              reviewCount: reviews.length
            }}
          />
          
          <VideoSchema
            name="Expert Guide: Roofing Construction"
            description="Comprehensive guide on roofing construction processes"
            thumbnailUrl="https://img.youtube.com/vi/g9bHCPSpJxw/maxresdefault.jpg"
            uploadDate="2023-11-01"
            duration="PT10M"
            embedUrl="https://www.youtube.com/embed/g9bHCPSpJxw"
          />
        </Head>

        {/* Voice Search Optimized Introduction */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <p className="text-xl text-gray-700 leading-relaxed" aria-label="Voice search friendly introduction">
            {voiceSearchContent}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section with Enhanced Multimedia */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Professional Construction</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <div className="text-xl font-semibold mb-2">{benefit.title}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Choose Section with Optimized Images */}
        <div className="bg-white rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose a Construction Service</h2>
          <div className="space-y-8">
            {howToSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-6 bg-gray-50 rounded-xl p-6">
                <div className="flex-shrink-0 w-full md:w-1/3 relative h-48">
                  <Image
                    src={step.image}
                    alt={step.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'contain' }}
                    priority={index === 0}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.name}</h3>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section with Enhanced Schema */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Guide: Roofing Construction</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/g9bHCPSpJxw"
              title="Expert Guide: Roofing Construction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-4 text-gray-600">
            Watch our comprehensive guide on roofing construction. 
            Learn about planning, materials, construction methods, and quality control.
          </p>
        </div>

        {/* Reviews Section with Schema */}
        <div className="bg-white rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < review.reviewRating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{review.reviewBody}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{review.author}</span>
                  <span>{formatDate(review.datePublished)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic FAQ Section */}
        <div className="bg-white rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <DynamicFAQ initialFAQs={initialFAQs} category="roofing" />
        </div>

        {/* Sticky Mobile Navigation */}
        <div
          className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 transition-transform duration-300 transform md:hidden ${
            showMobileNav ? 'translate-y-0' : 'translate-y-full'
          } z-50`}
        >
          <div className="container mx-auto flex justify-between items-center space-x-4">
            <a
              href="tel:+441234567890"
              className="flex-1 bg-primary-500 text-white px-4 py-3 rounded-lg font-semibold text-center"
            >
              Call Now
            </a>
            <a
              href="#contact-form"
              className="flex-1 bg-accent text-white px-4 py-3 rounded-lg font-semibold text-center"
            >
              Get Quote
            </a>
          </div>
        </div>

        {/* Sticky CTA for Mobile */}
        <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 transition-transform duration-300 transform md:hidden ${
          isSticky ? 'translate-y-0' : 'translate-y-full'
        } z-50`}>
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

export default RoofingConstruction;
