import { GetStaticPaths, GetStaticProps } from "next";
import { locationData } from "../../data/locations";
import LocationLandingPage from "../../components/LocationLandingPage";
import SEO from "../../components/seo/SEO";

interface LocationPageProps {
  location: any;
  locationSlug: string;
}

export default function LocationPage({ location, locationSlug }: LocationPageProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://52roofer.com/#organization",
    name: "52Roofer",
    url: "https://52roofer.com",
    logo: "https://52roofer.com/images/logo.png",
    description: `Professional roofing services in ${location.name}, ${location.county}. Expert local roofers providing quality roofing solutions.`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://52roofer.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://52roofer.com/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: `https://52roofer.com/location/${locationSlug}`,
      },
    ],
  };

  return (
    <>
      <SEO
        title={`Roofing Services in ${location.name} | Local Roofers | 52Roofer`}
        description={`Professional roofing services in ${location.name}, ${location.county}. Expert local roofers for all your roofing needs. Covering ${location.nearbyAreas?.slice(0, 3).join(", ") || ""} and surrounding areas.`}
        jsonLd={[organizationSchema, breadcrumbSchema]}
      />
      <LocationLandingPage
        city={location.name}
        county={location.county}
        description={
          location.description ||
          `Professional roofing services in ${location.name}, ${location.county}. Our expert team provides comprehensive roofing solutions including repairs, installations, and maintenance.`
        }
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(locationData).map((locationSlug) => ({
    params: { location: locationSlug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locationSlug = params?.location as string;
  const location = locationData[locationSlug];

  if (!location) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      location,
      locationSlug,
    },
  };
};
