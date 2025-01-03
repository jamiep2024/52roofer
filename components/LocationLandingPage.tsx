import React from "react";
import Link from "next/link";
import LeadForm from "./forms/LeadForm";
import { Business } from "../types/business";
import { formatTownName } from "utils/formatTownName";

interface LocationLandingPageProps {
  city: string;
  county: string;
  description: string;
  businesses?: Business[];
}

const LocationLandingPage: React.FC<LocationLandingPageProps> = ({
  city: rawCity,
  county,
  description,
  businesses = [],
}) => {
  const city = formatTownName(rawCity);
  return (
    <div className="bg-white">
      {/* Floating CTA */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => document.getElementById('quote-form')?.scrollIntoView({behavior: 'smooth'})}
          className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-accent hover:bg-accent/90 shadow-lg transform transition-all hover:scale-105"
        >
          Get Free Quote
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">Trusted Roofing Experts in {city}</span>
              <span className="block text-accent mt-2">Free Quotes & Fast Service</span>
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
              Professional roofing solutions for {city} homeowners and businesses. 
              <span className="block mt-2 text-accent font-semibold">Serving {city} and surrounding areas</span>
            </p>
            <div className="mt-10 space-x-4">
              <Link
                href="#quote-form"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors shadow-lg"
              >
                Get a Free Quote
              </Link>
              <Link
                href="tel:08001234567"
                className="inline-flex items-center px-8 py-4 border border-accent text-lg font-medium rounded-md text-accent bg-white hover:bg-gray-50 transition-colors"
              >
                Call Now
              </Link>
            </div>
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
      <div id="quote-form" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8 sm:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">
                Get Your Free Roofing Quote
              </h2>
              <p className="mt-4 text-lg text-gray-100">
                Fill out the form below and our {city} team will get back to you
                within 24 hours.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-gray-100">Happy Customers</div>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-gray-100">Emergency Service</div>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-gray-100">Years Experience</div>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-white">Free</div>
                <div className="text-gray-100">Quotes</div>
              </div>
            </div>

            <div className="mt-12">
              <LeadForm source={`Location Page - ${city}`} />
            </div>

            {/* Testimonials */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white text-center mb-6">
                What Our Customers Say
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-gray-100 italic">
                    "Excellent service from start to finish. The team was professional and completed the work on time."
                  </div>
                  <div className="mt-4 text-gray-100 font-semibold">
                    - Sarah T., {city}
                  </div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-gray-100 italic">
                    "Quick response to our emergency roof repair. Highly recommend their services!"
                  </div>
                  <div className="mt-4 text-gray-100 font-semibold">
                    - James L., {city}
                  </div>
                </div>
              </div>
            </div>
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
