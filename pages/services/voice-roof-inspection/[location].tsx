import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceRoofInspectionLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find roof inspection in ${displayLocation}`,
      answer: `Our ${displayLocation} roof inspections include: 1) Complete ${county} property assessment, 2) Structural integrity checks, 3) Weather damage evaluation, 4) Leak detection, 5) Detailed report with photos. Expert inspections across ${displayLocation}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much is a roof inspection in ${displayLocation}?`,
      answer: `${displayLocation} inspection costs: 1) Standard inspection: £150-£250, 2) Detailed survey: £250-£350, 3) Drone inspection: £300-£400, 4) Emergency inspection: From £200, 5) Commercial properties: Custom quote. Prices reflect ${county} market rates.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, when should I get my roof inspected in ${displayLocation}?`,
      answer: `In ${displayLocation}, we recommend inspections: 1) After ${county} winter, 2) Before autumn storms, 3) Post severe weather, 4) Every 2-3 years minimum, 5) Before property purchase. Regular checks prevent costly repairs.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, what's included in a ${displayLocation} roof inspection?`,
      answer: `Our ${displayLocation} inspections check: 1) Structural integrity for ${county} conditions, 2) Water damage signs, 3) Ventilation systems, 4) Flashing and seals, 5) Gutter functionality. Complete documentation provided.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, how long does a roof inspection take in ${displayLocation}?`,
      answer: `${displayLocation} inspection timelines: 1) Standard home: 1-2 hours, 2) Large ${county} properties: 2-3 hours, 3) Detailed surveys: 2-4 hours, 4) Report preparation: 24-48 hours, 5) Emergency checks: Same day. Thorough but efficient service.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Roof Inspections in ${displayLocation}`,
    serviceName: `${displayLocation} Roof Inspection`,
    serviceType: "voice-roof-inspection",
    priceRange: "££",
    timeRequired: "P1D",
    heroTitle: `Need a Roof Inspection in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated roof inspection services in ${displayLocation} - expert assessment of your property`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Inspect My Roof in ${displayLocation}!'`,
        description: `Need a professional roof inspection in ${displayLocation}? Simply ask your smart device about local roof inspection services, and our experienced ${displayLocation} team will provide a thorough assessment.`,
        features: [
          `• ${displayLocation} inspection experts`,
          "• Detailed reports",
          `• ${county} experience`,
          "• Professional advice"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Inspection Solutions`,
        problems: [
          {
            emoji: "🔍",
            title: `'Check ${displayLocation} roof'`,
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
            title: `'${displayLocation} leak check'`,
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
            title: `'${displayLocation} roof survey'`,
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
            title: `'Emergency ${displayLocation} check'`,
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
        title: `Our ${displayLocation} Inspection Process`,
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

export default VoiceRoofInspectionLocation;
