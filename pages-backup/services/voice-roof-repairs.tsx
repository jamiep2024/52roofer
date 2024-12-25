import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';
import SEO from '../components/seo/SEO';
import Layout from '../components/layout/Layout';
import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceRoofRepairs: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, I need emergency roof repairs",
      answer: "We provide 24/7 emergency roof repair services including: 1) Leak repairs within 2-4 hours, 2) Storm damage assessment and fixes, 3) Temporary weatherproofing, 4) Complete damage evaluation, 5) Insurance claim assistance. Our emergency team is always ready to respond quickly to prevent further damage to your property.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much do roof repairs cost?",
      answer: "Roof repair costs vary by type: 1) Minor repairs (few tiles): £100-£300, 2) Leak repairs: £200-£600, 3) Chimney repairs: £400-£1000, 4) Storm damage: £500-£2000, 5) Emergency callout: Additional £100-£200. We provide free inspections and detailed quotes before starting any work.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how long do roof repairs take?",
      answer: "Repair times depend on the issue: 1) Emergency patches: 2-4 hours, 2) Tile replacements: 1-2 hours, 3) Leak repairs: 2-6 hours, 4) Structural repairs: 1-3 days, 5) Chimney repairs: 1-2 days. Weather conditions may affect timing, but we work efficiently to minimize disruption.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what roof repairs do you handle?",
      answer: "We handle all types of repairs: 1) Leak detection and fixing, 2) Tile/slate replacement, 3) Chimney and flashing repairs, 4) Storm damage restoration, 5) Structural repairs, 6) Gutter system repairs, 7) Roof valley repairs, 8) Ridge tile repointing. All repairs are performed by certified professionals.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, do you guarantee roof repairs?",
      answer: "Yes, all our repairs come with guarantees: 1) Workmanship warranty: 5-10 years, 2) Materials warranty: 10-25 years, 3) Emergency repair guarantee: 2-5 years, 4) Leak-free guarantee: 2-5 years. We also provide ongoing maintenance support and free inspections during the warranty period.",
      views: 0,
      lastUpdated: new Date().toISOString()
        </Layout>

      );
}

  ];

  const pageConfig = {
    title: "Expert Roof Repairs",
    serviceName: "Roof Repairs",
    serviceType: "voice-roof-repairs",
    priceRange: "££",
    timeRequired: "PT4H",
    heroTitle: "Need Roof Repairs? Just Ask!",
    heroDescription: "Voice-activated roof repair services - tell your device what's wrong",
    mainContent: {
      introSection: {
        title: "Just Say: 'Fix My Roof!'",
        description: "Whether you're dealing with leaks, storm damage, or general wear and tear, we're here to help. Simply ask your smart device to find roof repair services, and we'll respond quickly to assess and fix the problem.",
        features: [
          "• 24/7 emergency response",
          "• Free damage assessment",
          "• All types of repairs",
          "• Insurance claim support"
        ]
      },
      problemSolvingSection: {
        title: "Common Roof Problems We Fix",
        problems: [
          {
            emoji: "💧",
            title: "'I have a roof leak'",
            description: "Fast leak detection and repair",
            features: [
              "Immediate response",
              "Advanced leak detection",
              "Permanent solutions",
              "Preventive measures"
            ]
          },
          {
            emoji: "🌪️",
            title: "'Storm damage repair needed'",
            description: "Emergency storm damage restoration",
            features: [
              "24/7 emergency service",
              "Temporary protection",
              "Complete restoration",
              "Insurance assistance"
            ]
          },
          {
            emoji: "🏺",
            title: "'Broken tiles or slates'",
            description: "Professional tile replacement",
            features: [
              "Match existing materials",
              "Quick replacement",
              "Prevent water damage",
              "Improve appearance"
            ]
          },
          {
            emoji: "🏗️",
            title: "'Structural roof issues'",
            description: "Comprehensive structural repairs",
            features: [
              "Expert assessment",
              "Professional repairs",
              "Long-term solutions",
              "Safety compliance"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Repair Process",
        steps: [
          {
            title: "Emergency Response",
            description: "Quick assessment of damage",
            features: [
              "Fast arrival",
              "Safety check",
              "Damage assessment",
              "Immediate action plan"
            ]
          },
          {
            title: "Detailed Inspection",
            description: "Thorough problem diagnosis",
            features: [
              "Visual inspection",
              "Technical assessment",
              "Problem identification",
              "Solution planning"
            ]
          },
          {
            title: "Professional Repair",
            description: "Expert repair execution",
            features: [
              "Quality materials",
              "Skilled technicians",
              "Proper techniques",
              "Safety measures"
            ]
          },
          {
            title: "Quality Check",
            description: "Ensuring lasting repairs",
            features: [
              "Final inspection",
              "Weather testing",
              "Cleanup completion",
              "Warranty provision"
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
