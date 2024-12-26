import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceRoofEstimateLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, get me a roof estimate in ${displayLocation}`,
      answer: `Our ${displayLocation} estimate process includes: 1) Free local consultation, 2) ${displayLocation} area assessment, 3) Detailed cost breakdown, 4) Local material options and pricing, 5) ${county} labor rates. We provide transparent, no-obligation quotes for all ${displayLocation} roofing work.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how do I get a roofing quote in ${displayLocation}?`,
      answer: `Get a ${displayLocation} quote through these steps: 1) Schedule free local consultation, 2) ${displayLocation} property assessment, 3) Material selection for ${county} climate, 4) Detailed estimate within 24 hours, 5) Complete explanation with local expert. No obligation quotes available in ${displayLocation}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what's included in a ${displayLocation} roof estimate?`,
      answer: `Our ${displayLocation} estimates detail: 1) Local material costs, 2) ${county} labor rates, 3) Project timeline for ${displayLocation} area, 4) Additional services needed, 5) Local warranty information. All ${displayLocation} estimates are free and comprehensive.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how long does a roof estimate take in ${displayLocation}?`,
      answer: `${displayLocation} estimate timeline: 1) Initial contact: Same day response, 2) Local assessment: Within 24-48 hours, 3) Property evaluation: 30-60 minutes, 4) Quote preparation: 24 hours, 5) Presentation: 30 minutes. Fast-track options available for ${displayLocation} residents.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, are roof estimates free in ${displayLocation}?`,
      answer: `Our ${displayLocation} estimate service includes: 1) Free consultation with local expert, 2) Detailed ${displayLocation} property inspection, 3) Written quote for your area, 4) Material samples available locally, 5) Expert advice from ${displayLocation} specialists. We believe in transparent, no-obligation pricing.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Quick Roof Estimates & Quotes in ${displayLocation}`,
    serviceName: `${displayLocation} Roof Estimates`,
    serviceType: "voice-roof-estimate",
    priceRange: "FREE",
    timeRequired: "P1D",
    heroTitle: `Need a ${displayLocation} Roof Estimate? Just Ask!`,
    heroDescription: `Voice-activated roofing estimates in ${displayLocation} - get your free local quote today`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Get Me a ${displayLocation} Roof Estimate!'`,
        description: `Need a roofing quote in ${displayLocation}? Simply ask your smart device for a local roof estimate, and we'll provide a comprehensive, free quote for your ${displayLocation} project.`,
        features: [
          `• Free ${displayLocation} consultations`,
          "• Quick local response",
          `• Detailed ${county} quotes`,
          "• Expert local assessments"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Estimate Solutions`,
        problems: [
          {
            emoji: "📋",
            title: `'Need a quick ${displayLocation} quote'`,
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
            title: `'Compare ${displayLocation} prices'`,
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
            title: `'Plan my ${displayLocation} project'`,
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
            title: `'Remote ${displayLocation} quote'`,
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
        title: `Our ${displayLocation} Estimation Process`,
        steps: [
          {
            title: "Local Contact",
            description: "Quick response setup",
            features: [
              `${displayLocation} request`,
              "Basic information",
              "Local scheduling",
              "Area preferences"
            ]
          },
          {
            title: `${displayLocation} Assessment`,
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

// Oxford neighborhoods
const oxfordNeighborhoods = [
  'blackbird-leys',
  'botley',
  'cowley',
  'headington',
  'wolvercote',
  'jericho',
  'marston',
  'rose-hill',
  'iffley',
  'summertown'
];

// Wiltshire special towns
const wiltshireSpecialTowns = [
  'warminster',
  'marlborough',
  'chippenham',
  'devizes',
  'melksham',
  'trowbridge',
  'bradford-on-avon',
  'westbury',
  'calne',
  'salisbury'
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { location: string } }[] = [];

  // Add all main towns from each county
  Object.entries(serviceAreas).forEach(([countyKey, county]) => {
    county.mainTowns.forEach(town => {
      const townSlug = town.toLowerCase().replace(/ /g, '-');
      paths.push({
        params: { location: townSlug }
      });

      // Add Wiltshire special town variants
      if (countyKey === 'wiltshire' && wiltshireSpecialTowns.includes(townSlug)) {
        paths.push({
          params: { location: `${townSlug}-wiltshire` }
        });
      }
    });
  });

  // Add Oxford neighborhoods
  oxfordNeighborhoods.forEach(neighborhood => {
    paths.push({
      params: { location: `${neighborhood}-oxford` }
    });
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const location = params?.location as string;
  
  // Check if this is an Oxford neighborhood
  const isOxfordNeighborhood = oxfordNeighborhoods.some(n => 
    location === `${n}-oxford`
  );
  
  if (isOxfordNeighborhood) {
    const displayLocation = location
      .replace('-oxford', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      props: {
        location,
        county: 'Oxfordshire',
        displayLocation
      }
    };
  }

  // Check if this is a Wiltshire special town
  const isWiltshireSpecial = wiltshireSpecialTowns.some(t => 
    location === `${t}-wiltshire`
  );
  
  if (isWiltshireSpecial) {
    const displayLocation = location
      .replace('-wiltshire', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      props: {
        location,
        county: 'Wiltshire',
        displayLocation
      }
    };
  }

  // Handle regular towns
  let foundLocation = '';
  let foundCounty = '';
  
  Object.entries(serviceAreas).forEach(([_, area]) => {
    area.mainTowns.forEach(town => {
      if (town.toLowerCase().replace(/ /g, '-') === location) {
        foundLocation = town;
        foundCounty = area.name;
      }
    });
  });

  if (!foundLocation) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      location,
      county: foundCounty,
      displayLocation: foundLocation
    }
  };
};

export default VoiceRoofEstimateLocation;
