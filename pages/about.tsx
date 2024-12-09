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
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  "description": "24/7 emergency roofing services in Watchfield, Oxford & surrounding areas. Specializing in rapid roof repairs, replacements, and maintenance. Trusted by 10,000+ homeowners with 500+ 5-star reviews. SN6 8TJ based, serving all of Oxfordshire.",
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
            })
          }} 
        />

        {/* Enhanced FAQ Schema */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }} 
        />
      </Head>

      <main className="flex-1">
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
          </div>
        </div>
      </main>
    </>
  );
}
