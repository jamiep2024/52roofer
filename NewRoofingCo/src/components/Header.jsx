import React from 'react'
import { FaPhone } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-white/90 shadow backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-1.5">
          <img 
            src="/logo.svg" 
            alt="52roofer.com" 
            className="h-12 md:h-16"
          />
          
          <div className="flex items-center gap-4">
            <picture>
              <source media="(min-width: 768px)" srcSet="/images/review-badge-desktop.png" />
              <img src="/images/review-badge-mobile.png" alt="Review Badge" className="h-24 md:h-48" />
            </picture>
            
            <a 
              href="tel:07990101321" 
              className="bg-gradient-to-r from-pink-600 to-pink-800 text-white px-4 py-2 rounded-xl font-bold text-sm sm:text-base hover:shadow-lg transition-all inline-flex items-center gap-2 animate-pulse whitespace-nowrap"
            >
              <FaPhone className="text-white" />
              <span className="hidden sm:inline">Call Us Now</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
