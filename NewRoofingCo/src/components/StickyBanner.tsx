import React from 'react';
import { FaPhone } from 'react-icons/fa';

export default function StickyBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base font-medium">
              Professional Roofing Services - Available 24/7 for Emergencies
            </span>
          </div>
          <a 
            href="tel:07990101321"
            className="hidden md:flex items-center gap-2 hover:text-blue-200 transition-colors"
          >
            <FaPhone className="h-4 w-4" />
            <span className="font-medium">07990 101321</span>
          </a>
        </div>
      </div>
    </div>
  );
}
