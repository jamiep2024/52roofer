import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <NextSeo
        title="#1 Emergency Roofers Near Me | 24/7 Local Roof Repairs | Best Price Guarantee 2024"
        description="FAST Emergency Roofer Near Me 24/7 Roof Repairs 10-Year Guarantee 500+ 5 Reviews FREE Quote in 1Hr. Best Local Roofers: Oxfordshire, Gloucestershire, Wiltshire & Berkshire. Roof Replacement from £2999. Emergency Call-Out in 60mins!"
        canonical="https://www.52roofer.com/about"
        openGraph={{
          url: 'https://www.52roofer.com/about',
          title: '#1 Emergency Roofers Near Me | 24/7 Local Roof Repairs',
          description: 'Emergency roofing services with 60-minute response time. Available 24/7 across Oxfordshire, Gloucestershire, Wiltshire & Berkshire.',
          images: [
            {
              url: 'https://www.52roofer.com/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Emergency Roofing Services',
            },
          ],
          siteName: '52roofer.com',
        }}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "52roofer.com",
                "description": "Leading emergency roofing service provider in Oxfordshire and surrounding areas.",
                "foundingDate": "2003",
                "areaServed": ["Oxfordshire", "Gloucestershire", "Wiltshire", "Berkshire"],
                "award": [
                  "Best Emergency Roofing Service 2023",
                  "Top Rated Local Business 2024"
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": 4.9,
                  "reviewCount": 500,
                  "bestRating": 5
                }
              }
            })
          }}
        />
      </Head>

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Your Trusted Emergency Roofing Experts
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                Serving Oxfordshire and surrounding areas since 2003 with 24/7 emergency repairs and comprehensive roofing solutions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Story</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                  Founded in 2003, 52roofer.com emerged from a simple observation: homeowners needed a reliable emergency roofing service they could count on 24/7. What started as a small local operation has grown into one of the most trusted names in emergency roofing across Oxfordshire, Gloucestershire, Wiltshire, and Berkshire.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose 52roofer.com?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">60-Minute Response</h3>
                <p className="text-gray-600">Emergency response team available 24/7, reaching you within 60 minutes in most areas.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">10-Year Guarantee</h3>
                <p className="text-gray-600">All our work comes with a comprehensive 10-year guarantee for your peace of mind.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">500+ 5★ Reviews</h3>
                <p className="text-gray-600">Trusted by thousands of homeowners with over 500 five-star reviews.</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-accent py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Need Emergency Roofing Services?</h2>
            <Link
              href="/find-roofer"
              className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-3 rounded-md font-semibold text-lg transition duration-150 ease-in-out"
            >
              Find a Roofer Now
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
