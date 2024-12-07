export interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

export interface SEOConfig {
  default: SEOData;
  locations: { [key: string]: SEOData };
  services: { [key: string]: SEOData };
  openGraph: {
    type: string;
    locale: string;
    url: string;
    site_name: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  organization: {
    name: string;
    legalName: string;
    url: string;
    logo: string;
    foundingDate: string;
    founders: {
      "@type": string;
      name: string;
    }[];
    address: {
      "@type": string;
      addressLocality: string;
      addressRegion: string;
      addressCountry: string;
      postalCode: string;
    };
    contactPoint: {
      "@type": string;
      telephone: string;
      contactType: string;
      areaServed: string[];
      availableLanguage: string[];
      contactOption: string[];
      hoursAvailable: string;
    };
  };
  reviews: {
    aggregateRating: {
      "@type": string;
      ratingValue: string;
      reviewCount: string;
      bestRating: string;
      worstRating: string;
    };
    reviews: {
      "@type": string;
      reviewRating: {
        "@type": string;
        ratingValue: string;
        bestRating: string;
      };
      author: {
        "@type": string;
        name: string;
      };
      datePublished: string;
      reviewBody: string;
    }[];
  };
}

const seoConfig: SEOConfig = {
  default: {
    title: "52Roofer | #1 Trusted Local Roofers in South England",
    description: "Find top-rated local roofers in Oxfordshire, Gloucestershire, Wiltshire & Berkshire. 24/7 emergency repairs, installations & maintenance. 100% satisfaction guaranteed.",
    keywords: "roofing, roof repair, roof installation, professional roofer, UK roofing",
  },
  locations: {
    Oxfordshire: {
      title: "Top Roofers in Oxfordshire | Emergency Repairs & Installation",
      description: "Expert local roofers in Oxfordshire. 24/7 emergency repairs, new installations & maintenance. Free quotes, guaranteed work & competitive prices.",
      keywords: "Oxfordshire roofers, roof repairs Oxford, emergency roofer Oxfordshire, local roofing contractors Oxford",
    },
    Gloucestershire: {
      title: "Best Roofers in Gloucestershire | Professional Roofing Services",
      description: "Trusted local roofers in Gloucestershire. Expert roof repairs, installations & maintenance. 24/7 emergency service, free quotes & guaranteed work.",
      keywords: "Gloucestershire roofers, roof repairs Gloucester, emergency roofer Gloucestershire, local roofing contractors Gloucester",
    },
    Wiltshire: {
      title: "Expert Roofers in Wiltshire | 24/7 Emergency Repairs",
      description: "Leading local roofers in Wiltshire. Professional roof repairs, installations & maintenance. Emergency service available, free quotes & quality guaranteed.",
      keywords: "Wiltshire roofers, roof repairs Swindon, emergency roofer Wiltshire, local roofing contractors Swindon",
    },
    Berkshire: {
      title: "Reliable Roofers in Berkshire | Quality Roofing Services",
      description: "Professional local roofers in Berkshire. Specializing in repairs, installations & maintenance. 24/7 emergency roofing, free quotes & satisfaction guaranteed.",
      keywords: "Berkshire roofers, roof repairs Reading, emergency roofer Berkshire, local roofing contractors Reading",
    },
  },
  services: {
    repairs: {
      title: "Professional Roof Repairs | Emergency Roofing Services",
      description: "Expert roof repair services across South England. 24/7 emergency repairs, leak fixing & maintenance. Quality guaranteed work by certified roofers.",
      keywords: "roof repairs, emergency roof repair, roof leak repair, local roof repairs",
    },
    installation: {
      title: "Expert Roof Installation | New Roofing Services",
      description: "Professional roof installation services. New builds, replacements & re-roofing by certified experts. Quality materials & workmanship guaranteed.",
      keywords: "new roof installation, roof replacement, professional roofing, roof installation cost",
    },
    maintenance: {
      title: "Roof Maintenance Services | Preventive Roofing Care",
      description: "Comprehensive roof maintenance services. Regular inspections, cleaning & preventive care. Extend your roof's life & prevent costly repairs.",
      keywords: "roof maintenance, roof inspection, preventive roofing, roof cleaning",
    },
    emergency: {
      title: "24/7 Emergency Roof Repairs | Immediate Response",
      description: "Round-the-clock emergency roofing services. Fast response, storm damage repair & temporary solutions. Available 24/7 across South England.",
      keywords: "emergency roof repair, 24 hour roofer, storm damage repair, urgent roof fixes",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://52roofer.com",
    site_name: "52Roofer",
    images: [
      {
        url: "https://52roofer.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "52Roofer - Professional Roofing Services",
      },
    ],
  },
  organization: {
    name: "52Roofer",
    legalName: "52Roofer Ltd",
    url: "https://52roofer.com",
    logo: "https://52roofer.com/images/logo.png",
    foundingDate: "2023",
    founders: [
      {
        "@type": "Person",
        name: "Professional Roofing Expert",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oxford",
      addressRegion: "Oxfordshire",
      addressCountry: "UK",
      postalCode: "OX1",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-0800-123-4567",
      contactType: "customer service",
      areaServed: ["GB"],
      availableLanguage: ["English"],
      contactOption: ["TollFree"],
      hoursAvailable: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    },
  },
  reviews: {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "189",
      bestRating: "5",
      worstRating: "1",
    },
    reviews: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "John Smith",
        },
        datePublished: "2023-11-15",
        reviewBody: "Excellent emergency roofing service. The team arrived within an hour and fixed our leak professionally.",
      },
      // Add more reviews here
    ],
  },
};

export default seoConfig;
