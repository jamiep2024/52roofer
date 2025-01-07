import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const RoofersNearMe: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, how do I find the best local roofer near me?",
      answer: "To find the best local roofer: 1) Check their local experience and knowledge of area-specific roofing needs, 2) Verify their licenses and insurance coverage, 3) Read reviews from nearby customers, 4) Ask about their response times and availability, 5) Request local references. We have established teams across multiple areas with proven track records in each community.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, what should I ask a local roofer before hiring?",
      answer: "Important questions for local roofers include: 1) How long have you worked in this area? 2) Are you familiar with local building codes and regulations? 3) Do you have experience with the specific roofing styles common in this region? 4) Can you provide references from nearby projects? 5) What warranties do you offer? We're happy to answer these and any other questions about our local expertise.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, why should I choose a local roofer?",
      answer: "Local roofers offer several advantages: 1) Understanding of local weather patterns and appropriate roofing solutions, 2) Knowledge of local building codes and permit requirements, 3) Faster response times for emergencies, 4) Established relationships with local suppliers, 5) Better aftercare service due to proximity. Our local teams combine area expertise with professional standards.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what's the average cost for local roof work?",
      answer: "Local roofing costs vary by area and service: 1) Inspections: £100-£250 depending on property size, 2) Minor repairs: £150-£500 based on issue complexity, 3) Major repairs: £500-£2000 for extensive work, 4) Full replacements: £5,000-£15,000 varying by size and materials. We provide competitive local rates and can offer detailed quotes for your specific needs.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, how quickly can a local roofer come out?",
      answer: "Local response times typically are: 1) Emergencies: 1-2 hours in most areas, 2) Urgent repairs: Same-day service when possible, 3) Standard repairs: 1-3 business days, 4) Inspections: Usually next-day available. Being local means we can reach you quickly and provide flexible scheduling options based on your needs.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "Local Roofers Near Me",
    serviceName: "Local Roofing Services",
    serviceType: "roofers-near-me",
    priceRange: "££-£££",
    timeRequired: "P1D",
    heroTitle: "Looking for Local Roofers? Just Ask!",
    heroDescription: "Voice-activated local roofer finder - discover trusted professionals in your area",
    initialFAQs,
    mainContent: {
      introSection: {
        title: "Just Say: 'Find Local Roofers Near Me'",
        description: "Connect with trusted local roofing professionals in your area instantly. Whether you need repairs, maintenance, or a new roof, we'll match you with experienced local roofers who understand your area's specific needs and weather challenges.",
        features: [
          "• Instant local roofer matching",
          "• Area-specific expertise",
          "• Verified local professionals",
          "• Quick response times"
        ]
      },
      problemSolvingSection: {
        title: "Local Roofing Solutions",
        problems: [
          {
            emoji: "🏘️",
            title: "'Need a local roof expert'",
            description: "Connect with experienced roofers in your area",
            features: [
              "Local expertise",
              "Area-specific knowledge",
              "Community reputation",
              "Quick availability"
            ]
          },
          {
            emoji: "🌦️",
            title: "'Local weather roof protection'",
            description: "Solutions tailored to your local climate",
            features: [
              "Weather-specific solutions",
              "Local climate expertise",
              "Regional material knowledge",
              "Seasonal maintenance"
            ]
          },
          {
            emoji: "🏡",
            title: "'Local style matching'",
            description: "Area-appropriate roofing solutions",
            features: [
              "Local architecture knowledge",
              "Style matching expertise",
              "Regional material sourcing",
              "Planning compliance"
            ]
          },
          {
            emoji: "⚡",
            title: "'Quick local response'",
            description: "Fast service from nearby professionals",
            features: [
              "Rapid response times",
              "Local availability",
              "Emergency services",
              "Same-day assessment"
            ]
          }
        ]
      },
      processSection: {
        title: "Working With Local Roofers",
        steps: [
          {
            title: "Local Connection",
            description: "Quick matching with nearby professionals",
            features: [
              "Area-based matching",
              "Local availability check",
              "Rapid response system",
              "Community verification"
            ]
          },
          {
            title: "Local Assessment",
            description: "On-site evaluation by local experts",
            features: [
              "In-person inspection",
              "Local climate consideration",
              "Area-specific solutions",
              "Local material options"
            ]
          },
          {
            title: "Local Service",
            description: "Professional work by community experts",
            features: [
              "Local team deployment",
              "Area-appropriate methods",
              "Regional compliance",
              "Community standards"
            ]
          },
          {
            title: "Local Support",
            description: "Ongoing assistance from nearby professionals",
            features: [
              "Local follow-up service",
              "Area-based maintenance",
              "Regional warranty coverage",
              "Community support"
            ]
          }
        ]
      }
    }
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default RoofersNearMe;
