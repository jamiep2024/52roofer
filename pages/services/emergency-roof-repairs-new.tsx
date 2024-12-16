import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const EmergencyRoofRepairsNew: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, how quickly can you fix my leaking roof?",
      answer: "We provide rapid emergency response within 1-2 hours in most areas. Our process includes: 1) Immediate temporary repairs to prevent further damage, 2) Full assessment of the leak source, 3) Permanent repair solution, usually completed within 2-4 hours for standard leaks. We're available 24/7 for emergency calls and carry essential materials for most common repairs.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, what's the cost of emergency roof repair?",
      answer: "Emergency roof repair costs typically range from: 1) Minor leaks: £150-£300, 2) Storm damage: £300-£800, 3) Major emergency repairs: £800-£2000. The final cost depends on factors like damage extent, required materials, and time of call-out. We provide upfront pricing and can work directly with insurance companies for storm damage claims.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, what should I do while waiting for emergency roof repair?",
      answer: "Take these immediate steps: 1) Place buckets under leaks to collect water, 2) Move valuable items away from affected areas, 3) Take photos for insurance if safe to do so, 4) Turn off electricity in affected areas if water is near wiring, 5) Cover furniture with plastic sheets. We'll guide you through these steps when you call and arrive quickly to prevent further damage.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, do you handle storm damage roof repairs?",
      answer: "Yes, we specialize in storm damage repairs including: 1) Emergency temporary repairs during storms, 2) Full damage assessment once weather permits, 3) Insurance claim documentation and support, 4) Permanent repairs with storm-resistant materials. We're equipped for all weather conditions and can provide immediate response during severe weather events.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, are emergency roof repairs covered by insurance?",
      answer: "Most insurance policies cover emergency roof repairs caused by: 1) Storm damage, 2) Fallen trees or debris, 3) Sudden accidents, 4) Natural disasters. We can: Help assess if damage is likely covered, Document everything for your claim, Work directly with insurance adjusters, Provide detailed quotes and invoices. We recommend checking your specific policy and we'll help guide you through the claims process.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "24/7 Emergency Roof Repairs",
    serviceName: "Emergency Roof Repairs",
    serviceType: "emergency-roof-repairs-new",
    priceRange: "££",
    timeRequired: "PT2H",
    heroTitle: "Urgent Roof Problems? Just Ask!",
    heroDescription: "Voice-activated emergency roof repairs - available 24/7 for urgent fixes",
    initialFAQs,
    mainContent: {
      introSection: {
        title: "Just Say: 'Help, My Roof is Leaking!'",
        description: "Whether you're dealing with storm damage, seeing water stains, or hearing drips, we're here to help 24/7. Simply ask your smart device to find emergency roof repairs, and we'll respond immediately with professional solutions.",
        features: [
          "• 24/7 emergency response",
          "• Rapid damage assessment",
          "• Immediate temporary repairs",
          "• Long-term solutions"
        ]
      },
      problemSolvingSection: {
        title: "Emergency Roofing Solutions",
        problems: [
          {
            emoji: "💧",
            title: "'My ceiling has water stains'",
            description: "Expert leak detection and repair",
            features: [
              "Advanced leak detection",
              "Internal damage assessment",
              "Moisture testing",
              "Preventive solutions"
            ]
          },
          {
            emoji: "🌪️",
            title: "'Storm damaged my roof'",
            description: "Immediate storm damage repairs",
            features: [
              "Emergency weatherproofing",
              "Structural assessment",
              "Insurance documentation",
              "Storm-proof upgrades"
            ]
          },
          {
            emoji: "🏗️",
            title: "'Missing tiles after wind'",
            description: "Fast tile replacement service",
            features: [
              "Exact tile matching",
              "Secure installation",
              "Wind resistance check",
              "Full roof inspection"
            ]
          },
          {
            emoji: "❄️",
            title: "'Ice dam causing leaks'",
            description: "Winter emergency solutions",
            features: [
              "Ice dam removal",
              "Heat cable installation",
              "Insulation check",
              "Ventilation improvement"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Emergency Response Process",
        steps: [
          {
            title: "Immediate Response",
            description: "24/7 emergency call-out service",
            features: [
              "1-2 hour response time",
              "Initial phone assessment",
              "Priority scheduling",
              "Emergency team dispatch"
            ]
          },
          {
            title: "Rapid Assessment",
            description: "Quick but thorough damage evaluation",
            features: [
              "Visual inspection",
              "Leak detection",
              "Damage documentation",
              "Immediate action plan"
            ]
          },
          {
            title: "Emergency Repairs",
            description: "Fast and effective emergency fixes",
            features: [
              "Temporary weatherproofing",
              "Critical repairs",
              "Water damage prevention",
              "Safety measures"
            ]
          },
          {
            title: "Follow-up Care",
            description: "Ensuring long-term protection",
            features: [
              "Permanent repairs",
              "Preventive measures",
              "Future recommendations",
              "Maintenance plan"
            ]
          }
        ]
      }
    }
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default EmergencyRoofRepairsNew;
