import React from 'react';

interface HeaderProps {
  title: string;
  logoUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ title, logoUrl }) => {
  return (
    <header className="header">
      <div className="container">
        <img src={logoUrl} alt={title} className="logo" />
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};
