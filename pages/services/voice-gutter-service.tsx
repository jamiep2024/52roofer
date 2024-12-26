import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceGutterService: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, find gutter cleaning services",
      answer: "We provide complete gutter services including: 1) Professional cleaning, 2) Repairs and maintenance, 3) Gutter installation, 4) Downpipe services, 5) Leaf guard fitting. Our experts ensure your gutters work perfectly.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much does gutter service cost?",
      answer: "Gutter service costs vary by type: 1) Standard cleaning: £80-£150, 2) Repairs: £100-£300, 3) New installation: £500-£1,000, 4) Leaf guards: £200-£500, 5) Complete system: £800-£1,500. Includes professional service and materials.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how often should gutters be cleaned?",
      answer: "Recommended cleaning schedule: 1) Standard homes: Twice yearly, 2) Near trees: Every 3-4 months, 3) After storms: As needed, 4) Spring cleaning: March-April, 5) Autumn cleaning: October-November. Regular maintenance prevents costly issues.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what gutter services do you offer?",
      answer: "Our gutter services include: 1) Professional cleaning and clearing, 2) Repair and maintenance, 3) New gutter installation, 4) Downpipe services, 5) Leaf protection systems. We handle all aspects of gutter care.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, do you install gutter guards?",
      answer: "Yes, we offer complete guard solutions: 1) Mesh guards: Debris blocking, 2) Solid covers: Total protection, 3) Foam inserts: Easy maintenance, 4) Brush guards: Simple solutions, 5) Custom systems: Specific needs. All professionally installed.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const relatedServices = [
    {
      title: "Voice Roof Inspection",
      path: "/services/voice-roof-inspection",
      description: "Complete roof and gutter inspections"
    },
    {
      title: "Voice Roof Maintenance",
      path: "/services/voice-roof-maintenance",
      description: "Regular maintenance including gutter care"
    },
    {
      title: "Voice Roof Repairs",
      path: "/services/voice-roof-repairs",
      description: "Expert repairs for roof and gutter issues"
    },
    {
      title: "Voice Roof Installation",
      path: "/services/voice-roof-installation",
      description: "New roof systems with integrated guttering"
    }
  ];

  const pageConfig = {
    title: "Professional Gutter Services",
    serviceName: "Gutter Services",
    serviceType: "voice-gutter-service",
    priceRange: "££",
    timeRequired: "P1D",
    heroTitle: "Need Gutter Service? Just Ask!",
    heroDescription: "Voice-activated gutter services - tell your device what you need",
    mainContent: {
      introSection: {
        title: "Just Say: 'Clean My Gutters!'",
        description: "Access professional gutter services through your smart device. From cleaning to repairs, installation to maintenance, we keep your gutters working perfectly.",
        features: [
          "• Professional service",
          "• Complete solutions",
          "• Quality materials",
          "• Expert teams"
        ]
      },
      problemSolvingSection: {
        title: "Gutter Solutions",
        problems: [
          {
            emoji: "🧹",
            title: "'Need gutters cleaned'",
            description: "Professional cleaning",
            features: [
              "Complete clearing",
              "Downpipe cleaning",
              "System flushing",
              "Debris removal"
            ]
          },
          {
            emoji: "🔧",
            title: "'Gutter repairs needed'",
            description: "Expert repairs",
            features: [
              "Leak fixing",
              "Joint repairs",
              "Section replacement",
              "Seal renewal"
            ]
          },
          {
            emoji: "🏠",
            title: "'New gutters needed'",
            description: "Installation service",
            features: [
              "System design",
              "Quality materials",
              "Expert fitting",
              "Full warranty"
            ]
          },
          {
            emoji: "🍂",
            title: "'Leaf protection'",
            description: "Guard solutions",
            features: [
              "Guard options",
              "Professional fitting",
              "Debris blocking",
              "Easy maintenance"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Service Process",
        steps: [
          {
            title: "Initial Assessment",
            description: "System check",
            features: [
              "Visual inspection",
              "Problem spotting",
              "Solution planning",
              "Quote provision"
            ]
          },
          {
            title: "Service Planning",
            description: "Work preparation",
            features: [
              "Schedule setting",
              "Material prep",
              "Team assignment",
              "Safety planning"
            ]
          },
          {
            title: "Professional Service",
            description: "Expert work",
            features: [
              "Thorough service",
              "Quality materials",
              "Careful handling",
              "Site cleanliness"
            ]
          },
          {
            title: "Final Check",
            description: "Quality assurance",
            features: [
              "System testing",
              "Flow checking",
              "Clean-up completion",
              "Service guarantee"
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

export default VoiceGutterService;
