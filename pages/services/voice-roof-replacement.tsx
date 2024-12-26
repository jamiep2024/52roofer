import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceRoofReplacement: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, I need a roof replacement",
      answer: "Our roof replacement service includes: 1) Complete old roof removal, 2) Structure inspection and repair, 3) New underlayment installation, 4) Premium material options, 5) Full system warranty. We handle everything from start to finish.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much to replace a roof?",
      answer: "Roof replacement costs vary by type: 1) Asphalt shingles: £5,000-£12,000, 2) Slate roofing: £12,000-£25,000, 3) Clay tiles: £10,000-£20,000, 4) Metal roofing: £8,000-£18,000, 5) Concrete tiles: £7,000-£15,000. Includes removal and installation.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how long does roof replacement take?",
      answer: "Replacement timelines vary: 1) Average home: 2-4 days, 2) Large properties: 4-6 days, 3) Complex designs: 5-7 days, 4) Premium materials: 6-8 days, 5) Weather factors: May add 1-2 days. We work efficiently while ensuring quality.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, when should I replace my roof?",
      answer: "Consider replacement when: 1) Age: 20+ years old, 2) Damage: Multiple leaks or repairs needed, 3) Appearance: Visible wear or sagging, 4) Energy bills: Increasing costs, 5) Storm damage: Extensive repairs required. We provide free assessments.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, what's included in roof replacement?",
      answer: "Complete replacement includes: 1) Old roof removal and disposal, 2) Deck inspection and repair, 3) New underlayment and flashing, 4) New material installation, 5) Ventilation system upgrade. Plus full cleanup and warranty coverage.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "Complete Roof Replacement Services",
    serviceName: "Roof Replacement",
    serviceType: "voice-roof-replacement",
    priceRange: "££££",
    timeRequired: "P5D",
    heroTitle: "Need a New Roof? Just Ask!",
    heroDescription: "Voice-activated roof replacement services - expert solutions for your home",
    mainContent: {
      introSection: {
        title: "Just Say: 'Replace My Roof!'",
        description: "Ready for a roof replacement? Simply ask your smart device about roof replacement services, and we'll guide you through the entire process with expert care.",
        features: [
          "• Complete removal service",
          "• Quality materials",
          "• Expert installation",
          "• Full warranties"
        ]
      },
      problemSolvingSection: {
        title: "Replacement Solutions",
        problems: [
          {
            emoji: "🏠",
            title: "'Old roof needs replacing'",
            description: "Complete replacement",
            features: [
              "Age assessment",
              "System upgrade",
              "Modern materials",
              "Full warranty"
            ]
          },
          {
            emoji: "💨",
            title: "'Storm damaged roof'",
            description: "Emergency replacement",
            features: [
              "Quick response",
              "Insurance help",
              "Storm protection",
              "Quality assurance"
            ]
          },
          {
            emoji: "🌡️",
            title: "'Energy efficient upgrade'",
            description: "Efficiency improvement",
            features: [
              "Modern insulation",
              "Ventilation upgrade",
              "Energy savings",
              "Green options"
            ]
          },
          {
            emoji: "🏗️",
            title: "'Full system upgrade'",
            description: "Complete renovation",
            features: [
              "Structure check",
              "System redesign",
              "Modern materials",
              "Better protection"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Replacement Process",
        steps: [
          {
            title: "Initial Assessment",
            description: "Complete evaluation",
            features: [
              "Current condition",
              "Structure check",
              "Need analysis",
              "Option discussion"
            ]
          },
          {
            title: "Detailed Planning",
            description: "Replacement strategy",
            features: [
              "Material selection",
              "Timeline planning",
              "Protection setup",
              "Team coordination"
            ]
          },
          {
            title: "Professional Removal",
            description: "Old roof removal",
            features: [
              "Safe removal",
              "Debris management",
              "Structure inspection",
              "Area protection"
            ]
          },
          {
            title: "Expert Installation",
            description: "New roof fitting",
            features: [
              "Quality materials",
              "Proper technique",
              "Detail attention",
              "Final inspection"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default VoiceRoofReplacement;
