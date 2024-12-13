import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import HeroImage from "../components/HeroImage";
import LeadForm from '../components/forms/LeadForm';
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';

export default function RoofersInWolvercoteOxford() {
  const location = {
    name: 'Wolvercote',
    county: serviceAreas.oxfordshire.name,
    postcodes: ['OX2'],
  };

  const localBusinesses = businesses.filter(business => {
    const isInCounty = business.location === serviceAreas.oxfordshire.name;
    const servesPostcode = business.serviceAreas.some(area => {
      if (area.includes('-')) {
        const [start, end] = area.split('-');
        const areaPrefix = start.replace(/\d+$/, '');
        const startNum = parseInt(start.replace(/^\D+/, ''));
        const endNum = parseInt(end.replace(/^\D+/, ''));
        const targetNum = parseInt(location.postcodes[0].replace(/^\D+$/, ''));
        return areaPrefix === location.postcodes[0].replace(/\d+$/, '') &&
               targetNum >= startNum && targetNum <= endNum;
      }
      return area === location.postcodes[0];
    });

    return isInCounty && servesPostcode;
  });

  return (
    <>
      <Head>
        <title>Expert Roofers in Wolvercote, Oxford | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in Wolvercote, Oxford? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving OX2 & surrounding areas."
        />
        <meta name="keywords" content="roofers Wolvercote, roofing contractors Wolvercote, roof repairs Oxford, emergency roofer Wolvercote, local roofers OX2" />
        <link rel="canonical" href="https://52roofer.com/roofers-in-wolvercote-oxford" />
      </Head>

      {/* Hero Section - Dark Background */}
      <div className="relative min-h-[80vh] flex items-center bg-gray-900">
        <div className="absolute inset-0">
          <HeroImage 
            src="/images/hero-bg.jpg"
            alt="Roofing services in Wolvercote"
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                Trusted Local Roofers in OX2
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Expert Roofing Services in Wolvercote
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                Professional roofing solutions with 24/7 emergency support. Quality workmanship guaranteed.
              </p>
              <div className="mt-8">
                <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
                  Get Free Quote Today
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-2xl">
              <LeadForm source="Wolvercote Landing Page Hero" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Roofing Services
            </h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mt-4 mb-6"></div>
            <p className="text-xl text-gray-600">
              Comprehensive roofing solutions for Wolvercote homes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Repairs",
                description: "24/7 emergency response for urgent roof repairs",
                icon: "🔧"
              },
              {
                title: "Roof Replacement",
                description: "Complete roof replacement with quality materials",
                icon: "🏠"
              },
              {
                title: "Maintenance",
                description: "Regular maintenance to prevent costly repairs",
                icon: "🛠️"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Areas Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Areas We Serve</h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">North Wolvercote</h3>
                  <ul className="space-y-3">
                    {["Upper Wolvercote", "Wolvercote Green", "Godstow"].map((area) => (
                      <li key={area} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-gray-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">South Wolvercote</h3>
                  <ul className="space-y-3">
                    {["Lower Wolvercote", "Wolvercote Common", "Jordan Hill"].map((area) => (
                      <li key={area} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-gray-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/completed-roof.jpg"
                alt="Completed roofing project in Wolvercote"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Us?
            </h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mt-4 mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Emergency Service",
                description: "Available around the clock",
                icon: "⏰"
              },
              {
                title: "Quality Guaranteed",
                description: "Premium materials & workmanship",
                icon: "✨"
              },
              {
                title: "Local Experts",
                description: "Deep knowledge of Wolvercote",
                icon: "🏘️"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local Businesses */}
      {localBusinesses.length > 0 && (
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Trusted Local Roofers
              </h2>
              <div className="w-20 h-1 bg-gray-900 mx-auto mt-4 mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {localBusinesses.map(business => (
                <div key={business.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{business.name}</h3>
                    {business.featured && (
                      <span className="bg-gray-900/10 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(business.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600">
                      ({business.reviewCount} reviews)
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{business.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {business.phone && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-gray-500">Phone</div>
                        <div className="font-semibold text-gray-900">{business.phone}</div>
                      </div>
                    )}
                    {business.availability && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-gray-500">Hours</div>
                        <div className="font-semibold text-gray-900">{business.availability}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Roofing Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your free, no-obligation quote today
            </p>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600
  };
};
