import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
// pages/all-in-one-demo.tsx
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// =======================
// Data Definitions
// =======================

// Example data for service areas
export const serviceAreas = {
  buckinghamshire: {
    name: 'Buckinghamshire',
  },
  oxfordshire: {
    name: 'Oxfordshire',
  },
  // Add as many as you want...
};

// Example data for businesses
export const businesses = [
  {
    location: 'Buckinghamshire',
    name: 'Some Buckinghamshire Business',
  },
  {
    location: 'Oxfordshire',
    name: 'Some Oxfordshire Business',
  },
  // More businesses...
];

// =======================
// Reusable Components
// =======================

// 1) A simple HeroImage component
function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
<Layout>
<SEO title="" description="" />
    <Image
      src={src}
      alt={alt}
      fill
      sizes="100vw"
      style={{ objectFit: 'cover' }}
      priority
    />
  );
}

// 2) A simple lead form
function LeadForm({ source }: { source: string }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted from: ${source}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-2">
        Name:
        <input
          className="border p-2 w-full"
          type="text"
          name="name"
          required
        />
      </label>
      <label className="block mb-2">
        Phone:
        <input
          className="border p-2 w-full"
          type="tel"
          name="phone"
          required
        />
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}

// 3) LocalBusinessSchema for SEO
function LocalBusinessSchema({
  businessName,
  location,
  url,
  image,
}: {
  businessName: string;
  location: {
    name: string;
    county: string;
    postcodes: string[];
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  url: string;
  image: string;
}) {
  // Simple JSON-LD example
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessName,
    image,
    url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: location.county,
      postalCode: location.postcodes.join(','),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// 4) HowToSchema for SEO
function HowToSchema({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
    image: string;
  }>;
  totalTime: string;
}) {
  const howToJSON = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime,
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJSON) }}
    />
  );
}

// 5) ReviewSchema for SEO
function ReviewSchema({
  itemReviewed,
  reviews,
  aggregateRating,
}: {
  itemReviewed: {
    name: string;
    image: string;
    description: string;
  };
  reviews: Array<{
    author: string;
    reviewRating: number;
    reviewBody: string;
    datePublished: string;
  }>;
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
  };
}) {
  const reviewJSON = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: itemReviewed.name,
    image: itemReviewed.image,
    description: itemReviewed.description,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: r.author,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.reviewRating,
      },
      reviewBody: r.reviewBody,
      datePublished: r.datePublished,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJSON) }}
    />
  );
}

// 6) VideoSchema for SEO
function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  embedUrl,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  embedUrl: string;
}) {
  const videoJSON = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    embedUrl,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJSON) }}
    />
  );
}

// 7) DynamicFAQ
interface FAQ {
  question: string;
  answer: string;
  views: number;
  lastUpdated: string;
}

function DynamicFAQ({
  initialFAQs,
  category,
}: {
  initialFAQs: FAQ[];
  category: string;
}) {
  const [faqs, setFaqs] = useState<FAQ[]>(initialFAQs);

  return (
    <div>
      {faqs.map((faq, idx) => (
        <details key={idx} className="mb-4">
          <summary className="cursor-pointer font-semibold text-lg">
            {faq.question}
          </summary>
          <p className="mt-2">{faq.answer}</p>
          <hr className="my-4" />
        </details>
      ))}
    </div>
  );
}

// =======================
// Specialized Templates
// =======================

// A) ConversationalRoofingTemplate (used by VoiceRoofInstallation)
function ConversationalRoofingTemplate({ config }: { config: any }) {
  const {
    title,
    heroTitle,
    heroDescription,
    mainContent,
    initialFAQs,
  } = config;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <script type="application/ld+json">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "@id": "https://52roofer.com/all-in-one-demo#organization",
      "name": "52Roofer",
      "url": "https://52roofer.com/all-in-one-demo",
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
      "@id": "https://52roofer.com/all-in-one-demo#webpage",
      "url": "https://52roofer.com/all-in-one-demo",
      "name": "Roofing Services",
      "isPartOf": {
        "@id": "https://52roofer.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://52roofer.com/all-in-one-demo#faq",
      "mainEntity": []
    }
  ]
}</script>
</Head>

      <header className="p-8 bg-blue-200">
        <h1 className="text-3xl font-bold">{heroTitle}</h1>
        <p className="text-lg">{heroDescription}</p>
      </header>

      {/* Example sections from mainContent */}
      <section className="p-8 bg-gray-100">
        <h2 className="text-2xl font-semibold">
          {mainContent?.introSection?.title}
        </h2>
        <p>{mainContent?.introSection?.description}</p>
        {mainContent?.introSection?.features?.length > 0 && (
          <ul className="list-disc ml-6 my-4">
            {mainContent.introSection.features.map(
              (feature: string, i: number) => (
                <li key={i}>{feature}</li>
              )
            )}
          </ul>
        )}
      </section>

      {/* Additional sections, etc. */}
      {/* ...ProblemSolvingSection, processSection, etc. omitted for brevity... */}

      <section className="p-8">
        <h2 className="text-2xl font-bold">FAQs</h2>
        <DynamicFAQ initialFAQs={initialFAQs} category="roofing" />
      </section>
    </div>
  );
}

// B) A simple ServiceLayout (used by AdvancedRoofing)
function ServiceLayout({
  heroImage,
  heroTitle,
  heroDescription,
  serviceName,
  children,
}: {
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  serviceName: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <Head>
        <title>{heroTitle}</title>
      </Head>

      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={serviceName}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            {heroDescription}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

// =======================
// Actual Pages
// =======================

// 1) VoiceRoofInstallation Page
function VoiceRoofInstallation() {
  const initialFAQs = [
    {
      question: 'Hey Google, I need a new roof installed',
      answer:
        'We provide comprehensive roof installation services including: 1) Full roof replacements, 2) New construction installations, 3) Energy-efficient roof systems, 4) Custom design solutions, 5) Premium material options. Our certified installers ensure proper installation following all building codes and manufacturer specifications.',
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: 'Alexa, how much does a new roof cost?',
      answer:
        'New roof costs vary by type: 1) Asphalt shingles: £5,000-£8,000, 2) Slate roofing: £9,000-£18,000, 3) Clay tiles: £8,000-£15,000, 4) Metal roofing: £7,000-£14,000, 5) Flat roofs: £4,000-£7,000. Factors include size, materials, complexity, and removal of old roof. We provide detailed quotes after inspection.',
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: 'OK Google, how long does roof installation take?',
      answer:
        'Installation times vary by project: 1) Standard residential roof: 2-4 days, 2) Complex designs: 4-7 days, 3) Large properties: 5-10 days, 4) New construction: 3-5 days, 5) Premium materials like slate: 6-10 days. Weather conditions and property access can affect timelines.',
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: 'Siri, what roofing materials can you install?',
      answer:
        'We install all major roofing materials: 1) Natural slate: Premium durability, 100+ years lifespan, 2) Clay/concrete tiles: Traditional look, 60+ years, 3) Metal roofing: Modern efficiency, 50+ years, 4) Asphalt shingles: Cost-effective, 20-30 years, 5) Green roofing: Eco-friendly options. We\'ll help you choose based on budget and preferences.',
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: 'Hey Google, what warranty comes with new roof installation?',
      answer:
        'Our installations include comprehensive warranties: 1) Workmanship warranty: 10-25 years, 2) Materials warranty: 20-50 years (manufacturer), 3) Structural warranty: 25+ years, 4) Weather resistance guarantee: 10-15 years. All warranties are fully transferable and documented for your peace of mind.',
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
  ];

  const pageConfig = {
    title: 'Professional Roof Installation',
    serviceName: 'Roof Installation',
    serviceType: 'voice-roof-installation',
    priceRange: '£££',
    timeRequired: 'P5D',
    heroTitle: 'Need a New Roof? Just Ask!',
    heroDescription:
      'Voice-activated roof installation services - tell your device what you need',
    mainContent: {
      introSection: {
        title: "Just Say: 'Install My New Roof!'",
        description:
          "Whether you need a complete roof replacement or new construction installation, we're here to help. Simply ask your smart device to find professional roof installation services, and we'll guide you through the entire process.",
        features: [
          '• Expert installation teams',
          '• Premium material options',
          '• Comprehensive warranties',
          '• Project management',
        ],
      },
      problemSolvingSection: {
        title: 'Your Roofing Solutions',
        problems: [
          {
            emoji: '🏠',
            title: "'I need a complete new roof'",
            description: 'Full roof replacement service',
            features: [
              'Old roof removal',
              'Structure inspection',
              'Quality materials',
              'Expert installation',
            ],
          },
          {
            emoji: '🏗️',
            title: "'New construction roofing'",
            description: 'New build roof installation',
            features: [
              'Custom design',
              'Material selection',
              'Code compliance',
              'Quality assurance',
            ],
          },
          {
            emoji: '🌱',
            title: "'Want eco-friendly roofing'",
            description: 'Sustainable roofing solutions',
            features: [
              'Energy efficiency',
              'Sustainable materials',
              'Solar compatibility',
              'Green options',
            ],
          },
          {
            emoji: '💎',
            title: "'Looking for premium materials'",
            description: 'High-end roofing options',
            features: [
              'Slate roofing',
              'Designer tiles',
              'Metal systems',
              'Custom solutions',
            ],
          },
        ],
      },
      processSection: {
        title: 'Our Installation Process',
        steps: [
          {
            title: 'Initial Consultation',
            description: 'Understanding your needs',
            features: [
              'Site assessment',
              'Material options',
              'Design consultation',
              'Budget planning',
            ],
          },
          {
            title: 'Detailed Planning',
            description: 'Project preparation',
            features: [
              'Material ordering',
              'Schedule coordination',
              'Permit handling',
              'Safety planning',
            ],
          },
          {
            title: 'Professional Installation',
            description: 'Expert installation work',
            features: [
              'Old roof removal',
              'Structure preparation',
              'New roof installation',
              'Site management',
            ],
          },
          {
            title: 'Quality Assurance',
            description: 'Ensuring perfect results',
            features: [
              'Final inspection',
              'Warranty provision',
              'Cleanup completion',
              'Client walkthrough',
            ],
          },
        ],
      },
    },
    initialFAQs,
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
}

// 2) RoofersInBeaconsfield Page
function RoofersInBeaconsfield() {
  const location = {
    name: 'Beaconsfield',
    county: 'Buckinghamshire',
    postcodes: ['HP1-HP23', 'MK1-MK19'],
  };

  const localBusinesses = businesses.filter(
    (business) => business.location === serviceAreas.buckinghamshire.name
  );

  return (
    <>
      <Head>
        <title>
          Expert Roofers in Beaconsfield | Emergency Repairs & Installation
        </title>
        <meta
          name="description"
          content="Looking for trusted roofers in Beaconsfield? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving HP1-HP23 & surrounding areas."
        />
        <meta
          name="keywords"
          content="roofers Beaconsfield, roofing contractors Beaconsfield, roof repairs Beaconsfield, emergency roofer Beaconsfield, local roofers HP1-HP23"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Expert Roofers in Beaconsfield | Emergency Repairs & Installation"
        />
        <meta
          property="og:description"
          content="Looking for trusted roofers in Beaconsfield? 24/7 Emergency Service, Free Quotes. Local experts serving HP1-HP23 & surrounding areas."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://52roofer.com/roofers-in-beaconsfield"
        />
        <meta
          property="og:image"
          content="https://52roofer.com/images/hero-bg.jpg"
        />
        <link rel="canonical" href="https://52roofer.com/roofers-in-beaconsfield" />
      </Head>

      <LocalBusinessSchema
        businessName="52Roofer Beaconsfield"
        location={location}
        url="https://52roofer.com/roofers-in-beaconsfield"
        image="https://52roofer.com/images/hero-bg.jpg"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <HeroImage
              src="/images/hero-bg.jpg"
              alt={`Roofing services in Beaconsfield`}
            />
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in Beaconsfield
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Professional roofing services in Beaconsfield, Buckinghamshire.
              From emergency repairs to complete installations, our local experts
              are here to help. Available 24/7 with free quotes.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Your Trusted Local Roofers in Beaconsfield
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in Beaconsfield? Our
                  experienced team provides comprehensive roofing solutions
                  throughout the HP1-HP23 area. We specialize in:
                </p>

                <ul className="mt-8 space-y-4">
                  <li>✓ Emergency Roof Repairs</li>
                  <li>✓ Complete Roof Replacements</li>
                  <li>✓ Roof Maintenance & Inspections</li>
                  <li>✓ Chimney Repairs & Repointing</li>
                  <li>✓ Guttering Services</li>
                  <li>✓ Flat Roof Specialists</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">
                  Why Choose Our Beaconsfield Roofers?
                </h3>
                <ul className="space-y-4">
                  <li>✓ Available 24/7 for emergencies</li>
                  <li>✓ Free, no-obligation quotes</li>
                  <li>✓ Fully insured and qualified team</li>
                  <li>✓ Competitive local rates</li>
                  <li>✓ Outstanding customer service</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get Your Free Quote Today
                </h3>
                <LeadForm source="Beaconsfield Landing Page" />
              </div>

              {/* Coverage Areas */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Areas We Cover in Beaconsfield
                </h3>
                <p className="text-gray-600 mb-4">
                  We provide comprehensive roofing services throughout
                  Beaconsfield and surrounding areas, covering all HP1-HP23,
                  MK1-MK19 postcodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// 3) AdvancedRoofing Page
function AdvancedRoofing() {
  // Sticky mobile nav state
  const [isSticky, setIsSticky] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
      setShowMobileNav(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface Step {
    name: string;
    text: string;
    image: string;
  }
  interface Review {
    author: string;
    reviewRating: number;
    reviewBody: string;
    datePublished: string;
  }

  // Helper for date formatting
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };

  const services = [
    {
      title: 'Smart Roofing',
      description: 'Advanced roofing systems with integrated technology',
      icon: '🔧',
    },
    {
      title: 'Energy Solutions',
      description: 'Energy-efficient roofing installations',
      icon: '⚡',
    },
    {
      title: 'Modern Materials',
      description: 'Latest high-performance roofing materials',
      icon: '🏗️',
    },
    {
      title: 'Tech Integration',
      description: 'Smart monitoring and maintenance systems',
      icon: '📱',
    },
  ];

  const benefits = [
    {
      title: 'Energy Efficiency',
      description: 'Reduced energy costs with advanced insulation',
      icon: '💡',
    },
    {
      title: 'Smart Features',
      description: 'Integrated monitoring and control systems',
      icon: '🤖',
    },
    {
      title: 'Sustainability',
      description: 'Eco-friendly materials and solutions',
      icon: '🌱',
    },
  ];

  const howToSteps: Step[] = [
    {
      name: 'Research Local Companies',
      text: 'Start by creating a list of local roofing companies with good reputations and reviews.',
      image: '/images/how-to/research-companies.png',
    },
    {
      name: 'Check Credentials',
      text: 'Verify licenses, insurance, and certifications of potential roofing companies.',
      image: '/images/how-to/check-credentials.png',
    },
    {
      name: 'Get Multiple Quotes',
      text: 'Request detailed quotes from at least three different roofing companies.',
      image: '/images/how-to/get-quotes.png',
    },
    {
      name: 'Review Past Work',
      text: 'Ask for references and examples of previous roofing projects.',
      image: '/images/how-to/review-work.png',
    },
    {
      name: 'Compare Warranties',
      text: 'Compare warranty offerings and ensure everything is in writing.',
      image: '/images/how-to/warranty.png',
    },
  ];

  const reviews: Review[] = [
    {
      author: 'James Anderson',
      reviewRating: 5,
      reviewBody:
        'Incredible smart roofing installation with integrated solar and monitoring systems.',
      datePublished: '2023-11-25',
    },
    {
      author: 'Emily Roberts',
      reviewRating: 5,
      reviewBody:
        'The energy-efficient solutions they installed have significantly reduced our bills.',
      datePublished: '2023-11-08',
    },
    {
      author: 'Mark Thompson',
      reviewRating: 4,
      reviewBody:
        'Very impressed with the modern materials and technology integration.',
      datePublished: '2023-10-20',
    },
  ];

  const initialFAQs: FAQ[] = [
    {
      question: 'What are advanced roofing systems?',
      answer:
        'Advanced roofing systems incorporate modern materials, smart technology, and energy-efficient solutions for superior performance and sustainability.',
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: 'What smart features are available?',
      answer:
        'Smart features include leak detection systems, temperature monitoring, energy usage tracking, and remote control capabilities.',
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: 'How energy-efficient are modern roofs?',
      answer:
        'Modern roofing systems can reduce energy costs by 20-30% through improved insulation, reflective materials, and integrated solar solutions.',
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: 'What are the latest roofing materials?',
      answer:
        'Latest materials include solar tiles, cool roofing materials, recycled composites, and smart shingles with integrated sensors.',
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: 'How long do advanced roofs last?',
      answer:
        'Advanced roofing systems typically last 30-50 years or more, with smart monitoring helping to extend lifespan through preventive maintenance.',
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
  ];

  const areaNames = Object.values(serviceAreas).map((area) => area.name);

  const voiceSearchContent = `
    Looking for advanced roofing solutions? We connect you with specialists in modern 
    roofing technology and smart systems. From energy-efficient materials to integrated 
    monitoring solutions, our network of verified contractors delivers cutting-edge 
    roofing solutions. Find expert advanced roofing specialists in ${areaNames.join(', ')}.
  `;

  return (
    <ServiceLayout
      heroImage="/images/services/local-roofing-hero.jpg"
      heroTitle="Advanced Roofing Solutions"
      heroDescription="Modern roofing technology and smart systems"
      serviceName="Advanced Roofing"
    >
      <div className="space-y-12">
        <Head>
          <title>Advanced Roofing Solutions | 52roofer.com</title>
          <meta
            name="description"
            content={`Advanced roofing solutions across ${areaNames.join(
              ', '
            )}. Smart technology and energy-efficient systems for modern homes.`}
          />
          <link
            rel="canonical"
            href="https://www.52roofer.com/services/advanced-roofing"
          />

          <LocalBusinessSchema
            businessName="52Roofer"
            location={{
              name: 'Oxford',
              county: 'Oxfordshire',
              postcodes: ['OX1', 'OX2', 'OX3', 'OX4'],
              coordinates: {
                latitude: 51.752,
                longitude: -1.2577,
              },
            }}
            url="https://www.52roofer.com"
            image="/images/services/local-roofing-hero.jpg"
          />

          <HowToSchema
            name="How to Choose Advanced Roofing Solutions"
            description="A comprehensive guide to selecting modern roofing systems"
            steps={howToSteps}
            totalTime="P1D"
          />

          <ReviewSchema
            itemReviewed={{
              name: '52Roofer Advanced Roofing Services',
              image: '/images/services/local-roofing-hero.jpg',
              description: 'Advanced roofing solutions across the UK',
            }}
            reviews={reviews}
            aggregateRating={{
              ratingValue: 4.8,
              reviewCount: reviews.length,
            }}
          />

          <VideoSchema
            name="Expert Guide: Advanced Roofing Systems"
            description="Comprehensive guide on modern roofing technologies"
            thumbnailUrl="https://img.youtube.com/vi/example/maxresdefault.jpg"
            uploadDate={new Date().toISOString()}
            duration="PT10M"
            embedUrl="https://www.youtube.com/embed/example"
          />

          {/* Voice Search Optimized Content */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              {voiceSearchContent}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Benefits of Advanced Roofing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <div className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <DynamicFAQ
              initialFAQs={initialFAQs}
              category="roofing"
            />
          </div>

          {/* Sticky Mobile Navigation */}
          <div
            className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 transition-transform duration-300 transform md:hidden ${
              showMobileNav ? 'translate-y-0' : 'translate-y-full'
            } z-50`}
          >
            <div className="container mx-auto flex justify-between items-center space-x-4">
              <a
                href="tel:+441234567890"
                className="flex-1 bg-primary-500 text-white px-4 py-3 rounded-lg font-semibold text-center"
              >
                Call Now
              </a>
              <a
                href="#contact-form"
                className="flex-1 bg-accent text-white px-4 py-3 rounded-lg font-semibold text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </ServiceLayout>
    );
}

// =======================
// MAIN PAGE EXPORT
// =======================
export default function AllInOnePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4">
        All-In-One Demo: Multiple Components in One File
      </h1>
      <p className="px-4 pb-8">
        Below are three separate "pages" (VoiceRoofInstallation, RoofersInBeaconsfield, 
        AdvancedRoofing) all in one file for demonstration. In a real Next.js app, 
        each would normally be in <code>/pages</code> or in its own separate file.
      </p>

      <hr className="my-4" />
      <section id="voice-roof-installation" className="mb-16">
        <h2 className="text-xl font-semibold px-4 my-4">
          1) VoiceRoofInstallation
        </h2>
        <VoiceRoofInstallation />
      </section>

      <hr className="my-4" />
      <section id="roofers-in-beaconsfield" className="mb-16">
        <h2 className="text-xl font-semibold px-4 my-4">
          2) RoofersInBeaconsfield
        </h2>
        <RoofersInBeaconsfield />
      </section>

      <hr className="my-4" />
      <section id="advanced-roofing" className="mb-16">
        <h2 className="text-xl font-semibold px-4 my-4">
          3) AdvancedRoofing
        </h2>
        <AdvancedRoofing />
      </section>
    </div>
</Layout>
  );
}