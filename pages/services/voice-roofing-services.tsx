import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceRoofingServices: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, what roofing services do you offer?",
      answer: "We provide comprehensive roofing services including: 1) New roof installations, 2) Roof repairs and maintenance, 3) Emergency services, 4) Roof inspections, 5) Specialty roofing solutions. Our certified teams handle all aspects of residential and commercial roofing.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, find a reliable roofer near me",
      answer: "Our trusted roofing services include: 1) Free consultations, 2) Licensed and insured teams, 3) Quality material options, 4) Comprehensive warranties, 5) Emergency response available. We serve your local area with professional roofing solutions.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, do you do commercial roofing?",
      answer: "Yes, we offer full commercial roofing services: 1) Flat roof systems, 2) Industrial roofing, 3) Commercial maintenance, 4) Large-scale installations, 5) Business-specific solutions. Our teams are equipped for projects of any size.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what makes your roofing service different?",
      answer: "We stand out through: 1) Certified expertise in all roofing types, 2) 24/7 emergency availability, 3) Comprehensive service range, 4) Premium material options, 5) Industry-leading warranties. Our focus is on quality and customer satisfaction.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, how do I schedule roofing service?",
      answer: "Booking is easy: 1) Voice command for initial contact, 2) Free consultation scheduling, 3) Flexible appointment times, 4) Emergency same-day service available, 5) Online booking options. We'll respond quickly to arrange your service.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "Voice-Activated Roofing Services",
    serviceName: "Roofing Services",
    serviceType: "voice-roofing-services",
    priceRange: "£££",
    timeRequired: "P3D",
    heroTitle: "All Your Roofing Needs - Just Ask!",
    heroDescription: "Complete roofing services activated by voice - tell your device what you need",
    mainContent: {
      introSection: {
        title: "Just Say: 'I Need a Roofer!'",
        description: "Access our full range of roofing services through your smart device. From repairs to installations, maintenance to emergencies, we're here to help with all your roofing needs.",
        features: [
          "• Comprehensive services",
          "• Expert roofing teams",
          "• Emergency response",
          "• Quality guaranteed"
        ]
      },
      problemSolvingSection: {
        title: "Your Roofing Solutions",
        problems: [
          {
            emoji: "🏠",
            title: "'Need residential roofing'",
            description: "Complete home roofing services",
            features: [
              "New installations",
              "Repairs & maintenance",
              "Emergency service",
              "Inspections"
            ]
          },
          {
            emoji: "🏢",
            title: "'Commercial roofing needed'",
            description: "Business roofing solutions",
            features: [
              "Commercial systems",
              "Industrial roofing",
              "Maintenance plans",
              "Emergency repairs"
            ]
          },
          {
            emoji: "🔧",
            title: "'Emergency roof service'",
            description: "24/7 emergency response",
            features: [
              "Fast response",
              "Damage control",
              "Immediate repairs",
              "Storm damage"
            ]
          },
          {
            emoji: "📋",
            title: "'Schedule roof inspection'",
            description: "Professional roof assessments",
            features: [
              "Detailed inspection",
              "Written reports",
              "Maintenance plans",
              "Issue prevention"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Service Process",
        steps: [
          {
            title: "Initial Contact",
            description: "Easy service access",
            features: [
              "Voice activation",
              "Quick response",
              "Service scheduling",
              "Need assessment"
            ]
          },
          {
            title: "Professional Assessment",
            description: "Expert evaluation",
            features: [
              "Site inspection",
              "Service planning",
              "Cost estimation",
              "Solution proposal"
            ]
          },
          {
            title: "Quality Service",
            description: "Expert execution",
            features: [
              "Skilled teams",
              "Quality materials",
              "Safety focus",
              "Efficient work"
            ]
          },
          {
            title: "Complete Satisfaction",
            description: "Ensuring quality results",
            features: [
              "Final inspection",
              "Quality check",
              "Cleanup completion",
              "Service warranty"
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
