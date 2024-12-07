import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { serviceAreas } from '../data/serviceAreas';

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
        <div className="relative bg-gray-900 py-24 sm:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/hero-bg.jpg"
              alt="Professional roofing services"
              className="h-full w-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gray-900/75 mix-blend-multiply" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Your Trusted Roofing Partner
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Connecting homeowners with professional, vetted roofers across South England since 2003.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Our Mission */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    At 52roofer.com, we're committed to revolutionizing how homeowners find and connect with trusted roofing professionals. Our platform serves as a bridge between quality-focused homeowners and vetted, experienced roofers across Oxfordshire, Gloucestershire, Wiltshire, and Berkshire.
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
                      <div key={feature.name}>
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
                  className="rounded-xl bg-gray-900/5 object-cover"
                />
                <img
                  src="/images/roofing-2.jpg"
                  alt="Completed roofing project"
                  className="rounded-xl bg-gray-900/5 object-cover"
                />
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-32">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Our Service Areas</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-center max-w-2xl mx-auto">
                We provide comprehensive roofing services across major regions in South England, ensuring every homeowner has access to quality roofing solutions.
              </p>
              
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {Object.values(serviceAreas).map((area) => (
                  <div key={area.name} className="rounded-xl bg-gray-50 p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{area.name}</h3>
                    <ul className="mt-4 space-y-2">
                      {area.mainTowns.slice(0, 4).map((town) => (
                        <li key={town} className="text-gray-600">{town}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-32">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Why Choose 52roofer.com</h2>
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "20+ Years Experience",
                    description: "Two decades of connecting homeowners with trusted roofing professionals."
                  },
                  {
                    title: "Vetted Professionals",
                    description: "Every roofer in our network is thoroughly vetted and monitored for quality."
                  },
                  {
                    title: "Emergency Services",
                    description: "24/7 emergency roofing support when you need it most."
                  },
                  {
                    title: "Free Consultations",
                    description: "Get expert advice and quotes without any obligation."
                  },
                  {
                    title: "Quality Guaranteed",
                    description: "All work is backed by our satisfaction guarantee."
                  },
                  {
                    title: "Local Expertise",
                    description: "Deep knowledge of local building regulations and architectural styles."
                  }
                ].map((feature) => (
                  <div key={feature.title} className="relative rounded-xl border border-gray-200 p-8">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-4 text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-32 rounded-3xl bg-gray-900 py-20 sm:py-32">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Find Your Perfect Roofer?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                  Connect with trusted local roofers today and get your roofing project started with confidence.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/find-roofer"
                    className="rounded-md bg-accent px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Find a Roofer
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-semibold leading-6 text-white"
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
