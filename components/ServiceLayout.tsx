import React from "react";
import Link from "next/link";
import { serviceAreas } from "../data/serviceAreas";
import LeadForm from "./forms/LeadForm";

interface ServiceLayoutProps {
  children: React.ReactNode;
  heroImage?: string;
  heroTitle?: string;
  heroDescription?: string;
  serviceName?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  children,
  heroImage = "/images/services/default-hero.jpg",
  heroTitle,
  heroDescription,
  serviceName,
}) => {
  // Get all main towns from service areas
  const allTowns = Object.entries(serviceAreas).reduce(
    (acc, [countyKey, area]) => {
      return [
        ...acc,
        ...area.mainTowns.map((town) => ({
          name: town,
          county: area.name,
          countyKey,
        })),
      ];
    },
    [] as { name: string; county: string; countyKey: string }[],
  );

  // Function to format the URL slug
  const formatSlug = (town: string, countyKey: string) => {
    const formattedTown = town.toLowerCase().replace(/ /g, "-");

    // Special cases where we need to append the county
    const needsCounty = [
      "warminster",
      "marlborough",
      "chippenham",
      "devizes",
      "melksham",
      "trowbridge",
      "bradford-on-avon",
      "westbury",
      "calne",
      "salisbury",
    ].includes(formattedTown);

    // Special cases where we need to append oxford
    const needsOxford = [
      "blackbird-leys",
      "botley",
      "cowley",
      "headington",
      "wolvercote",
      "jericho",
      "marston",
      "rose-hill",
      "iffley",
      "summertown",
    ].includes(formattedTown);

    if (needsCounty && countyKey === "wiltshire") {
      return `roofers-in-${formattedTown}-wiltshire`;
    } else if (needsOxford && countyKey === "oxfordshire") {
      return `roofers-in-${formattedTown}-oxford`;
    }

    return `roofers-in-${formattedTown}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Now with solid color */}
      <div className="relative h-[400px] bg-accent">
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            {heroTitle && (
              <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                {heroTitle}
              </h1>
            )}
            {heroDescription && (
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                {heroDescription}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lead Form Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Get Your Free Quote Today
          </h2>
          <LeadForm source={serviceName || "Service Page"} />
        </div>

        {/* Content Section */}
        <div className="bg-gray-50 rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">{children}</div>
        </div>

        {/* Location Links Section */}
        <div className="mt-12 bg-gray-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {serviceName
              ? `${serviceName} Services in Popular Areas`
              : "Our Service Areas"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allTowns.map((town, index) => (
              <Link
                key={index}
                href={`/${formatSlug(town.name, town.countyKey)}`}
                className="text-accent hover:text-accent/80 transition-colors"
              >
                {serviceName
                  ? `${serviceName} in ${town.name}`
                  : `Roofing Services in ${town.name}`}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-accent to-accent/80 rounded-lg p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our expert team today for a free, no-obligation quote
          </p>
          <Link
            href="/find-roofer"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white rounded-md text-lg font-medium text-white hover:bg-white hover:text-accent transition-all duration-200"
          >
            Find a Roofer Near You
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
