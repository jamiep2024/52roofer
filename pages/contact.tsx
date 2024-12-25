import Layout from '../components/layout/Layout';
import React from 'react';
import LeadForm from '../components/forms/LeadForm';
import SEO from '../components/seo/SEO';

const ContactPage = () => {
  return (
    <Layout>
      <Layout>
    <>
      <SEO 
        title="Contact Us | 52 Roofer"
        description="Get in touch with our roofing experts. We're here to help with all your roofing needs across South England."
      />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact Information */    </Layout>
  );
}

            <div className="lg:col-span-1">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Our team is here to help with any roofing inquiries you may have.
                </p>

                <dl className="mt-8 space-y-6">
                  <dt className="sr-only">Phone</dt>
                  <dd className="flex">
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a 
                      href="tel:07990101321" 
                      className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Call Now
                    </a>
                  </dd>

                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3 text-gray-600">info@52roofer.co.uk</span>
                  </dd>

                  <dt className="sr-only">Office hours</dt>
                  <dd className="flex">
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 text-gray-600">Mon-Fri: 8am-6pm<br/>Sat: 9am-4pm<br/>24/7 Emergency Service</span>
                  </dd>
                </dl>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Get Your Free Quote</h2>
                <LeadForm source="Contact Page" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
