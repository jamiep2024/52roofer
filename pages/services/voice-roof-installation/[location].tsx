import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceRoofInstallationLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, I need a new roof installed in ${location}`,
      answer: `Our ${location} installation services include: 1) Full roof replacements suited for ${county} weather, 2) New construction installations, 3) Energy-efficient systems, 4) Custom design solutions, 5) Premium material options. Our certified ${location} installers ensure proper installation.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how much does a new roof cost in ${location}?`,
      answer: `${location} new roof costs vary by type: 1) Asphalt shingles: £5,000-£8,000, 2) Slate roofing: £9,000-£18,000, 3) Clay tiles: £8,000-£15,000, 4) Metal roofing: £7,000-£14,000, 5) Flat roofs: £4,000-£7,000. Local ${county} rates may vary.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, how long does roof installation take in ${location}?`,
      answer: `${location} installation times vary: 1) Standard residential roof: 2-4 days, 2) Complex ${county} designs: 4-7 days, 3) Large properties: 5-10 days, 4) New construction: 3-5 days, 5) Premium materials: 6-10 days. Weather and access affect timelines.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, what roofing materials can you install in ${location}?`,
      answer: `We install all major roofing materials in ${location}: 1) Natural slate: Perfect for ${county} weather, 2) Clay/concrete tiles: Traditional look, 3) Metal roofing: Modern efficiency, 4) Asphalt shingles: Cost-effective, 5) Green roofing: Eco-friendly options.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, what warranty comes with new roof installation in ${location}?`,
      answer: `Our ${location} installations include: 1) Workmanship warranty: 10-25 years, 2) Materials warranty: 20-50 years, 3) Structural warranty: 25+ years, 4) Weather resistance guarantee for ${county} conditions: 10-15 years, 5) Transferable coverage. Full documentation provided.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Professional Roof Installation in ${location}`,
    serviceName: `${location} Roof Installation`,
    serviceType: "voice-roof-installation",
    priceRange: "£££",
    timeRequired: "P5D",
    heroTitle: `Need a New Roof in ${location}? Just Ask!`,
    heroDescription: `Voice-activated roof installation services in ${location} - expert solutions for your property`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Install My New Roof in ${location}!'`,
        description: `Need professional roof installation in ${location}? Simply ask your smart device about local installation services, and our experienced ${location} team will handle your entire project.`,
        features: [
          `• ${location} installation experts`,
          "• Premium materials",
          `• ${county} experience`,
          "• Full warranties"
        ]
      },
      problemSolvingSection: {
        title: `${location} Installation Solutions`,
        problems: [
          {
            emoji: "🏠",
            title: `'New ${location} roof needed'`,
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
            title: `'${location} construction'`,
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
            title: `'${location} eco-roofing'`,
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
            title: `'${location} premium roof'`,
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
        title: `Our ${location} Installation Process`,
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

export default VoiceRoofInstallationLocation;
