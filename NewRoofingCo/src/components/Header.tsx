import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/images/logo.jpg"
              alt="52 Roofer Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:07990101321"
              className="hidden md:flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-medium">07990 101321</span>
            </a>
            <a 
              href="tel:07990101321"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
