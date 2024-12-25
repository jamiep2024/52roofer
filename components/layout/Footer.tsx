import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const FooterSection = ({
    title,
    id,
    children,
  }: {
    title: string;
    id: string;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-gray-800 md:border-none">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between py-4 md:py-0 md:block text-left focus-ring"
        aria-expanded={expandedSection === id}
      >
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 md:hidden ${
            expandedSection === id ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out md:block ${
          expandedSection === id
            ? "max-h-[1000px] pb-4"
            : "max-h-0 md:max-h-none"
        }`}
      >
        {children}
      </div>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white safe-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links Section */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="text-xl font-bold mb-4 text-accent">
                52roofer.com
              </h3>
            </Link>
            <p className="text-gray-400 text-sm md:text-base mb-6">
              Expert roofing services across Oxfordshire, Gloucestershire,
              Wiltshire, Berkshire, Hampshire, Surrey, Buckinghamshire, and West
              Sussex.
            </p>
            <FooterSection title="Quick Links" id="quick-links">
              <ul className="space-y-3">
                {[
                  { href: "/find-roofer", label: "Find a Roofer" },
                  { href: "/services", label: "Our Services" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors duration-200 block py-1 touch-target"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* Service Areas Section */}
          <div className="md:col-span-2">
            <FooterSection title="Service Areas" id="service-areas">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div>
                  <h5 className="text-sm font-medium text-gray-300 mb-2">
                    Counties
                  </h5>
                  <ul className="space-y-3">
                    {[
                      "oxfordshire",
                      "gloucestershire",
                      "wiltshire",
                      "berkshire",
                      "hampshire",
                      "surrey",
                      "buckinghamshire",
                      "west-sussex",
                    ].map((county) => (
                      <li key={county}>
                        <Link
                          href={`/county/${county}`}
                          className="text-gray-400 hover:text-accent transition-colors duration-200 block py-1 touch-target capitalize"
                        >
                          {county.replace("-", " ")}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-300 mb-2">
                    Major Cities
                  </h5>
                  <ul className="space-y-3">
                    {[
                      "oxford",
                      "gloucester",
                      "swindon",
                      "reading",
                      "guildford",
                      "aylesbury",
                      "chichester",
                      "winchester",
                    ].map((city) => (
                      <li key={city}>
                        <Link
                          href={`/location/${city}`}
                          className="text-gray-400 hover:text-accent transition-colors duration-200 block py-1 touch-target capitalize"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FooterSection>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <FooterSection title="Contact Us" id="contact">
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:52rooferteam@gmail.com"
                    className="text-gray-400 hover:text-accent transition-colors duration-200 block py-1 touch-target"
                  >
                    Email: 52rooferteam@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.grandeurheritageroofing.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors duration-200 block py-1 touch-target"
                  >
                    Grandeur Heritage Roofing
                  </a>
                </li>
              </ul>
            </FooterSection>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} 52roofer.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
