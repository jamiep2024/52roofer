import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceCommercialRoofingLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find commercial roofing in ${location}`,
      answer: `Our ${location} commercial roofing services include: 1) Large-scale ${county} installations, 2) Commercial property maintenance, 3) Industrial roofing solutions, 4) Business roof repairs, 5) Emergency commercial services. We handle all ${location} commercial projects.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, what commercial roofing services are available in ${location}?`,
      answer: `${location} commercial services include: 1) Flat roof installations for ${county} businesses, 2) Industrial roof maintenance, 3) Commercial waterproofing, 4) Business property repairs, 5) Emergency commercial response. All backed by comprehensive warranties.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, how much does commercial roofing cost in ${location}?`,
      answer: `${location} commercial roofing costs vary: 1) Large flat roofs: £20-£40/m², 2) Industrial installations: £30-£50/m², 3) Commercial repairs: From £500, 4) Maintenance contracts: Custom quotes, 5) Emergency services: Variable rates. Contact us for detailed ${county} pricing.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, find commercial roof maintenance in ${location}`,
      answer: `Our ${location} maintenance includes: 1) Regular ${county} inspections, 2) Preventive maintenance programs, 3) Commercial cleaning services, 4) Repair identification, 5) Emergency response plans. Keeping ${location} businesses protected.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, what commercial roofing materials do you use in ${location}?`,
      answer: `For ${location} commercial properties we offer: 1) EPDM systems suited for ${county} weather, 2) TPO membranes, 3) Built-up roofing (BUR), 4) Modified bitumen, 5) Metal roofing systems. All materials meet local commercial standards.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Commercial Roofing Services in ${location}`,
    serviceName: `${location} Commercial Roofing`,
    serviceType: "voice-commercial-roofing",
    priceRange: "££££",
    timeRequired: "P5D",
    heroTitle: `Need Commercial Roofing in ${location}? Just Ask!`,
    heroDescription: `Voice-activated commercial roofing services in ${location} - expert solutions for your business`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Find Commercial Roofing in ${location}!'`,
        description: `Looking for commercial roofing expertise in ${location}? Simply ask your smart device about commercial roofing services, and we'll connect you with our experienced ${location} commercial team.`,
        features: [
          `• ${location} commercial experts`,
          "• Business property solutions",
          `• ${county} industrial roofing`,
          "• Commercial maintenance"
        ]
      },
      problemSolvingSection: {
        title: `${location} Commercial Solutions`,
        problems: [
          {
            emoji: "🏢",
            title: `'${location} business roof'`,
            description: "Commercial installation",
            features: [
              "Business solutions",
              "Commercial grade",
              "Local expertise",
              "Quality materials"
            ]
          },
          {
            emoji: "🏭",
            title: `'${location} industrial roofing'`,
            description: "Industrial solutions",
            features: [
              "Heavy duty",
              "Industrial grade",
              "Large scale",
              "Durable systems"
            ]
          },
          {
            emoji: "🔧",
            title: `'${location} maintenance'`,
            description: "Commercial maintenance",
            features: [
              "Regular checks",
              "Preventive care",
              "Quick repairs",
              "System updates"
            ]
          },
          {
            emoji: "⚡",
            title: `'${location} emergency service'`,
            description: "Emergency response",
            features: [
              "24/7 service",
              "Quick response",
              "Business protection",
              "Rapid repair"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${location} Commercial Process`,
        steps: [
          {
            title: "Business Assessment",
            description: "Property evaluation",
            features: [
              "Site survey",
              "Need analysis",
              "System planning",
              "Cost estimation"
            ]
          },
          {
            title: "Commercial Planning",
            description: "Project preparation",
            features: [
              "Material selection",
              "Timeline creation",
              "Team allocation",
              "Safety planning"
            ]
          },
          {
            title: "Professional Installation",
            description: "Expert implementation",
            features: [
              "Quality materials",
              "Skilled teams",
              "Safety measures",
              "Business protection"
            ]
          },
          {
            title: "Business Support",
            description: "Ongoing service",
            features: [
              "Regular checks",
              "Maintenance plans",
              "Quick response",
              "Business care"
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

export default VoiceCommercialRoofingLocation;
