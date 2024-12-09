import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
        {/* Hero Section with parallax effect */}
        <div className="relative bg-gray-900 py-32 sm:py-40">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-bg.jpg"
                alt="Professional roofing services"
                layout="fill"
                objectFit="cover"
                className="transform scale-105 opacity-25 transition-transform duration-1000"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gray-900/75 mix-blend-multiply" />
          </div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-7xl px-6 lg:px-8"
          >
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                About 52roofer.com
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Building trust in the roofing industry through innovation and excellence since 2003.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Our Story Section */}
            <motion.div 
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center"
            >
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Our Story
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Founded in 2003, 52roofer.com emerged from a simple observation: homeowners needed a better way to find reliable roofing professionals. What started as a small directory in Oxfordshire has grown into South England's premier roofing network.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {[
                      {
                        name: 'Our Values',
                        description: 'Trust, transparency, and excellence form the foundation of everything we do. We believe in creating lasting relationships between homeowners and roofers built on mutual respect and quality workmanship.'
                      },
                      {
                        name: 'Our Impact',
                        description: "Over the past 20 years, we've facilitated over 50,000 successful roofing projects, maintaining a 98% customer satisfaction rate and helping create hundreds of jobs in local communities."
                      },
                      {
                        name: 'Our Commitment',
                        description: "We're dedicated to maintaining the highest standards in the industry through rigorous vetting processes, ongoing quality monitoring, and continuous improvement of our service."
                      }
                    ].map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <div className="absolute left-1 top-1 h-5 w-5 text-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                          </div>
                          {feature.name}
                        </dt>
                        <dd className="inline ml-1">
                          {" "}
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-64 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="Professional roofing services"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-64 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="Quality roofing work"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Vision & Goals Section */}
            <motion.div 
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-32"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                Vision & Future Goals
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-center max-w-2xl mx-auto">
                As we look to the future, we're committed to revolutionizing the roofing industry through technology and innovation.
              </p>
              
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Digital Innovation",
                    description: "We're developing cutting-edge tools for virtual roof inspections and AI-powered damage assessment to streamline the roofing process."
                  },
                  {
                    title: "Sustainability Focus",
                    description: "By 2025, we aim to have 50% of our network specializing in eco-friendly roofing solutions and sustainable materials."
                  },
                  {
                    title: "Community Growth",
                    description: "We're expanding our apprenticeship program to train the next generation of roofers and create more jobs in local communities."
                  }
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Team & Culture Section */}
            <motion.div 
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-32"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                Our Team & Culture
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-center max-w-2xl mx-auto">
                Behind 52roofer.com is a dedicated team of industry experts, technology innovators, and customer service professionals.
              </p>
              
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {[
                  {
                    title: "Expert Leadership",
                    description: "Our leadership team brings together over 50 years of combined experience in roofing, technology, and customer service excellence."
                  },
                  {
                    title: "Continuous Learning",
                    description: "We invest in regular training and development programs for both our team and network partners to stay ahead of industry trends."
                  }
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

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
