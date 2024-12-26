import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceRoofReplacementLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, I need a roof replacement in ${location}`,
      answer: `Our ${location} roof replacement service includes: 1) Complete removal by local team, 2) ${county} structure inspection, 3) New underlayment installation, 4) Premium materials suited for ${location} weather, 5) Full local warranty. Our ${location} team handles everything.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much to replace a roof in ${location}?`,
      answer: `${location} replacement costs by type: 1) Asphalt shingles: £5,000-£12,000, 2) Slate roofing: £12,000-£25,000, 3) Clay tiles: £10,000-£20,000, 4) Metal roofing: £8,000-£18,000, 5) Concrete tiles: £7,000-£15,000. Local ${county} rates may vary.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, how long does roof replacement take in ${location}?`,
      answer: `${location} replacement timelines: 1) Average home: 2-4 days, 2) Large ${location} properties: 4-6 days, 3) Complex designs: 5-7 days, 4) Premium materials: 6-8 days, 5) ${county} weather factors: May add 1-2 days. Our local team works efficiently.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, when should I replace my roof in ${location}?`,
      answer: `Consider ${location} roof replacement when: 1) Age: 20+ years in ${county} weather, 2) Multiple local repairs needed, 3) Visible wear from ${location} conditions, 4) Rising energy costs, 5) Storm damage common in ${county}. We provide free local assessments.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, what's included in ${location} roof replacement?`,
      answer: `Complete ${location} replacement includes: 1) Old roof removal and local disposal, 2) ${county} deck inspection, 3) New underlayment for local weather, 4) Quality material installation, 5) ${location} ventilation upgrade. Plus full cleanup and local warranty.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Complete Roof Replacement in ${location}`,
    serviceName: `${location} Roof Replacement`,
    serviceType: "voice-roof-replacement",
    priceRange: "££££",
    timeRequired: "P5D",
    heroTitle: `Need a New Roof in ${location}? Just Ask!`,
    heroDescription: `Voice-activated roof replacement services in ${location} - expert solutions for your home`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Replace My Roof in ${location}!'`,
        description: `Ready for a roof replacement in ${location}? Simply ask your smart device about local roof replacement services, and our ${location} team will guide you through the entire process with expert care.`,
        features: [
          `• Complete ${location} removal`,
          "• Local quality materials",
          `• Expert ${county} installation`,
          "• Local warranties"
        ]
      },
      problemSolvingSection: {
        title: `${location} Replacement Solutions`,
        problems: [
          {
            emoji: "🏠",
            title: `'Old ${location} roof needs replacing'`,
            description: "Complete local replacement",
            features: [
              "Age assessment",
              "System upgrade",
              `${county} materials`,
              "Full warranty"
            ]
          },
          {
            emoji: "💨",
            title: `'${location} storm damage'`,
            description: "Emergency replacement",
            features: [
              "Quick response",
              "Insurance help",
              "Local protection",
              "Quality assurance"
            ]
          },
          {
            emoji: "🌡️",
            title: `'${location} energy upgrade'`,
            description: "Efficiency improvement",
            features: [
              "Local insulation",
              `${county} ventilation`,
              "Energy savings",
              "Green options"
            ]
          },
          {
            emoji: "🏗️",
            title: `'${location} system upgrade'`,
            description: "Complete renovation",
            features: [
              "Local check",
              "Area redesign",
              "Quality materials",
              "Better protection"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${location} Replacement Process`,
        steps: [
          {
            title: "Local Assessment",
            description: "Complete evaluation",
            features: [
              `${location} condition`,
              "Structure check",
              "Need analysis",
              "Option discussion"
            ]
          },
          {
            title: "Area Planning",
            description: "Replacement strategy",
            features: [
              `${county} materials`,
              "Timeline planning",
              "Protection setup",
              "Team coordination"
            ]
          },
          {
            title: "Professional Removal",
            description: "Old roof removal",
            features: [
              "Safe removal",
              "Local disposal",
              "Structure check",
              "Area protection"
            ]
          },
          {
            title: `${location} Installation`,
            description: "New roof fitting",
            features: [
              "Quality materials",
              "Local technique",
              "Detail focus",
              "Final inspection"
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

export default VoiceRoofReplacementLocation;
