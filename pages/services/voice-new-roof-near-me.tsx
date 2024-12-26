import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceNewRoofNearMe: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, find new roof installation near me",
      answer: "We provide local roofing services across: 1) Oxfordshire, 2) Gloucestershire, 3) Wiltshire, 4) Berkshire, 5) Hampshire, 6) Surrey, 7) Buckinghamshire, and 8) West Sussex. Our certified local installers ensure quality installation following all regional building codes.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, what's the cost of a new roof near me?",
      answer: "Local roof costs vary by area and type: 1) Asphalt shingles: £5,000-£8,000, 2) Slate roofing: £9,000-£18,000, 3) Clay tiles: £8,000-£15,000, 4) Metal roofing: £7,000-£14,000, 5) Flat roofs: £4,000-£7,000. Contact your local team for an accurate quote.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, find local roof installers near me",
      answer: "Our local roofing teams provide: 1) Free local inspections, 2) Area-specific material recommendations, 3) Local building code compliance, 4) Regional weather-appropriate solutions, 5) Local references and examples. All teams are fully licensed and insured for your area.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, when can I get a new roof installed near me?",
      answer: "Local installation times vary by region: 1) Initial consultation: Within 24-48 hours, 2) Quote provision: 1-2 days, 3) Material delivery: 3-5 days, 4) Installation start: Usually within 1-2 weeks, 5) Project completion: 2-4 days average. Weather and seasonal demand may affect schedules.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, what roofing materials are best for my area?",
      answer: "We recommend materials based on local conditions: 1) Coastal areas: Corrosion-resistant options, 2) High-rain regions: Enhanced waterproofing, 3) Urban areas: Energy-efficient solutions, 4) Historic districts: Heritage-compatible materials, 5) All areas: Weather-appropriate warranties. Local experts will guide your choice.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "Local New Roof Installation Near Me",
    serviceName: "New Roof Near Me",
    serviceType: "voice-new-roof-near-me",
    priceRange: "£££",
    timeRequired: "P5D",
    heroTitle: "Need a New Roof Nearby? Just Ask!",
    heroDescription: "Voice-activated local roofing services - find expert installers in your area",
    mainContent: {
      introSection: {
        title: "Just Say: 'Find New Roof Installation Near Me!'",
        description: "Looking for local roofing experts? Simply ask your smart device to find new roof installation services near you, and we'll connect you with certified local professionals in your area.",
        features: [
          "• Local expert teams",
          "• Area-specific solutions",
          "• Regional material options",
          "• Local project management"
        ]
      },
      problemSolvingSection: {
        title: "Local Roofing Solutions",
        problems: [
          {
            emoji: "🏠",
            title: "'Need a new roof nearby'",
            description: "Local roof installation service",
            features: [
              "Local inspection",
              "Regional expertise",
              "Area-specific materials",
              "Local code compliance"
            ]
          },
          {
            emoji: "💰",
            title: "'Local roof cost check'",
            description: "Area-specific pricing",
            features: [
              "Local quotes",
              "Regional pricing",
              "Area discounts",
              "Local financing"
            ]
          },
          {
            emoji: "🌦️",
            title: "'Best roof for my area'",
            description: "Region-specific solutions",
            features: [
              "Weather considerations",
              "Local climate match",
              "Regional materials",
              "Area-specific designs"
            ]
          },
          {
            emoji: "⏰",
            title: "'Quick local installation'",
            description: "Rapid local service",
            features: [
              "Fast local response",
              "Area team dispatch",
              "Regional scheduling",
              "Local support"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Local Installation Process",
        steps: [
          {
            title: "Local Consultation",
            description: "Area-specific assessment",
            features: [
              "Local inspection",
              "Regional planning",
              "Area requirements",
              "Local quotation"
            ]
          },
          {
            title: "Regional Planning",
            description: "Area-specific preparation",
            features: [
              "Local permits",
              "Regional materials",
              "Area scheduling",
              "Local coordination"
            ]
          },
          {
            title: "Local Installation",
            description: "Area expert installation",
            features: [
              "Local team deployment",
              "Regional expertise",
              "Area-specific methods",
              "Local management"
            ]
          },
          {
            title: "Local Quality Check",
            description: "Area-specific verification",
            features: [
              "Regional inspection",
              "Local compliance",
              "Area warranty",
              "Local follow-up"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default VoiceNewRoofNearMe;
