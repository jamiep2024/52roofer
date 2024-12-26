import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ConversationalRoofingTemplate from '../../../components/templates/conversational-roofing-template';
import { locationData } from '../../../data/locationData';

interface LocationPageProps {
  location: string;
  county: string;
}

const VoiceLocalRooferLocation: React.FC<LocationPageProps> = ({ location, county }) => {
  const initialFAQs = [
    {
      question: `Hey Google, find a local roofer in ${location}`,
      answer: `We connect you with qualified ${location} roofers who: 1) Specialize in ${county} properties, 2) Know local building regulations, 3) Understand ${location} weather challenges, 4) Provide local references, 5) Offer competitive ${location} rates. All our local experts are fully vetted.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Alexa, how do I choose a roofer in ${location}?`,
      answer: `Look for these qualities in ${location} roofers: 1) Full local licensing for ${county}, 2) Established ${location} reputation, 3) Experience with local property types, 4) Clear written quotes for ${location} work, 5) Strong local warranties. We ensure all our ${location} partners meet these criteria.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `OK Google, what should ${location} roofers cost?`,
      answer: `${location} roofer rates: 1) Local inspections: £100-£250, 2) ${county} repairs: £150-£500, 3) Major local work: £500-£2,000, 4) Full replacements: From £5,000, 5) ${location} emergency services: Additional £100-£200. All our local partners offer competitive pricing.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Siri, when can a ${location} roofer come?`,
      answer: `Our ${location} response times: 1) Emergency calls: Within 2-4 hours in ${location}, 2) Urgent ${county} repairs: Same/next day, 3) Regular maintenance: 2-3 days, 4) Local inspections: 1-2 days, 5) Major projects: Scheduled at your convenience. We prioritize based on urgency.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    },
    {
      question: `Hey Google, are ${location} roofers insured?`,
      answer: `Our ${location} roofers provide: 1) Public liability insurance for ${county} work, 2) Local employer's liability coverage, 3) Professional indemnity for ${location} projects, 4) Local work guarantees, 5) ${county} material warranties. All verified and current.`,
      views: 0,
      lastUpdated: new Date().toISOString()
    }
  ];

  const pageConfig = {
    title: `Find Expert Roofers in ${location}`,
    serviceName: `${location} Local Roofer`,
    serviceType: "voice-local-roofer",
    priceRange: "£££",
    timeRequired: "P1D",
    heroTitle: `Need a ${location} Roofer? Just Ask!`,
    heroDescription: `Voice-activated local roofer finder in ${location} - connect with qualified professionals in your area`,
    mainContent: {
      introSection: {
        title: `Just Say: 'Find Me a Roofer in ${location}!'`,
        description: `Looking for a trusted local roofer in ${location}? Simply ask your smart device to find expert roofing professionals, and we'll connect you with qualified ${location} specialists who know your area.`,
        features: [
          `• Vetted ${location} experts`,
          "• Quick local response",
          `• ${county} guarantees`,
          "• Area-specific pricing"
        ]
      },
      problemSolvingSection: {
        title: `${location} Roofing Solutions`,
        problems: [
          {
            emoji: "🏠",
            title: `'Need a ${location} expert'`,
            description: "Local qualified roofers",
            features: [
              "Local credentials",
              `${county} experience`,
              "Area knowledge",
              "Fast response"
            ]
          },
          {
            emoji: "🛠️",
            title: `'Emergency help in ${location}'`,
            description: "Rapid local response",
            features: [
              "24/7 local service",
              "Quick arrival",
              `${location} teams`,
              "Fast solutions"
            ]
          },
          {
            emoji: "💰",
            title: `'Compare ${location} prices'`,
            description: "Local price comparison",
            features: [
              "Free quotes",
              "Area pricing",
              "Local rates",
              "Best value"
            ]
          },
          {
            emoji: "✅",
            title: `'Trusted ${location} roofer'`,
            description: "Verified professionals",
            features: [
              "Local checks",
              "Quality assured",
              `${county} reviews`,
              "Proven expertise"
            ]
          }
        ]
      },
      processSection: {
        title: `Our ${location} Connection Process`,
        steps: [
          {
            title: "Local Search",
            description: "Find nearby experts",
            features: [
              `${location} check`,
              "Service matching",
              "Local availability",
              "Quick connect"
            ]
          },
          {
            title: "Verification",
            description: "Quality assurance",
            features: [
              `${county} credentials`,
              "Insurance verify",
              "Local reviews",
              "History check"
            ]
          },
          {
            title: "Connection",
            description: "Expert matching",
            features: [
              "Direct contact",
              "Local schedule",
              "Service outline",
              "Quote setup"
            ]
          },
          {
            title: "Follow-up",
            description: "Quality control",
            features: [
              "Service check",
              "Satisfaction ensure",
              "Local feedback",
              "Ongoing support"
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

export default VoiceLocalRooferLocation;
