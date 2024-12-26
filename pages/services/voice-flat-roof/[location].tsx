import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceFlatRoofLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, I need flat roof repair in ${displayLocation}`,
      answer: `Our ${displayLocation} flat roof services include: 1) Local EPDM rubber installation, 2) ${county} built-up felt repairs, 3) Professional fibreglass GRP systems, 4) Local liquid waterproofing, 5) ${displayLocation} thermal insulation upgrades. We handle all flat roof types in ${displayLocation}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, what's the best flat roof material for ${displayLocation}?`,
      answer: `Top flat roofing materials for ${displayLocation}'s climate: 1) EPDM: 50+ year lifespan, perfect for ${county} weather, 2) Fibreglass GRP: 30+ years, great for local conditions, 3) Modified bitumen: Cost-effective local choice, 4) PVC: Energy-efficient for ${displayLocation}, 5) TPO: UV-resistant for ${county} sunshine.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, how much does a flat roof cost in ${displayLocation}?`,
      answer: `${displayLocation} flat roof costs by material: 1) EPDM rubber: £80-£100/m², 2) Fibreglass GRP: £90-£120/m², 3) Built-up felt: £60-£80/m², 4) PVC membrane: £70-£90/m², 5) TPO system: £75-£95/m². Includes professional installation by local ${displayLocation} experts.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how long do flat roofs last in ${displayLocation}?`,
      answer: `${displayLocation} flat roof lifespans considering local weather: 1) EPDM rubber: 40-50 years, 2) Fibreglass GRP: 25-30 years in ${county} conditions, 3) Built-up felt: 15-20 years, 4) PVC membrane: 20-30 years, 5) TPO system: 20-25 years. Proper local maintenance extends lifespan.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, are flat roofs good for ${displayLocation}?`,
      answer: `Flat roof benefits in ${displayLocation}: 1) Cost-effective for local properties, 2) Easy maintenance access in ${county} weather, 3) Additional usable space creation, 4) Modern appeal for ${displayLocation} properties, 5) Solar panel compatibility for local energy savings. Perfect for many ${displayLocation} properties.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Expert Flat Roof Services in ${displayLocation}`,
    serviceName: `${displayLocation} Flat Roofing`,
    serviceType: "voice-flat-roof",
    priceRange: "£££",
    timeRequired: "P3D",
    heroTitle: `Need Flat Roof Help in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated flat roofing services in ${displayLocation} - expert solutions for all local flat roof needs`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Help With My Flat Roof in ${displayLocation}!'`,
        description: `Need flat roofing expertise in ${displayLocation}? Simply ask your smart device about local flat roof services, and we'll provide professional solutions for installation, repair, or maintenance in ${displayLocation} and ${county}.`,
        features: [
          `• ${displayLocation} material options`,
          "• Local expert installation",
          `• ${county} repairs`,
          "• Local quality guarantees"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Flat Roof Solutions`,
        problems: [
          {
            emoji: "🏢",
            title: `'New flat roof in ${displayLocation}'`,
            description: "Local installation",
            features: [
              "Area materials",
              "Local fitting",
              `${county} insulation`,
              "Local drainage"
            ]
          },
          {
            emoji: "💧",
            title: `'${displayLocation} flat roof leak'`,
            description: "Local repairs",
            features: [
              "Area inspection",
              "Swift fixes",
              "Local waterproofing",
              "Prevention"
            ]
          },
          {
            emoji: "🔄",
            title: `'Replace ${displayLocation} flat roof'`,
            description: "Local replacement",
            features: [
              "System upgrade",
              "Area materials",
              "Better insulation",
              "Local drainage"
            ]
          },
          {
            emoji: "🛠️",
            title: `'Maintain ${displayLocation} flat roof'`,
            description: "Local maintenance",
            features: [
              "Area checks",
              "Preventive care",
              "Local clearing",
              "Surface cleaning"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${displayLocation} Flat Roof Process`,
        steps: [
          {
            title: "Local Survey",
            description: "Area assessment",
            features: [
              `${displayLocation} check`,
              "Local measuring",
              "Issue finding",
              "Material discussion"
            ]
          },
          {
            title: "Local Design",
            description: "Area planning",
            features: [
              "System choice",
              `${county} drainage`,
              "Local insulation",
              "Detail planning"
            ]
          },
          {
            title: `${displayLocation} Installation`,
            description: "Local fitting",
            features: [
              "Surface prep",
              "Material laying",
              "Detail work",
              "Quality checks"
            ]
          },
          {
            title: "Local Inspection",
            description: "Area assurance",
            features: [
              "Thorough check",
              "Water testing",
              "Detail review",
              "Local guarantee"
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

export default VoiceFlatRoofLocation;
