import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceRoofInspectionLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find roof inspection in ${location}`,
      answer: `Our ${location} roof inspections include: 1) Complete ${county} property assessment, 2) Structural integrity checks, 3) Weather damage evaluation, 4) Leak detection, 5) Detailed report with photos. Expert inspections across ${location}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much is a roof inspection in ${location}?`,
      answer: `${location} inspection costs: 1) Standard inspection: £150-£250, 2) Detailed survey: £250-£350, 3) Drone inspection: £300-£400, 4) Emergency inspection: From £200, 5) Commercial properties: Custom quote. Prices reflect ${county} market rates.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, when should I get my roof inspected in ${location}?`,
      answer: `In ${location}, we recommend inspections: 1) After ${county} winter, 2) Before autumn storms, 3) Post severe weather, 4) Every 2-3 years minimum, 5) Before property purchase. Regular checks prevent costly repairs.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, what's included in a ${location} roof inspection?`,
      answer: `Our ${location} inspections check: 1) Structural integrity for ${county} conditions, 2) Water damage signs, 3) Ventilation systems, 4) Flashing and seals, 5) Gutter functionality. Complete documentation provided.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, how long does a roof inspection take in ${location}?`,
      answer: `${location} inspection timelines: 1) Standard home: 1-2 hours, 2) Large ${county} properties: 2-3 hours, 3) Detailed surveys: 2-4 hours, 4) Report preparation: 24-48 hours, 5) Emergency checks: Same day. Thorough but efficient service.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Roof Inspections in ${location}`,
    serviceName: `${location} Roof Inspection`,
    serviceType: "voice-roof-inspection",
    priceRange: "££",
    timeRequired: "P1D",
    heroTitle: `Need a Roof Inspection in ${location}? Just Ask!`,
    heroDescription: `Voice-activated roof inspection services in ${location} - expert assessment of your property`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Inspect My Roof in ${location}!'`,
        description: `Need a professional roof inspection in ${location}? Simply ask your smart device about local roof inspection services, and our experienced ${location} team will provide a thorough assessment.`,
        features: [
          `• ${location} inspection experts`,
          "• Detailed reports",
          `• ${county} experience`,
          "• Professional advice"
        ]
      },
      problemSolvingSection: {
        title: `${location} Inspection Solutions`,
        problems: [
          {
            emoji: "🔍",
            title: `'Check ${location} roof'`,
            description: "Complete inspection",
            features: [
              "Visual check",
              "Structure review",
              "Problem finding",
              "Report creation"
            ]
          },
          {
            emoji: "💧",
            title: `'${location} leak check'`,
            description: "Leak detection",
            features: [
              "Water tracking",
              "Damage assessment",
              "Source finding",
              "Solution planning"
            ]
          },
          {
            emoji: "📋",
            title: `'${location} roof survey'`,
            description: "Detailed survey",
            features: [
              "Full assessment",
              "Photo evidence",
              "Measurement taking",
              "Report writing"
            ]
          },
          {
            emoji: "⚡",
            title: `'Emergency ${location} check'`,
            description: "Urgent inspection",
            features: [
              "Quick response",
              "Problem finding",
              "Immediate report",
              "Action planning"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${location} Inspection Process`,
        steps: [
          {
            title: "Initial Assessment",
            description: "External review",
            features: [
              "Ground inspection",
              "Visual assessment",
              "Issue spotting",
              "Access planning"
            ]
          },
          {
            title: "Detailed Inspection",
            description: "Close examination",
            features: [
              "Roof access",
              "Structure check",
              "Problem finding",
              "Photo taking"
            ]
          },
          {
            title: "Internal Check",
            description: "Inside inspection",
            features: [
              "Loft inspection",
              "Leak checking",
              "Structure review",
              "Damage assessment"
            ]
          },
          {
            title: "Report Creation",
            description: "Documentation",
            features: [
              "Finding summary",
              "Photo evidence",
              "Recommendation list",
              "Cost estimates"
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

export default VoiceRoofInspectionLocation;
