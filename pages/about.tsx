import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { NextSeo } from 'next-seo';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Advanced SEO Configuration */}
      <NextSeo
        title=" #1 Emergency Roofers Near Me | 24/7 Local Roof Repairs | Best Price Guarantee 2024"
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
          },
          {
            name: 'google-site-verification',
            content: 'your-verification-code'
          }
        ]}
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: 'https://www.52roofer.com/about',
          site_name: '52roofer.com - #1 Emergency Roofing Services',
          title: ' Emergency Roofer Near Me | 24/7 Local Roof Repairs | Best Price Guarantee',
          description: 'URGENT Roof Repairs? We\'re Here 24/7! 60min Response FREE Quote 10-Year Guarantee. Your Local Emergency Roofers in Oxfordshire & Surrounding Areas. CALL NOW!',
          images: [
            {
              url: 'https://www.52roofer.com/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Emergency Roofing Services',
              type: 'image/jpeg'
            }
          ],
          videos: [
            {
              url: 'https://www.52roofer.com/videos/emergency-repairs.mp4',
              width: 1920,
              height: 1080,
              alt: 'Emergency Roof Repairs Demo',
              type: 'video/mp4'
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
        {/* Primary Title with Maximum Keywords */}
        <title> #1 Emergency Roofers Watchfield & Oxford | 24/7 Local Roof Repairs | Best Price 2024 | FREE Quote</title>
        
        {/* Maximized Meta Description */}
        <meta name="description" content="FAST Emergency Roofer in Watchfield & Oxford - 24/7 Roof Repairs 10-Year Guarantee 500+ 5 Reviews 60min Response FREE Quote. Covering SN6 8TJ & Surrounding Areas. Roof Replacement from 2999. CALL NOW!" />
        
        {/* Extended Keyword List */}
        <meta name="keywords" content="emergency roofer near me, local roofers, 24 hour roof repair oxford, roofing contractors oxfordshire, roof replacement cost uk 2024, emergency roof leak repair, flat roof repair oxford, roof tile replacement near me, slate roof repairs oxfordshire, commercial roofing contractors, industrial roofing oxford, metal roof installation, EPDM rubber roofing, felt roof repair, garage roof replacement, dormer window installation, velux window fitting oxford, chimney repair services, guttering replacement oxford, fascias and soffits installation, roof insulation installation, storm damage repair oxford, emergency roof tarp service, roof inspection near me, best roofers oxford 2024, gloucester roofing company, swindon roofers, reading roof repairs, domestic roofing services, heritage roofing specialists oxford, lead work specialists, roof maintenance service oxford, pitched roof repairs, local roof repairs today, trusted roofers oxford, affordable roofing services, quick roof repairs oxford, same day roof repair, professional roofers near me, certified roofing contractors oxford, experienced roofers oxfordshire, family run roofing company, established roofing contractors, roof leak detection oxford, thermal roof surveys, drone roof inspections oxford, roofing quotes online, emergency roofing services 24/7, weekend roofers oxford, bank holiday roofers, night time roof repairs, rapid response roofers oxford, best rated roofing company 2024, top 10 roofers oxfordshire, award winning roofers oxford, cheap roof repairs oxford, reliable roofers near me, local roof repair company, trusted roofing contractors, emergency roof repair cost, flat roof specialists oxford, slate roofing experts, tile roof repair specialists, commercial flat roofing, industrial roof contractors, metal roofing specialists, rubber roof installation, felt roof specialists, garage roof experts, dormer specialists oxford, velux certified installers, chimney repair experts, guttering specialists oxford, fascia and soffit experts, insulation specialists oxford, storm damage experts, tarp service specialists, roof inspection experts, heritage roof specialists, lead work experts, maintenance specialists oxford, pitched roof experts, leak detection specialists, thermal imaging experts, drone survey specialists, quote specialists oxford" />

        {/* Advanced SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, noodp, noydir, max-snippet:200" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 day" />
        <meta name="author" content="52roofer.com - #1 Emergency Roofing Specialists" />
        <meta name="copyright" content="52roofer.com 2024" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="language" content="EN-GB" />
        <meta name="news_keywords" content="emergency roof repair, roofing contractors, local roofers" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-title" content="52roofer.com" />
        <meta name="application-name" content="52roofer.com" />
        <meta name="theme-color" content="#004AAD" />

        {/* Schema Markup for Multiple Business Categories */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
                },
                {
                  "@type": "City",
                  "name": "Oxford",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "51.7520",
                    "longitude": "-1.2577"
                  },
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": "Oxfordshire"
                  }
                },
                {
                  "@type": "City",
                  "name": "Gloucester",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "51.8642",
                    "longitude": "-2.2380"
                  },
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": "Gloucestershire"
                  }
                },
                {
                  "@type": "City",
                  "name": "Swindon",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "51.5558",
                    "longitude": "-1.7797"
                  },
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": "Wiltshire"
                  }
                },
                {
                  "@type": "City",
                  "name": "Reading",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "51.4543",
                    "longitude": "-0.9781"
                  },
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": "Berkshire"
                  }
                },
                {
                  "@type": "City",
                  "name": "Guildford",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "51.2362",
                    "longitude": "-0.5704"
                  },
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": "Surrey"
                  }
                },
                {
                  "@type": "City",
                  "name": "Aylesbury",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "51.8156",
                    "longitude": "-0.8125"
                  },
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": "Buckinghamshire"
                  }
                },
                {
                  "@type": "City",
                  "name": "Chichester",
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "50.8365",
                    "longitude": "-0.7792"
                  },
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": "West Sussex"
                  }
                }
              ],
              "subOrganization": [
                {
                  "@type": "RoofingContractor",
                  "name": "52roofer Oxford",
                  "areaServed": {
                    "@type": "City",
                    "name": "Oxford",
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": "51.7520",
                      "longitude": "-1.2577"
                    }
                  },
                  "priceRange": "££",
                  "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
                },
                {
                  "@type": "RoofingContractor",
                  "name": "52roofer Gloucester",
                  "areaServed": {
                    "@type": "City",
                    "name": "Gloucester",
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": "51.8642",
                      "longitude": "-2.2380"
                    }
                  },
                  "priceRange": "££",
                  "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
                },
                {
                  "@type": "RoofingContractor",
                  "name": "52roofer Swindon",
                  "areaServed": {
                    "@type": "City",
                    "name": "Swindon",
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": "51.5558",
                      "longitude": "-1.7797"
                    }
                  },
                  "priceRange": "££",
                  "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
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
                      "description": "24/7 emergency roof repair service with 60-minute response time",
                      "areaServed": "Watchfield, Oxford and surrounding areas",
                      "provider": "52roofer.com",
                      "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Emergency Repair Services",
                        "itemListElement": [
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Leak Repairs"
                            },
                            "priceSpecification": {
                              "@type": "PriceSpecification",
                              "price": "150",
                              "priceCurrency": "GBP"
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Roof Replacement",
                      "description": "Complete roof replacement service with 10-year guarantee",
                      "areaServed": "Watchfield, Oxford and surrounding areas",
                      "provider": "52roofer.com",
                      "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Roof Replacement Services",
                        "itemListElement": [
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Full Roof Replacement"
                            },
                            "priceSpecification": {
                              "@type": "PriceSpecification",
                              "price": "2999",
                              "priceCurrency": "GBP"
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Johnson"
                  },
                  "datePublished": "2024-12-01",
                  "reviewBody": "Excellent emergency service! Responded within 30 minutes to fix our leaking roof. Highly recommended!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Michael Brown"
                  },
                  "datePublished": "2024-11-28",
                  "reviewBody": "Professional team, fair pricing, and excellent workmanship on our roof replacement."
                }
              ]
            }
          ]
        })} />

        {/* Enhanced FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
            },
            {
              "@type": "Question",
              "name": "How much does an emergency roof repair cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Emergency roof repairs start from £150 for minor repairs. We offer free initial assessments and quotes. All repairs come with our 10-year guarantee. Full roof replacements start from £2,999."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer free roof inspections?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer free comprehensive roof inspections and detailed reports. Our qualified surveyors use advanced drone technology and thermal imaging for thorough assessments."
              }
            },
            {
              "@type": "Question",
              "name": "What types of roofing services do you provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide comprehensive roofing services including emergency repairs, full replacements, flat roofs, slate roofing, tile repairs, chimney repairs, guttering, and commercial roofing solutions."
              }
            },
            {
              "@type": "Question",
              "name": "Are your roofers qualified and insured?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our roofers are fully qualified, certified, and insured. We're members of the National Federation of Roofing Contractors (NFRC) with £5 million public liability insurance."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer any guarantees on your work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer a 10-year guarantee on all our roof repairs and replacements. This is backed by our company's 20+ years of experience and 500+ 5-star reviews."
              }
            }
          ]
        })} />

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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
