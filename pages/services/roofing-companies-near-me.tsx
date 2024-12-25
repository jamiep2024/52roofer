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
  return date.toLocaleDateString('en-GB'); // Consistent date format DD/MM/YYYY
};

const RoofingCompaniesNearMe: React.FC = () => {
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
      title: "Local Expertise",
      description: "Roofing companies that understand your area's specific needs",
      icon: "📍"
    },
    {
      title: "Quick Response",
      description: "Fast service from nearby roofing professionals",
      icon: "⚡"
    },
    {
      title: "Comprehensive Services",
      description: "Full range of roofing solutions for your property",
      icon: "🏠"
    },
    {
      title: "Quality Assurance",
      description: "Vetted local companies with proven track records",
      icon: "✅"
    }
  ];

  const benefits: Benefit[] = [
    {
      title: "Local Knowledge",
      description: "Understanding of local weather conditions and building regulations",
      icon: "🎯"
    },
    {
      title: "Quick Service",
      description: "Faster response times due to proximity",
      icon: "⏱️"
    },
    {
      title: "Community Trust",
      description: "Established reputation in your local area",
      icon: "🤝"
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

  const initialFAQs: FAQ[] = [
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
    },
    {
      question: "How long does a typical roof installation take?",
      answer: "Most residential roof installations take 1-3 days, depending on the size and complexity of the project. Factors like weather can affect the timeline.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "What types of roofing materials are available?",
      answer: "Common options include asphalt shingles, metal roofing, slate, tile, and flat roof materials. Each has its own benefits and price points.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  // Voice search optimized content
  const voiceSearchContent = `
    Looking for roofing companies near you? We help homeowners find trusted local roofing professionals 
    in their area. Whether you need emergency repairs, a full roof replacement, or routine maintenance, 
    our network of verified contractors can help. Simply tell us what you need, and we'll connect you 
    with the right experts in ${areaNames.join(', ')}.
  `;

  return (
    <ServiceLayout
      heroImage="/images/services/local-roofing-hero.jpg"
      heroTitle="Find Roofing Companies Near You"
      heroDescription="Connect with trusted local roofing professionals in your area"
      serviceName="Local Roofing Companies"
    >
      <div className="space-y-12">
        <Head>
          <title>Find Roofing Companies Near Me | 52roofer.com</title>
          <meta 
            name="description" 
            content={`Discover trusted local roofing companies across ${areaNames.join(', ')}. Professional roofing services with quality workmanship guaranteed.`}
          />
          <link rel="canonical" href="https://www.52roofer.com/services/roofing-companies-near-me" />
          
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
            name="Expert Guide: Choosing a Roofing Company"
            description="Comprehensive guide on selecting the right roofing contractor for your needs"
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
      "@id": "https://52roofer.com/services/roofing-companies-near-me#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/services/roofing-companies-near-me",
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
      "@id": "https://52roofer.com/services/roofing-companies-near-me#webpage",
      "url": "https://52roofer.com/services/roofing-companies-near-me",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/services/roofing-companies-near-me#faq",
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Local Roofing Companies</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose a Roofing Company</h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Guide: Choosing a Roofing Company</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/g9bHCPSpJxw"
              title="Expert Guide: Choosing a Roofing Company"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-4 text-gray-600">
            Watch our comprehensive guide on how to choose the right roofing company for your needs. 
            Learn about important factors to consider, questions to ask, and red flags to watch out for.
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

export default RoofingCompaniesNearMe;
