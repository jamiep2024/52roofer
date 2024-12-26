import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceRoofRepairsLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find roof repairs in ${displayLocation}`,
      answer: `Our ${displayLocation} repair services include: 1) Emergency repairs for ${county} weather damage, 2) Leak fixes and waterproofing, 3) Tile and slate repairs, 4) Storm damage restoration, 5) Preventive maintenance. Fast response across ${displayLocation}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much do roof repairs cost in ${displayLocation}?`,
      answer: `${displayLocation} repair costs vary: 1) Minor repairs: £150-£400, 2) Leak fixes: £200-£600, 3) Storm damage: £500-£2,000, 4) Emergency service: Additional £100-£200, 5) Major repairs: From £1,000. Prices reflect ${county} market rates.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, how quickly can you repair my roof in ${displayLocation}?`,
      answer: `${displayLocation} repair response times: 1) Emergency repairs: 2-4 hours in ${county}, 2) Urgent fixes: Same day, 3) Standard repairs: 1-3 days, 4) Major work: 2-5 days, 5) Weather dependent work: Scheduled accordingly. Fast service when you need it.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, what roof repairs do you handle in ${displayLocation}?`,
      answer: `We handle all ${displayLocation} repairs including: 1) Leak detection and fixing for ${county} properties, 2) Storm damage repair, 3) Tile replacement, 4) Flashing repairs, 5) Structural fixes. Complete repair solutions.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, do you offer emergency roof repairs in ${displayLocation}?`,
      answer: `Yes, our ${displayLocation} emergency service includes: 1) 24/7 response in ${county}, 2) Rapid damage assessment, 3) Temporary weather protection, 4) Permanent repairs, 5) Insurance documentation. Always here when you need us.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Roof Repairs in ${displayLocation}`,
    serviceName: `${displayLocation} Roof Repairs`,
    serviceType: "voice-roof-repairs",
    priceRange: "££",
    timeRequired: "P1D",
    heroTitle: `Need Roof Repairs in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated roof repair services in ${displayLocation} - expert solutions when you need them`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Fix My Roof in ${displayLocation}!'`,
        description: `Need professional roof repairs in ${displayLocation}? Simply ask your smart device about local repair services, and our experienced ${displayLocation} team will fix your roof quickly and effectively.`,
        features: [
          `• ${displayLocation} repair experts`,
          "• Emergency service",
          `• ${county} experience`,
          "• Quality guarantees"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Repair Solutions`,
        problems: [
          {
            emoji: "💧",
            title: `'${displayLocation} roof leak'`,
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
            title: `'${displayLocation} storm damage'`,
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
            title: `'${displayLocation} tile repair'`,
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
            title: `'${displayLocation} emergency fix'`,
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
        title: `Our ${displayLocation} Repair Process`,
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

export default VoiceRoofRepairsLocation;
