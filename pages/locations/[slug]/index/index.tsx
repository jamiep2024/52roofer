import { GetStaticPaths, GetStaticProps } from "next";
import { locationData } from "../../data/locationData";
import LocationLandingPage from "../../components/LocationLandingPage";
import { NextSeo } from "next-seo";
import { LocationData } from "../../types/location";

interface LocationPageProps {
  location: LocationData;
  slug: string;
}

export default function LocationPage({ location, slug }: LocationPageProps) {
  const seoTitle = `🏆 Emergency Roofers ${location.name} | 24/7 Local Roof Repairs | Best Price 2024`;
  const seoDescription = `⚡FAST Emergency Roofer in ${location.name} - 24/7 Roof Repairs ✓10-Year Guarantee ✓500+ 5★ Reviews ✓60min Response ✓FREE Quote. Local Experts in ${location.county}. Roof Replacement from £2999. CALL NOW!`;

  // Generate a rich description using available location data
  const generatedDescription = `We provide professional roofing services in ${location.name}, ${location.county}. ${
    location.roofingInfo?.commonStyles
      ? `With expertise in ${location.roofingInfo.commonStyles.join(", ")}, `
      : ""
  }our team specializes in addressing local challenges${
    location.roofingInfo?.challenges
      ? ` such as ${location.roofingInfo.challenges.join(", ")}`
      : ""
  }. We understand the unique requirements of ${location.name}'s buildings${
    location.heritage?.listedBuildings?.gradeII?.length
      ? `, including ${location.heritage.listedBuildings.gradeII.length} Grade II listed properties`
      : ""
  }${
    location.roofingInfo?.buildingRegulations?.planningRequirements
      ? `, and work in compliance with local ${location.roofingInfo.buildingRegulations.planningRequirements}`
      : ""
  }. Our services are tailored to handle${
    location.roofingInfo?.weatherConsiderations?.commonIssues
      ? ` ${location.roofingInfo.weatherConsiderations.commonIssues.join(", ")} common in the area`
      : " all types of roofing needs"
  }.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `https://52roofer.com/locations/${slug}#business`,
    name: `52roofer.com - Emergency Roofing Services ${location.name}`,
    description: `24/7 emergency roofing services in ${location.name}, ${location.county}. Specializing in rapid roof repairs, replacements, and maintenance. Trusted by local homeowners with 500+ 5-star reviews.`,
    url: `https://52roofer.com/locations/${slug}`,
    logo: "https://52roofer.com/images/logo.png",
    image: "https://52roofer.com/images/storefront.jpg",
    telephone: "+44-XXXX-XXXXXX",
    email: "info@52roofer.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: location.county,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.county,
      },
    },
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    priceRange: "££",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Roof Repairs",
            description: `24/7 emergency roof repair service in ${location.name}`,
            serviceType: "EmergencyService",
            provider: {
              "@type": "LocalBusiness",
              name: "52roofer.com",
              areaServed: {
                "@type": "City",
                name: location.name,
              },
            },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "150",
            priceCurrency: "GBP",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Replacement",
            description: `Complete roof replacement service in ${location.name}`,
            serviceType: "InstallationService",
            provider: {
              "@type": "LocalBusiness",
              name: "52roofer.com",
              areaServed: {
                "@type": "City",
                name: location.name,
              },
            },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "2999",
            priceCurrency: "GBP",
          },
        },
      ],
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Local Customer",
        },
        reviewBody: `Excellent emergency roofing service in ${location.name}. The team arrived within an hour and fixed our leak professionally.`,
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Verified Customer",
        },
        reviewBody: `Best roofers in ${location.name}. They replaced our entire roof and the quality of work is outstanding.`,
      },
    ],
    potentialAction: {
      "@type": "QuoteAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://52roofer.com/locations/${slug}#quote`,
        inLanguage: "en-GB",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Quote",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "GBP",
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`https://52roofer.com/locations/${slug}`}
        openGraph={{
          url: `https://52roofer.com/locations/${slug}`,
          title: seoTitle,
          description: seoDescription,
          images: [
            {
              url: "https://52roofer.com/images/og-image.jpg",
              width: 1200,
              height: 630,
              alt: `Emergency Roofing Services in ${location.name}`,
            },
          ],
          siteName: "52roofer.com",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: `emergency roofer ${location.name}, roof repairs ${location.name}, local roofers ${location.name}, ${location.county} roofers, emergency roof repair ${location.name}, roof leak repair ${location.name}, roofing contractors ${location.name}, 24 hour roofer ${location.name}, best roofers ${location.name}, affordable roofing ${location.name}, trusted roofers ${location.county}, emergency roofing services ${location.name}, heritage roofing ${location.name}, listed building roof repairs ${location.name}, conservation area roofing ${location.name}, traditional roofing ${location.name}, modern roofing ${location.name}, commercial roofing ${location.name}, residential roofing ${location.name}, roof maintenance ${location.name}`,
          },
          {
            name: "geo.region",
            content: "GB",
          },
          {
            name: "geo.placename",
            content: `${location.name}, ${location.county}`,
          },
          {
            name: "geo.position",
            content: `${location.coordinates.latitude};${location.coordinates.longitude}`,
          },
          {
            name: "ICBM",
            content: `${location.coordinates.latitude}, ${location.coordinates.longitude}`,
          },
          {
            property: "business:contact_data:street_address",
            content: `${location.name}`,
          },
          {
            property: "business:contact_data:locality",
            content: location.name,
          },
          {
            property: "business:contact_data:region",
            content: location.county,
          },
          {
            property: "business:contact_data:postal_code",
            content: "Contact for details",
          },
          {
            property: "business:contact_data:country_name",
            content: "United Kingdom",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LocationLandingPage
        city={location.name}
        county={location.county}
        description={generatedDescription}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all locations without filtering
  const paths = Object.keys(locationData).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const location = locationData[slug];

  if (!location) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      location,
      slug,
    },
  };
};
