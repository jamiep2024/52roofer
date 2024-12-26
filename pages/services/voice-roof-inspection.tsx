import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceRoofInspection: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, find roof inspection services",
      answer: "We provide thorough roof inspections including: 1) Complete structural assessment, 2) Leak detection, 3) Condition reports, 4) Safety inspections, 5) Maintenance recommendations. Our certified inspectors identify current and potential issues.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much does a roof inspection cost?",
      answer: "Inspection costs vary by type: 1) Basic inspection: £150-£250, 2) Detailed assessment: £250-£400, 3) Drone survey: £300-£500, 4) Pre-purchase inspection: £200-£350, 5) Commercial inspection: £400+. All include detailed reports.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how long does a roof inspection take?",
      answer: "Inspection times vary by property: 1) Residential inspection: 1-2 hours, 2) Detailed survey: 2-3 hours, 3) Commercial property: 3-6 hours, 4) Large facilities: 4-8 hours, 5) Report preparation: 24-48 hours. Thoroughness is our priority.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what does a roof inspection check?",
      answer: "Our inspections examine: 1) Structural integrity, 2) Material condition, 3) Flashing and seals, 4) Drainage systems, 5) Ventilation. We also check for leaks, damage, and potential future issues.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, when should I get a roof inspection?",
      answer: "Recommended inspection times: 1) Spring and autumn checks, 2) After severe weather, 3) Pre-property purchase, 4) Signs of leaks/damage, 5) Every 2-3 years minimum. Regular inspections prevent costly issues.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const relatedServices = [
    {
      title: "Voice Roof Repairs",
      path: "/services/voice-roof-repairs",
      description: "Expert repair services based on inspection findings"
    },
    {
      title: "Voice Roof Maintenance",
      path: "/services/voice-roof-maintenance",
      description: "Regular maintenance following inspection recommendations"
    },
    {
      title: "Voice Gutter Services",
      path: "/services/voice-gutter-service",
      description: "Professional gutter inspections and services"
    },
    {
      title: "Voice Roof Ventilation",
      path: "/services/voice-roof-ventilation",
      description: "Ventilation assessment and solutions"
    }
  ];

  const pageConfig = {
    title: "Professional Roof Inspection",
    serviceName: "Roof Inspection",
    serviceType: "voice-roof-inspection",
    priceRange: "££",
    timeRequired: "P1D",
    heroTitle: "Need a Roof Inspection? Just Ask!",
    heroDescription: "Voice-activated roof inspection services - tell your device what you need checked",
    mainContent: {
      introSection: {
        title: "Just Say: 'Schedule Roof Inspection!'",
        description: "Access professional roof inspection services through your smart device. From routine checks to detailed surveys, our certified inspectors provide thorough assessments and clear reports.",
        features: [
          "• Certified inspectors",
          "• Detailed reports",
          "• Modern technology",
          "• Expert analysis"
        ]
      },
      problemSolvingSection: {
        title: "Inspection Solutions",
        problems: [
          {
            emoji: "🔍",
            title: "'Need roof check'",
            description: "Complete inspection",
            features: [
              "Visual assessment",
              "Structure check",
              "Material review",
              "Report provided"
            ]
          },
          {
            emoji: "💧",
            title: "'Find roof leak'",
            description: "Leak detection",
            features: [
              "Moisture testing",
              "Thermal scanning",
              "Source location",
              "Solution advice"
            ]
          },
          {
            emoji: "🏠",
            title: "'Pre-purchase check'",
            description: "Buyer's inspection",
            features: [
              "Condition report",
              "Life expectancy",
              "Cost estimates",
              "Written report"
            ]
          },
          {
            emoji: "📋",
            title: "'Regular inspection'",
            description: "Maintenance check",
            features: [
              "Regular monitoring",
              "Issue prevention",
              "Documentation",
              "Recommendations"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Inspection Process",
        steps: [
          {
            title: "Initial Contact",
            description: "Service scheduling",
            features: [
              "Need assessment",
              "Appointment setting",
              "Service explanation",
              "Price quote"
            ]
          },
          {
            title: "Visual Inspection",
            description: "Thorough examination",
            features: [
              "External check",
              "Internal review",
              "Photo documentation",
              "Issue identification"
            ]
          },
          {
            title: "Technical Assessment",
            description: "Detailed analysis",
            features: [
              "Structure testing",
              "Material analysis",
              "System checks",
              "Problem diagnosis"
            ]
          },
          {
            title: "Report Delivery",
            description: "Complete documentation",
            features: [
              "Detailed report",
              "Photo evidence",
              "Recommendations",
              "Cost estimates"
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

export default VoiceRoofInspection;
