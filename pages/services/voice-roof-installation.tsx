import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceRoofInstallation: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, I need a new roof installed",
      answer: "We provide comprehensive roof installation services including: 1) Full roof replacements, 2) New construction installations, 3) Energy-efficient roof systems, 4) Custom design solutions, 5) Premium material options. Our certified installers ensure proper installation following all building codes and manufacturer specifications.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much does a new roof cost?",
      answer: "New roof costs vary by type: 1) Asphalt shingles: £5,000-£8,000, 2) Slate roofing: £9,000-£18,000, 3) Clay tiles: £8,000-£15,000, 4) Metal roofing: £7,000-£14,000, 5) Flat roofs: £4,000-£7,000. Factors include size, materials, complexity, and removal of old roof. We provide detailed quotes after inspection.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how long does roof installation take?",
      answer: "Installation times vary by project: 1) Standard residential roof: 2-4 days, 2) Complex designs: 4-7 days, 3) Large properties: 5-10 days, 4) New construction: 3-5 days, 5) Premium materials like slate: 6-10 days. Weather conditions and property access can affect timelines.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what roofing materials can you install?",
      answer: "We install all major roofing materials: 1) Natural slate: Premium durability, 100+ years lifespan, 2) Clay/concrete tiles: Traditional look, 60+ years, 3) Metal roofing: Modern efficiency, 50+ years, 4) Asphalt shingles: Cost-effective, 20-30 years, 5) Green roofing: Eco-friendly options. We'll help you choose based on budget and preferences.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, what warranty comes with new roof installation?",
      answer: "Our installations include comprehensive warranties: 1) Workmanship warranty: 10-25 years, 2) Materials warranty: 20-50 years (manufacturer), 3) Structural warranty: 25+ years, 4) Weather resistance guarantee: 10-15 years. All warranties are fully transferable and documented for your peace of mind.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "Professional Roof Installation",
    serviceName: "Roof Installation",
    serviceType: "voice-roof-installation",
    priceRange: "£££",
    timeRequired: "P5D",
    heroTitle: "Need a New Roof? Just Ask!",
    heroDescription: "Voice-activated roof installation services - tell your device what you need",
    mainContent: {
      introSection: {
        title: "Just Say: 'Install My New Roof!'",
        description: "Whether you need a complete roof replacement or new construction installation, we're here to help. Simply ask your smart device to find professional roof installation services, and we'll guide you through the entire process.",
        features: [
          "• Expert installation teams",
          "• Premium material options",
          "• Comprehensive warranties",
          "• Project management"
        ]
      },
      problemSolvingSection: {
        title: "Your Roofing Solutions",
        problems: [
          {
            emoji: "🏠",
            title: "'I need a complete new roof'",
            description: "Full roof replacement service",
            features: [
              "Old roof removal",
              "Structure inspection",
              "Quality materials",
              "Expert installation"
            ]
          },
          {
            emoji: "🏗️",
            title: "'New construction roofing'",
            description: "New build roof installation",
            features: [
              "Custom design",
              "Material selection",
              "Code compliance",
              "Quality assurance"
            ]
          },
          {
            emoji: "🌱",
            title: "'Want eco-friendly roofing'",
            description: "Sustainable roofing solutions",
            features: [
              "Energy efficiency",
              "Sustainable materials",
              "Solar compatibility",
              "Green options"
            ]
          },
          {
            emoji: "💎",
            title: "'Looking for premium materials'",
            description: "High-end roofing options",
            features: [
              "Slate roofing",
              "Designer tiles",
              "Metal systems",
              "Custom solutions"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Installation Process",
        steps: [
          {
            title: "Initial Consultation",
            description: "Understanding your needs",
            features: [
              "Site assessment",
              "Material options",
              "Design consultation",
              "Budget planning"
            ]
          },
          {
            title: "Detailed Planning",
            description: "Project preparation",
            features: [
              "Material ordering",
              "Schedule coordination",
              "Permit handling",
              "Safety planning"
            ]
          },
          {
            title: "Professional Installation",
            description: "Expert installation work",
            features: [
              "Old roof removal",
              "Structure preparation",
              "New roof installation",
              "Site management"
            ]
          },
          {
            title: "Quality Assurance",
            description: "Ensuring perfect results",
            features: [
              "Final inspection",
              "Warranty provision",
              "Cleanup completion",
              "Client walkthrough"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default VoiceRoofInstallation;
