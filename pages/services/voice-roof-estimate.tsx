import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceRoofEstimate: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, get me a roof estimate",
      answer: "Our quick estimate process includes: 1) Free initial consultation, 2) Remote assessment options, 3) Detailed cost breakdown, 4) Material options and pricing, 5) Labor cost estimates. We provide transparent, no-obligation quotes for all roofing work.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how do I get a roofing quote?",
      answer: "Get a quote through these easy steps: 1) Schedule free consultation: Online or phone, 2) Property assessment: Remote or in-person, 3) Material selection: Various price points, 4) Detailed estimate: Within 24 hours, 5) Quote review: Complete explanation provided. No obligation quotes available.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, what's included in a roof estimate?",
      answer: "Our estimates detail: 1) Material costs: All roofing materials, 2) Labor costs: Installation and expertise, 3) Timeline: Project duration estimate, 4) Additional services: Any extra work needed, 5) Warranty information: Coverage details. All estimates are free and comprehensive.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, how long does a roof estimate take?",
      answer: "Estimate timeline breakdown: 1) Initial contact: Same day response, 2) Assessment scheduling: Within 24-48 hours, 3) Property evaluation: 30-60 minutes, 4) Quote preparation: 24 hours, 5) Quote presentation: 30 minutes. Fast-track options available for urgent needs.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, are roof estimates free?",
      answer: "Our estimate service includes: 1) Free consultation: No charge, 2) Detailed inspection: Complimentary, 3) Written quote: No cost, 4) Material samples: Free to view, 5) Expert advice: Included at no charge. We believe in transparent, no-obligation pricing.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "Quick Roof Estimates & Quotes",
    serviceName: "Roof Estimates",
    serviceType: "voice-roof-estimate",
    priceRange: "FREE",
    timeRequired: "P1D",
    heroTitle: "Need a Roof Estimate? Just Ask!",
    heroDescription: "Voice-activated roofing estimates - get your free quote today",
    mainContent: {
      introSection: {
        title: "Just Say: 'Get Me a Roof Estimate!'",
        description: "Need a roofing quote? Simply ask your smart device for a roof estimate, and we'll provide a comprehensive, free quote for your project.",
        features: [
          "• Free consultations",
          "• Quick response times",
          "• Detailed quotes",
          "• Expert assessments"
        ]
      },
      problemSolvingSection: {
        title: "Estimate Solutions",
        problems: [
          {
            emoji: "📋",
            title: "'Need a quick quote'",
            description: "Rapid estimate service",
            features: [
              "Same-day response",
              "Remote options",
              "Fast turnaround",
              "Clear pricing"
            ]
          },
          {
            emoji: "💰",
            title: "'Compare roof prices'",
            description: "Detailed cost comparison",
            features: [
              "Material options",
              "Labor costs",
              "Timeline factors",
              "Budget choices"
            ]
          },
          {
            emoji: "🏠",
            title: "'Plan my roof project'",
            description: "Project estimation",
            features: [
              "Timeline planning",
              "Cost forecasting",
              "Material selection",
              "Work scheduling"
            ]
          },
          {
            emoji: "📱",
            title: "'Remote roof quote'",
            description: "Virtual estimation",
            features: [
              "Online assessment",
              "Photo evaluation",
              "Digital quotes",
              "Remote consulting"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Estimation Process",
        steps: [
          {
            title: "Initial Contact",
            description: "Quick response setup",
            features: [
              "Quote request",
              "Basic information",
              "Schedule assessment",
              "Preference noting"
            ]
          },
          {
            title: "Property Assessment",
            description: "Thorough evaluation",
            features: [
              "Roof inspection",
              "Measurement taking",
              "Condition check",
              "Need identification"
            ]
          },
          {
            title: "Quote Preparation",
            description: "Detailed estimation",
            features: [
              "Material costing",
              "Labor calculation",
              "Timeline planning",
              "Option listing"
            ]
          },
          {
            title: "Quote Presentation",
            description: "Clear explanation",
            features: [
              "Cost breakdown",
              "Option review",
              "Question answering",
              "Next steps"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default VoiceRoofEstimate;
