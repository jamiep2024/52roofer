import React from 'react';
import Layout from '../components/layout/Layout';
import AdvancedSEO from '../components/seo/AdvancedSEO';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactPage = () => {
  return (
    <Layout>
      <AdvancedSEO 
        title="Contact Us - 52 Roofer"
        description="Get in touch with 52 Roofer for all your roofing needs. Email us at 52rooferteam@gmail.com for professional roofing services."
      />
      
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16">
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
                      Serving Oxfordshire, Gloucestershire, Wiltshire & Berkshire
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Contact Form */}
              <form className="rounded-2xl border border-gray-100 p-10 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Service Areas */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Service Areas</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Oxfordshire', 'Gloucestershire', 'Wiltshire', 'Berkshire'].map((area) => (
                  <div key={area} className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
