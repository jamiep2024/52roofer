export interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

export interface SEOConfig {
  default: SEOData;
  locations: { [key: string]: SEOData };
  services: { [key: string]: SEOData };
}

const seoConfig: SEOConfig = {
  default: {
    title: "52 Roofer - Professional Roofing Services",
    description:
      "Expert roofing services across the UK. Quality workmanship, competitive prices, and exceptional customer service.",
    keywords:
      "roofing, roof repair, roof installation, professional roofer, UK roofing",
  },
  locations: {
    Oxfordshire: {
      title: "52 Roofer - Professional Roofing Services in Oxfordshire",
      description:
        "Expert roofing services in Oxfordshire. Local roofers providing quality repairs, installations, and maintenance.",
      keywords:
        "Oxfordshire roofer, roof repair Oxfordshire, roofing services Oxford",
    },
    Gloucestershire: {
      title: "52 Roofer - Professional Roofing Services in Gloucestershire",
      description:
        "Trusted roofing services in Gloucestershire. Expert local roofers for all your roofing needs.",
      keywords:
        "Gloucestershire roofer, roof repair Gloucestershire, roofing services Gloucester",
    },
    Wiltshire: {
      title: "52 Roofer - Professional Roofing Services in Wiltshire",
      description:
        "Professional roofing services in Wiltshire. Quality workmanship from experienced local roofers.",
      keywords:
        "Wiltshire roofer, roof repair Wiltshire, roofing services Swindon",
    },
    Berkshire: {
      title: "52 Roofer - Professional Roofing Services in Berkshire",
      description:
        "Expert roofing services in Berkshire. Local roofers delivering quality and reliability.",
      keywords:
        "Berkshire roofer, roof repair Berkshire, roofing services Reading",
    },
  },
  services: {
    "Roof Repair": {
      title: "52 Roofer - Professional Roof Repair Services",
      description:
        "Expert roof repair services. Fast response, quality repairs, and competitive prices.",
      keywords: "roof repair, leak repair, storm damage, emergency roof repair",
    },
    "Roof Installation": {
      title: "52 Roofer - Professional Roof Installation Services",
      description:
        "Quality roof installation services. Expert installation of all roof types.",
      keywords:
        "new roof, roof installation, roof replacement, roofing contractor",
    },
    "Emergency Services": {
      title: "52 Roofer - 24/7 Emergency Roofing Services",
      description:
        "Emergency roofing services available 24/7. Fast response to urgent roofing problems.",
      keywords:
        "emergency roofer, urgent roof repair, 24 hour roofing, storm damage repair",
    },
  },
};

export default seoConfig;
