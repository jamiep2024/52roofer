import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceRoofingServices: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, what roofing services do you offer?",
      answer: "We provide comprehensive roofing services including: 1) Emergency repairs for leaks and storm damage, 2) Complete roof installations and replacements, 3) Routine maintenance and inspections, 4) Gutter services and weatherproofing, 5) Energy-efficient upgrades and insulation. Each service is delivered by certified professionals with extensive local experience.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much do roofing services cost?",
      answer: "Roofing costs vary based on service type: 1) Inspections: £100-£250, 2) Minor repairs: £150-£500, 3) Major repairs: £500-£2000, 4) Full replacements: £5,000-£15,000. Factors affecting cost include roof size, material choice, and complexity. We provide detailed quotes and can work with insurance claims when applicable.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how long do roofing services take?",
      answer: "Service times vary by project: 1) Emergency repairs: 1-4 hours, 2) Standard repairs: 1-2 days, 3) Full roof replacement: 2-5 days, 4) Inspections: 1-2 hours. Weather conditions and project complexity can affect timelines. We'll provide a detailed schedule during consultation and keep you updated throughout the process.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what roofing materials do you recommend?",
      answer: "We recommend materials based on your specific needs: 1) Slate: Most durable, 100+ year lifespan, premium look, 2) Clay tiles: 60+ years, traditional style, excellent insulation, 3) Concrete tiles: 50+ years, cost-effective, versatile, 4) Modern composites: Energy efficient, environmentally friendly. We'll help you choose based on your budget, style preferences, and local climate.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, do you offer warranties on roofing work?",
      answer: "Yes, we provide comprehensive warranties: 1) Workmanship warranty: 10-25 years covering installation quality, 2) Materials warranty: 20-50 years from manufacturers, 3) Emergency repair warranty: 2-5 years, 4) Maintenance guarantee: 1-2 years on routine work. All warranties are fully documented and transferable if you sell your property.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "Professional Roofing Services",
    serviceName: "Roofing Services",
    serviceType: "voice-roofing-services",
    priceRange: "££-£££",
    timeRequired: "P1D",
    heroTitle: "Need Roofing Services? Just Ask!",
    heroDescription: "Voice-activated roofing services - tell your device what you need",
    mainContent: {
      introSection: {
        title: "Just Say: 'I Need a Roofer!'",
        description: "Whether you need repairs, maintenance, or a complete new roof, we're here to help. Simply ask your smart device to find professional roofing services, and we'll take care of everything from initial consultation to final inspection.",
        features: [
          "• Instant connection to expert roofers",
          "• Free consultation and quotes",
          "• All roofing services covered",
          "• Professional advice and guidance"
        ]
      },
      problemSolvingSection: {
        title: "How Can We Help You?",
        problems: [
          {
            emoji: "🏠",
            title: "'I need a roof inspection'",
            description: "Comprehensive roof assessments with detailed reports",
            features: [
              "Full condition report",
              "Maintenance recommendations",
              "Photo documentation",
              "Cost estimates"
            ]
          },
          {
            emoji: "🔧",
            title: "'My roof needs repairs'",
            description: "Expert repairs for all types of roof damage",
            features: [
              "Emergency repairs",
              "Leak fixing",
              "Tile replacement",
              "Storm damage repair"
            ]
          },
          {
            emoji: "🏗️",
            title: "'I want a new roof'",
            description: "Complete roof replacement and installation",
            features: [
              "Multiple material options",
              "Energy-efficient solutions",
              "Professional installation",
              "Long-term warranties"
            ]
          },
          {
            emoji: "🌧️",
            title: "'Need better weatherproofing'",
            description: "Enhanced protection against weather",
            features: [
              "Weather-resistant materials",
              "Improved insulation",
              "Ventilation solutions",
              "Preventive treatments"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Service Process",
        steps: [
          {
            title: "Initial Consultation",
            description: "Free assessment of your roofing needs",
            features: [
              "Detailed inspection",
              "Professional recommendations",
              "Clear cost estimates",
              "Timeline planning"
            ]
          },
          {
            title: "Custom Solution",
            description: "Tailored service plan for your specific needs",
            features: [
              "Material selection",
              "Technical specifications",
              "Budget optimization",
              "Schedule coordination"
            ]
          },
          {
            title: "Professional Execution",
            description: "Expert service delivery by qualified roofers",
            features: [
              "Safety compliance",
              "Quality materials",
              "Skilled workmanship",
              "Site cleanliness"
            ]
          },
          {
            title: "Quality Assurance",
            description: "Final inspection and satisfaction guarantee",
            features: [
              "Thorough inspection",
              "Warranty provision",
              "Maintenance advice",
              "Follow-up support"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default VoiceRoofingServices;
