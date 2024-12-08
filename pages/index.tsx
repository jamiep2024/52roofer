import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { businesses } from '../data/businesses';
import { serviceAreas } from '../data/serviceAreas';
import BusinessCard from '../components/business/BusinessCard';
import SEO from '../components/seo/SEO';
import Image from 'next/image';

// JSON-LD structured data for rich snippets
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://52roofer.com/#organization",
  "name": "52Roofer",
  "url": "https://52roofer.com",
  "logo": "https://52roofer.com/images/logo.png",
  "description": "Find trusted local roofers in Oxfordshire, Gloucestershire, Wiltshire, and Berkshire. Professional roofing services for repairs, installations, and maintenance.",
  "areaServed": [
    {
      "@type": "State",
      "name": "Oxfordshire"
    },
    {
      "@type": "State",
      "name": "Gloucestershire"
    },
    {
      "@type": "State",
      "name": "Wiltshire"
    },
    {
      "@type": "State",
      "name": "Berkshire"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-0800-123-4567",
    "contactType": "customer service",
    "areaServed": ["GB"],
    "availableLanguage": ["English"]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://52roofer.com/#localbusiness",
  "name": "52Roofer - Professional Roofing Services",
  "image": "https://52roofer.com/images/hero-bg.jpg",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB",
    "addressRegion": "England"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "157"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "51.7520",
      "longitude": "-1.2577"
    },
    "geoRadius": "50000"
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
      "item": "https://52roofer.com"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find a reliable roofer in Oxfordshire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "52Roofer connects you with verified, professional roofers in Oxfordshire. All our roofers are thoroughly vetted, insured, and have proven track records of quality work."
      }
    },
    {
      "@type": "Question",
      "name": "What roofing services are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our network of roofers provides comprehensive services including roof repairs, installations, maintenance, emergency repairs, and inspections for both residential and commercial properties."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer emergency roofing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide 24/7 emergency roofing services across Oxfordshire, Gloucestershire, Wiltshire, and Berkshire through our network of trusted local roofers."
      }
    }
  ]
};

const combinedSchema = [
  organizationSchema,
  localBusinessSchema,
  breadcrumbSchema,
  faqSchema
];

export default function Home() {
  const [location, setLocation] = useState("");
  const [showResults, setShowResults] = useState(false);
  const locations = ['Oxfordshire', 'Gloucestershire', 'Wiltshire', 'Berkshire'];
  const searchResultsRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
    // Wait for the next render cycle when results are shown
    setTimeout(() => {
      searchResultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <SEO
        title="52Roofer | Find Trusted Local Roofers in Oxfordshire & Surrounding Areas"
        description="Connect with verified local roofers in Oxfordshire, Gloucestershire, Wiltshire, and Berkshire. Get instant quotes for roof repairs, installations, and maintenance from trusted professionals. Available 24/7 for emergency services."
        jsonLd={combinedSchema}
      />
      <Head>
        <title>52roofer.com - Find Local Trusted Roofers in South England</title>
        <meta name="description" content="Connect with trusted local roofers across Oxfordshire, Gloucestershire, Wiltshire, and Berkshire. Professional roofing services, emergency repairs, and free consultations." />
        <meta name="keywords" content="roofing services, local roofers, trusted roofers, Oxfordshire roofers, Gloucestershire roofers, Wiltshire roofers, Berkshire roofers, roof repairs, emergency roofing" />
        <meta property="og:title" content="52roofer.com - Premier Roofing Services in South England" />
        <meta property="og:description" content="Your trusted partner for professional roofing services. Connecting homeowners with qualified local roofers across South England." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.52roofer.com" />
        <meta property="og:image" content="https://www.52roofer.com/images/hero-bg.jpg" />
        <link rel="canonical" href="https://www.52roofer.com" />
      </Head>

      <div className="relative bg-white">
        {/* Hero Section with Location Bar */}
        <div className="relative bg-gray-900 min-h-screen">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="h-full w-full object-cover opacity-40"
              src="/images/hero-bg.jpg"
              alt="Professional roofing services"
            />
            <div className="absolute inset-0 hero-gradient opacity-60"></div>
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-center mb-8 text-shadow slide-in">
              Find Trusted Local
              <span className="block mt-2">Roofers</span>
            </h1>
            
            <div className="mx-auto max-w-3xl w-full slide-in" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 justify-center glass-effect p-6 rounded-xl">
                <div className="flex-grow">
                  <select
                    className="w-full px-6 py-4 text-lg text-gray-700 bg-white bg-opacity-90 border-2 border-white/20 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  >
                    <option value="">Enter your location</option>
                    {Object.values(serviceAreas).map((area) => (
                      <option key={area.name} value={area.name}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transition-all transform hover:scale-105 text-lg whitespace-nowrap shadow-lg"
                >
                  Find a Roofer
                </button>
              </form>
              <p className="mt-6 text-center text-white/80 text-lg slide-in" style={{ animationDelay: '0.4s' }}>
                Serving Oxfordshire, Gloucestershire, Wiltshire, and Berkshire
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full slide-in" style={{ animationDelay: '0.6s' }}>
              {[
                {
                  title: "Verified Experts",
                  description: "All our roofers are thoroughly vetted",
                  icon: "🏆"
                },
                {
                  title: "Quick Response",
                  description: "Get connected with local roofers fast",
                  icon: "⚡"
                },
                {
                  title: "Guaranteed Quality",
                  description: "Satisfaction guaranteed on all work",
                  icon: "✓"
                }
              ].map((feature, index) => (
                <div key={feature.title} className="glass-effect rounded-xl p-6 text-center card-hover">
                  <div className="text-4xl mb-4 floating">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search Results Section */}
        {showResults && (
          <div ref={searchResultsRef} className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 max-w-3xl mx-auto">
                {businesses
                  .filter(business => business.location === location)
                  .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
                  .slice(0, 4)
                  .map((business, index) => (
                    <div key={business.id} className="slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <BusinessCard business={business} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Trusted Partner Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Your Trusted Roofing Partner</h2>
                <p className="text-lg text-gray-600">
                  At 52roofer.com, we're committed to revolutionizing how homeowners find and connect with trusted roofing professionals. Our platform serves as a bridge between quality-focused homeowners and vetted, experienced roofers across South England.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/images/before-roof.jpg"
                    alt="Before: Church roof requiring restoration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center">
                    Before
                  </div>
                </div>
                <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/images/after-roof.jpg"
                    alt="After: Restored church roof with new ladder access"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center">
                    After
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <div id="about-section" className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Our Mission */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-4xl font-bold tracking-tight gradient-text mb-6">Your Trusted Roofing Partner</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    At 52roofer.com, we're committed to revolutionizing how homeowners find and connect with trusted roofing professionals. Our platform serves as a bridge between quality-focused homeowners and vetted, experienced roofers across South England.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {[
                      {
                        name: 'Verified Professionals',
                        description: 'Every roofer in our network undergoes thorough vetting, including license verification, insurance checks, and performance reviews.'
                      },
                      {
                        name: 'Quality Assurance',
                        description: 'We maintain strict quality standards, ensuring only the most reliable and skilled roofers are recommended to our clients.'
                      },
                      {
                        name: 'Local Expertise',
                        description: 'Our roofers bring deep knowledge of local building regulations and architectural styles specific to South England.'
                      }
                    ].map((feature) => (
                      <div key={feature.name} className="card-hover p-6 rounded-xl bg-gray-50">
                        <dt className="font-semibold text-gray-900">{feature.name}</dt>
                        <dd className="mt-2">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="/images/roofing-1.jpg"
                  alt="Professional roofer at work"
                  className="rounded-xl bg-gray-900/5 object-cover shadow-lg card-hover"
                />
                <img
                  src="/images/roofing-2.jpg"
                  alt="Completed roofing project"
                  className="rounded-xl bg-gray-900/5 object-cover shadow-lg card-hover"
                />
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-32">
              <h2 className="text-4xl font-bold tracking-tight gradient-text text-center mb-6">Our Service Areas</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-center max-w-2xl mx-auto">
                We provide comprehensive roofing services across major regions in South England, ensuring every homeowner has access to quality roofing solutions.
              </p>
              
              <div className="mt-16 responsive-grid">
                {Object.values(serviceAreas).map((area) => (
                  <div key={area.name} className="rounded-xl bg-gray-50 p-8 card-hover">
                    <h3 className="text-xl font-semibold text-gray-900 gradient-text">{area.name}</h3>
                    <ul className="mt-4 space-y-2">
                      {area.mainTowns.slice(0, 4).map((town) => (
                        <li key={town} className="text-gray-600 flex items-center">
                          <span className="mr-2">•</span>
                          {town}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-32">
              <h2 className="text-4xl font-bold tracking-tight gradient-text text-center mb-6">Why Choose 52roofer.com</h2>
              <div className="mt-16 responsive-grid">
                {[
                  {
                    title: "20+ Years Experience",
                    description: "Two decades of connecting homeowners with trusted roofing professionals.",
                    icon: "🏆"
                  },
                  {
                    title: "Vetted Professionals",
                    description: "Every roofer in our network is thoroughly vetted and monitored for quality.",
                    icon: "✓"
                  },
                  {
                    title: "Emergency Services",
                    description: "24/7 emergency roofing support when you need it most.",
                    icon: "🚨"
                  },
                  {
                    title: "Free Consultations",
                    description: "Get expert advice and quotes without any obligation.",
                    icon: "💬"
                  },
                  {
                    title: "Quality Guaranteed",
                    description: "All work is backed by our satisfaction guarantee.",
                    icon: "⭐"
                  },
                  {
                    title: "Local Expertise",
                    description: "Deep knowledge of local building regulations and architectural styles.",
                    icon: "🏠"
                  }
                ].map((feature) => (
                  <div key={feature.title} className="glass-effect bg-white p-8 rounded-xl card-hover">
                    <div className="text-4xl mb-4 floating">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-32 rounded-3xl hero-gradient py-20 sm:py-32">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white text-shadow sm:text-5xl">
                  Ready to Find Your Perfect Roofer?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
                  Connect with trusted local roofers today and get your roofing project started with confidence.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setShowResults(false);
                    }}
                    className="glass-effect px-8 py-4 text-lg font-semibold text-white rounded-xl hover:bg-white/20 transition-all transform hover:scale-105"
                  >
                    Find a Roofer
                  </button>
                  <Link
                    href="/contact"
                    className="text-lg font-semibold leading-6 text-white hover:text-white/80 transition-colors"
                  >
                    Contact Us <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
