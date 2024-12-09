import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-accent">
              52roofer.com
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-accent px-3 py-2">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-accent px-3 py-2">
                Services
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-accent px-3 py-2">
                Blog
              </Link>
              <Link href="/resources/roofing-faq" className="text-gray-700 hover:text-accent px-3 py-2">
                FAQ
              </Link>
              <Link href="/locations" className="text-gray-700 hover:text-accent px-3 py-2">
                Locations
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-accent px-3 py-2">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-accent px-3 py-2">
                Contact
              </Link>
              <Link 
                href="/find-roofer" 
                className="bg-accent text-white hover:bg-accent-dark px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out"
              >
                Find a Roofer
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-accent focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
