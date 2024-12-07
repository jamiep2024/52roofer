import React from 'react';
import Head from 'next/head';

interface AdvancedSEOProps {
  title: string;
  description: string;
  jsonLd?: any[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  localBusiness?: {
    name: string;
    areas: string[];
    rating: number;
    reviewCount: number;
  };
}

const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title,
  description,
  jsonLd = [],
  canonical,
  openGraph,
  localBusiness,
}) => {
  // Generate current timestamp for lastmod in sitemap
  const currentDate = new Date().toISOString();

  // Enhanced Local Business Schema
  const localBusinessSchema = localBusiness ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://52roofer.com/#localbusiness",
    "name": localBusiness.name,
    "url": "https://52roofer.com",
    "logo": "https://52roofer.com/images/logo.png",
    "image": "https://52roofer.com/images/hero-bg.jpg",
    "description": description,
    "areaServed": localBusiness.areas.map(area => ({
      "@type": "State",
      "name": area
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": localBusiness.rating.toString(),
      "reviewCount": localBusiness.reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/52roofer",
      "https://twitter.com/52roofer",
      "https://www.linkedin.com/company/52roofer",
      "https://www.instagram.com/52roofer"
    ]
  } : null;

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://52roofer.com/#website",
    "url": "https://52roofer.com",
    "name": "52Roofer",
    "description": "Find Trusted Local Roofers in South England",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://52roofer.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://52roofer.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": canonical || "https://52roofer.com"
      }
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Technical SEO */}
      <link rel="canonical" href={canonical || "https://52roofer.com"} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Open Graph */}
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={openGraph?.title || title} />
      <meta property="og:description" content={openGraph?.description || description} />
      <meta property="og:url" content={canonical || "https://52roofer.com"} />
      <meta property="og:site_name" content="52Roofer" />
      {openGraph?.images?.map((image, index) => (
        <React.Fragment key={index}>
          <meta property="og:image" content={image.url} />
          {image.width && <meta property="og:image:width" content={image.width.toString()} />}
          {image.height && <meta property="og:image:height" content={image.height.toString()} />}
          {image.alt && <meta property="og:image:alt" content={image.alt} />}
        </React.Fragment>
      ))}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@52roofer" />
      <meta name="twitter:creator" content="@52roofer" />
      <meta name="twitter:title" content={openGraph?.title || title} />
      <meta name="twitter:description" content={openGraph?.description || description} />
      {openGraph?.images?.[0] && (
        <meta name="twitter:image" content={openGraph.images[0].url} />
      )}

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            websiteSchema,
            breadcrumbSchema,
            ...(localBusinessSchema ? [localBusinessSchema] : []),
            ...jsonLd
          ])
        }}
      />

      {/* Additional Technical SEO */}
      <link rel="alternate" href={canonical || "https://52roofer.com"} hrefLang="en-gb" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#4F46E5" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="52Roofer" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="52Roofer" />

      {/* Preconnect to important third-party domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Performance optimizations */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Head>
  );
};

export default AdvancedSEO;
