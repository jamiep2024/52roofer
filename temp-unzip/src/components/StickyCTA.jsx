import React from 'react'
import { FaPhone, FaArrowRight } from 'react-icons/fa'

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.svg" 
              alt="52roofer.com" 
              className="h-8 hidden md:block"
            />
            <div className="flex items-center text-yellow-400">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-700 font-medium">97 Reviews</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="tel:07990101321"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <FaPhone className="text-white" />
              Call Us Now
            </a>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors inline-flex items-center gap-2">
              Get Quote <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
