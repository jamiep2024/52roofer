import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceRoofCostNearMe: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, what are roof prices near me?",
      answer: "Local roof prices vary by region and type: 1) Asphalt shingles: £5,000-£8,000, 2) Slate roofing: £9,000-£18,000, 3) Clay tiles: £8,000-£15,000, 4) Metal roofing: £7,000-£14,000, 5) Flat roofs: £4,000-£7,000. Contact your local team for an accurate quote specific to your area.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much should a new roof cost in my area?",
      answer: "Local roof costs depend on several factors: 1) Property size: £100-£150 per m², 2) Material choice: £20-£100 per m², 3) Roof complexity: Can add 20-50%, 4) Local labor rates: Vary by region, 5) Accessibility: May affect cost by 10-30%. We provide free local assessments for accurate pricing.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, find affordable roofing near me",
      answer: "We offer various cost-effective roofing solutions locally: 1) Free local quotes and inspections, 2) Material options for every budget, 3) Seasonal promotions in your area, 4) Flexible payment plans available, 5) Price matching for local competitors. Contact us for the best local rates.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what affects roof replacement cost in my area?",
      answer: "Local roof costs are influenced by: 1) Regional material availability, 2) Local building regulations, 3) Area-specific weather requirements, 4) Regional labor rates, 5) Local market conditions. Our local experts provide detailed cost breakdowns for transparency.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, compare local roof prices near me",
      answer: "We provide local price comparisons for: 1) Different material options in your area, 2) Various warranty levels available locally, 3) Labor costs for your region, 4) Additional local services needed, 5) Regional energy-efficiency options. Get a personalized local quote today.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "Local Roof Cost Calculator Near Me",
    serviceName: "Roof Cost Near Me",
    serviceType: "voice-roof-cost-near-me",
    priceRange: "£££",
    timeRequired: "P1D",
    heroTitle: "Local Roof Costs? Just Ask!",
    heroDescription: "Voice-activated local roof cost calculator - get pricing for your area",
    mainContent: {
      introSection: {
        title: "Just Say: 'What's a New Roof Cost Near Me?'",
        description: "Need local roof pricing? Simply ask your smart device about roof costs in your area, and we'll provide detailed pricing specific to your location and requirements.",
        features: [
          "• Local price quotes",
          "• Area-specific costs",
          "• Regional pricing factors",
          "• Local cost comparisons"
        ]
      },
      problemSolvingSection: {
        title: "Local Pricing Solutions",
        problems: [
          {
            emoji: "💰",
            title: "'Local roof price check'",
            description: "Area-specific pricing",
            features: [
              "Local quotes",
              "Regional rates",
              "Area comparisons",
              "Local discounts"
            ]
          },
          {
            emoji: "📊",
            title: "'Compare roof costs nearby'",
            description: "Local price comparison",
            features: [
              "Material costs",
              "Labor rates",
              "Local options",
              "Price matching"
            ]
          },
          {
            emoji: "💳",
            title: "'Affordable local roofing'",
            description: "Budget-friendly solutions",
            features: [
              "Payment plans",
              "Local offers",
              "Area promotions",
              "Flexible pricing"
            ]
          },
          {
            emoji: "📋",
            title: "'Detailed cost breakdown'",
            description: "Transparent local pricing",
            features: [
              "Material costs",
              "Labor rates",
              "Additional services",
              "Local factors"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Local Pricing Process",
        steps: [
          {
            title: "Local Assessment",
            description: "Area-specific evaluation",
            features: [
              "Site inspection",
              "Local measurement",
              "Area requirements",
              "Regional factors"
            ]
          },
          {
            title: "Cost Analysis",
            description: "Local price calculation",
            features: [
              "Material costs",
              "Labor rates",
              "Local factors",
              "Additional needs"
            ]
          },
          {
            title: "Price Comparison",
            description: "Local market analysis",
            features: [
              "Option comparison",
              "Material choices",
              "Service levels",
              "Local rates"
            ]
          },
          {
            title: "Quote Provision",
            description: "Detailed local pricing",
            features: [
              "Written quote",
              "Cost breakdown",
              "Payment options",
              "Price guarantee"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default VoiceRoofCostNearMe;
