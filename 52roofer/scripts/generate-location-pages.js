import fs from "fs";
import path from "path";
import { locationData } from "../data/locationData";

const PAGES_DIR = path.join(process.cwd(), "pages");

// Template for generating location-specific FAQs
const generateLocationFAQs = (location) => {
  return [
    {
      question: `What roofing services do you offer in ${location.name}?`,
      answer: `We provide comprehensive roofing services in ${location.name} including: ${location.roofingInfo.commonStyles.join(", ")}. Our expert team is familiar with local building regulations and specializes in both modern and heritage roofing solutions.`,
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: `What are the common roofing challenges in ${location.name}?`,
      answer: `Common roofing challenges in ${location.name} include: ${location.roofingInfo.challenges.join(", ")}. Our experienced team is well-equipped to handle these challenges with appropriate solutions and materials.`,
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: `Do you handle heritage roofing in ${location.name}?`,
      answer: `Yes, we specialize in heritage roofing in ${location.name}. We work with ${location.roofingInfo.materials.traditional.join(", ")} and follow strict conservation guidelines for listed buildings and conservation areas.`,
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: `What areas around ${location.name} do you cover?`,
      answer: `We cover ${location.name} and surrounding areas including ${location.nearbyAreas.join(", ")}. We service all postcodes in the region: ${location.postalCodes.join(", ")}.`,
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: `What roofing materials do you use in ${location.name}?`,
      answer: `We use a wide range of materials suitable for ${location.name}'s climate and architectural styles. Traditional materials include ${location.roofingInfo.materials.traditional.join(", ")}. Modern options include ${location.roofingInfo.materials.modern.join(", ")}.`,
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
  ];
};

// Generate the page content
const generatePageContent = (locationKey, locationInfo) => {
  const slug = `roofers-in-${locationKey.toLowerCase().replace(/\s+/g, "-")}`;
  const pageContent = `
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { HeroImage } from '../components/HeroImage';
import { LeadForm } from '../components/forms/LeadForm';
import { DynamicFAQ } from '../components/FAQ/DynamicFAQ';
import { LocalBusinessSchema } from '../components/seo/LocalBusinessSchema';
import { HowToSchema } from '../components/seo/schemas/HowToSchema';
import { ReviewSchema } from '../components/seo/schemas/ReviewSchema';
import { VideoSchema } from '../components/seo/schemas/VideoSchema';

// Example reviews for ${locationInfo.name}
const reviews = [
  {
    author: "James Wilson",
    reviewRating: 5,
    reviewBody: "Excellent roofing service in ${locationInfo.name}. Professional team and great attention to detail.",
    datePublished: new Date().toISOString()
  },
  {
    author: "Sarah Thompson",
    reviewRating: 5,
    reviewBody: "Very impressed with their knowledge of local building regulations and heritage requirements in ${locationInfo.name}.",
    datePublished: new Date().toISOString()
  },
  {
    author: "Michael Brown",
    reviewRating: 4,
    reviewBody: "Reliable and efficient service. They handled our ${locationInfo.roofingInfo.commonStyles[0].toLowerCase()} project perfectly.",
    datePublished: new Date().toISOString()
  }
];

// How-to steps for choosing a roofer in ${locationInfo.name}
const howToSteps = [
  {
    name: "Research Local Expertise",
    text: "Look for roofers with specific experience in ${locationInfo.name}, especially with ${locationInfo.roofingInfo.commonStyles[0].toLowerCase()}",
    image: "/images/how-to/research.jpg"
  },
  {
    name: "Check Credentials",
    text: "Ensure the roofer understands ${locationInfo.name}'s building regulations and has experience with local planning requirements",
    image: "/images/how-to/credentials.jpg"
  },
  {
    name: "Get Detailed Quotes",
    text: "Request comprehensive quotes that account for ${locationInfo.name}'s specific challenges like ${locationInfo.roofingInfo.challenges[0].toLowerCase()}",
    image: "/images/how-to/quotes.jpg"
  }
];

export default function ${locationKey.replace(/[^a-zA-Z0-9]/g, "")}Page() {
  const initialFAQs = ${JSON.stringify(generateLocationFAQs(locationInfo), null, 2)};

  return (
    <>
      <Head>
        <title>Expert Roofers in ${locationInfo.name} | Professional Roofing Services</title>
        <meta
          name="description"
          content="Professional roofing services in ${locationInfo.name}. Specialists in ${locationInfo.roofingInfo.commonStyles.join(", ")}. Free quotes, expert team, fully insured."
        />
        <meta
          name="keywords"
          content="roofers ${locationInfo.name}, roofing contractors ${locationInfo.name}, roof repairs ${locationInfo.name}, local roofers ${locationInfo.postalCodes.join(" ")}"
        />
        <link rel="canonical" href="https://52roofer.com/${slug}" />
      </Head>

      <LocalBusinessSchema
        businessName="52Roofer ${locationInfo.name}"
        location={{
          name: "${locationInfo.name}",
          county: "${locationInfo.county}",
          postcodes: ${JSON.stringify(locationInfo.postalCodes)}
        }}
        url={\`https://52roofer.com/${slug}\`}
        image="/images/hero-bg.jpg"
      />

      <HowToSchema
        name="How to Choose a Roofer in ${locationInfo.name}"
        description="A comprehensive guide to selecting the right roofing contractor in ${locationInfo.name}"
        steps={howToSteps}
        totalTime="P1D"
      />

      <ReviewSchema
        itemReviewed={{
          name: "52Roofer ${locationInfo.name}",
          image: "/images/hero-bg.jpg",
          description: "Professional roofing services in ${locationInfo.name}"
        }}
        reviews={reviews}
        aggregateRating={{
          ratingValue: 4.8,
          reviewCount: reviews.length
        }}
      />

      <VideoSchema
        name="Roofing Services in ${locationInfo.name}"
        description="Overview of our professional roofing services in ${locationInfo.name}"
        thumbnailUrl="/images/video-thumbnail.jpg"
        uploadDate={new Date().toISOString()}
        duration="PT2M30S"
        embedUrl="https://www.youtube.com/embed/example"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <HeroImage
              src="/images/hero-bg.jpg"
              alt={\`Roofing services in ${locationInfo.name}\`}
            />
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in ${locationInfo.name}
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Professional roofing services in ${locationInfo.name}, ${locationInfo.county}.
              From ${locationInfo.roofingInfo.commonStyles[0].toLowerCase()} to ${locationInfo.roofingInfo.commonStyles[1].toLowerCase()},
              our local experts are here to help.
            </p>
          </div>
        uploadDate={new Date().toISOString()}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Your Trusted Local Roofers in ${locationInfo.name}
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in ${locationInfo.name}? Our
                  experienced team provides comprehensive roofing solutions
                  throughout ${locationInfo.postalCodes.join(", ")}. We specialize in:
                </p>

                <ul className="mt-8 space-y-4">
                  {${JSON.stringify(locationInfo.roofingInfo.commonStyles)}.map((style) => (
                    <li key={style}>✓ {style}</li>
                  ))}
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">
                  Why Choose Our ${locationInfo.name} Roofers?
                </h3>
                <ul className="space-y-4">
                  <li>✓ Deep understanding of local building regulations</li>
                  <li>✓ Experience with ${locationInfo.name}'s architectural styles</li>
                  <li>✓ Expertise in handling local weather conditions</li>
                  <li>✓ Comprehensive knowledge of local planning requirements</li>
                </ul>

                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-4">Local Expertise</h3>
                  <p>
                    ${locationInfo.history}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get Your Free Quote Today
                </h3>
                <LeadForm source="${locationInfo.name} Landing Page" />
              </div>

              {/* Coverage Areas */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Areas We Cover in ${locationInfo.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  We provide comprehensive roofing services throughout
                  ${locationInfo.name} and surrounding areas including ${locationInfo.nearbyAreas.join(", ")}.
                </p>
              </div>
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
        </div>
      </div>
    </>
  );
}
`;

  return pageContent;
};

// Main function to generate all location pages
const generateLocationPages = () => {
  // Create pages for each location
  Object.entries(locationData).forEach(([locationKey, locationInfo]) => {
    const slug = `roofers-in-${locationKey.toLowerCase().replace(/\s+/g, "-")}`;
    const filePath = path.join(PAGES_DIR, `${slug}.tsx`);

    const pageContent = generatePageContent(locationKey, locationInfo);

    fs.writeFileSync(filePath, pageContent);
    console.log(`Generated page for ${locationInfo.name} at ${filePath}`);
  });
};

// Run the generator
generateLocationPages();
