import React from 'react';

interface FooterProps {
  companyName: string;
  year: number;
  links: Array<{ title: string; url: string }>;
}

export const Footer: React.FC<FooterProps> = ({ companyName, year, links }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="copyright">
            &copy; {year} {companyName}
          </div>
          <nav className="footer-nav">
            {links.map((link, index) => (
              <a key={index} href={link.url}>
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
