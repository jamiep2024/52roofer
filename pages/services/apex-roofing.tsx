import React from "react";
import ConversationalRoofingTemplate from "../../components/templates/conversational-roofing-template";

const ApexRoofing: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, what is an apex roof?",
      answer:
        "An apex roof is a traditional pitched roof design that offers several benefits: 1) Inverted V-shape for optimal drainage, 2) Excellent for residential properties, 3) Maximum attic space utilization, 4) Enhanced ventilation properties, 5) Classic architectural appeal.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: "Alexa, what are the benefits of an apex roof?",
      answer:
        "Apex roofs provide multiple advantages: 1) Superior water and snow drainage, 2) Increased attic and living space, 3) Improved natural ventilation, 4) Enhanced architectural appeal, 5) Better energy efficiency through improved insulation options.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: "OK Google, how long does apex roof installation take?",
      answer:
        "Apex roof installation timeline varies by project: 1) Standard residential installation: 3-4 days, 2) Complex designs: 4-5 days, 3) Large properties: 5-7 days, 4) Weather delays: +1-2 days, 5) Additional features: +1-3 days.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: "Siri, what materials are best for apex roofs?",
      answer:
        "We offer various premium materials for apex roofs: 1) Slate: 100+ years lifespan, premium look, 2) Clay tiles: 60+ years, traditional appeal, 3) Concrete tiles: 50+ years, cost-effective, 4) High-quality asphalt shingles: 30+ years, versatile, 5) Metal roofing: 50+ years, modern efficiency.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
    {
      question: "Hey Google, how long does an apex roof last?",
      answer:
        "Apex roof longevity depends on materials and maintenance: 1) Slate roofs: 100+ years, 2) Clay/concrete tiles: 50-60 years, 3) Metal roofing: 40-70 years, 4) Premium asphalt shingles: 25-30 years, 5) Regular maintenance extends lifespan by 20-30%.",
      views: 0,
      lastUpdated: new Date().toISOString(),
    },
  ];

  const pageConfig = {
    title: "Expert Apex Roofing Services",
    serviceName: "Apex Roofing",
    serviceType: "voice-apex-roofing",
    priceRange: "£££",
    timeRequired: "P4D",
    heroTitle: "Need an Apex Roof? Just Ask!",
    heroDescription:
      "Voice-activated apex roofing services - traditional style meets modern convenience",
    mainContent: {
      introSection: {
        title: "Just Say: 'Install My Apex Roof!'",
        description:
          "Looking for expert apex roofing services? Whether you need a new installation or replacement, we connect you with skilled professionals who specialize in apex and pitched roof solutions. Simply ask your smart device to find apex roofing services.",
        features: [
          "• Expert installation teams",
          "• Premium materials",
          "• Custom designs",
          "• Quality assurance",
        ],
      },
      problemSolvingSection: {
        title: "Your Apex Roofing Solutions",
        problems: [
          {
            emoji: "🏠",
            title: "'I need apex roof installation'",
            description: "Expert installation of apex and pitched roofs",
            features: [
              "Professional installation",
              "Quality materials",
              "Building code compliance",
              "Warranty coverage",
            ],
          },
          {
            emoji: "📐",
            title: "'Want custom roof design'",
            description: "Custom apex roof design and planning",
            features: [
              "Architectural planning",
              "Style customization",
              "Material selection",
              "3D visualization",
            ],
          },
          {
            emoji: "💧",
            title: "'Need better drainage'",
            description: "Optimal water and snow management",
            features: [
              "Proper pitch design",
              "Gutter integration",
              "Drainage planning",
              "Weather protection",
            ],
          },
          {
            emoji: "🏰",
            title: "'Looking for aesthetic appeal'",
            description: "Enhanced architectural appearance",
            features: [
              "Traditional styling",
              "Modern options",
              "Color selection",
              "Finishing touches",
            ],
          },
        ],
      },
      processSection: {
        title: "Our Installation Process",
        steps: [
          {
            title: "Initial Consultation",
            description: "Project planning and design",
            features: [
              "Site assessment",
              "Style consultation",
              "Material options",
              "Cost estimation",
            ],
          },
          {
            title: "Design & Planning",
            description: "Detailed project preparation",
            features: [
              "Technical drawings",
              "Material ordering",
              "Schedule planning",
              "Permit handling",
            ],
          },
          {
            title: "Professional Installation",
            description: "Expert construction work",
            features: [
              "Safety setup",
              "Structure preparation",
              "Material installation",
              "Quality checks",
            ],
          },
          {
            title: "Final Inspection",
            description: "Ensuring perfect results",
            features: [
              "Structural review",
              "Aesthetic check",
              "Cleanup completion",
              "Warranty provision",
            ],
          },
        ],
      },
    },
    initialFAQs: initialFAQs,
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default ApexRoofing;
