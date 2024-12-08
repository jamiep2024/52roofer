import React from 'react';
import Link from 'next/link';

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose max-w-none">
        {children}
      </div>
      
      <div className="mt-12 text-center">
        <Link
          href="/find-roofer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90 transition-all"
        >
          Find a Roofer Near You
        </Link>
      </div>
    </div>
  );
};

export default ServiceLayout;
