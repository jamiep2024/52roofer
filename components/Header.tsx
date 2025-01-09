import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-gray-800">52Roofer</a>
        </Link>
        <nav className="space-x-6">
          <Link href="/services">
            <a className="text-gray-600 hover:text-gray-900">Services</a>
          </Link>
          <Link href="/locations">
            <a className="text-gray-600 hover:text-gray-900">Locations</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-600 hover:text-gray-900">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
