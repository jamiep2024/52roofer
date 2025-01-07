import React from 'react'
import { FaPhone } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img 
          src="/logo.svg" 
          alt="52roofer.com" 
          className="h-12 md:h-16"
        />
        
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <div className="flex flex-col items-end">
              <div className="flex items-center bg-white rounded-full border border-gray-200 px-3 py-1">
                <span className="text-[#4285F4] font-bold mr-1">G</span>
                <div className="flex">
                  {[1,2,3,4,5].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-4 h-4" 
                      viewBox="0 0 24 24"
                      fill="#FBBC05"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Based on <span className="font-medium">97 reviews</span>
              </div>
            </div>
          </div>
          
          <a 
            href="tel:07990101321" 
            className="bg-[#4285F4] text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            <FaPhone className="text-white" />
            Call Us Now
          </a>
        </div>
      </div>
    </header>
  )
}
