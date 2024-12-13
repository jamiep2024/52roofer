import React from 'react';

interface LocalBusinessSchemaProps {
  businessName: string;
  location: {
    name: string;
    county: string;
    postcodes: string[];
  };
  url: string;
  image: string;
  telephone?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  businessName = "52Roofer",
  location,
  url,
  image,
  telephone = "0800 123 4567"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    name: businessName,
    image: image,
    telephone: telephone,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: location.county,
      postalCode: location.postcodes[0],
      addressCountry: "GB"
    },
    geo: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 51.7520,  // Default to Oxford coordinates
        longitude: -1.2577
      },
      geoRadius: "10000"
    },
    url: url,
    areaServed: location.postcodes.map(postcode => ({
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 51.7520,
        longitude: -1.2577
      },
      geoRadius: "5000"
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Roof Repairs",
            description: "24/7 emergency roof repair services"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Installation",
            description: "Complete roof installation and replacement services"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Maintenance",
            description: "Regular roof maintenance and inspection services"
          }
        }
      ]
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
