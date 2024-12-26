import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceRoofRepairs: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, I need roof repair",
      answer: "We offer comprehensive roof repair services including: 1) Emergency leak repairs, 2) Storm damage restoration, 3) Shingle replacement, 4) Structural repairs, 5) Preventive maintenance. Our certified technicians quickly identify and fix issues to protect your property.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much do roof repairs cost?",
      answer: "Repair costs vary by type: 1) Minor repairs: £200-£500, 2) Leak fixes: £400-£1,000, 3) Storm damage: £500-£3,000, 4) Structural repairs: £1,000-£5,000, 5) Partial replacement: £2,000-£4,000. We provide accurate quotes after inspection.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how long do roof repairs take?",
      answer: "Repair times vary by scope: 1) Emergency repairs: Same day service, 2) Minor fixes: 1-2 days, 3) Major repairs: 2-4 days, 4) Storm damage: 2-5 days, 5) Structural work: 3-7 days. Weather conditions may affect completion times.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what roof repairs can you do?",
      answer: "We handle all types of repairs: 1) Leak detection and fixing, 2) Shingle replacement/repair, 3) Storm/weather damage restoration, 4) Structural repairs, 5) Chimney/flashing repairs. Our experts are trained in all roofing materials and repair techniques.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, do you offer emergency roof repairs?",
      answer: "Yes, we provide 24/7 emergency services: 1) Immediate response team, 2) Temporary leak protection, 3) Storm damage containment, 4) Same-day repairs when possible, 5) Full damage assessment. We prioritize preventing further damage to your property.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "Expert Roof Repairs",
    serviceName: "Roof Repairs",
    serviceType: "voice-roof-repairs",
    priceRange: "££",
    timeRequired: "P2D",
    heroTitle: "Need Roof Repairs? Just Ask!",
    heroDescription: "Voice-activated roof repair services - tell your device what you need fixed",
    mainContent: {
      introSection: {
        title: "Just Say: 'Fix My Roof!'",
        description: "From emergency repairs to maintenance fixes, we're here to help. Simply ask your smart device to find professional roof repair services, and we'll quickly resolve your roofing issues.",
        features: [
          "• 24/7 emergency service",
          "• Expert repair teams",
          "• All types of repairs",
          "• Quality guarantees"
        ]
      },
      problemSolvingSection: {
        title: "Your Repair Solutions",
        problems: [
          {
            emoji: "🚰",
            title: "'I have a roof leak'",
            description: "Emergency leak repairs",
            features: [
              "Fast response",
              "Leak detection",
              "Water damage prevention",
              "Complete repair"
            ]
          },
          {
            emoji: "🌪️",
            title: "'Storm damaged my roof'",
            description: "Storm damage restoration",
            features: [
              "Emergency response",
              "Damage assessment",
              "Temporary protection",
              "Full repairs"
            ]
          },
          {
            emoji: "🏠",
            title: "'Missing roof tiles'",
            description: "Tile replacement service",
            features: [
              "Match existing tiles",
              "Proper installation",
              "Prevent leaks",
              "Quick service"
            ]
          },
          {
            emoji: "🔧",
            title: "'General roof repairs'",
            description: "Comprehensive repair service",
            features: [
              "Full inspection",
              "Expert repairs",
              "Quality materials",
              "Long-term solutions"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Repair Process",
        steps: [
          {
            title: "Emergency Response",
            description: "Quick action when needed",
            features: [
              "24/7 availability",
              "Fast arrival",
              "Initial assessment",
              "Immediate protection"
            ]
          },
          {
            title: "Detailed Inspection",
            description: "Finding all issues",
            features: [
              "Complete check",
              "Problem identification",
              "Photo documentation",
              "Repair planning"
            ]
          },
          {
            title: "Professional Repairs",
            description: "Expert repair work",
            features: [
              "Quality materials",
              "Skilled technicians",
              "Proper techniques",
              "Thorough repairs"
            ]
          },
          {
            title: "Final Verification",
            description: "Ensuring quality",
            features: [
              "Repair inspection",
              "Water testing",
              "Clean-up completion",
              "Final report"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default VoiceRoofRepairs;
