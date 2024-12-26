import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceRoofMaintenance: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, find roof maintenance services",
      answer: "We provide comprehensive roof maintenance including: 1) Regular inspections, 2) Preventive maintenance, 3) Gutter cleaning, 4) Minor repairs, 5) Maintenance programs. Our services extend roof life and prevent costly issues.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how much does roof maintenance cost?",
      answer: "Maintenance costs vary by service: 1) Regular inspection: £150-£300, 2) Gutter cleaning: £100-£200, 3) Minor repairs: £200-£500, 4) Annual maintenance program: £400-£800, 5) Preventive care: £300-£600. We offer customized maintenance plans.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, how often should I maintain my roof?",
      answer: "Recommended maintenance schedule: 1) Professional inspection: Twice yearly, 2) Gutter cleaning: Every 3-6 months, 3) Minor repairs: As needed, 4) Full assessment: After storms, 5) Moss treatment: Annually. Regular maintenance prevents major issues.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, what does roof maintenance include?",
      answer: "Our maintenance services include: 1) Visual inspection of all components, 2) Gutter and downpipe cleaning, 3) Moss and debris removal, 4) Minor repair identification, 5) Preventive treatments. We provide detailed reports after each service.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, do you offer maintenance plans?",
      answer: "Yes, we offer flexible maintenance plans: 1) Basic inspection plan, 2) Comprehensive care program, 3) Commercial maintenance, 4) Seasonal service packages, 5) Custom programs. All plans include regular inspections and priority service.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const relatedServices = [
    {
      title: "Voice Roof Inspection",
      path: "/services/voice-roof-inspection",
      description: "Professional roof inspections through voice commands"
    },
    {
      title: "Voice Roof Repairs",
      path: "/services/voice-roof-repairs",
      description: "Expert repair services via voice activation"
    },
    {
      title: "Voice Gutter Services",
      path: "/services/voice-gutter-service",
      description: "Complete gutter maintenance solutions"
    },
    {
      title: "Voice Roof Ventilation",
      path: "/services/voice-roof-ventilation",
      description: "Professional ventilation services and maintenance"
    }
  ];

  const pageConfig = {
    title: "Professional Roof Maintenance",
    serviceName: "Roof Maintenance",
    serviceType: "voice-roof-maintenance",
    priceRange: "££",
    timeRequired: "P1D",
    heroTitle: "Need Roof Maintenance? Just Ask!",
    heroDescription: "Voice-activated roof maintenance services - tell your device what you need",
    mainContent: {
      introSection: {
        title: "Just Say: 'Schedule Roof Maintenance!'",
        description: "Access professional roof maintenance services through your smart device. From regular inspections to preventive care, we help extend your roof's life and prevent costly issues.",
        features: [
          "• Regular inspections",
          "• Preventive care",
          "• Quick response",
          "• Expert teams"
        ]
      },
      problemSolvingSection: {
        title: "Maintenance Solutions",
        problems: [
          {
            emoji: "📋",
            title: "'Need roof inspection'",
            description: "Comprehensive checks",
            features: [
              "Full assessment",
              "Problem detection",
              "Written reports",
              "Recommendations"
            ]
          },
          {
            emoji: "🧹",
            title: "'Gutter cleaning needed'",
            description: "Complete cleaning",
            features: [
              "Debris removal",
              "Downpipe clearing",
              "Flow testing",
              "Minor repairs"
            ]
          },
          {
            emoji: "🌿",
            title: "'Moss removal'",
            description: "Treatment service",
            features: [
              "Safe removal",
              "Prevention treatment",
              "Surface cleaning",
              "Protection"
            ]
          },
          {
            emoji: "🔄",
            title: "'Regular maintenance'",
            description: "Ongoing care",
            features: [
              "Scheduled visits",
              "Preventive care",
              "Issue prevention",
              "Documentation"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Maintenance Process",
        steps: [
          {
            title: "Initial Assessment",
            description: "Complete evaluation",
            features: [
              "Visual inspection",
              "Issue identification",
              "Photo documentation",
              "Report creation"
            ]
          },
          {
            title: "Service Planning",
            description: "Maintenance strategy",
            features: [
              "Plan development",
              "Schedule setting",
              "Priority listing",
              "Cost estimation"
            ]
          },
          {
            title: "Professional Service",
            description: "Expert maintenance",
            features: [
              "Thorough cleaning",
              "Minor repairs",
              "Preventive care",
              "Quality checks"
            ]
          },
          {
            title: "Documentation",
            description: "Complete records",
            features: [
              "Service report",
              "Photo evidence",
              "Recommendations",
              "Future planning"
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

export default VoiceRoofMaintenance;
