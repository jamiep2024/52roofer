import { Business } from "../types/business";
import { serviceAreas } from "./serviceAreas";

export const businesses: Business[] = [
  // Oxford Businesses
  {
    id: "ghg-ox-001",
    name: "Grandeur Heritage Group",
    description:
      "Premier roofing specialists with over 20 years of experience. Experts in traditional and modern roofing solutions.",
    rating: 5.0,
    reviewCount: 127,
    location: `${serviceAreas.oxfordshire.name}`,
    serviceAreas: serviceAreas.oxfordshire.postcodes,
    phone: "07990101321",
    email: "grandeurheritagegroup@gmail.com",
    website: "https://www.grandeurheritageroofing.com",
    services: [
      "Roof Repairs",
      "New Roof Installation",
      "Heritage Roofing",
      "Emergency Repairs",
      "Guttering",
      "Chimney Work",
    ],
    featured: true,
    badges: [
      "Verified",
      "Premium Partner",
      "20+ Years Experience",
      "Quick Response",
    ],
    availability: "Available 24/7 for emergencies",
    responseTime: "Usually responds within 1 hour",
  },
  {
    id: "og-ox-001",
    name: "Oxford Green Roofs",
    description:
      "Local roofing services specializing in eco-friendly solutions.",
    rating: 4.0,
    reviewCount: 29,
    location: `${serviceAreas.oxfordshire.name}`,
    serviceAreas: serviceAreas.oxfordshire.postcodes,
    phone: "07990101321",
    email: "",
    website: "",
    services: ["Green Roofs", "Eco-Friendly Solutions", "Repairs"],
    badges: ["Verified"],
    availability: "Mon-Fri, 9am-5pm",
  },
  {
    id: "br-ox-002",
    name: "Banbury Roofing",
    description: "Professional roofing and paving services.",
    rating: 3.9,
    reviewCount: 26,
    location: `${serviceAreas.oxfordshire.name}`,
    serviceAreas: serviceAreas.oxfordshire.postcodes,
    phone: "07990101321",
    email: "",
    website: "",
    services: ["Repairs", "Paving", "Maintenance"],
    badges: ["Verified"],
    availability: "Mon-Fri, 8am-5pm",
  },
  {
    id: "a1-ox-003",
    name: "A1 Roofing Oxford",
    description: "Trusted local roofing contractor.",
    rating: 3.8,
    reviewCount: 23,
    location: `${serviceAreas.oxfordshire.name}`,
    serviceAreas: serviceAreas.oxfordshire.postcodes,
    phone: "07990101321",
    email: "",
    website: "",
    services: ["Repairs", "Maintenance", "Emergency Services"],
    badges: ["Verified"],
    availability: "Mon-Fri, 9am-5pm",
  },

  // Cheltenham Businesses
  {
    id: "ghg-ch-001",
    name: "Grandeur Heritage Group Cheltenham",
    description:
      "Premier roofing specialists with over 20 years of experience. Experts in traditional and modern roofing solutions.",
    rating: 5.0,
    reviewCount: 98,
    location: `${serviceAreas.gloucestershire.name}`,
    serviceAreas: serviceAreas.gloucestershire.postcodes,
    phone: "07990101321",
    email: "cheltenham@grandeurheritageroofing.com",
    website: "https://www.grandeurheritageroofing.com/cheltenham",
    services: [
      "Roof Repairs",
      "New Roof Installation",
      "Heritage Roofing",
      "Emergency Repairs",
      "Guttering",
      "Chimney Work",
    ],
    featured: true,
    badges: [
      "Verified",
      "Premium Partner",
      "20+ Years Experience",
      "Quick Response",
    ],
    availability: "Available 24/7 for emergencies",
    responseTime: "Usually responds within 1 hour",
  },
  {
    id: "cr-ch-001",
    name: "Cheltenham Roofing Specialists",
    description:
      "Expert local roofing services for Cheltenham and surrounding areas.",
    rating: 4.2,
    reviewCount: 45,
    location: `${serviceAreas.gloucestershire.name}`,
    serviceAreas: serviceAreas.gloucestershire.postcodes,
    phone: "07990101321",
    email: "",
    website: "",
    services: ["Repairs", "Maintenance", "New Roofs"],
    badges: ["Verified"],
    availability: "Mon-Fri, 8am-6pm",
  },
  {
    id: "pr-ch-002",
    name: "Prestbury Roofers",
    description: "Quality roofing services in Cheltenham and Prestbury area.",
    rating: 4.0,
    reviewCount: 32,
    location: `${serviceAreas.gloucestershire.name}`,
    serviceAreas: serviceAreas.gloucestershire.postcodes,
    phone: "07990101321",
    email: "",
    website: "",
    services: ["Residential Roofing", "Commercial Roofing", "Repairs"],
    badges: ["Verified"],
    availability: "Mon-Fri, 8am-5pm",
  },
  {
    id: "hr-ch-003",
    name: "Heritage Roofing Cheltenham",
    description: "Specialists in heritage and period property roofing.",
    rating: 4.1,
    reviewCount: 28,
    location: `${serviceAreas.gloucestershire.name}`,
    serviceAreas: serviceAreas.gloucestershire.postcodes,
    phone: "07990101321",
    email: "",
    website: "",
    services: ["Heritage Roofing", "Period Properties", "Restoration"],
    badges: ["Verified"],
    availability: "Mon-Fri, 9am-5pm",
  },

  // Swindon Businesses
  {
    id: "ghg-sw-001",
    name: "Grandeur Heritage Group Swindon",
    description:
      "Premier roofing specialists with over 20 years of experience. Experts in traditional and modern roofing solutions.",
    rating: 5.0,
    reviewCount: 86,
    location: `${serviceAreas.wiltshire.name}`,
    serviceAreas: serviceAreas.wiltshire.postcodes,
    phone: "07990101321",
    email: "swindon@grandeurheritageroofing.com",
    website: "https://www.grandeurheritageroofing.com/swindon",
    services: [
      "Roof Repairs",
      "New Roof Installation",
      "Heritage Roofing",
      "Emergency Repairs",
      "Guttering",
      "Chimney Work",
    ],
    featured: true,
    badges: [
      "Verified",
      "Premium Partner",
      "20+ Years Experience",
      "Quick Response",
    ],
    availability: "Available 24/7 for emergencies",
    responseTime: "Usually responds within 1 hour",
  },
  {
    id: "sr-sw-001",
    name: "Swindon Roofing Pro",
    description:
      "Professional roofing services across Swindon and surrounding areas.",
    rating: 4.1,
    reviewCount: 38,
    location: `${serviceAreas.wiltshire.name}`,
    serviceAreas: serviceAreas.wiltshire.postcodes,
    phone: "07990101321",
    email: "",
    website: "",
    services: ["Repairs", "Installation", "Maintenance"],
    badges: ["Verified"],
    availability: "Mon-Sat, 8am-5pm",
  },
  {
    id: "wr-sw-002",
    name: "Wiltshire Roof Care",
    description: "Comprehensive roofing solutions for Swindon and Wiltshire.",
    rating: 4.0,
    reviewCount: 31,
    location: `${serviceAreas.wiltshire.name}`,
    serviceAreas: serviceAreas.wiltshire.postcodes,
    phone: "07990101321",
    email: "",
    website: "",
    services: ["Residential Roofing", "Commercial Roofing", "Maintenance"],
    badges: ["Verified"],
    availability: "Mon-Fri, 8:30am-5:30pm",
  },
  {
    id: "ar-sw-003",
    name: "Advanced Roofing Swindon",
    description: "Modern roofing solutions with traditional values.",
    rating: 3.9,
    reviewCount: 25,
    location: `${serviceAreas.wiltshire.name}`,
    serviceAreas: serviceAreas.wiltshire.postcodes,
    phone: "07990101321",
    email: "",
    website: "",
    services: ["New Roofs", "Repairs", "Flat Roofing"],
    badges: ["Verified"],
    availability: "Mon-Fri, 9am-5pm",
  },

  // Reading Businesses
  {
    id: "ghg-rd-001",
    name: "Grandeur Heritage Group Reading",
    description:
      "Premier roofing specialists with over 20 years of experience. Experts in traditional and modern roofing solutions.",
    rating: 5.0,
    reviewCount: 92,
    location: `${serviceAreas.berkshire.name}`,
    serviceAreas: serviceAreas.berkshire.postcodes,
    phone: "07990101321",
    email: "reading@grandeurheritageroofing.com",
    website: "https://www.grandeurheritageroofing.com/reading",
    services: [
      "Roof Repairs",
      "New Roof Installation",
      "Heritage Roofing",
      "Emergency Repairs",
      "Guttering",
      "Chimney Work",
    ],
    featured: true,
    badges: [
      "Verified",
      "Premium Partner",
      "20+ Years Experience",
      "Quick Response",
    ],
    availability: "Available 24/7 for emergencies",
    responseTime: "Usually responds within 1 hour",
  },
  {
    id: "rr-rd-001",
    name: "Reading Roofing Solutions",
    description: "Comprehensive roofing services for Reading and nearby areas.",
    rating: 4.3,
    reviewCount: 41,
    location: `${serviceAreas.berkshire.name}`,
    serviceAreas: serviceAreas.berkshire.postcodes,
    phone: "07990101321",
    email: "",
    website: "",
    services: ["Repairs", "Installation", "Maintenance"],
    badges: ["Verified"],
    availability: "Mon-Fri, 8:30am-5:30pm",
  },
  {
    id: "br-rd-002",
    name: "Berkshire Roofing Experts",
    description: "Local experts in all aspects of roofing.",
    rating: 4.1,
    reviewCount: 35,
    location: `${serviceAreas.berkshire.name}`,
    serviceAreas: serviceAreas.berkshire.postcodes,
    phone: "07990101321",
    email: "",
    website: "",
    services: ["Residential", "Commercial", "Emergency Repairs"],
    badges: ["Verified"],
    availability: "Mon-Fri, 8am-6pm",
  },
  {
    id: "tr-rd-003",
    name: "Thames Roofing",
    description: "Quality roofing services along the Thames Valley.",
    rating: 4.0,
    reviewCount: 29,
    location: `${serviceAreas.berkshire.name}`,
    serviceAreas: serviceAreas.berkshire.postcodes,
    phone: "07990101321",
    email: "",
    website: "",
    services: ["New Roofs", "Repairs", "Maintenance"],
    badges: ["Verified"],
    availability: "Mon-Fri, 9am-5pm",
  },

  // Hampshire Branch
  {
    id: "ghg-ha-001",
    name: "Grandeur Heritage Group Hampshire",
    description:
      "Premier roofing specialists with over 20 years of experience. Experts in traditional and modern roofing solutions.",
    rating: 5.0,
    reviewCount: 127,
    location: `${serviceAreas.hampshire.name}`,
    serviceAreas: serviceAreas.hampshire.postcodes,
    phone: "07990101321",
    email: "grandeurheritagegroup@gmail.com",
    website: "https://www.grandeurheritageroofing.com",
    services: [
      "Roof Repairs",
      "New Roof Installation",
      "Heritage Roofing",
      "Emergency Repairs",
      "Guttering",
      "Chimney Work",
    ],
    featured: true,
    badges: [
      "Verified",
      "Premium Partner",
      "20+ Years Experience",
      "Quick Response",
    ],
    availability: "Available 24/7 for emergencies",
    responseTime: "Usually responds within 1 hour",
  },
  // Surrey Branch
  {
    id: "ghg-sr-001",
    name: "Grandeur Heritage Group Surrey",
    description:
      "Premier roofing specialists with over 20 years of experience. Experts in traditional and modern roofing solutions.",
    rating: 5.0,
    reviewCount: 127,
    location: `${serviceAreas.surrey.name}`,
    serviceAreas: serviceAreas.surrey.postcodes,
    phone: "07990101321",
    email: "grandeurheritagegroup@gmail.com",
    website: "https://www.grandeurheritageroofing.com",
    services: [
      "Roof Repairs",
      "New Roof Installation",
      "Heritage Roofing",
      "Emergency Repairs",
      "Guttering",
      "Chimney Work",
    ],
    featured: true,
    badges: [
      "Verified",
      "Premium Partner",
      "20+ Years Experience",
      "Quick Response",
    ],
    availability: "Available 24/7 for emergencies",
    responseTime: "Usually responds within 1 hour",
  },
  // Buckinghamshire Branch
  {
    id: "ghg-bk-001",
    name: "Grandeur Heritage Group Buckinghamshire",
    description:
      "Premier roofing specialists with over 20 years of experience. Experts in traditional and modern roofing solutions.",
    rating: 5.0,
    reviewCount: 127,
    location: `${serviceAreas.buckinghamshire.name}`,
    serviceAreas: serviceAreas.buckinghamshire.postcodes,
    phone: "07990101321",
    email: "grandeurheritagegroup@gmail.com",
    website: "https://www.grandeurheritageroofing.com",
    services: [
      "Roof Repairs",
      "New Roof Installation",
      "Heritage Roofing",
      "Emergency Repairs",
      "Guttering",
      "Chimney Work",
    ],
    featured: true,
    badges: [
      "Verified",
      "Premium Partner",
      "20+ Years Experience",
      "Quick Response",
    ],
    availability: "Available 24/7 for emergencies",
    responseTime: "Usually responds within 1 hour",
  },
  // West Sussex Branch
  {
    id: "ghg-ws-001",
    name: "Grandeur Heritage Group West Sussex",
    description:
      "Premier roofing specialists with over 20 years of experience. Experts in traditional and modern roofing solutions.",
    rating: 5.0,
    reviewCount: 127,
    location: `${serviceAreas.westSussex.name}`,
    serviceAreas: serviceAreas.westSussex.postcodes,
    phone: "07990101321",
    email: "grandeurheritagegroup@gmail.com",
    website: "https://www.grandeurheritageroofing.com",
    services: [
      "Roof Repairs",
      "New Roof Installation",
      "Heritage Roofing",
      "Emergency Repairs",
      "Guttering",
      "Chimney Work",
    ],
    featured: true,
    badges: [
      "Verified",
      "Premium Partner",
      "20+ Years Experience",
      "Quick Response",
    ],
    availability: "Available 24/7 for emergencies",
    responseTime: "Usually responds within 1 hour",
  },
];