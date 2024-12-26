import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceResidentialRoofing: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, find residential roofing services",
      answer: "We provide complete residential roofing services including: 1) New roof installations, 2) Roof replacements, 3) Shingle roofing, 4) Tile and slate roofing, 5) Residential repairs. Our expert teams ensure quality installation and lasting protection.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much does a new residential roof cost?",
      answer: "Residential roofing costs vary by type: 1) Asphalt shingles: £5,000-£8,000, 2) Concrete tiles: £8,000-£12,000, 3) Slate roofing: £12,000-£18,000, 4) Metal roofing: £7,000-£14,000, 5) Premium options: £15,000+. We provide detailed quotes after inspection.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how long does residential roof installation take?",
      answer: "Installation times vary by project: 1) Standard homes: 1-3 days, 2) Complex designs: 3-5 days, 3) Premium materials: 4-7 days, 4) Complete replacements: 2-4 days, 5) Weather factors may extend timelines. We work efficiently while ensuring quality.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what residential roofing materials do you use?",
      answer: "We offer premium residential materials: 1) Asphalt shingles: Durable and cost-effective, 2) Concrete tiles: Long-lasting beauty, 3) Natural slate: Premium longevity, 4) Metal roofing: Modern efficiency, 5) Cedar shakes: Natural appeal. All materials come with manufacturer warranties.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, do you repair residential roofs?",
      answer: "Yes, we offer comprehensive repairs: 1) Leak fixes, 2) Storm damage repair, 3) Shingle replacement, 4) Structural repairs, 5) Emergency services. Our skilled teams quickly address any residential roofing issue to protect your home.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const relatedServices = [
    {
      title: "Voice Roof Installation",
      path: "/services/voice-roof-installation",
      description: "Expert installation services through voice commands"
    },
    {
      title: "Voice Gutter Services",
      path: "/services/voice-gutter-service",
      description: "Complete gutter solutions via voice activation"
    },
    {
      title: "Voice Skylight Installation",
      path: "/services/voice-skylight-installation",
      description: "Professional skylight services through voice commands"
    },
    {
      title: "Voice Roof Maintenance",
      path: "/services/voice-roof-maintenance",
      description: "Regular maintenance services activated by voice"
    }
  ];

  const pageConfig = {
    title: "Residential Roofing Services",
    serviceName: "Residential Roofing",
    serviceType: "voice-residential-roofing",
    priceRange: "££",
    timeRequired: "P3D",
    heroTitle: "Need Home Roofing? Just Ask!",
    heroDescription: "Voice-activated residential roofing services - tell your device what you need",
    mainContent: {
      introSection: {
        title: "Just Say: 'Find Home Roofing!'",
        description: "Access expert residential roofing services through your smart device. From new installations to repairs, maintenance to emergency services, we protect your home with quality roofing solutions.",
        features: [
          "• Expert residential teams",
          "• Premium materials",
          "• Quality guarantees",
          "• Homeowner focused"
        ]
      },
      problemSolvingSection: {
        title: "Residential Roofing Solutions",
        problems: [
          {
            emoji: "🏠",
            title: "'Need new home roof'",
            description: "Complete roofing systems",
            features: [
              "Material selection",
              "Expert installation",
              "Quality assurance",
              "Long warranties"
            ]
          },
          {
            emoji: "🔧",
            title: "'Home roof repair'",
            description: "Professional repairs",
            features: [
              "Leak fixes",
              "Storm damage",
              "Shingle replacement",
              "Fast service"
            ]
          },
          {
            emoji: "🌟",
            title: "'Premium roofing'",
            description: "High-end solutions",
            features: [
              "Slate options",
              "Designer shingles",
              "Metal systems",
              "Custom designs"
            ]
          },
          {
            emoji: "🏡",
            title: "'Roof maintenance'",
            description: "Preventive care",
            features: [
              "Regular checks",
              "Gutter cleaning",
              "Minor repairs",
              "Long-term care"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Residential Process",
        steps: [
          {
            title: "Home Consultation",
            description: "Understanding your needs",
            features: [
              "Site inspection",
              "Material options",
              "Design choices",
              "Cost estimates"
            ]
          },
          {
            title: "Detailed Planning",
            description: "Project preparation",
            features: [
              "Material selection",
              "Timeline planning",
              "Permit handling",
              "Team scheduling"
            ]
          },
          {
            title: "Expert Installation",
            description: "Quality execution",
            features: [
              "Skilled teams",
              "Premium materials",
              "Property protection",
              "Clean worksite"
            ]
          },
          {
            title: "Final Inspection",
            description: "Ensuring satisfaction",
            features: [
              "Quality check",
              "Cleanup completion",
              "Warranty provision",
              "Final walkthrough"
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

export default VoiceResidentialRoofing;
