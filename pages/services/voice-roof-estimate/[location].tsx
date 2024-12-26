import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceRoofEstimateLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, get me a roof estimate in ${location}`,
      answer: `Our ${location} estimate process includes: 1) Free local consultation, 2) ${location} area assessment, 3) Detailed cost breakdown, 4) Local material options and pricing, 5) ${county} labor rates. We provide transparent, no-obligation quotes for all ${location} roofing work.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how do I get a roofing quote in ${location}?`,
      answer: `Get a ${location} quote through these steps: 1) Schedule free local consultation, 2) ${location} property assessment, 3) Material selection for ${county} climate, 4) Detailed estimate within 24 hours, 5) Complete explanation with local expert. No obligation quotes available in ${location}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what's included in a ${location} roof estimate?`,
      answer: `Our ${location} estimates detail: 1) Local material costs, 2) ${county} labor rates, 3) Project timeline for ${location} area, 4) Additional services needed, 5) Local warranty information. All ${location} estimates are free and comprehensive.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how long does a roof estimate take in ${location}?`,
      answer: `${location} estimate timeline: 1) Initial contact: Same day response, 2) Local assessment: Within 24-48 hours, 3) Property evaluation: 30-60 minutes, 4) Quote preparation: 24 hours, 5) Presentation: 30 minutes. Fast-track options available for ${location} residents.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, are roof estimates free in ${location}?`,
      answer: `Our ${location} estimate service includes: 1) Free consultation with local expert, 2) Detailed ${location} property inspection, 3) Written quote for your area, 4) Material samples available locally, 5) Expert advice from ${location} specialists. We believe in transparent, no-obligation pricing.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Quick Roof Estimates & Quotes in ${location}`,
    serviceName: `${location} Roof Estimates`,
    serviceType: "voice-roof-estimate",
    priceRange: "FREE",
    timeRequired: "P1D",
    heroTitle: `Need a ${location} Roof Estimate? Just Ask!`,
    heroDescription: `Voice-activated roofing estimates in ${location} - get your free local quote today`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Get Me a ${location} Roof Estimate!'`,
        description: `Need a roofing quote in ${location}? Simply ask your smart device for a local roof estimate, and we'll provide a comprehensive, free quote for your ${location} project.`,
        features: [
          `• Free ${location} consultations`,
          "• Quick local response",
          `• Detailed ${county} quotes`,
          "• Expert local assessments"
        ]
      },
      problemSolvingSection: {
        title: `${location} Estimate Solutions`,
        problems: [
          {
            emoji: "📋",
            title: `'Need a quick ${location} quote'`,
            description: "Local estimate service",
            features: [
              "Same-day response",
              "Local options",
              "Fast turnaround",
              "Area pricing"
            ]
          },
          {
            emoji: "💰",
            title: `'Compare ${location} prices'`,
            description: "Local cost comparison",
            features: [
              "Area materials",
              "Local labor",
              "Timeline factors",
              "Budget options"
            ]
          },
          {
            emoji: "🏠",
            title: `'Plan my ${location} project'`,
            description: "Local project estimation",
            features: [
              "Area timeline",
              "Local costs",
              "Material selection",
              "Work scheduling"
            ]
          },
          {
            emoji: "📱",
            title: `'Remote ${location} quote'`,
            description: "Virtual local estimation",
            features: [
              "Online assessment",
              "Photo evaluation",
              "Digital quotes",
              "Remote consulting"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${location} Estimation Process`,
        steps: [
          {
            title: "Local Contact",
            description: "Quick response setup",
            features: [
              `${location} request`,
              "Basic information",
              "Local scheduling",
              "Area preferences"
            ]
          },
          {
            title: `${location} Assessment`,
            description: "Local evaluation",
            features: [
              "Property inspection",
              "Local measurements",
              "Condition check",
              "Need identification"
            ]
          },
          {
            title: "Local Quote",
            description: "Area-specific estimation",
            features: [
              "Material costing",
              `${county} rates`,
              "Timeline planning",
              "Option listing"
            ]
          },
          {
            title: "Quote Review",
            description: "Clear explanation",
            features: [
              "Cost breakdown",
              "Local options",
              "Question answering",
              "Next steps"
            ]
          }
        ]
      }
    },
    initialFAQs: initialFAQs
  };

  return <ConversationalRoofingTemplate config={pageConfig} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(locationData).map(location => ({
    params: { location }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const location = params?.location as string;
  const locationInfo = locationData[location];

  if (!locationInfo) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      location: locationInfo.name,
      county: locationInfo.county
    }
  };
};

export default VoiceRoofEstimateLocation;
