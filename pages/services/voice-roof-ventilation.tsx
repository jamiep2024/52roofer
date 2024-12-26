import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceRoofVentilation: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, find roof ventilation services",
      answer: "We provide complete ventilation services including: 1) Ventilation assessment, 2) System installation, 3) Upgrades and improvements, 4) Problem solving, 5) Maintenance service. Our experts ensure proper airflow for your roof's longevity.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much does roof ventilation cost?",
      answer: "Ventilation costs vary by type: 1) Ridge vents: £400-£800, 2) Soffit vents: £300-£600, 3) Roof fans: £500-£1,000, 4) Complete system: £1,000-£2,500, 5) Repairs: £200-£500. Includes professional installation and materials.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how long does ventilation installation take?",
      answer: "Installation times vary by project: 1) Basic vents: 2-4 hours, 2) Complete system: 1-2 days, 3) Complex installations: 2-3 days, 4) Repairs: 1-3 hours, 5) Upgrades: 1 day. Weather conditions may affect timeline.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what ventilation systems do you install?",
      answer: "We install all ventilation types: 1) Ridge vents: Continuous roof-line ventilation, 2) Soffit vents: Under-eave airflow, 3) Gable vents: End-wall options, 4) Power fans: Active ventilation, 5) Combination systems: Complete solutions.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, why do I need roof ventilation?",
      answer: "Roof ventilation provides key benefits: 1) Prevents moisture damage, 2) Reduces energy costs, 3) Extends roof life, 4) Improves indoor comfort, 5) Prevents ice dams. Proper ventilation is crucial for roof health.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const relatedServices = [
    {
      title: "Voice Roof Inspection",
      path: "/services/voice-roof-inspection",
      description: "Professional ventilation assessments and inspections"
    },
    {
      title: "Voice Roof Maintenance",
      path: "/services/voice-roof-maintenance",
      description: "Regular maintenance including ventilation care"
    },
    {
      title: "Voice Skylight Installation",
      path: "/services/voice-skylight-installation",
      description: "Skylight solutions with proper ventilation"
    },
    {
      title: "Voice Roof Installation",
      path: "/services/voice-roof-installation",
      description: "Complete roof systems with integrated ventilation"
    }
  ];

  const pageConfig = {
    title: "Professional Roof Ventilation",
    serviceName: "Roof Ventilation",
    serviceType: "voice-roof-ventilation",
    priceRange: "££",
    timeRequired: "P2D",
    heroTitle: "Need Roof Ventilation? Just Ask!",
    heroDescription: "Voice-activated roof ventilation services - tell your device what you need",
    mainContent: {
      introSection: {
        title: "Just Say: 'Install Roof Ventilation!'",
        description: "Access professional roof ventilation services through your smart device. From system design to installation, we ensure proper airflow for your roof's health and efficiency.",
        features: [
          "• Expert assessment",
          "• Quality systems",
          "• Professional installation",
          "• Energy efficiency"
        ]
      },
      problemSolvingSection: {
        title: "Ventilation Solutions",
        problems: [
          {
            emoji: "🌡️",
            title: "'Hot attic problems'",
            description: "Temperature control",
            features: [
              "Heat assessment",
              "Airflow design",
              "System selection",
              "Efficient cooling"
            ]
          },
          {
            emoji: "💧",
            title: "'Moisture issues'",
            description: "Moisture control",
            features: [
              "Humidity check",
              "Ventilation plan",
              "Moisture removal",
              "Problem solving"
            ]
          },
          {
            emoji: "❄️",
            title: "'Ice dam prevention'",
            description: "Winter protection",
            features: [
              "Heat flow",
              "Air balance",
              "Ice prevention",
              "Energy saving"
            ]
          },
          {
            emoji: "⚡",
            title: "'Energy efficiency'",
            description: "Cost reduction",
            features: [
              "System analysis",
              "Efficiency boost",
              "Cost savings",
              "Performance check"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Ventilation Process",
        steps: [
          {
            title: "Initial Assessment",
            description: "System planning",
            features: [
              "Airflow check",
              "Need analysis",
              "System design",
              "Quote provision"
            ]
          },
          {
            title: "Solution Design",
            description: "Perfect system",
            features: [
              "Vent selection",
              "Layout planning",
              "Balance calculation",
              "Efficiency focus"
            ]
          },
          {
            title: "Professional Installation",
            description: "Expert fitting",
            features: [
              "Proper setup",
              "Quality materials",
              "Careful installation",
              "System testing"
            ]
          },
          {
            title: "Performance Check",
            description: "System verification",
            features: [
              "Airflow testing",
              "Balance check",
              "Operation guide",
              "Final inspection"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs,
    relatedServices: relatedServices
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default VoiceRoofVentilation;
