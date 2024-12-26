import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceRoofRepairsLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find roof repairs in ${location}`,
      answer: `Our ${location} repair services include: 1) Emergency repairs for ${county} weather damage, 2) Leak fixes and waterproofing, 3) Tile and slate repairs, 4) Storm damage restoration, 5) Preventive maintenance. Fast response across ${location}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much do roof repairs cost in ${location}?`,
      answer: `${location} repair costs vary: 1) Minor repairs: £150-£400, 2) Leak fixes: £200-£600, 3) Storm damage: £500-£2,000, 4) Emergency service: Additional £100-£200, 5) Major repairs: From £1,000. Prices reflect ${county} market rates.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, how quickly can you repair my roof in ${location}?`,
      answer: `${location} repair response times: 1) Emergency repairs: 2-4 hours in ${county}, 2) Urgent fixes: Same day, 3) Standard repairs: 1-3 days, 4) Major work: 2-5 days, 5) Weather dependent work: Scheduled accordingly. Fast service when you need it.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, what roof repairs do you handle in ${location}?`,
      answer: `We handle all ${location} repairs including: 1) Leak detection and fixing for ${county} properties, 2) Storm damage repair, 3) Tile replacement, 4) Flashing repairs, 5) Structural fixes. Complete repair solutions.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, do you offer emergency roof repairs in ${location}?`,
      answer: `Yes, our ${location} emergency service includes: 1) 24/7 response in ${county}, 2) Rapid damage assessment, 3) Temporary weather protection, 4) Permanent repairs, 5) Insurance documentation. Always here when you need us.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Roof Repairs in ${location}`,
    serviceName: `${location} Roof Repairs`,
    serviceType: "voice-roof-repairs",
    priceRange: "££",
    timeRequired: "P1D",
    heroTitle: `Need Roof Repairs in ${location}? Just Ask!`,
    heroDescription: `Voice-activated roof repair services in ${location} - expert solutions when you need them`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Fix My Roof in ${location}!'`,
        description: `Need professional roof repairs in ${location}? Simply ask your smart device about local repair services, and our experienced ${location} team will fix your roof quickly and effectively.`,
        features: [
          `• ${location} repair experts`,
          "• Emergency service",
          `• ${county} experience`,
          "• Quality guarantees"
        ]
      },
      problemSolvingSection: {
        title: `${location} Repair Solutions`,
        problems: [
          {
            emoji: "💧",
            title: `'${location} roof leak'`,
            description: "Leak repair",
            features: [
              "Leak detection",
              "Quick fixing",
              "Water damage prevent",
              "Future protection"
            ]
          },
          {
            emoji: "🌪️",
            title: `'${location} storm damage'`,
            description: "Storm repair",
            features: [
              "Emergency response",
              "Damage assessment",
              "Quick repairs",
              "Weather protection"
            ]
          },
          {
            emoji: "🏠",
            title: `'${location} tile repair'`,
            description: "Tile fixing",
            features: [
              "Tile replacement",
              "Match existing",
              "Proper fitting",
              "Leak prevention"
            ]
          },
          {
            emoji: "⚡",
            title: `'${location} emergency fix'`,
            description: "Emergency service",
            features: [
              "Fast response",
              "Quick solution",
              "Weather protection",
              "Complete repair"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${location} Repair Process`,
        steps: [
          {
            title: "Initial Assessment",
            description: "Damage evaluation",
            features: [
              "Problem finding",
              "Damage scope",
              "Solution planning",
              "Quote provision"
            ]
          },
          {
            title: "Quick Response",
            description: "Rapid repair",
            features: [
              "Team dispatch",
              "Material prepare",
              "Safety setup",
              "Weather check"
            ]
          },
          {
            title: "Expert Repair",
            description: "Professional fixing",
            features: [
              "Quality work",
              "Proper technique",
              "Material match",
              "Thorough repair"
            ]
          },
          {
            title: "Final Check",
            description: "Quality assurance",
            features: [
              "Repair verify",
              "Water testing",
              "Clean-up check",
              "Future advice"
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

export default VoiceRoofRepairsLocation;
