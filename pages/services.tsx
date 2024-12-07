import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/seo/SEO';

// Define comprehensive service data
const roofingServices = [
  {
    id: 'roof-repairs',
    title: 'Roof Repairs',
    description: 'Professional roof repair services including leak fixes, tile replacement, and structural repairs. Our expert roofers use industry-leading techniques and materials.',
    features: [
      'Emergency leak repairs',
      'Tile and slate replacement',
      'Chimney repairs and repointing',
      'Gutter system repairs',
      'Ridge tile repairs',
      'Valley repairs'
    ],
    benefits: 'Prevent water damage, maintain structural integrity, and extend your roof\'s lifespan with our professional repair services.',
    icon: '🔧'
  },
  {
    id: 'roof-installations',
    title: 'New Roof Installations',
    description: 'Complete roof installation services for residential and commercial properties. We offer a wide range of materials and styles to suit your needs and budget.',
    features: [
      'Full roof replacements',
      'New build installations',
      'Flat roof installations',
      'Pitched roof construction',
      'Sustainable roofing options',
      'Energy-efficient solutions'
    ],
    benefits: 'Enhance your property value, improve energy efficiency, and ensure long-lasting protection with our quality installations.',
    icon: '🏠'
  },
  {
    id: 'maintenance',
    title: 'Roof Maintenance',
    description: 'Regular maintenance programs to keep your roof in optimal condition. Prevent costly repairs and extend the life of your roofing system.',
    features: [
      'Annual roof inspections',
      'Gutter cleaning',
      'Moss removal',
      'Preventive maintenance',
      'Weather damage assessment',
      'Roof coating applications'
    ],
    benefits: 'Save money on future repairs, maintain warranty validity, and ensure your roof\'s longevity with regular maintenance.',
    icon: '🛠️'
  },
  {
    id: 'emergency',
    title: 'Emergency Services',
    description: '24/7 emergency roofing services for urgent repairs and storm damage. Our rapid response team is always ready to help.',
    features: [
      '24/7 availability',
      'Storm damage repairs',
      'Emergency leak control',
      'Temporary roof protection',
      'Insurance claim assistance',
      'Rapid response guarantee'
    ],
    benefits: 'Get immediate assistance during roofing emergencies to prevent further damage and protect your property.',
    icon: '🚨'
  }
];

// Schema markup for rich snippets
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://52roofer.com/#organization",
  "name": "52Roofer",
  "url": "https://52roofer.com/services",
  "logo": "https://52roofer.com/images/logo.png",
  "description": "Professional roofing services including repairs, installations, maintenance, and emergency services across South England.",
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services",
    "itemListElement": roofingServices.map((service, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.description
      },
      "position": index + 1
    }))
  }
};

// FAQ Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What roofing services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive roofing services including repairs, new installations, maintenance, and 24/7 emergency services. Our expert roofers are qualified to work with all types of roofing materials and can handle both residential and commercial projects."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide emergency roofing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide 24/7 emergency roofing services across Oxfordshire, Gloucestershire, Wiltshire, and Berkshire. Our emergency team responds quickly to urgent repairs, storm damage, and severe leaks to prevent further damage to your property."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I have my roof inspected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend having your roof professionally inspected at least once a year, ideally before winter. Regular inspections can identify potential issues early, prevent costly repairs, and extend your roof's lifespan."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide roofing services across South England, primarily in Oxfordshire, Gloucestershire, Wiltshire, and Berkshire. Our local teams ensure quick response times and deep knowledge of regional building requirements."
      }
    }
  ]
};

export default function Services() {
  return (
    <>
      <SEO
        title="Professional Roofing Services | Repairs, Installations & Maintenance | 52Roofer"
        description="Expert roofing services in South England. 24/7 emergency repairs, new installations, maintenance & more. Local trusted roofers in Oxfordshire, Gloucestershire, Wiltshire & Berkshire."
        jsonLd={[servicesSchema, faqSchema]}
      />
      <Head>
        <meta name="keywords" content="roof repairs, roof installation, roof maintenance, emergency roofing, local roofers, professional roofing services, South England roofers" />
        <meta property="og:title" content="Expert Roofing Services | 52Roofer" />
        <meta property="og:description" content="Comprehensive roofing services including repairs, installations, maintenance & 24/7 emergency support. Trusted local roofers across South England." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://52roofer.com/services" />
        <meta property="og:image" content="https://52roofer.com/images/services-hero.jpg" />
        <link rel="canonical" href="https://52roofer.com/services" />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="h-full w-full object-cover opacity-40"
              src="/images/services-hero.jpg"
              alt="Professional roofing services"
            />
            <div className="absolute inset-0 hero-gradient opacity-60"></div>
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional Roofing Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              Comprehensive roofing solutions delivered by experienced professionals.
              From repairs to new installations, we've got you covered.
            </p>
            <div className="mt-10">
              <Link
                href="/#search"
                className="rounded-md bg-accent px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Find a Local Roofer
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Comprehensive Roofing Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover our range of professional roofing services, delivered by experienced
                and qualified roofers across South England.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {roofingServices.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col rounded-2xl border border-gray-200 p-8 transition-all hover:shadow-lg"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-4 text-gray-600">{service.description}</p>
                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="mt-4 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="text-accent mr-2">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-semibold text-gray-900">Benefits:</h4>
                    <p className="mt-2 text-gray-600">{service.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Our Roofing Services?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Experience the difference of working with professional, reliable, and skilled roofers.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: "Expert Roofers",
                  description: "All our roofers are fully qualified, insured, and have years of experience in the roofing industry.",
                  icon: "👨‍🔧"
                },
                {
                  title: "Quality Materials",
                  description: "We use only the highest quality roofing materials from trusted suppliers to ensure lasting results.",
                  icon: "🏆"
                },
                {
                  title: "Guaranteed Work",
                  description: "All our roofing work comes with a comprehensive guarantee for your peace of mind.",
                  icon: "✓"
                },
                {
                  title: "Competitive Pricing",
                  description: "We offer transparent, competitive pricing with no hidden costs or surprises.",
                  icon: "💰"
                },
                {
                  title: "Fast Response",
                  description: "Quick response times for all enquiries and 24/7 availability for emergencies.",
                  icon: "⚡"
                },
                {
                  title: "Local Knowledge",
                  description: "Deep understanding of local building regulations and architectural styles.",
                  icon: "🏘️"
                }
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center rounded-2xl border border-gray-200 p-8 transition-all hover:shadow-lg"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-4 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Find answers to common questions about our roofing services.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl space-y-8">
              {faqSchema.mainEntity.map((faq: any) => (
                <div
                  key={faq.name}
                  className="rounded-2xl border border-gray-200 p-8 transition-all hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900">{faq.name}</h3>
                  <p className="mt-4 text-gray-600">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Connect with trusted local roofers today and get your roofing project started with confidence.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/#search"
                  className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Find a Roofer
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
