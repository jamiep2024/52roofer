import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceRoofMaintenanceLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find roof maintenance in ${location}`,
      answer: `Our ${location} maintenance services include: 1) Regular ${county} property checks, 2) Preventive maintenance programs, 3) Gutter cleaning and maintenance, 4) Minor repairs, 5) Weather protection updates. Keeping ${location} roofs in top condition.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much is roof maintenance in ${location}?`,
      answer: `${location} maintenance costs: 1) Basic inspection: £150-£250, 2) Full maintenance service: £250-£450, 3) Gutter maintenance: £80-£150, 4) Minor repairs: From £200, 5) Annual maintenance plans: Custom quotes for ${county} properties.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, how often should I maintain my roof in ${location}?`,
      answer: `In ${location}, we recommend: 1) Bi-annual checks for ${county} weather, 2) Post-storm inspections, 3) Autumn gutter cleaning, 4) Spring maintenance service, 5) Annual professional assessment. Regular maintenance prevents costly repairs.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, what's included in ${location} roof maintenance?`,
      answer: `Our ${location} maintenance covers: 1) Complete ${county} weather check, 2) Gutter system cleaning, 3) Tile and flashing inspection, 4) Minor repair identification, 5) Preventive measures for local conditions. Full documentation provided.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, do you offer maintenance plans in ${location}?`,
      answer: `Yes, our ${location} maintenance plans include: 1) Regular ${county} inspections, 2) Priority emergency service, 3) Scheduled cleaning, 4) Preventive repairs, 5) Annual condition reports. Customized for local properties.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Roof Maintenance in ${location}`,
    serviceName: `${location} Roof Maintenance`,
    serviceType: "voice-roof-maintenance",
    priceRange: "££",
    timeRequired: "P1D",
    heroTitle: `Need Roof Maintenance in ${location}? Just Ask!`,
    heroDescription: `Voice-activated roof maintenance services in ${location} - expert care for your property`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Maintain My Roof in ${location}!'`,
        description: `Need professional roof maintenance in ${location}? Simply ask your smart device about local maintenance services, and our experienced ${location} team will keep your roof in perfect condition.`,
        features: [
          `• ${location} maintenance experts`,
          "• Regular inspections",
          `• ${county} experience`,
          "• Preventive care"
        ]
      },
      problemSolvingSection: {
        title: `${location} Maintenance Solutions`,
        problems: [
          {
            emoji: "🔍",
            title: `'Check ${location} roof'`,
            description: "Regular inspection",
            features: [
              "Visual check",
              "Problem finding",
              "Health assessment",
              "Report creation"
            ]
          },
          {
            emoji: "🧹",
            title: `'Clean ${location} roof'`,
            description: "Professional cleaning",
            features: [
              "Surface cleaning",
              "Gutter clearing",
              "Moss removal",
              "System flush"
            ]
          },
          {
            emoji: "🔧",
            title: `'Fix ${location} issues'`,
            description: "Minor repairs",
            features: [
              "Problem solving",
              "Part replacing",
              "Leak fixing",
              "Prevention work"
            ]
          },
          {
            emoji: "📋",
            title: `'${location} maintenance plan'`,
            description: "Regular service",
            features: [
              "Scheduled visits",
              "Regular checks",
              "Problem prevention",
              "Annual reports"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${location} Maintenance Process`,
        steps: [
          {
            title: "Initial Assessment",
            description: "Current condition",
            features: [
              "Visual inspection",
              "Problem finding",
              "Need assessment",
              "Plan creation"
            ]
          },
          {
            title: "Regular Service",
            description: "Maintenance work",
            features: [
              "System cleaning",
              "Part checking",
              "Minor repairs",
              "Prevention work"
            ]
          },
          {
            title: "Problem Prevention",
            description: "Future protection",
            features: [
              "Issue spotting",
              "Early fixes",
              "Weather protection",
              "System updates"
            ]
          },
          {
            title: "Ongoing Care",
            description: "Continuous support",
            features: [
              "Regular visits",
              "Health checks",
              "Update reports",
              "Future planning"
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

export default VoiceRoofMaintenanceLocation;
