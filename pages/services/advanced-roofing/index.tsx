import React from "react";
import ConversationalRoofingTemplate from "../../components/templates/conversational-roofing-template";

const AdvancedRoofing: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, what are advanced roofing systems?",
      answer:
        "Advanced roofing systems incorporate modern materials, smart technology, and energy-efficient solutions for superior performance and sustainability. Our systems include: 1) Smart monitoring technology, 2) Energy-efficient materials, 3) Integrated solar solutions, 4) Advanced insulation systems, 5) Sustainable roofing options.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: "Alexa, what smart features are available for roofs?",
      answer:
        "Our smart roofing features include: 1) Leak detection systems, 2) Temperature monitoring, 3) Energy usage tracking, 4) Remote control capabilities, 5) Automated maintenance alerts. These features help protect your investment and optimize performance.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: "OK Google, how energy efficient are modern roofs?",
      answer:
        "Modern roofing systems offer significant energy savings: 1) 20-30% reduction in energy costs, 2) Improved insulation performance, 3) Reflective material technology, 4) Integrated solar solutions, 5) Smart climate control features. Our systems maximize efficiency while minimizing environmental impact.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: "Siri, what are the latest roofing materials?",
      answer:
        "We offer cutting-edge roofing materials including: 1) Solar tiles with integrated power generation, 2) Cool roofing materials that reflect heat, 3) Recycled composites for sustainability, 4) Smart shingles with built-in sensors, 5) Advanced synthetic materials with extended lifespans.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: "Hey Google, how long do advanced roofs last?",
      answer:
        "Advanced roofing systems have impressive longevity: 1) 30-50 years average lifespan, 2) Smart monitoring extends life through preventive maintenance, 3) Premium materials offer enhanced durability, 4) Weather-resistant technologies improve resilience, 5) Regular system updates ensure optimal performance.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
  ];

  const pageConfig = {
    title: "Advanced Roofing Solutions",
    serviceName: "Advanced Roofing",
    serviceType: "voice-advanced-roofing",
    priceRange: "££££",
    timeRequired: "P5D",
    heroTitle: "Need Advanced Roofing? Just Ask!",
    heroDescription:
      "Voice-activated advanced roofing solutions - smart technology for modern homes",
    mainContent: {
      introSection: {
        title: "Just Say: 'I Need Advanced Roofing!'",
        description:
          "Whether you're looking for smart roofing technology, energy-efficient solutions, or modern materials, we're here to help. Simply ask your smart device to find advanced roofing services, and we'll connect you with cutting-edge roofing solutions.",
        features: [
          "• Smart monitoring systems",
          "• Energy-efficient solutions",
          "• Modern materials",
          "• Tech integration",
        ],
      },
      problemSolvingSection: {
        title: "Your Advanced Roofing Solutions",
        problems: [
          {
            emoji: "🤖",
            title: "'I want a smart roof'",
            description: "Advanced roofing systems with integrated technology",
            features: [
              "Leak detection",
              "Temperature monitoring",
              "Energy tracking",
              "Remote control",
            ],
          },
          {
            emoji: "⚡",
            title: "'Need energy-efficient roofing'",
            description: "Energy-efficient roofing installations",
            features: [
              "Improved insulation",
              "Solar integration",
              "Heat reflection",
              "Climate control",
            ],
          },
          {
            emoji: "🏗️",
            title: "'Looking for modern materials'",
            description: "Latest high-performance roofing materials",
            features: [
              "Solar tiles",
              "Cool roofing",
              "Smart shingles",
              "Recycled composites",
            ],
          },
          {
            emoji: "📱",
            title: "'Want tech-enabled roofing'",
            description: "Smart monitoring and maintenance systems",
            features: [
              "System monitoring",
              "Maintenance alerts",
              "Performance tracking",
              "Weather adaptation",
            ],
          },
        ],
      },
      processSection: {
        title: "Our Advanced Installation Process",
        steps: [
          {
            title: "Initial Assessment",
            description: "Comprehensive site evaluation",
            features: [
              "Tech requirements",
              "Energy analysis",
              "Structure inspection",
              "System planning",
            ],
          },
          {
            title: "Custom Design",
            description: "Tailored advanced solutions",
            features: [
              "Material selection",
              "Tech integration",
              "Efficiency planning",
              "System layout",
            ],
          },
          {
            title: "Smart Installation",
            description: "Professional system setup",
            features: [
              "Component installation",
              "System integration",
              "Sensor placement",
              "Network setup",
            ],
          },
          {
            title: "System Activation",
            description: "Complete setup and testing",
            features: [
              "System testing",
              "User training",
              "App setup",
              "Performance verification",
            ],
          },
        ],
      },
    },
    initialFAQs: initialFAQs,
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default AdvancedRoofing;
