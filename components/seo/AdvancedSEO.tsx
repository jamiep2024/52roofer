import React from "react";
import Head from "next/head";
import seoConfig, { SEOData } from "../../config/seo.config";

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  location?: string;
  service?: string;
}

const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title,
  description,
  location,
  service,
}) => {
  // Get location or service specific SEO data
  const locationData: SEOData | undefined = location
    ? seoConfig.locations[location]
    : undefined;
  const serviceData: SEOData | undefined = service
    ? seoConfig.services[service]
    : undefined;

  // Combine with default SEO config
  const finalTitle =
    title ||
    locationData?.title ||
    serviceData?.title ||
    seoConfig.default.title;
  const finalDescription =
    description ||
    locationData?.description ||
    serviceData?.description ||
    seoConfig.default.description;
  const keywords =
    locationData?.keywords ||
    serviceData?.keywords ||
    seoConfig.default.keywords;

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "52 Roofer",
    description: finalDescription,
    url: "https://52roofer.com",
    telephone: "52rooferteam@gmail.com",
    areaServed: location
      ? [location]
      : ["Oxfordshire", "Gloucestershire", "Wiltshire", "Berkshire"],
    priceRange: "££",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://52roofer.com" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />

      {/* Mobile */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <meta name="theme-color" content="#ffffff" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://52roofer.com" />
    </Head>
  );
};

export default AdvancedSEO;
