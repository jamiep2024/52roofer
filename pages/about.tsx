import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "RoofingContractor", "LocalBusiness", "ProfessionalService"],
      "@id": "https://www.52roofer.com/#organization",
      "name": "52roofer.com - Emergency Roofing Services",
      "legalName": "52 Roofer Ltd",
      "foundingDate": "2020",
      "url": "https://www.52roofer.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.52roofer.com/images/logo.png",
        "width": "180",
        "height": "180"
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.52roofer.com/images/storefront.jpg",
        "width": 1200,
        "height": 630
      },
      "description": "24/7 Emergency roofing services in Watchfield, Oxford & surrounding areas. Specializing in rapid roof repairs, replacements, and maintenance. Trusted by 10,000+ homeowners with 500+ 5-star reviews. SN6 8TJ based, serving all of Oxfordshire.",
      "slogan": "Your Trusted Emergency Roofers in Watchfield & Oxford - Available 24/7",
      "priceRange": "££",
      "currenciesAccepted": "GBP",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
      "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
      "telephone": "+44-XXXX-XXXXXX",
      "email": "info@52roofer.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Watchfield",
        "addressLocality": "Oxford",
        "addressRegion": "Oxfordshire",
        "postalCode": "SN6 8TJ",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.6166",
        "longitude": "-1.6411"
      },
      "areaServed": [
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "51.6166",
            "longitude": "-1.6411"
          },
          "geoRadius": "50000"
        }
      ],
      "subOrganization": [
        {
          "@type": "RoofingContractor",
          "name": "52roofer Oxford",
          "areaServed": {
            "@type": "City",
            "name": "Oxford"
          }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Emergency Roofing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Roof Repairs",
              "description": "24/7 emergency roof repair service with 60-minute response time"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      }
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How quickly can you respond to emergency roof repairs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a rapid 60-minute emergency response service 24/7, 365 days a year across Oxfordshire, Gloucestershire, Wiltshire, and Berkshire. Our emergency team is always on standby to handle urgent roof repairs."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you cover for emergency roof repairs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cover all of Oxfordshire (OX1-OX49), Gloucestershire (GL1-GL56), Wiltshire (SN1-SN99), and Berkshire (RG1-RG45). Our main service areas include Oxford, Gloucester, Swindon, and Reading."
      }
    }
  ]
};

export default function About() {
  return (
    <Layout>
      <SEO title="" description="" />
      <NextSeo
        title="#1 Emergency Roofers Near Me | 24/7 Local Roof Repairs | Best Price Guarantee 2024"
        description="FAST Emergency Roofer Near Me 24/7 Roof Repairs 10-Year Guarantee 500+ 5 Reviews FREE Quote in 1Hr. Best Local Roofers: Oxfordshire, Gloucestershire, Wiltshire & Berkshire. Roof Replacement from 2999. Emergency Call-Out in 60mins!"
        canonical="https://www.52roofer.com/about"
        additionalMetaTags={[
          {
            name: 'geo.region',
            content: 'GB-OXF'
          },
          {
            name: 'geo.placename',
            content: 'Watchfield, Oxford'
          },
          {
            name: 'geo.position',
            content: '51.6166;-1.6411'
          },
          {
            name: 'ICBM',
            content: '51.6166, -1.6411'
          },
          {
            name: 'google',
            content: 'notranslate'
          }
        ]}
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: 'https://www.52roofer.com/about',
          site_name: '52roofer.com - #1 Emergency Roofing Services',
          title: 'Emergency Roofer Near Me | 24/7 Local Roof Repairs | Best Price Guarantee',
          description: 'URGENT Roof Repairs? We\'re Here 24/7! 60min Response FREE Quote 10-Year Guarantee. Your Local Emergency Roofers in Oxfordshire & Surrounding Areas. CALL NOW!',
          images: [
            {
              url: 'https://www.52roofer.com/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Emergency Roofing Services',
              type: 'image/jpeg'
            }
          ]
        }}
        twitter={{
          handle: '@52roofer',
          site: '@52roofer',
          cardType: 'summary_large_image',
        }}
      />

      <Head>
        <title>#1 Emergency Roofers Watchfield & Oxford | 24/7 Local Roof Repairs | Best Price 2024 | FREE Quote</title>
        <meta name="description" content="FAST Emergency Roofer in Watchfield & Oxford - 24/7 Roof Repairs 10-Year Guarantee 500+ 5 Reviews 60min Response FREE Quote. Covering SN6 8TJ & Surrounding Areas. Roof Replacement from 2999. CALL NOW!" />
        <meta name="keywords" content="emergency roofer near me, local roofers, 24 hour roof repair oxford" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "RoofingContractor",
                  "@id": "https://52roofer.com/about#organization",
                  "name": "52Roofer",
                  "url": "https://52roofer.com/about",
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
                  "@id": "https://52roofer.com/about#webpage",
                  "url": "https://52roofer.com/about",
                  "name": "Roofing Services",
                  "isPartOf": {
                    "@id": "https://52roofer.com/#website"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://52roofer.com/about#faq",
                  "mainEntity": []
                }
              ]
            })
          }}
        ></script>
</Head>

      <main className="bg-white">
        <section className="relative bg-gray-900 py-32 sm:py-40">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent" />
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
        </section>

        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Founded in 2003, 52roofer.com emerged from a simple observation: homeowners needed a better way to find reliable roofing professionals. What started as a small directory in Oxfordshire has grown into South England&apos;s premier roofing network.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Our Values",
                  description: "Trust, transparency, and excellence form the foundation of everything we do."
                },
                {
                  title: "Our Impact",
                  description: "Over 50,000 successful projects and 98% customer satisfaction rate."
                },
                {
                  title: "Our Commitment",
                  description: "Maintaining the highest standards through rigorous vetting and monitoring."
                }
              ].map((feature, index) => (
                <div key={index} className="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-4 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
