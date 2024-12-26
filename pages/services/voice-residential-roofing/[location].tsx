import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceResidentialRoofingLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find residential roofing in ${displayLocation}`,
      answer: `Our ${displayLocation} residential roofing services include: 1) Complete home roof installations suited for ${county} weather, 2) Residential repairs and maintenance, 3) Attic ventilation solutions, 4) Gutter systems, 5) Chimney and skylight work. Expert service for ${displayLocation} homes.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, what's the cost of residential roofing in ${displayLocation}?`,
      answer: `${displayLocation} residential roofing costs vary by type: 1) Standard tiles: £5,000-£8,000, 2) Slate roofing: £9,000-£18,000, 3) Flat roofs: £3,000-£6,000, 4) Repairs: From £250, 5) Maintenance: From £150. Prices reflect ${county} market rates.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what residential roof types are best for ${displayLocation}?`,
      answer: `Best residential roofs for ${displayLocation}'s climate: 1) Clay tiles: Perfect for ${county} weather, 2) Slate: Traditional and durable, 3) Concrete tiles: Cost-effective protection, 4) Modern composites: Great performance, 5) Metal roofing: Long-lasting option. All suited to local conditions.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how long does residential roofing take in ${displayLocation}?`,
      answer: `${displayLocation} residential project timelines: 1) Average home: 2-3 days, 2) Large properties: 3-5 days, 3) Complex designs: 4-6 days, 4) Weather factors in ${county}: May add 1-2 days, 5) Repairs: Usually 1 day. We work efficiently while ensuring quality.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, what residential roofing services do you offer in ${displayLocation}?`,
      answer: `Our ${displayLocation} residential services include: 1) Full roof replacements tailored to ${county} homes, 2) Repairs and maintenance, 3) Emergency response, 4) Insulation upgrades, 5) Ventilation improvements. Complete home roofing solutions.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Expert Residential Roofing in ${displayLocation}`,
    serviceName: `${displayLocation} Residential Roofing`,
    serviceType: "voice-residential-roofing",
    priceRange: "£££",
    timeRequired: "P3D",
    heroTitle: `Need Residential Roofing in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated residential roofing services in ${displayLocation} - expert solutions for your home`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Find Residential Roofing in ${displayLocation}!'`,
        description: `Looking for residential roofing expertise in ${displayLocation}? Simply ask your smart device about local residential roofing services, and our experienced ${displayLocation} team will help protect your home.`,
        features: [
          `• ${displayLocation} home experts`,
          "• Quality materials",
          `• ${county} experience`,
          "• Full warranties"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Residential Solutions`,
        problems: [
          {
            emoji: "🏠",
            title: `'New ${displayLocation} home roof'`,
            description: "Complete installation",
            features: [
              "Quality materials",
              "Expert fitting",
              "Local knowledge",
              "Full warranty"
            ]
          },
          {
            emoji: "🔧",
            title: `'${displayLocation} roof repairs'`,
            description: "Professional repairs",
            features: [
              "Quick response",
              "Expert fixes",
              "Quality materials",
              "Lasting solutions"
            ]
          },
          {
            emoji: "🌡️",
            title: `'${displayLocation} roof upgrade'`,
            description: "System improvements",
            features: [
              "Better insulation",
              "Modern materials",
              "Energy efficiency",
              "Added value"
            ]
          },
          {
            emoji: "⚡",
            title: `'${displayLocation} emergency help'`,
            description: "Emergency service",
            features: [
              "Fast response",
              "Quick repairs",
              "Weather protection",
              "Problem solving"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${displayLocation} Residential Process`,
        steps: [
          {
            title: "Home Assessment",
            description: "Property evaluation",
            features: [
              "Detailed inspection",
              "Need analysis",
              "Material selection",
              "Quote provision"
            ]
          },
          {
            title: "Custom Planning",
            description: "Project preparation",
            features: [
              "Timeline creation",
              "Material ordering",
              "Team scheduling",
              "Weather checking"
            ]
          },
          {
            title: "Expert Installation",
            description: "Professional work",
            features: [
              "Quality materials",
              "Skilled teams",
              "Property protection",
              "Clean operation"
            ]
          },
          {
            title: "Final Inspection",
            description: "Quality assurance",
            features: [
              "Complete check",
              "Performance test",
              "Clean-up verify",
              "Warranty provide"
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

export default VoiceResidentialRoofingLocation;
