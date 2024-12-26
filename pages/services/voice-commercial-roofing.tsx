import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceCommercialRoofing: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, find commercial roofing services",
      answer: "We provide comprehensive commercial roofing services including: 1) Flat roof systems, 2) Industrial roofing, 3) Commercial repairs, 4) Roof maintenance programs, 5) Emergency services. Our expert teams handle projects of any size.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much does commercial roofing cost?",
      answer: "Commercial roofing costs vary by type: 1) Flat roof systems: £15-30 per square foot, 2) Metal roofing: £20-40 per square foot, 3) Built-up roofing: £10-20 per square foot, 4) Single-ply membrane: £15-25 per square foot, 5) Green roofing: £25-45 per square foot. We provide detailed quotes after inspection.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how long does commercial roof installation take?",
      answer: "Installation times vary by project: 1) Small commercial: 1-2 weeks, 2) Medium buildings: 2-4 weeks, 3) Large facilities: 4-8 weeks, 4) Industrial complexes: 6-12 weeks, 5) Phased projects: Timeline customized. Weather and complexity affect schedules.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what commercial roofing systems do you offer?",
      answer: "We install all major commercial systems: 1) EPDM rubber roofing: 30+ years lifespan, 2) TPO membranes: Energy efficient, 3) Modified bitumen: Durable protection, 4) Metal roofing: Long-lasting performance, 5) Green roof systems: Sustainable options.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, do you maintain commercial roofs?",
      answer: "Yes, we offer comprehensive maintenance: 1) Regular inspections, 2) Preventive maintenance programs, 3) Leak detection/repair, 4) Storm damage assessment, 5) Emergency repairs. Our programs extend roof life and prevent costly issues.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const relatedServices = [
    {
      title: "Voice Roof Installation",
      path: "/services/voice-roof-installation",
      description: "Professional roof installation services through voice commands"
    },
    {
      title: "Voice Roof Maintenance",
      path: "/services/voice-roof-maintenance",
      description: "Regular maintenance services activated by voice"
    },
    {
      title: "Voice Roof Inspection",
      path: "/services/voice-roof-inspection",
      description: "Expert roof inspections through voice activation"
    },
    {
      title: "Voice Emergency Repairs",
      path: "/services/voice-roof-repairs",
      description: "24/7 emergency repair services via voice command"
    }
  ];

  const pageConfig = {
    title: "Commercial Roofing Services",
    serviceName: "Commercial Roofing",
    serviceType: "voice-commercial-roofing",
    priceRange: "£££",
    timeRequired: "P14D",
    heroTitle: "Need Commercial Roofing? Just Ask!",
    heroDescription: "Voice-activated commercial roofing services - tell your device what you need",
    mainContent: {
      introSection: {
        title: "Just Say: 'Find Commercial Roofing!'",
        description: "Access professional commercial roofing services through your smart device. From installations to maintenance, repairs to emergency services, we handle all commercial roofing needs.",
        features: [
          "• Expert commercial teams",
          "• All roofing systems",
          "• Project management",
          "• Quality guaranteed"
        ]
      },
      problemSolvingSection: {
        title: "Commercial Roofing Solutions",
        problems: [
          {
            emoji: "🏢",
            title: "'Need new commercial roof'",
            description: "Complete roofing systems",
            features: [
              "System selection",
              "Professional installation",
              "Project management",
              "Quality assurance"
            ]
          },
          {
            emoji: "🔧",
            title: "'Commercial roof repair'",
            description: "Expert repair services",
            features: [
              "Leak repairs",
              "Storm damage",
              "System restoration",
              "Emergency service"
            ]
          },
          {
            emoji: "📋",
            title: "'Maintenance program'",
            description: "Preventive maintenance",
            features: [
              "Regular inspections",
              "Preventive repairs",
              "System monitoring",
              "Life extension"
            ]
          },
          {
            emoji: "🌱",
            title: "'Green roofing options'",
            description: "Sustainable solutions",
            features: [
              "Energy efficiency",
              "Green systems",
              "Solar ready",
              "LEED certification"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Commercial Process",
        steps: [
          {
            title: "Initial Consultation",
            description: "Project assessment",
            features: [
              "Needs analysis",
              "System options",
              "Budget planning",
              "Timeline development"
            ]
          },
          {
            title: "Detailed Planning",
            description: "Project preparation",
            features: [
              "System design",
              "Material selection",
              "Schedule coordination",
              "Safety planning"
            ]
          },
          {
            title: "Professional Installation",
            description: "Expert execution",
            features: [
              "Quality materials",
              "Skilled teams",
              "Project management",
              "Progress monitoring"
            ]
          },
          {
            title: "Quality Assurance",
            description: "Ensuring excellence",
            features: [
              "System testing",
              "Final inspection",
              "Documentation",
              "Warranty provision"
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

export default VoiceCommercialRoofing;
