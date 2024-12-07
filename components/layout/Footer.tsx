import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">52roofer.com</h3>
            <p className="text-gray-400">
              Expert roofing services across Oxfordshire, Gloucestershire, Wiltshire, and Berkshire.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/find-roofer" className="text-gray-400 hover:text-accent">
                  Find a Roofer
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-accent">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/locations/oxfordshire" className="text-gray-400 hover:text-accent">
                  Oxfordshire
                </Link>
              </li>
              <li>
                <Link href="/locations/gloucestershire" className="text-gray-400 hover:text-accent">
                  Gloucestershire
                </Link>
              </li>
              <li>
                <Link href="/locations/wiltshire" className="text-gray-400 hover:text-accent">
                  Wiltshire
                </Link>
              </li>
              <li>
                <Link href="/locations/berkshire" className="text-gray-400 hover:text-accent">
                  Berkshire
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: 0800 123 4567</li>
              <li>Email: info@52roofer.com</li>
              <li>Mon-Fri: 8:00 AM - 6:00 PM</li>
              <li>Sat: 9:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 52roofer.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
