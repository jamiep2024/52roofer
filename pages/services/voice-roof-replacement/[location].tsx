import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceRoofReplacementLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, I need a roof replacement in ${displayLocation}`,
      answer: `Our ${displayLocation} roof replacement service includes: 1) Complete removal by local team, 2) ${county} structure inspection, 3) New underlayment installation, 4) Premium materials suited for ${displayLocation} weather, 5) Full local warranty. Our ${displayLocation} team handles everything.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much to replace a roof in ${displayLocation}?`,
      answer: `${displayLocation} replacement costs by type: 1) Asphalt shingles: £5,000-£12,000, 2) Slate roofing: £12,000-£25,000, 3) Clay tiles: £10,000-£20,000, 4) Metal roofing: £8,000-£18,000, 5) Concrete tiles: £7,000-£15,000. Local ${county} rates may vary.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, how long does roof replacement take in ${displayLocation}?`,
      answer: `${displayLocation} replacement timelines: 1) Average home: 2-4 days, 2) Large ${displayLocation} properties: 4-6 days, 3) Complex designs: 5-7 days, 4) Premium materials: 6-8 days, 5) ${county} weather factors: May add 1-2 days. Our local team works efficiently.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, when should I replace my roof in ${displayLocation}?`,
      answer: `Consider ${displayLocation} roof replacement when: 1) Age: 20+ years in ${county} weather, 2) Multiple local repairs needed, 3) Visible wear from ${displayLocation} conditions, 4) Rising energy costs, 5) Storm damage common in ${county}. We provide free local assessments.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, what's included in ${displayLocation} roof replacement?`,
      answer: `Complete ${displayLocation} replacement includes: 1) Old roof removal and local disposal, 2) ${county} deck inspection, 3) New underlayment for local weather, 4) Quality material installation, 5) ${displayLocation} ventilation upgrade. Plus full cleanup and local warranty.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Complete Roof Replacement in ${displayLocation}`,
    serviceName: `${displayLocation} Roof Replacement`,
    serviceType: "voice-roof-replacement",
    priceRange: "££££",
    timeRequired: "P5D",
    heroTitle: `Need a New Roof in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated roof replacement services in ${displayLocation} - expert solutions for your home`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Replace My Roof in ${displayLocation}!'`,
        description: `Ready for a roof replacement in ${displayLocation}? Simply ask your smart device about local roof replacement services, and our ${displayLocation} team will guide you through the entire process with expert care.`,
        features: [
          `• Complete ${displayLocation} removal`,
          "• Local quality materials",
          `• Expert ${county} installation`,
          "• Local warranties"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Replacement Solutions`,
        problems: [
          {
            emoji: "🏠",
            title: `'Old ${displayLocation} roof needs replacing'`,
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
            title: `'${displayLocation} storm damage'`,
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
            title: `'${displayLocation} energy upgrade'`,
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
            title: `'${displayLocation} system upgrade'`,
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
        title: `Our ${displayLocation} Replacement Process`,
        steps: [
          {
            title: "Local Assessment",
            description: "Complete evaluation",
            features: [
              `${displayLocation} condition`,
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
            title: `${displayLocation} Installation`,
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

export default VoiceRoofReplacementLocation;
