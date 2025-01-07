import React from 'react'
import { FaPhone } from 'react-icons/fa'

export default function StickyBanner() {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 to-pink-800 py-3 text-white shadow-lg animate-fade-in">
      <div className="container mx-auto px-4 flex items-center justify-center gap-6">
        <span className="text-xl font-bold tracking-wide">
          GET YOUR FREE QUOTE TODAY!
        </span>
        
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:07990101321"
            className="flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full font-medium hover:bg-white/20 transition-all"
          >
            <FaPhone className="text-white" />
            <span>Call Now</span>
          </a>
          
          <a 
            href="#quote-form"
            className="flex items-center gap-2 bg-white text-pink-700 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Get Quote Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
