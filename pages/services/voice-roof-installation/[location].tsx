import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { serviceAreas } from '../../../data/serviceAreas';

interface LocationPageProps {
  location: string;
  county: string;
  displayLocation: string;
}

const VoiceRoofInstallationLocation: React.FC<LocationPageProps> = ({ location, county, displayLocation }) => {
  const initialFAQs = [
    {
      question: `Hey Google, I need a new roof installed in ${displayLocation}`,
      answer: `Our ${displayLocation} installation services include: 1) Full roof replacements suited for ${county} weather, 2) New construction installations, 3) Energy-efficient systems, 4) Custom design solutions, 5) Premium material options. Our certified ${displayLocation} installers ensure proper installation.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much does a new roof cost in ${displayLocation}?`,
      answer: `${displayLocation} new roof costs vary by type: 1) Asphalt shingles: £5,000-£8,000, 2) Slate roofing: £9,000-£18,000, 3) Clay tiles: £8,000-£15,000, 4) Metal roofing: £7,000-£14,000, 5) Flat roofs: £4,000-£7,000. Local ${county} rates may vary.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, how long does roof installation take in ${displayLocation}?`,
      answer: `${displayLocation} installation times vary: 1) Standard residential roof: 2-4 days, 2) Complex ${county} designs: 4-7 days, 3) Large properties: 5-10 days, 4) New construction: 3-5 days, 5) Premium materials: 6-10 days. Weather and access affect timelines.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, what roofing materials can you install in ${displayLocation}?`,
      answer: `We install all major roofing materials in ${displayLocation}: 1) Natural slate: Perfect for ${county} weather, 2) Clay/concrete tiles: Traditional look, 3) Metal roofing: Modern efficiency, 4) Asphalt shingles: Cost-effective, 5) Green roofing: Eco-friendly options.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, what warranty comes with new roof installation in ${displayLocation}?`,
      answer: `Our ${displayLocation} installations include: 1) Workmanship warranty: 10-25 years, 2) Materials warranty: 20-50 years, 3) Structural warranty: 25+ years, 4) Weather resistance guarantee for ${county} conditions: 10-15 years, 5) Transferable coverage. Full documentation provided.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Roof Installation in ${displayLocation}`,
    serviceName: `${displayLocation} Roof Installation`,
    serviceType: "voice-roof-installation",
    priceRange: "£££",
    timeRequired: "P5D",
    heroTitle: `Need a New Roof in ${displayLocation}? Just Ask!`,
    heroDescription: `Voice-activated roof installation services in ${displayLocation} - expert solutions for your property`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Install My New Roof in ${displayLocation}!'`,
        description: `Need professional roof installation in ${displayLocation}? Simply ask your smart device about local installation services, and our experienced ${displayLocation} team will handle your entire project.`,
        features: [
          `• ${displayLocation} installation experts`,
          "• Premium materials",
          `• ${county} experience`,
          "• Full warranties"
        ]
      },
      problemSolvingSection: {
        title: `${displayLocation} Installation Solutions`,
        problems: [
          {
            emoji: "🏠",
            title: `'New ${displayLocation} roof needed'`,
            description: "Complete installation",
            features: [
              "Quality materials",
              "Expert fitting",
              "Local knowledge",
              "Full warranty"
            ]
          },
          {
            emoji: "🏗️",
            title: `'${displayLocation} construction'`,
            description: "New build installation",
            features: [
              "Design planning",
              "Material choice",
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
              "Site preparation",
              "Material handling",
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

export default VoiceRoofInstallationLocation;
