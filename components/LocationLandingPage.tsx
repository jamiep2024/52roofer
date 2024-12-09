import React from 'react';
import { motion } from 'framer-motion';
import { LocationData } from '../types/location';
import Link from 'next/link';
import Image from 'next/image';
import LocationContactForm from './LocationContactForm';

interface LocationLandingPageProps {
  locationData: LocationData;
  emergencyCount?: number;
}

const LocationLandingPage: React.FC<LocationLandingPageProps> = ({ locationData, emergencyCount = 27 }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Emergency CTA */}
      <div className="relative bg-gray-900 h-[70vh] min-h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt={`Emergency Roofing Services in ${locationData.name}`}
            layout="fill"
            objectFit="cover"
            priority
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Emergency Roofing in {locationData.name}
                <span className="block text-accent mt-2">Available 24/7</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {emergencyCount}+ Emergency Callouts in {locationData.name} This Month. 
                Professional Roofers Available Now - Response in 60 Minutes!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:07990101324"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors"
                >
                  📞 Call Now
                  <span className="ml-2 text-sm opacity-90">- Fast Response</span>
                </a>
                <Link
                  href="#quote-form"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  Get Free Quote
                  <span className="ml-2 text-sm opacity-90">- No Obligation</span>
                </Link>
              </div>

              <div className="mt-8 flex justify-center space-x-6">
                <div className="flex items-center">
                  <span className="text-accent">✓</span>
                  <span className="ml-2 text-white">60min Response</span>
                </div>
                <div className="flex items-center">
                  <span className="text-accent">✓</span>
                  <span className="ml-2 text-white">10 Year Guarantee</span>
                </div>
                <div className="flex items-center">
                  <span className="text-accent">✓</span>
                  <span className="ml-2 text-white">500+ 5★ Reviews</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Local Trust Signals */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Your Trusted Local Roofers in {locationData.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Serving {locationData.name} and surrounding areas with expert roofing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locationData.landmarks.slice(0, 3).map((landmark, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Projects Near {landmark}</h3>
                <p className="text-gray-600">
                  Recent roofing work completed near {landmark}, {locationData.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              24/7 Emergency Roofing Services in {locationData.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From leak repairs to storm damage, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationData.roofingInfo.commonStyles.map((style, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-accent mb-4">✓</div>
                <h3 className="text-lg font-semibold mb-2">{style}</h3>
                <p className="text-gray-600">
                  Expert {style.toLowerCase()} services in {locationData.name} and surrounding areas
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div id="quote-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Get a Free Quote</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address in {locationData.name}
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Describe Your Roofing Need
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 px-6 rounded-md hover:bg-accent/90 transition-colors"
                >
                  Get Free Quote Now
                </button>
              </div>
              <p className="text-sm text-gray-500 text-center">
                No obligation quote - hear back within 60 minutes
              </p>
            </form>
          </div>
          <div>
            <LocationContactForm locationName={locationData.name} />
          </div>
        </div>
      </div>

      {/* Local Expertise */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Local Roofing Expertise in {locationData.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Understanding the unique roofing needs of {locationData.name} properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Local Building Requirements</h3>
              <p className="text-gray-600 mb-4">{locationData.roofingInfo.regulations}</p>
              <ul className="space-y-2">
                {locationData.roofingInfo.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-accent mr-2">✓</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Heritage Experience</h3>
              <p className="text-gray-600 mb-4">{locationData.history}</p>
              <div className="mt-4">
                <strong className="block mb-2">Conservation Areas:</strong>
                <ul className="space-y-1">
                  {locationData.heritage.conservationAreas.slice(0, 3).map((area, index) => (
                    <li key={index} className="text-gray-600">{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Need Emergency Roofing in {locationData.name}?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07990101324"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors"
            >
              📞 Call Now for Fast Response
            </a>
            <Link
              href="#quote-form"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationLandingPage;
