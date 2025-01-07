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
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
          <img 
            src="/logo.svg" 
            alt="52roofer.com" 
            className="h-12"
            style={{ filter: 'brightness(0) invert(1)' }} // Makes logo white
          />
        </div>

        <div className="flex justify-center gap-12 mb-12">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex flex-col items-center text-center">
              <FaCheck className="text-green-500 mb-2" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p className="text-gray-400 text-sm">
              52 Roofer provides high quality affordable roofing services across your local area.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <a 
                href="tel:07990101321" 
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <FaPhone /> Call Us Now
              </a>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:52roofer2024@gmail.com" className="hover:text-white">
                  52roofer2024@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Free Quote</h3>
            <a 
              href="tel:07990101321"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <FaPhone /> Call Us Now
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 52roofer.com</p>
        </div>
      </div>
    </footer>
  )
}
