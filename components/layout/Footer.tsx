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
              Expert roofing services across Oxfordshire, Gloucestershire, Wiltshire, Berkshire, Hampshire, Surrey, Buckinghamshire, and West Sussex.
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
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <h5 className="text-sm font-medium text-gray-300 mb-2">Counties</h5>
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
                  <li>
                    <Link href="/locations/hampshire" className="text-gray-400 hover:text-accent">
                      Hampshire
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/surrey" className="text-gray-400 hover:text-accent">
                      Surrey
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/buckinghamshire" className="text-gray-400 hover:text-accent">
                      Buckinghamshire
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/west-sussex" className="text-gray-400 hover:text-accent">
                      West Sussex
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium text-gray-300 mb-2">Major Cities</h5>
                <ul className="space-y-2">
                  <li>
                    <Link href="/locations/oxford" className="text-gray-400 hover:text-accent">
                      Oxford
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/gloucester" className="text-gray-400 hover:text-accent">
                      Gloucester
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/swindon" className="text-gray-400 hover:text-accent">
                      Swindon
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/reading" className="text-gray-400 hover:text-accent">
                      Reading
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/guildford" className="text-gray-400 hover:text-accent">
                      Guildford
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/aylesbury" className="text-gray-400 hover:text-accent">
                      Aylesbury
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/chichester" className="text-gray-400 hover:text-accent">
                      Chichester
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/winchester" className="text-gray-400 hover:text-accent">
                      Winchester
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:52rooferteam@gmail.com" className="text-gray-400 hover:text-accent">
                  Email: 52rooferteam@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.grandeurheritageroofing.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-accent"
                >
                  Grandeur Heritage Roofing
                </a>
              </li>
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
