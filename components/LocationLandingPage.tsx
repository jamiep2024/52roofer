import React from "react";
import Link from "next/link";
import LeadForm from "./forms/LeadForm";
import { Business } from "../types/business";

interface LocationLandingPageProps {
  city: string;
  county: string;
  description: string;
  businesses?: Business[];
}

const LocationLandingPage: React.FC<LocationLandingPageProps> = ({
  city,
  county,
  description,
  businesses = [],
}) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trusted Roofing Services in {city}
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Professional roofing solutions for homeowners and businesses in{" "}
            {city}, {county}.
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
          <h2>Expert Roofing Services in {city}</h2>
          <p>{description}</p>

          <h3>Our Services in {city}</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/residential-roofing"
                className="text-accent hover:text-accent/80 no-underline"
              >
                Residential Roofing
              </Link>
            </li>
            <li>
              <Link
                href="/services/commercial-roofing"
                className="text-accent hover:text-accent/80 no-underline"
              >
                Commercial Roofing
              </Link>
            </li>
            <li>
              <Link
                href="/services/roof-maintenance"
                className="text-accent hover:text-accent/80 no-underline"
              >
                Roof Repairs & Maintenance
              </Link>
            </li>
            <li>
              <Link
                href="/services/emergency-roof-repairs"
                className="text-accent hover:text-accent/80 no-underline"
              >
                Emergency Roof Repairs
              </Link>
            </li>
            <li>
              <Link
                href="/services/roof-inspection"
                className="text-accent hover:text-accent/80 no-underline"
              >
                Roof Inspections
              </Link>
            </li>
            <li>
              <Link
                href="/services/gutter-services"
                className="text-accent hover:text-accent/80 no-underline"
              >
                Gutter Services
              </Link>
            </li>
            <li>
              <Link
                href="/services/skylight-installation"
                className="text-accent hover:text-accent/80 no-underline"
              >
                Skylight Installation
              </Link>
            </li>
            <li>
              <Link
                href="/services/roof-ventilation"
                className="text-accent hover:text-accent/80 no-underline"
              >
                Roof Ventilation
              </Link>
            </li>
          </ul>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>
              Local expertise in {city} and {county}
            </li>
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
              Fill out the form below and our {city} team will get back to you
              within 24 hours.
            </p>
          </div>

          <div className="mt-12">
            <LeadForm source={`Location Page - ${city}`} />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Need emergency roofing help?</span>
            <span className="block text-white">
              Our {city} team is available 24/7.
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

export default LocationLandingPage;
