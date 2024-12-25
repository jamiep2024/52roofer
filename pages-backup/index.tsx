import Layout from '../components/layout/Layout';
import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { businesses } from '../data/businesses';
import { serviceAreas } from '../data/serviceAreas';
import BusinessCard from '../components/business/BusinessCard';
import SEO from '../components/seo/SEO';
import Image from 'next/image';
import HeroImage from '../components/HeroImage';

// JSON-LD structured data for rich snippets
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://52roofer.com/#organization",
  "name": "52Roofer",
  "url": "https://52roofer.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://52roofer.com/images/logo.png",
    "width": "512",
    "height": "512"
  },
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
    "telephone": "07990101321",
    "contactType": "customer service",
    "areaServed": ["GB"],
    "availableLanguage": ["English"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  },
  "sameAs": [
    "https://www.facebook.com/52roofer",
    "https://twitter.com/52roofer",
    "https://www.linkedin.com/company/52roofer"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://52roofer.com/#localbusiness",
  "name": "52Roofer - Professional Roofing Services",
  "image": "https://52roofer.com/images/logo.png",
  "priceRange": "££-£££",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB",
    "addressRegion": "Oxfordshire"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.7520",
    "longitude": "-1.2577"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Roof Repairs",
          "description": "24/7 emergency roof repair service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Installation",
          "description": "Professional roof installation services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Maintenance",
          "description": "Regular roof maintenance and inspections"
        }
      }
    ]
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
  const router = useRouter();
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
<Layout>
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
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/index#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/index",
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
      "@id": "https://52roofer.com/index#webpage",
      "url": "https://52roofer.com/index",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/index#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <div className="relative bg-white">
        {/* Hero Section with Location Bar */}
        <div className="relative bg-gray-900 min-h-screen w-full">
          <HeroImage 
            src="/images/hero-bg.jpg"
            alt={`Hero Image for the Homepage`}
          />
          <div className="relative w-full px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
            <div className="max-w-7xl w-full mx-auto">
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

        {/* About Section */}
        <div id="about-section" className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Our Mission */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold tracking-tight gradient-text mb-6">Your Trusted Roofing Partner</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At 52roofer.com, we're committed to revolutionizing how homeowners find and connect with trusted roofing professionals. Our platform serves as a bridge between quality-focused homeowners and vetted, experienced roofers across South England.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="glass-effect p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="text-4xl mb-6 text-center">🛡️</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Verified Professionals</h3>
                  <p className="text-gray-600">
                    Every roofer in our network undergoes thorough vetting, including license verification, insurance checks, and performance reviews.
                  </p>
                </div>
                <div className="glass-effect p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="text-4xl mb-6 text-center">⭐</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                  <p className="text-gray-600">
                    We maintain strict quality standards, ensuring only the most reliable and skilled roofers are recommended to our clients.
                  </p>
                </div>
                <div className="glass-effect p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="text-4xl mb-6 text-center">🏠</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Expertise</h3>
                  <p className="text-gray-600">
                    Our roofers bring deep knowledge of local building regulations and architectural styles specific to South England.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-32">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold tracking-tight gradient-text mb-6">Our Service Areas</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We provide comprehensive roofing services across major regions in South England,
                  ensuring every homeowner has access to quality roofing solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.values(serviceAreas).map((area) => (
                  <div key={area.name} className="glass-effect p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-semibold gradient-text">{area.name}</h3>
                      <span className="text-3xl">🏠</span>
                    </div>
                    <div className="space-y-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-sm text-gray-500 mb-2">Main Service Areas:</p>
                        <ul className="grid grid-cols-1 gap-2">
                          {area.mainTowns.map((town) => (
                            <li key={town} className="text-gray-700 flex items-center">
                              <span className="mr-2 text-accent">•</span>
                              {town}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-sm text-gray-500 mb-2">Postcodes Covered:</p>
                        <p className="text-gray-700">{area.postcodes.join(', ')}</p>
                      </div>
                    </div>
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
                  <div key={feature.title} className="glass-effect bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    <div className="text-4xl mb-6 text-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="relative mt-32 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-90 rounded-3xl"></div>
              
              <div className="relative px-8 py-24 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-8">
                    <h2 className="text-5xl font-bold tracking-tight text-gray-900">
                      Ready to Find Your Perfect Roofer?
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      Connect with trusted local roofers today and get your roofing project started with confidence. Our vetted professionals are ready to help with:
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Free, no-obligation quotes',
                        'Expert advice on your roofing needs',
                        'Local, trusted professionals',
                        'Quality workmanship guarantee'
                      ].map((item) => (
                        <li key={item} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <Link
                        href="/find-roofer"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent rounded-xl hover:bg-accent-dark transition-colors duration-200"
                      >
                        Find a Roofer
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-accent bg-white border-2 border-accent rounded-xl hover:bg-accent hover:text-white transition-colors duration-200"
                      >
                        Contact Us
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Right Content - Stats */}
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { number: '500+', label: 'Projects Completed' },
                      { number: '50+', label: 'Active Roofers' },
                      { number: '8', label: 'Counties Covered' },
                      { number: '4.9', label: 'Average Rating' }
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-200">
                        <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                        <div className="text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer */}
          </div>
        </div>
      </div>
    </>
</Layout>
  );
};
