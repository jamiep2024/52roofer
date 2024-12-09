import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Schema markup for better SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "52roofer.com",
  "url": "https://www.52roofer.com",
  "logo": "https://www.52roofer.com/images/logo.png",
  "description": "Premier roofing referral service connecting homeowners with trusted local roofers across Oxfordshire, Gloucestershire, Wiltshire, and Berkshire. Specializing in residential and commercial roofing solutions.",
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
  "name": "52roofer.com - Local Roofing Referral Service",
  "image": "https://www.52roofer.com/images/hero-bg.jpg",
  "priceRange": "££",
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
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Head>
        <title>About 52roofer.com | Trusted Local Roofing Services in South England</title>
        <meta name="description" content="52roofer.com connects homeowners with vetted, professional roofers across Oxfordshire, Gloucestershire, Wiltshire, and Berkshire. 20+ years of roofing excellence, trusted by thousands of homeowners." />
        <meta name="keywords" content="roofing services, local roofers, trusted roofers, Oxfordshire roofers, Gloucestershire roofers, Wiltshire roofers, Berkshire roofers, roof repairs, emergency roofing" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About 52roofer.com | Premier Roofing Services" />
        <meta property="og:description" content="Your trusted partner for professional roofing services. Connecting homeowners with qualified local roofers across South England." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.52roofer.com/about" />
        <meta property="og:image" content="https://www.52roofer.com/images/about-hero.jpg" />
        <link rel="canonical" href="https://www.52roofer.com/about" />
        
        {/* Schema.org markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, localBusinessSchema]) }}
        />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900 py-32 sm:py-40">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                About 52roofer.com
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Building trust in the roofing industry through innovation and excellence since 2003.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Our Story */}
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Founded in 2003, 52roofer.com emerged from a simple observation: homeowners needed a better way to find reliable roofing professionals. What started as a small directory in Oxfordshire has grown into South England's premier roofing network.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-all">
                <div className="text-accent mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
                <p className="mt-4 text-gray-600">Trust, transparency, and excellence form the foundation of everything we do.</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-all">
                <div className="text-accent mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Impact</h3>
                <p className="mt-4 text-gray-600">Over 50,000 successful projects and 98% customer satisfaction rate.</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-all">
                <div className="text-accent mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Commitment</h3>
                <p className="mt-4 text-gray-600">Maintaining the highest standards through rigorous vetting and monitoring.</p>
              </div>
            </div>

            {/* Vision & Goals */}
            <div className="mt-32 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white/50 rounded-3xl" />
              <div className="relative px-8 py-16 rounded-3xl">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Vision & Future Goals
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                    As we look to the future, we're committed to revolutionizing the roofing industry through technology and innovation.
                  </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all border border-gray-100">
                    <div className="text-accent mb-4">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Digital Innovation</h3>
                    <p className="mt-4 text-gray-600">Virtual inspections and AI-powered assessments.</p>
                  </div>

                  <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all border border-gray-100">
                    <div className="text-accent mb-4">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Sustainability Focus</h3>
                    <p className="mt-4 text-gray-600">50% eco-friendly solutions by 2025.</p>
                  </div>

                  <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-all border border-gray-100">
                    <div className="text-accent mb-4">
                      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Community Growth</h3>
                    <p className="mt-4 text-gray-600">Expanding apprenticeship programs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team & Culture */}
            <div className="mt-32">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Team & Culture
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                  Behind 52roofer.com is a dedicated team of industry experts, technology innovators, and customer service professionals.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-all">
                  <div className="text-accent mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Expert Leadership</h3>
                  <p className="mt-4 text-gray-600">50+ years of combined industry experience.</p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-all">
                  <div className="text-accent mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Continuous Learning</h3>
                  <p className="mt-4 text-gray-600">Regular training and development programs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
