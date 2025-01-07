import React from 'react'
import { FaCheck, FaPhone, FaEnvelope } from 'react-icons/fa'

const benefits = [
  'Fully Trained Roofers',
  '100% Service Guarantee',
  'Same Day Quotations',
  'No Hidden Charges',
  'We Clean Up After The Job'
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-16">
          <img 
            src="/logo.svg" 
            alt="52roofer.com" 
            className="h-16 mb-6"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <h2 className="text-2xl font-bold mb-4">Your Trusted Roofing Experts</h2>
          <p className="text-gray-400 max-w-2xl">
            Providing high quality, affordable roofing services with a commitment to excellence and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div 
              key={benefit} 
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FaCheck className="text-green-500 mb-4 text-2xl" />
              <span className="text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-left">
            <h3 className="font-bold text-lg mb-6">About Us</h3>
            <p className="text-gray-400">
              52 Roofer provides high quality affordable roofing services across your local area.
            </p>
          </div>

          <div className="text-left">
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="tel:07990101321" 
                className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-lg"
              >
                <FaPhone className="text-pink-600" /> Call Us Now
              </a>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-pink-600" />
                <a 
                  href="mailto:52roofer2024@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  52roofer2024@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="text-left">
            <h3 className="font-bold text-lg mb-6">Get a Free Quote</h3>
              <a 
                href="tel:07990101321"
                className="inline-flex items-center gap-3 bg-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-pink-700 animate-pulse"
              >
                <FaPhone /> Call Now
              </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 52roofer.com - All rights reserved</p>
        </div>
      </div>

    </footer>
  )
}
