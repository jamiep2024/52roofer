import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceFlatRoof: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, I need flat roof repair",
      answer: "Our flat roof services include: 1) EPDM rubber installation, 2) Built-up felt repairs, 3) Fibreglass GRP systems, 4) Liquid waterproofing, 5) Thermal insulation upgrades. We handle all flat roof types with expert precision.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, what's the best flat roof material?",
      answer: "Top flat roofing materials include: 1) EPDM: 50+ year lifespan, excellent durability, 2) Fibreglass GRP: 30+ years, great for foot traffic, 3) Modified bitumen: Cost-effective, easy repairs, 4) PVC: Energy-efficient, weather-resistant, 5) TPO: UV-resistant, environmentally friendly.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how much does a flat roof cost?",
      answer: "Flat roof costs vary by material: 1) EPDM rubber: £80-£100/m², 2) Fibreglass GRP: £90-£120/m², 3) Built-up felt: £60-£80/m², 4) PVC membrane: £70-£90/m², 5) TPO system: £75-£95/m². Includes professional installation.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, how long do flat roofs last?",
      answer: "Flat roof lifespans by type: 1) EPDM rubber: 40-50 years, 2) Fibreglass GRP: 25-30 years, 3) Built-up felt: 15-20 years, 4) PVC membrane: 20-30 years, 5) TPO system: 20-25 years. Proper maintenance extends lifespan.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, are flat roofs good?",
      answer: "Flat roof benefits include: 1) Cost-effective installation, 2) Easy maintenance access, 3) Additional usable space creation, 4) Modern architectural appeal, 5) Solar panel compatibility. Perfect for many property types with proper installation.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "Expert Flat Roof Services",
    serviceName: "Flat Roofing",
    serviceType: "voice-flat-roof",
    priceRange: "£££",
    timeRequired: "P3D",
    heroTitle: "Need Flat Roof Help? Just Ask!",
    heroDescription: "Voice-activated flat roofing services - expert solutions for all flat roof needs",
    mainContent: {
      introSection: {
        title: "Just Say: 'Help With My Flat Roof!'",
        description: "Need flat roofing expertise? Simply ask your smart device about flat roof services, and we'll provide professional solutions for installation, repair, or maintenance.",
        features: [
          "• Multiple material options",
          "• Expert installation",
          "• Professional repairs",
          "• Quality guarantees"
        ]
      },
      problemSolvingSection: {
        title: "Flat Roof Solutions",
        problems: [
          {
            emoji: "🏢",
            title: "'New flat roof needed'",
            description: "Complete installation",
            features: [
              "Material choice",
              "Expert fitting",
              "Insulation options",
              "Drainage design"
            ]
          },
          {
            emoji: "💧",
            title: "'Flat roof leaking'",
            description: "Professional repairs",
            features: [
              "Leak detection",
              "Swift repairs",
              "Waterproofing",
              "Prevention measures"
            ]
          },
          {
            emoji: "🔄",
            title: "'Replace flat roof'",
            description: "Full replacement",
            features: [
              "System upgrade",
              "Modern materials",
              "Better insulation",
              "Enhanced drainage"
            ]
          },
          {
            emoji: "🛠️",
            title: "'Maintain flat roof'",
            description: "Regular maintenance",
            features: [
              "Health checks",
              "Preventive care",
              "Drainage clearing",
              "Surface cleaning"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Flat Roof Process",
        steps: [
          {
            title: "Initial Survey",
            description: "Detailed assessment",
            features: [
              "Condition check",
              "Measurement taking",
              "Problem identification",
              "Material discussion"
            ]
          },
          {
            title: "Solution Design",
            description: "Tailored planning",
            features: [
              "System selection",
              "Drainage planning",
              "Insulation design",
              "Detail planning"
            ]
          },
          {
            title: "Expert Installation",
            description: "Professional fitting",
            features: [
              "Surface preparation",
              "Material laying",
              "Detail work",
              "Quality checks"
            ]
          },
          {
            title: "Final Inspection",
            description: "Quality assurance",
            features: [
              "Thorough checking",
              "Water testing",
              "Detail inspection",
              "Guarantee provision"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default VoiceFlatRoof;
