import type { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            52Roofer
          </Link>
          <div className="space-x-6">
            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>
            <Link href="/locations" className="hover:text-blue-600">
              Locations
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
