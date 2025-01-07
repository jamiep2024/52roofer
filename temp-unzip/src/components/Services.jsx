import React from 'react'
import { FaArrowRight, FaPhone } from 'react-icons/fa'

// ... rest of the imports and services array ...

export default function Services() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Professional, Affordable & Trusted Roofing Services
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          At 52 Roofer, we offer all types of roofing services. Our roofing services are affordable
          & we always provide a detailed inspection & quote before any work begins.
        </p>

        {/* ... services grid ... */}

        <div className="mt-12 text-center space-y-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            Get Your FREE Roofing Quote <FaArrowRight />
          </button>
          <div>
            <a 
              href="tel:07990101321" 
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700"
            >
              <FaPhone /> Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
