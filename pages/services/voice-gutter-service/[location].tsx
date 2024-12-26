import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceGutterServiceLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find gutter services in ${displayLocation}`,
      answer: `Our ${displayLocation} gutter services include: 1) Complete gutter cleaning for ${county} properties, 2) Gutter repairs and maintenance, 3) New gutter installation, 4) Downpipe services, 5) Emergency gutter repairs. Professional service across ${displayLocation}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much does gutter cleaning cost in ${displayLocation}?`,
      answer: `${displayLocation} gutter cleaning costs: 1) Standard house: £60-£100, 2) Large properties: £100-£200, 3) Commercial buildings: Custom quote, 4) Repairs from £80, 5) New installations: From £500. Prices may vary based on ${county} property specifics.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, when should I clean my gutters in ${displayLocation}?`,
      answer: `In ${displayLocation}, we recommend: 1) Autumn cleaning after leaf fall, 2) Spring check after ${county} winter, 3) After major storms, 4) Quarterly for properties near trees, 5) Bi-annual maintenance minimum. Regular checks prevent costly repairs.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, what gutter problems need immediate attention in ${displayLocation}?`,
      answer: `${displayLocation} gutter emergencies include: 1) Overflowing in heavy ${county} rain, 2) Visible sagging or pulling away, 3) Water damage to walls, 4) Blocked downpipes, 5) Ice dam formation in winter. We provide rapid emergency response.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, what gutter materials are best for ${displayLocation}?`,
      answer: `Best gutters for ${displayLocation}'s climate: 1) uPVC: Affordable and durable in ${county} weather, 2) Aluminum: Lightweight and rust-resistant, 3) Cast iron: Traditional for period properties, 4) Seamless aluminum: Minimal leaks, 5) Copper: Premium longevity option.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Gutter Services in ${displayLocation}`,
    serviceName: `${displayLocation} Gutter Services`,
    serviceType: "voice-gutter-service",
    priceRange: "££",
    timeRequired: "P1D",
    heroTitle: `Need Gutter Help in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated gutter services in ${displayLocation} - expert solutions for your property`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Find Gutter Services in ${displayLocation}!'`,
        description: `Need professional gutter services in ${displayLocation}? Simply ask your smart device about local gutter services, and our experienced ${displayLocation} team will help maintain your property's drainage system.`,
        features: [
          `• ${displayLocation} gutter experts`,
          "• Professional cleaning",
          `• ${county} repairs`,
          "• New installations"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Gutter Solutions`,
        problems: [
          {
            emoji: "🧹",
            title: `'Clean ${displayLocation} gutters'`,
            description: "Professional cleaning",
            features: [
              "Complete clear",
              "Debris removal",
              "System flush",
              "Inspection included"
            ]
          },
          {
            emoji: "🔧",
            title: `'Fix ${displayLocation} gutters'`,
            description: "Expert repairs",
            features: [
              "Leak fixing",
              "Alignment correction",
              "Part replacement",
              "System testing"
            ]
          },
          {
            emoji: "🏠",
            title: `'New ${displayLocation} gutters'`,
            description: "Full installation",
            features: [
              "Quality materials",
              "Expert fitting",
              "Perfect alignment",
              "Full warranty"
            ]
          },
          {
            emoji: "⚡",
            title: `'Emergency ${displayLocation} service'`,
            description: "Rapid response",
            features: [
              "Quick arrival",
              "Emergency fixes",
              "Water protection",
              "Problem solving"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${displayLocation} Gutter Process`,
        steps: [
          {
            title: "Initial Assessment",
            description: "System evaluation",
            features: [
              "Visual inspection",
              "Problem identification",
              "Solution planning",
              "Quote provision"
            ]
          },
          {
            title: "Professional Service",
            description: "Expert work",
            features: [
              "Thorough cleaning",
              "Careful repairs",
              "Quality materials",
              "Proper disposal"
            ]
          },
          {
            title: "System Testing",
            description: "Performance check",
            features: [
              "Water flow test",
              "Joint checking",
              "Alignment verify",
              "Function confirm"
            ]
          },
          {
            title: "Final Inspection",
            description: "Quality assurance",
            features: [
              "Complete check",
              "Performance verify",
              "Clean-up confirm",
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

export default VoiceGutterServiceLocation;
