import React from 'react';
import AdvancedSEO from '../components/seo/AdvancedSEO';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import QuoteForm from '../components/QuoteForm';

const ContactPage = () => {
  return (
    <>
      <AdvancedSEO 
        title="Contact Us - 52 Roofer"
        description="Get in touch with 52 Roofer for all your roofing needs. Email us at 52rooferteam@gmail.com for professional roofing services."
      />
      
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get in touch with our team for professional roofing services. We're here to help with all your roofing needs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Contact Information */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Our team is ready to assist you with any roofing inquiries.
                </p>
                
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href="mailto:52rooferteam@gmail.com">
                        52rooferteam@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <MapPinIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      Serving Oxfordshire, Gloucestershire, Wiltshire, Berkshire, Hampshire, Surrey, Buckinghamshire, and West Sussex
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl bg-gray-50 p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
