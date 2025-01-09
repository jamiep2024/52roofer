import React from "react";
import Layout from "./layout/Layout";
import LocalBusinessSchema from "./seo/LocalBusinessSchema"; // Note the default import

interface LocationLayoutProps {
  location: {
    name: string;
    county: string;
    postcodes: string[];
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  children: React.ReactNode;
}

const LocationLayout: React.FC<LocationLayoutProps> = ({
  location,
  children,
}) => {
  const businessData = {
    businessName: `52Roofer - ${location.name}`,
    location: location,
    url: `https://52roofer.com/locations/${location.name.toLowerCase().replace(/\s+/g, "-")}`,
    image: "https://52roofer.com/logo.png",
    rating: {
      ratingValue: 4.8,
      reviewCount: 50,
    },
    priceRange: "££",
  };

  return (
    <Layout>
      <LocalBusinessSchema {...businessData} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">
            Roofing Services in {location.name}
          </h1>
          {children}
        </div>
      </main>
    </Layout>
  );
};

export default LocationLayout;
