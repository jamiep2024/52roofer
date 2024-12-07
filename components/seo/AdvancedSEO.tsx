import React from 'react';
import Head from 'next/head';
import { seoConfig } from '../../config/seo.config';

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
  location?: string;
  service?: string;
}

const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title,
  description,
  jsonLd = [],
  canonical,
  openGraph,
  location,
  service,
}) => {
  // Get location or service specific SEO data
  const locationData = location ? seoConfig.locations[location] : null;
  const serviceData = service ? seoConfig.services[service] : null;

  // Combine with default SEO config
  const finalTitle = locationData?.title || serviceData?.title || title;
  const finalDescription = locationData?.description || serviceData?.description || description;
  const keywords = locationData?.keywords || serviceData?.keywords || '';

  // Generate breadcrumb schema
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
      ...(location ? [{
        "@type": "ListItem",
        "position": 2,
        "name": location,
        "item": `https://52roofer.com/location/${location.toLowerCase()}`
      }] : []),
      ...(service ? [{
        "@type": "ListItem",
        "position": location ? 3 : 2,
        "name": serviceData?.title || service,
        "item": `https://52roofer.com/services/${service.toLowerCase()}`
      }] : [])
    ]
  };

  // Combine all schema
  const fullSchema = [
    seoConfig.organization,
    breadcrumbSchema,
    ...jsonLd,
    ...(location || service ? [seoConfig.reviews] : [])
  ];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords} />
      
      {/* Technical SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonical || `https://52roofer.com${location ? `/location/${location.toLowerCase()}` : service ? `/services/${service.toLowerCase()}` : ''}`} />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#4F46E5" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="52Roofer" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="52Roofer" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* PWA Links */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="52Roofer" />
      <meta property="og:title" content={openGraph?.title || finalTitle} />
      <meta property="og:description" content={openGraph?.description || finalDescription} />
      <meta property="og:url" content={canonical || `https://52roofer.com${location ? `/location/${location.toLowerCase()}` : service ? `/services/${service.toLowerCase()}` : ''}`} />
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
      <meta name="twitter:title" content={openGraph?.title || finalTitle} />
      <meta name="twitter:description" content={openGraph?.description || finalDescription} />
      {openGraph?.images?.[0] && (
        <meta name="twitter:image" content={openGraph.images[0].url} />
      )}

      {/* Preconnect to Important Origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fullSchema)
        }}
      />
      
      {/* Verification Tags */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
    </Head>
  );
};

export default AdvancedSEO;
