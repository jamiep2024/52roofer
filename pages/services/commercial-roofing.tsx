import React from "react";
import ConversationalRoofingTemplate from "../../components/templates/conversational-roofing-template";

const CommercialRoofing: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, what commercial roofing services do you offer?",
      answer:
        "We provide comprehensive commercial roofing services including: 1) Flat roof systems (EPDM, TPO, modified bitumen), 2) Metal roofing solutions, 3) Green and sustainable roofing options, 4) Preventive maintenance programs, 5) Emergency repairs and installations.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: "Alexa, how much does commercial roofing cost?",
      answer:
        "Commercial roofing costs vary by type: 1) Flat roof systems: £8-15 per square foot, 2) Metal roofing: £10-18 per square foot, 3) Green roofing: £12-30 per square foot, 4) TPO/EPDM: £6-12 per square foot, 5) Modified bitumen: £7-14 per square foot. Final costs depend on size, complexity, and materials.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: "OK Google, how long does commercial roof installation take?",
      answer:
        "Installation timelines vary by project: 1) Small commercial buildings: 3-5 days, 2) Medium-sized facilities: 1-2 weeks, 3) Large industrial complexes: 2-4 weeks, 4) Green roof installations: 1-3 weeks, 5) Metal roofing: 1-2 weeks. Weather and complexity affect timelines.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: "Siri, what are the benefits of commercial roofing?",
      answer:
        "Commercial roofing offers multiple benefits: 1) Energy efficiency - reduce cooling costs by 20-30%, 2) Durability - 20-30 year lifespan, 3) Minimal business disruption during installation, 4) Enhanced property value, 5) Improved safety and compliance standards.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: "Hey Google, how often should commercial roofs be maintained?",
      answer:
        "Commercial roof maintenance schedule includes: 1) Bi-annual inspections (spring and fall), 2) Quarterly debris removal, 3) Monthly drainage checks, 4) Annual coating assessments, 5) Post-storm inspections as needed. Regular maintenance extends roof life by 25-50%.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
  ];

  const pageConfig = {
    title: "Commercial Roofing Services",
    serviceName: "Commercial Roofing",
    serviceType: "voice-commercial-roofing",
    priceRange: "££££",
    timeRequired: "P14D",
    heroTitle: "Need Commercial Roofing? Just Ask!",
    heroDescription:
      "Voice-activated commercial roofing services - expert solutions for your business",
    mainContent: {
      introSection: {
        title: "Just Say: 'Find Commercial Roofing!'",
        description:
          "Looking for professional commercial roofing services? Whether you need flat roof systems, metal roofing, or sustainable solutions, we connect you with expert commercial roofers. Simply ask your smart device to find commercial roofing services.",
        features: [
          "• Licensed contractors",
          "• Premium materials",
          "• Energy-efficient solutions",
          "• 24/7 support",
        ],
      },
      problemSolvingSection: {
        title: "Your Commercial Roofing Solutions",
        problems: [
          {
            emoji: "🏢",
            title: "'Need flat roof system'",
            description: "Professional flat roof installation",
            features: [
              "EPDM systems",
              "TPO roofing",
              "Modified bitumen",
              "Drainage solutions",
            ],
          },
          {
            emoji: "🔧",
            title: "'Want metal roofing'",
            description: "Durable metal roofing solutions",
            features: [
              "Standing seam",
              "Metal panels",
              "Corrugated systems",
              "Color options",
            ],
          },
          {
            emoji: "🌱",
            title: "'Looking for green roofing'",
            description: "Sustainable roofing options",
            features: [
              "Living roofs",
              "Solar ready",
              "Energy efficient",
              "LEED certified",
            ],
          },
          {
            emoji: "🔍",
            title: "'Need maintenance plan'",
            description: "Preventive maintenance programs",
            features: [
              "Regular inspections",
              "Scheduled maintenance",
              "Repair services",
              "24/7 support",
            ],
          },
        ],
      },
      processSection: {
        title: "Our Commercial Process",
        steps: [
          {
            title: "Initial Assessment",
            description: "Comprehensive evaluation",
            features: [
              "Site inspection",
              "Structural analysis",
              "Requirements review",
              "Budget planning",
            ],
          },
          {
            title: "Custom Solution",
            description: "Tailored roofing plan",
            features: [
              "Material selection",
              "System design",
              "Timeline planning",
              "Cost optimization",
            ],
          },
          {
            title: "Professional Installation",
            description: "Expert implementation",
            features: [
              "Safety protocols",
              "Quality control",
              "Progress updates",
              "Minimal disruption",
            ],
          },
          {
            title: "Ongoing Support",
            description: "Continued maintenance",
            features: [
              "Regular inspections",
              "Preventive care",
              "Emergency service",
              "Warranty support",
            ],
          },
        ],
      },
    },
    initialFAQs: initialFAQs,
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default CommercialRoofing;
