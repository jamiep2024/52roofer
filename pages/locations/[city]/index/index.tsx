import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import LocationLayout from "../../components/LocationLayout";
import { SEO } from "../../components/seo/SEO";

interface LocationPageProps {
  city: string;
  county?: string;
}

const LocationPage: React.FC<LocationPageProps> = ({ city, county }) => {
  const title = city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <LocationLayout location={city}>
      <SEO
        title={`Roofers in ${title} | Professional Roofing Services`}
        description={`Professional roofing services in ${title}${county ? `, ${county}` : ""}. Expert roofers providing repairs, installations, and maintenance.`}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Roofers in {title}</h1>
        <div className="prose max-w-none">
          <p>
            Professional roofing services in {title}
            {county ? `, ${county}` : ""}.
          </p>
          <h2>Our Services in {title}</h2>
          <ul>
            <li>Roof Repairs</li>
            <li>Roof Installation</li>
            <li>Roof Maintenance</li>
            <li>Emergency Roofing</li>
            <li>Commercial Roofing</li>
            <li>Residential Roofing</li>
          </ul>
        </div>
      </div>
    </LocationLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Import location data
  const locations = (await import("../../data/locationData")).default;

  const paths = locations.map((location) => ({
    params: { city: location.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const locations = (await import("../../data/locationData")).default;
  const location = locations.find((loc) => loc.slug === params?.city);

  return {
    props: {
      city: params?.city || "",
      county: location?.county || "",
    },
  };
};

export default LocationPage;
