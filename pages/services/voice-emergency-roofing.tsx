import React from 'react';
import ConversationalRoofingTemplate from '../../components/templates/conversational-roofing-template';

const VoiceEmergencyRoofing: React.FC = () => {
  const initialFAQs = [
    {
      question: "Hey Google, I need emergency roof repair",
      answer: "Our 24/7 emergency roofing services include: 1) Immediate leak response, 2) Storm damage repairs, 3) Temporary protective measures, 4) Structural stabilization, 5) Water damage prevention. We'll dispatch a team quickly to prevent further damage.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Alexa, how fast can I get emergency roof repair?",
      answer: "Our emergency response times: 1) Initial phone response: Within 15 minutes, 2) Emergency assessment: 1-2 hours, 3) Temporary repairs: 2-4 hours, 4) Emergency team dispatch: Immediate, 5) 24/7 availability including weekends and holidays. We prioritize emergency calls.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "OK Google, what's covered in emergency roof repair?",
      answer: "Emergency services cover: 1) Storm damage assessment, 2) Temporary waterproofing, 3) Structural support installation, 4) Emergency leak repairs, 5) Debris removal and securing. We handle all urgent roofing situations to protect your property.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Siri, how much is emergency roof repair?",
      answer: "Emergency repair costs vary: 1) Emergency call-out: £200-£400, 2) Temporary repairs: £300-£800, 3) Storm damage fixes: £500-£2,000, 4) Emergency tarping: £400-£700, 5) After-hours service: Additional £100-£200. Insurance may cover costs.",
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: "Hey Google, do you handle storm roof damage?",
      answer: "We handle all storm damage emergencies: 1) Wind damage assessment, 2) Emergency water diversion, 3) Temporary covering installation, 4) Structural stabilization, 5) Insurance documentation support. Available 24/7 for storm-related emergencies.",
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: "24/7 Emergency Roof Repair",
    serviceName: "Emergency Roofing",
    serviceType: "voice-emergency-roofing",
    priceRange: "£££",
    timeRequired: "P1D",
    heroTitle: "Emergency Roof Help? Just Ask!",
    heroDescription: "Voice-activated emergency roofing services - available 24/7",
    mainContent: {
      introSection: {
        title: "Just Say: 'I Need Emergency Roof Repair!'",
        description: "Experiencing a roofing emergency? Simply ask your smart device for emergency roof repair, and we'll respond immediately with our 24/7 emergency services.",
        features: [
          "• 24/7 emergency response",
          "• Rapid damage assessment",
          "• Immediate temporary repairs",
          "• Storm damage specialists"
        ]
      },
      problemSolvingSection: {
        title: "Emergency Roofing Solutions",
        problems: [
          {
            emoji: "🌧️",
            title: "'Help, my roof is leaking!'",
            description: "Immediate leak response",
            features: [
              "Rapid assessment",
              "Water diversion",
              "Temporary sealing",
              "Damage prevention"
            ]
          },
          {
            emoji: "🌪️",
            title: "'Storm damaged my roof'",
            description: "Storm damage repair",
            features: [
              "Emergency tarping",
              "Debris removal",
              "Structure securing",
              "Weather protection"
            ]
          },
          {
            emoji: "⚡",
            title: "'Need urgent roof repair'",
            description: "Rapid repair service",
            features: [
              "Quick response",
              "Priority service",
              "24/7 availability",
              "Emergency team"
            ]
          },
          {
            emoji: "🏠",
            title: "'Protect my property now'",
            description: "Immediate protection",
            features: [
              "Property securing",
              "Content protection",
              "Weather defense",
              "Safety measures"
            ]
          }
        ]
      },
      processSection: {
        title: "Our Emergency Response Process",
        steps: [
          {
            title: "Immediate Response",
            description: "24/7 emergency contact",
            features: [
              "Phone assessment",
              "Priority scheduling",
              "Team dispatch",
              "Initial guidance"
            ]
          },
          {
            title: "Emergency Assessment",
            description: "Rapid situation evaluation",
            features: [
              "Damage inspection",
              "Safety check",
              "Solution planning",
              "Cost estimation"
            ]
          },
          {
            title: "Immediate Action",
            description: "Emergency repairs begin",
            features: [
              "Water diversion",
              "Temporary repairs",
              "Structure securing",
              "Content protection"
            ]
          },
          {
            title: "Follow-up Care",
            description: "Ongoing support",
            features: [
              "Repair monitoring",
              "Weather watching",
              "Further assessment",
              "Permanent solutions"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export default VoiceEmergencyRoofing;
