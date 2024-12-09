import React from 'react';
import AdvancedSEO from '../components/seo/AdvancedSEO';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import QuoteForm from '../components/QuoteForm';

const ContactPage = () => {
  return (
    <>
      <AdvancedSEO 
        title="Contact Us - 52 Roofer | 24/7 Emergency Roofing Services"
        description="Get in touch with 52 Roofer for all your roofing needs. Available 24/7 for emergency repairs. Professional roofing services across South East England."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Available 24/7 for emergency roofing services. Our expert team is ready to help with any roofing inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Contact Information */}
            <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="h-6 w-6 text-accent mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Email Us</p>
                    <a 
                      href="mailto:52rooferteam@gmail.com"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      52rooferteam@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PhoneIcon className="h-6 w-6 text-accent mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Call Us</p>
                    <button 
                      onClick={() => window.location.href = 'tel:07990101324'}
                      className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
                    >
                      Call Now
                    </button>
                    <p className="text-sm text-gray-500 mt-2">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPinIcon className="h-6 w-6 text-accent mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Service Areas</p>
                    <p className="text-gray-600">
                      Oxfordshire, Gloucestershire, Wiltshire, Berkshire, Hampshire, Surrey, Buckinghamshire, and West Sussex
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ 24/7 Emergency Service</li>
                  <li>✓ Fully Insured & Qualified</li>
                  <li>✓ 500+ 5★ Reviews</li>
                  <li>✓ 60min Response Time</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
