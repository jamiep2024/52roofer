import React, { FormEvent } from 'react';
import AdvancedSEO from '../components/seo/AdvancedSEO';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

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
              <form 
                className="rounded-2xl border border-gray-100 p-10 shadow-lg"
                onSubmit={async (e: FormEvent) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  
                  try {
                    const response = await fetch('/api/submit-quote', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        name: formData.get('name'),
                        email: formData.get('email'),
                        phone: 'Not provided',
                        address: 'Not provided',
                        message: formData.get('message'),
                        serviceNeeded: 'General Inquiry',
                        urgency: 'Not specified',
                        source: 'Contact Page'
                      }),
                    });

                    if (!response.ok) {
                      throw new Error('Failed to submit form');
                    }

                    alert('Message sent successfully! We will get back to you soon.');
                    (e.target as HTMLFormElement).reset();
                  } catch (error) {
                    alert('Error sending message. Please try again.');
                    console.error('Error:', error);
                  }
                }}
              >
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
                        required
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
                        required
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
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-white py-3 px-6 rounded-md hover:bg-accent-dark transition duration-150 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
