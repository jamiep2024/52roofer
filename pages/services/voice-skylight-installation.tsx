import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceSkylightInstallation: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, find skylight installation services",
      answer: "We provide complete skylight services including: 1) New skylight installation, 2) Skylight replacement, 3) Custom designs, 4) Energy-efficient options, 5) Professional fitting. Our experts ensure perfect installation and weatherproofing.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much does skylight installation cost?",
      answer: "Skylight costs vary by type: 1) Fixed skylights: £800-£1,500, 2) Vented skylights: £1,200-£2,500, 3) Solar-powered: £1,500-£3,000, 4) Custom designs: £2,000-£4,000, 5) Installation: £500-£1,000. Includes professional fitting and materials.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how long does skylight installation take?",
      answer: "Installation times vary by project: 1) Standard skylight: 1 day, 2) Multiple units: 2-3 days, 3) Custom designs: 2-4 days, 4) Replacement: 1-2 days, 5) Complex installations: 3-5 days. Weather conditions may affect timeline.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what types of skylights do you install?",
      answer: "We install all skylight types: 1) Fixed skylights: Basic natural light, 2) Vented skylights: Opening for ventilation, 3) Solar-powered: Remote controlled, 4) Tubular: For smaller spaces, 5) Custom designs: Unique solutions. All with manufacturer warranties.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, are skylights energy efficient?",
      answer: "Modern skylights offer energy benefits: 1) Natural lighting reduces electricity use, 2) Solar heat gain in winter, 3) Ventilation options save on cooling, 4) Energy Star rated options available, 5) UV protection included. We help choose the most efficient option.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const relatedServices = [
    {
      title: "Voice Roof Installation",
      path: "/services/voice-roof-installation",
      description: "Complete roof installation services for skylight preparation"
    },
    {
      title: "Voice Roof Inspection",
      path: "/services/voice-roof-inspection",
      description: "Professional inspections including skylight assessments"
    },
    {
      title: "Voice Roof Ventilation",
      path: "/services/voice-roof-ventilation",
      description: "Ventilation solutions working with skylights"
    },
    {
      title: "Voice Roof Maintenance",
      path: "/services/voice-roof-maintenance",
      description: "Regular maintenance including skylight care"
    }
  ];

  const pageConfig = {
    title: "Professional Skylight Installation",
    serviceName: "Skylight Installation",
    serviceType: "voice-skylight-installation",
    priceRange: "£££",
    timeRequired: "P2D",
    heroTitle: "Need Skylights Installed? Just Ask!",
    heroDescription: "Voice-activated skylight installation services - tell your device what you need",
    mainContent: {
      introSection: {
        title: "Just Say: 'Install My Skylight!'",
        description: "Access professional skylight installation services through your smart device. From new installations to replacements, we bring natural light to your space with expert installation.",
        features: [
          "• Expert installers",
          "• Quality skylights",
          "• Perfect fitting",
          "• Full warranties"
        ]
      },
      problemSolvingSection: {
        title: "Skylight Solutions",
        problems: [
          {
            emoji: "🌞",
            title: "'Need more natural light'",
            description: "Skylight solutions",
            features: [
              "Light assessment",
              "Design options",
              "Perfect placement",
              "Quality installation"
            ]
          },
          {
            emoji: "🔄",
            title: "'Replace old skylight'",
            description: "Replacement service",
            features: [
              "Removal service",
              "Modern options",
              "Efficient units",
              "Expert fitting"
            ]
          },
          {
            emoji: "🏠",
            title: "'Custom design needed'",
            description: "Custom solutions",
            features: [
              "Unique designs",
              "Size options",
              "Style choices",
              "Perfect fit"
            ]
          },
          {
            emoji: "💡",
            title: "'Energy efficient options'",
            description: "Eco-friendly choices",
            features: [
              "Energy ratings",
              "Solar options",
              "Heat control",
              "UV protection"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Installation Process",
        steps: [
          {
            title: "Initial Consultation",
            description: "Planning phase",
            features: [
              "Site assessment",
              "Light study",
              "Design options",
              "Quote provision"
            ]
          },
          {
            title: "Design Selection",
            description: "Perfect choice",
            features: [
              "Style selection",
              "Size planning",
              "Feature choice",
              "Material picks"
            ]
          },
          {
            title: "Professional Installation",
            description: "Expert fitting",
            features: [
              "Careful setup",
              "Proper sealing",
              "Quality check",
              "Clean finish"
            ]
          },
          {
            title: "Final Verification",
            description: "Complete assurance",
            features: [
              "Operation test",
              "Seal checking",
              "Clean-up",
              "Usage guide"
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

export default VoiceSkylightInstallation;
