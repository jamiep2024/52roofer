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
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Founded in 2003, 52roofer.com emerged from a simple observation: homeowners needed a better way to find reliable roofing professionals. What started as a small directory in Oxfordshire has grown into South England's premier roofing network, connecting thousands of homeowners with trusted local roofers.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {[
                      {
                        name: 'Our Values',
                        description: 'Trust, transparency, and excellence form the foundation of everything we do. We believe in creating lasting relationships between homeowners and roofers built on mutual respect and quality workmanship.'
                      },
                      {
                        name: 'Our Impact',
                        description: 'Over the past 20 years, we've facilitated over 50,000 successful roofing projects, maintaining a 98% customer satisfaction rate and helping create hundreds of jobs in local communities.'
                      },
                      {
                        name: 'Our Commitment',
                        description: 'We're dedicated to maintaining the highest standards in the industry through rigorous vetting processes, ongoing quality monitoring, and continuous improvement of our service.'
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
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="Professional roofing services"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="Quality roofing work"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Vision & Goals */}
            <div className="mt-32">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Vision & Future Goals</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-center max-w-2xl mx-auto">
                As we look to the future, we're committed to revolutionizing the roofing industry through technology and innovation.
              </p>
              
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Digital Innovation</h3>
                  <p className="mt-4 text-gray-600">
                    We're developing cutting-edge tools for virtual roof inspections and AI-powered damage assessment to streamline the roofing process.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Sustainability Focus</h3>
                  <p className="mt-4 text-gray-600">
                    By 2025, we aim to have 50% of our network specializing in eco-friendly roofing solutions and sustainable materials.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Community Growth</h3>
                  <p className="mt-4 text-gray-600">
                    We're expanding our apprenticeship program to train the next generation of roofers and create more jobs in local communities.
                  </p>
                </div>
              </div>
            </div>

            {/* Team & Culture */}
            <div className="mt-32">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Our Team & Culture</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-center max-w-2xl mx-auto">
                Behind 52roofer.com is a dedicated team of industry experts, technology innovators, and customer service professionals.
              </p>
              
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Expert Leadership</h3>
                  <p className="mt-4 text-gray-600">
                    Our leadership team brings together over 50 years of combined experience in roofing, technology, and customer service excellence.
                  </p>
                </div>
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Continuous Learning</h3>
                  <p className="mt-4 text-gray-600">
                    We invest in regular training and development programs for both our team and network partners to stay ahead of industry trends.
                  </p>
                </div>
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
