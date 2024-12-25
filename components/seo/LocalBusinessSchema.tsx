import React from "react";

interface Location {
  name: string;
  county: string;
  postcodes: string[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

interface Props {
  businessName: string;
  location: Location;
  url: string;
  image: string;
  rating?: {
    ratingValue: number;
    reviewCount: number;
  };
  priceRange?: string;
}

const LocalBusinessSchema: React.FC<Props> = ({
  businessName,
  location,
  url,
  image,
  rating,
  priceRange = "££",
}) => {
  // Default coordinates for Oxford if not provided
  const defaultCoordinates = {
    latitude: 51.752,
    longitude: -1.2577,
  };

  const coordinates = location.coordinates || defaultCoordinates;

  // Service area radius (in kilometers) - adjust based on actual coverage
  const serviceRadius = 50;

  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${url}#business`,
    name: businessName,
    image: image,
    url: url,
    telephone: "+44-000-000-0000", // Replace with actual phone
    priceRange: priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: location.county,
      addressCountry: "GB",
      postalCode: location.postcodes[0],
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      },
      geoRadius: serviceRadius * 1000, // Convert to meters
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      },
      geoRadius: serviceRadius * 1000,
    },
    hasMap: `https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/52roofer",
      "https://twitter.com/52roofer",
      "https://www.linkedin.com/company/52roofer",
    ],
    ...(rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.ratingValue,
        reviewCount: rating.reviewCount,
      },
    }),
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Repair",
          description: "Professional roof repair services",
        },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          },
          geoRadius: serviceRadius * 1000,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Installation",
          description: "Complete roof installation services",
        },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          },
          geoRadius: serviceRadius * 1000,
        },
      },
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
