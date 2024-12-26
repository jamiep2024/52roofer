import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceFlatRoofLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, I need flat roof repair in ${location}`,
      answer: `Our ${location} flat roof services include: 1) Local EPDM rubber installation, 2) ${county} built-up felt repairs, 3) Professional fibreglass GRP systems, 4) Local liquid waterproofing, 5) ${location} thermal insulation upgrades. We handle all flat roof types in ${location}.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, what's the best flat roof material for ${location}?`,
      answer: `Top flat roofing materials for ${location}'s climate: 1) EPDM: 50+ year lifespan, perfect for ${county} weather, 2) Fibreglass GRP: 30+ years, great for local conditions, 3) Modified bitumen: Cost-effective local choice, 4) PVC: Energy-efficient for ${location}, 5) TPO: UV-resistant for ${county} sunshine.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, how much does a flat roof cost in ${location}?`,
      answer: `${location} flat roof costs by material: 1) EPDM rubber: £80-£100/m², 2) Fibreglass GRP: £90-£120/m², 3) Built-up felt: £60-£80/m², 4) PVC membrane: £70-£90/m², 5) TPO system: £75-£95/m². Includes professional installation by local ${location} experts.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, how long do flat roofs last in ${location}?`,
      answer: `${location} flat roof lifespans considering local weather: 1) EPDM rubber: 40-50 years, 2) Fibreglass GRP: 25-30 years in ${county} conditions, 3) Built-up felt: 15-20 years, 4) PVC membrane: 20-30 years, 5) TPO system: 20-25 years. Proper local maintenance extends lifespan.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, are flat roofs good for ${location}?`,
      answer: `Flat roof benefits in ${location}: 1) Cost-effective for local properties, 2) Easy maintenance access in ${county} weather, 3) Additional usable space creation, 4) Modern appeal for ${location} properties, 5) Solar panel compatibility for local energy savings. Perfect for many ${location} properties.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Expert Flat Roof Services in ${location}`,
    serviceName: `${location} Flat Roofing`,
    serviceType: "voice-flat-roof",
    priceRange: "£££",
    timeRequired: "P3D",
    heroTitle: `Need Flat Roof Help in ${location}? Just Ask!`,
    heroDescription: `Voice-activated flat roofing services in ${location} - expert solutions for all local flat roof needs`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Help With My Flat Roof in ${location}!'`,
        description: `Need flat roofing expertise in ${location}? Simply ask your smart device about local flat roof services, and we'll provide professional solutions for installation, repair, or maintenance in ${location} and ${county}.`,
        features: [
          `• ${location} material options`,
          "• Local expert installation",
          `• ${county} repairs`,
          "• Local quality guarantees"
        ]
      },
      problemSolvingSection: {
        title: `${location} Flat Roof Solutions`,
        problems: [
          {
            emoji: "🏢",
            title: `'New flat roof in ${location}'`,
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
            title: `'${location} flat roof leak'`,
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
            title: `'Replace ${location} flat roof'`,
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
            title: `'Maintain ${location} flat roof'`,
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
        title: `Our ${location} Flat Roof Process`,
        steps: [
          {
            title: "Local Survey",
            description: "Area assessment",
            features: [
              `${location} check`,
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
            title: `${location} Installation`,
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

export default VoiceFlatRoofLocation;
