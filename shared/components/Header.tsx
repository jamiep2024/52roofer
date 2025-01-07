import React from 'react';

interface NavigationLink {
  text: string;
  href: string;
}

interface HeaderProps {
  title: string;
  logoUrl: string;
  navigationLinks: NavigationLink[];
}

const Header: React.FC<HeaderProps> = ({ title, logoUrl, navigationLinks }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img src={logoUrl} alt={title} className="h-10" />
          <h1 className="ml-3 text-xl font-bold">{title}</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-blue-600">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
