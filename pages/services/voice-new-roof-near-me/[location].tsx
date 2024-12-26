import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceNewRoofNearMeLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, I need a new roof near me in ${displayLocation}`,
      answer: `Our ${displayLocation} new roof services include: 1) Complete roof replacements for ${county} properties, 2) New construction roofing, 3) Local material options, 4) Expert installation teams, 5) Full project management. Professional service across ${displayLocation}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much is a new roof in ${displayLocation}?`,
      answer: `${displayLocation} new roof costs vary by type: 1) Standard tiles: £5,000-£8,000, 2) Slate roofing: £9,000-£18,000, 3) Flat roofs: £3,000-£6,000, 4) Premium materials: £10,000-£20,000, 5) Complex designs: Custom quotes. Local ${county} rates may vary.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what new roof options are available in ${displayLocation}?`,
      answer: `${displayLocation} roofing options include: 1) Traditional tiles suited for ${county} weather, 2) Natural slate for heritage properties, 3) Modern composite materials, 4) Energy-efficient systems, 5) Sustainable roofing solutions. All installed by local experts.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how long does a new roof take in ${displayLocation}?`,
      answer: `${displayLocation} installation timelines: 1) Average home: 2-4 days, 2) Large properties: 4-6 days, 3) Complex designs: 5-7 days, 4) Weather factors in ${county}: May add 1-2 days, 5) Complete project: Usually within 2 weeks. Professional installation by local teams.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, what's included with a new roof in ${displayLocation}?`,
      answer: `Our ${displayLocation} new roof service includes: 1) Complete removal of old roof, 2) ${county} building regulation compliance, 3) New underlayment and insulation, 4) Expert installation, 5) Full warranty coverage. Everything handled by local professionals.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `New Roof Installation Near You in ${displayLocation}`,
    serviceName: `${displayLocation} New Roof Installation`,
    serviceType: "voice-new-roof-near-me",
    priceRange: "££££",
    timeRequired: "P5D",
    heroTitle: `Need a New Roof in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated new roof services in ${displayLocation} - expert solutions near you`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Find New Roof Installation Near Me in ${displayLocation}!'`,
        description: `Looking for professional new roof installation in ${displayLocation}? Simply ask your smart device about local roofing services, and our experienced ${displayLocation} team will handle your entire project.`,
        features: [
          `• ${displayLocation} roofing experts`,
          "• Quality materials",
          `• ${county} experience`,
          "• Full warranties"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} New Roof Solutions`,
        problems: [
          {
            emoji: "🏠",
            title: `'New ${displayLocation} roof needed'`,
            description: "Complete installation",
            features: [
              "Local assessment",
              "Material choice",
              "Expert fitting",
              "Full warranty"
            ]
          },
          {
            emoji: "🏗️",
            title: `'${displayLocation} construction'`,
            description: "New build roofing",
            features: [
              "Design planning",
              "Material selection",
              "Code compliance",
              "Quality assurance"
            ]
          },
          {
            emoji: "🌱",
            title: `'${displayLocation} eco-roofing'`,
            description: "Sustainable solutions",
            features: [
              "Energy efficiency",
              "Green materials",
              "Solar ready",
              "Future proof"
            ]
          },
          {
            emoji: "💎",
            title: `'${displayLocation} premium roof'`,
            description: "High-end options",
            features: [
              "Premium materials",
              "Expert design",
              "Custom solutions",
              "Luxury finish"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${displayLocation} Installation Process`,
        steps: [
          {
            title: "Initial Consultation",
            description: "Project planning",
            features: [
              "Site assessment",
              "Design discussion",
              "Material selection",
              "Quote provision"
            ]
          },
          {
            title: "Detailed Planning",
            description: "Installation prep",
            features: [
              "Material ordering",
              "Team scheduling",
              "Permit handling",
              "Safety planning"
            ]
          },
          {
            title: "Professional Installation",
            description: "Expert fitting",
            features: [
              "Old roof removal",
              "New installation",
              "Quality control",
              "Progress updates"
            ]
          },
          {
            title: "Final Inspection",
            description: "Quality assurance",
            features: [
              "Complete check",
              "Cleanup verify",
              "Warranty provide",
              "Final walkthrough"
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

export default VoiceNewRoofNearMeLocation;
