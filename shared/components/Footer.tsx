import React from 'react';

interface FooterLink {
  text: string;
  href: string;
}

interface SocialLink {
  icon: string;
  href: string;
}

interface FooterProps {
  companyName: string;
  year: number;
  links: FooterLink[];
  socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ 
  companyName, 
  year, 
  links, 
  socialLinks 
}) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{companyName}</h3>
            <p className="text-sm">
              &copy; {year} {companyName}. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-gray-400">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="hover:text-gray-400"
                >
                  <img 
                    src={link.icon} 
                    alt="" 
                    className="h-6 w-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
