import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const handleAboutClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else if (router.pathname !== '/') {
      router.push('/#about');
    }
  };

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
              <Link href="/locations" className="text-gray-700 hover:text-accent px-3 py-2">
                Locations
              </Link>
              <button
                onClick={handleAboutClick}
                className="text-gray-700 hover:text-accent px-3 py-2"
              >
                About
              </button>
              <Link href="/contact" className="text-gray-700 hover:text-accent px-3 py-2">
                Contact
              </Link>
              <Link
                href="/find-roofer"
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90 transition-all"
              >
                Find a Roofer
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
