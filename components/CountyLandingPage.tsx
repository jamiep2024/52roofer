import React from "react";
import Link from "next/link";
import LeadForm from "./forms/LeadForm";

interface CountyLandingPageProps {
  county: string;
  mainTowns: string[];
  postcodes: string[];
}

const CountyLandingPage: React.FC<CountyLandingPageProps> = ({
  county,
  mainTowns,
  postcodes,
}) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Roofing Services in {county}
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Expert roofing solutions for homeowners and businesses across{" "}
            {county}. Serving all major towns including{" "}
            {mainTowns.slice(0, 5).join(", ")}.
          </p>
          <div className="mt-10">
            <Link
              href="#quote-form"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto">
          <h2>Expert Roofing Services Across {county}</h2>
          <p>
            52Roofer provides comprehensive roofing solutions throughout{" "}
            {county}. Our experienced team serves all major towns and
            surrounding areas, delivering high-quality roofing services tailored
            to local requirements and building styles.
          </p>

          <h3>Areas We Cover in {county}</h3>
          <p>We provide our services across {county}, including:</p>
          <ul className="grid grid-cols-2 gap-4">
            {mainTowns.map((town) => (
              <li key={town}>{town}</li>
            ))}
          </ul>

          <h3>Postcodes Covered</h3>
          <p>
            We serve all postcodes in {county}, including:{" "}
            {postcodes.join(", ")}
          </p>

          <h3>Our Services</h3>
          <ul>
            <li>Residential Roofing</li>
            <li>Commercial Roofing</li>
            <li>Roof Repairs & Maintenance</li>
            <li>Emergency Roof Repairs</li>
            <li>Roof Inspections</li>
            <li>Gutter Services</li>
            <li>Skylight Installation</li>
            <li>Roof Ventilation</li>
          </ul>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>Local expertise across {county}</li>
            <li>Fully licensed and insured</li>
            <li>Free detailed quotes</li>
            <li>Quality workmanship guarantee</li>
            <li>Emergency response available</li>
            <li>Competitive pricing</li>
          </ul>
        </div>
      </div>

      {/* Quote Form Section */}
      <div id="quote-form" className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Get Your Free Roofing Quote
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below and our {county} team will get back to you
              within 24 hours.
            </p>
          </div>

          <div className="mt-12">
            <LeadForm source={`County Page - ${county}`} />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Need emergency roofing help?</span>
            <span className="block text-white">
              Our {county} team is available 24/7.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="tel:08001234567"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-accent bg-white hover:bg-gray-50"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountyLandingPage;
