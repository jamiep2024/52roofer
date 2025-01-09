import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Professional roofing services across the UK. Quality workmanship and customer satisfaction guaranteed.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <a className="text-gray-400 hover:text-white">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/locations">
                  <a className="text-gray-400 hover:text-white">Locations</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-white">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Phone: 0800 123 4567</li>
              <li>Email: info@52roofer.com</li>
              <li>Address: 123 Roofing St, London</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} 52Roofer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
