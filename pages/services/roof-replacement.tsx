import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
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
    </Layout>

  );
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

const RoofReplacement: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const areaNames = Object.values(serviceAreas).map(area => area.name);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
      setShowMobileNav(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return (
    <Layout>
      <Layout>
<SEO title="" description="" />) => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services: Service[] = [
    {
      title: "Complete Replacement",
      description: "Full roof replacement with quality materials",
      icon: "🏠"
    },
    {
      title: "Material Options",
      description: "Wide range of roofing materials available",
      icon: "🏗️"
    },
    {
      title: "Expert Installation",
      description: "Professional installation by certified teams",
      icon: "👷"
    },
    {
      title: "Long-term Warranty",
      description: "Comprehensive warranty coverage",
      icon: "✅"
    }
  ];

  const benefits: Benefit[] = [
    {
      title: "Enhanced Protection",
      description: "Superior weather protection and durability",
      icon: "🛡️"
    },
    {
      title: "Energy Efficiency",
      description: "Improved insulation and energy savings",
      icon: "⚡"
    },
    {
      title: "Property Value",
      description: "Increased home value and curb appeal",
      icon: "📈"
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
      author: "Michael Cooper",
      reviewRating: 5,
      reviewBody: "Complete roof replacement done efficiently and professionally. Excellent results!",
      datePublished: "2023-11-15"
    },
    {
      author: "Rachel White",
      reviewRating: 5,
      reviewBody: "Very impressed with the quality of work and attention to detail on our new roof.",
      datePublished: "2023-10-28"
    },
    {
      author: "Daniel Harris",
      reviewRating: 4,
      reviewBody: "Professional team and great communication throughout the replacement process.",
      datePublished: "2023-10-10"
    }
  ];

  const initialFAQs: FAQ[] = [
    {
      question: "How do I know if I need a roof replacement?",
      answer: "Signs include age (20+ years), missing/damaged shingles, leaks, sagging, daylight through roof boards, and high energy bills.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "How long does a roof replacement take?",
      answer: "Most residential roof replacements take 2-5 days, depending on size, weather conditions, and complexity of the project.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "What roofing materials are available?",
      answer: "Common options include asphalt shingles, metal roofing, slate, clay tiles, and synthetic materials. Each has different benefits and lifespans.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "How much does a new roof cost?",
      answer: "Costs vary based on size, materials, and complexity. Average UK homes range from £5,000 to £15,000. Get multiple quotes for accurate pricing.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "What warranty coverage should I expect?",
      answer: "Look for manufacturers' warranties (20-50 years) on materials and workmanship warranties (5-10 years) on installation.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const voiceSearchContent = `
    Need a complete roof replacement? We connect you with experienced roofing professionals 
    who specialize in full roof replacements. Using quality materials and expert installation 
    techniques, our network of verified contractors ensures your new roof provides lasting 
    protection. Find trusted roof replacement experts in ${areaNames.join(', ')}.
  `;

  return (
    <ServiceLayout
      heroImage="/images/services/local-roofing-hero.jpg"
      heroTitle="Professional Roof Replacement Services"
      heroDescription="Expert roof replacement with quality materials and workmanship"
      serviceName="Roof Replacement"
    >
      <div className="space-y-12">
        <Head>
          <title>Professional Roof Replacement Services | 52roofer.com</title>
          <meta 
            name="description" 
            content={`Expert roof replacement services across ${areaNames.join(', ')}. Quality materials and professional installation guaranteed.`}
          />
          
          
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
            name="How to Choose a Roof Replacement Service"
            description="A comprehensive guide to selecting the right roofing service for your replacement needs"
            steps={howToSteps}
            totalTime="P1D"
          />
          
          <ReviewSchema
            itemReviewed={{
              name: "52Roofer Roof Replacement Services",
              image: "/images/services/local-roofing-hero.jpg",
              description: "Professional roof replacement services across the UK"
            }}
            reviews={reviews}
            aggregateRating={{
              ratingValue: 4.8,
              reviewCount: reviews.length
            }}
          />
          
          <VideoSchema
            name="Expert Guide: Roof Replacement Process"
            description="Comprehensive guide on the roof replacement process and what to expect"
            thumbnailUrl="https://img.youtube.com/vi/g9bHCPSpJxw/maxresdefault.jpg"
            uploadDate="2023-11-01"
            duration="PT10M"
            embedUrl="https://www.youtube.com/embed/g9bHCPSpJxw"
          />
          

        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/services/roof-replacement#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/services/roof-replacement",
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
      "@id": "https://52roofer.com/services/roof-replacement#webpage",
      "url": "https://52roofer.com/services/roof-replacement",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/services/roof-replacement#faq",
      "mainEntity": []
    }
  ]
}</script>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Professional Roof Replacement</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose a Roof Replacement Service</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Guide: Roof Replacement Process</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/g9bHCPSpJxw"
              title="Expert Guide: Roof Replacement Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-4 text-gray-600">
            Watch our comprehensive guide on the roof replacement process. 
            Learn about material options, installation steps, and what to expect during your project.
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

export default RoofReplacement;