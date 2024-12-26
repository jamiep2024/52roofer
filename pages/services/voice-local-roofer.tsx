import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceLocalRoofer: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, find a local roofer",
      answer: "We connect you with qualified local roofers across: 1) Oxfordshire, 2) Gloucestershire, 3) Wiltshire, 4) Berkshire, 5) Hampshire, 6) Surrey, 7) Buckinghamshire, and 8) West Sussex. All vetted and fully qualified professionals.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how do I choose a local roofer?",
      answer: "Look for these qualities in local roofers: 1) Full licensing and insurance, 2) Local reputation and reviews, 3) Experience in your roof type, 4) Clear written quotes, 5) Strong warranties and guarantees. We ensure all our local partners meet these criteria.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, what should local roofers cost?",
      answer: "Local roofer rates vary by service: 1) Inspections: £100-£250, 2) Minor repairs: £150-£500, 3) Major repairs: £500-£2,000, 4) Full replacements: From £5,000, 5) Emergency services: Additional £100-£200. All our local partners offer competitive, transparent pricing.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, when can a local roofer come?",
      answer: "Our local response times: 1) Emergency calls: Within 2-4 hours, 2) Urgent repairs: Same/next day, 3) Regular repairs: 2-3 days, 4) Inspections: 1-2 days, 5) Major projects: Scheduled at your convenience. We prioritize based on urgency.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, are local roofers insured?",
      answer: "Our local roofers provide complete coverage: 1) Public liability insurance: Up to £5 million, 2) Employer's liability: Full coverage, 3) Professional indemnity insurance, 4) Work guarantees, 5) Material warranties. All verified and current.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "Find Local Roofing Experts",
    serviceName: "Local Roofer",
    serviceType: "voice-local-roofer",
    priceRange: "£££",
    timeRequired: "P1D",
    heroTitle: "Need a Local Roofer? Just Ask!",
    heroDescription: "Voice-activated local roofer finder - connect with qualified professionals in your area",
    mainContent: {
      introSection: {
        title: "Just Say: 'Find Me a Local Roofer!'",
        description: "Looking for a trusted local roofer? Simply ask your smart device to find local roofing experts, and we'll connect you with qualified professionals in your area.",
        features: [
          "• Vetted local experts",
          "• Quick response times",
          "• Quality guarantees",
          "• Competitive pricing"
        ]
      },
      problemSolvingSection: {
        title: "Local Roofing Solutions",
        problems: [
          {
            emoji: "🏠",
            title: "'Need a local expert'",
            description: "Qualified local roofers",
            features: [
              "Verified credentials",
              "Local experience",
              "Area knowledge",
              "Quick response"
            ]
          },
          {
            emoji: "🛠️",
            title: "'Emergency local help'",
            description: "Rapid local response",
            features: [
              "24/7 availability",
              "Fast arrival",
              "Local teams",
              "Quick solutions"
            ]
          },
          {
            emoji: "💰",
            title: "'Compare local prices'",
            description: "Local price comparison",
            features: [
              "Free quotes",
              "Clear pricing",
              "Local rates",
              "Best value"
            ]
          },
          {
            emoji: "✅",
            title: "'Find trusted roofer'",
            description: "Verified professionals",
            features: [
              "Background checks",
              "Quality assurance",
              "Local reviews",
              "Proven expertise"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Local Connection Process",
        steps: [
          {
            title: "Local Search",
            description: "Find nearby experts",
            features: [
              "Area check",
              "Service matching",
              "Availability check",
              "Quick connection"
            ]
          },
          {
            title: "Verification",
            description: "Quality assurance",
            features: [
              "Credential check",
              "Insurance verify",
              "Review analysis",
              "History check"
            ]
          },
          {
            title: "Connection",
            description: "Expert matching",
            features: [
              "Direct contact",
              "Schedule setup",
              "Service outline",
              "Quote arrangement"
            ]
          },
          {
            title: "Follow-up",
            description: "Quality control",
            features: [
              "Service check",
              "Satisfaction ensure",
              "Feedback collect",
              "Support provide"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default VoiceLocalRoofer;
