const fs = require('fs');
const path = require('path');

const serviceAreas = {
  berkshire: {
    name: 'Berkshire',
    postcodes: ['RG1-RG31', 'RG40-RG45', 'SL1-SL6'],
    mainTowns: ['Reading', 'Newbury', 'Windsor', 'Maidenhead', 'Bracknell', 'Slough', 'Wokingham', 'Thatcham', 'Hungerford', 'Ascot']
  },
  oxfordshire: {
    name: 'Oxfordshire',
    postcodes: ['OX1-OX5', 'OX9-OX14', 'OX18', 'OX20', 'OX25-OX29', 'OX33', 'OX39', 'OX44', 'OX49'],
    mainTowns: ['Oxford', 'Banbury', 'Bicester', 'Witney', 'Didcot', 'Abingdon', 'Thame', 'Henley-on-Thames', 'Wallingford', 'Chipping Norton']
  },
  wiltshire: {
    name: 'Wiltshire',
    postcodes: ['SN1-SN16', 'SN25-SN26', 'BA12-BA15', 'SP1-SP5'],
    mainTowns: ['Swindon', 'Salisbury', 'Chippenham', 'Trowbridge', 'Marlborough', 'Devizes', 'Warminster', 'Melksham', 'Calne', 'Corsham']
  },
  gloucestershire: {
    name: 'Gloucestershire',
    postcodes: ['GL1-GL20', 'GL50-GL56'],
    mainTowns: ['Gloucester', 'Cheltenham', 'Stroud', 'Cirencester', 'Tewkesbury', 'Dursley', 'Tetbury', 'Stow-on-the-Wold', 'Moreton-in-Marsh', 'Fairford']
  },
  hampshire: {
    name: 'Hampshire',
    postcodes: ['SO14-SO53', 'PO1-PO17', 'RG21-RG29'],
    mainTowns: ['Southampton', 'Portsmouth', 'Winchester', 'Basingstoke', 'Andover', 'Aldershot', 'Farnborough', 'Eastleigh', 'Fareham', 'Gosport']
  },
  surrey: {
    name: 'Surrey',
    postcodes: ['GU1-GU35', 'KT1-KT24', 'RH1-RH11'],
    mainTowns: ['Guildford', 'Woking', 'Farnham', 'Epsom', 'Redhill', 'Reigate', 'Staines', 'Dorking', 'Camberley', 'Leatherhead']
  },
  buckinghamshire: {
    name: 'Buckinghamshire',
    postcodes: ['HP1-HP23', 'MK1-MK19'],
    mainTowns: ['Milton Keynes', 'High Wycombe', 'Aylesbury', 'Amersham', 'Marlow', 'Buckingham', 'Chesham', 'Beaconsfield', 'Princes Risborough', 'Gerrards Cross']
  },
  westSussex: {
    name: 'West Sussex',
    postcodes: ['BN11-BN18', 'PO18-PO22', 'RH10-RH20'],
    mainTowns: ['Crawley', 'Worthing', 'Horsham', 'Chichester', 'Bognor Regis', 'Littlehampton', 'East Grinstead', 'Haywards Heath', 'Burgess Hill', 'Shoreham-by-Sea']
  }
};

const template = (location, county, countyKey, postcodes) => `import React from 'react';
import Head from 'next/head';
import HeroImage from "../components/HeroImage";
import LeadForm from '../components/forms/LeadForm';
import { serviceAreas } from '../data/serviceAreas';
import { businesses } from '../data/businesses';
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';

export default function RoofersIn${location.replace(/[^a-zA-Z]/g, '')}() {
  const location = {
    name: '${location}',
    county: '${county}',
    postcodes: ${JSON.stringify(postcodes)},
  };

  const localBusinesses = businesses.filter(
    business => business.location === serviceAreas.${countyKey}.name
  );

  return (
    <>
      <Head>
        <title>Expert Roofers in ${location} | Emergency Repairs & Installation</title>
        <meta 
          name="description" 
          content="Looking for trusted roofers in ${location}? ⭐ 24/7 Emergency Service ⭐ Free Quotes. Local experts serving ${postcodes[0]} & surrounding areas."
        />
        <meta name="keywords" content="roofers ${location}, roofing contractors ${location}, roof repairs ${location}, emergency roofer ${location}, local roofers ${postcodes[0]}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Expert Roofers in ${location} | Emergency Repairs & Installation" />
        <meta property="og:description" content="Looking for trusted roofers in ${location}? 24/7 Emergency Service, Free Quotes. Local experts serving ${postcodes[0]} & surrounding areas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://52roofer.com/roofers-in-${location.toLowerCase().replace(/\s+/g, '-')}" />
        <meta property="og:image" content="https://52roofer.com/images/hero-bg.jpg" />
        <link rel="canonical" href="https://52roofer.com/roofers-in-${location.toLowerCase().replace(/\s+/g, '-')}" />
      </Head>

      <LocalBusinessSchema 
        businessName="52Roofer ${location}"
        location={location}
        url="https://52roofer.com/roofers-in-${location.toLowerCase().replace(/\s+/g, '-')}"
        image="https://52roofer.com/images/hero-bg.jpg"
      />

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <HeroImage 
              src="/images/hero-bg.jpg"
              alt={\`Roofing services in ${location}\`}
            />            
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert Roofers in ${location}
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Professional roofing services in ${location}, ${county}. From emergency repairs to complete installations, 
              our local experts are here to help. Available 24/7 with free quotes.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Your Trusted Local Roofers in ${location}
              </h2>

              <div className="prose prose-blue max-w-none">
                <p>
                  Looking for reliable roofing services in ${location}? Our experienced team provides 
                  comprehensive roofing solutions throughout the ${postcodes[0]} area. We specialize in:
                </p>

                <ul className="mt-8 space-y-4">
                  <li>✓ Emergency Roof Repairs</li>
                  <li>✓ Complete Roof Replacements</li>
                  <li>✓ Roof Maintenance & Inspections</li>
                  <li>✓ Chimney Repairs & Repointing</li>
                  <li>✓ Guttering Services</li>
                  <li>✓ Flat Roof Specialists</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-12 mb-4">Why Choose Our ${location} Roofers?</h3>
                <ul className="space-y-4">
                  <li>✓ Available 24/7 for emergencies</li>
                  <li>✓ Free, no-obligation quotes</li>
                  <li>✓ Fully insured and qualified team</li>
                  <li>✓ Competitive local rates</li>
                  <li>✓ Outstanding customer service</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get Your Free Quote Today
                </h3>
                <LeadForm source="${location} Landing Page" />
              </div>

              {/* Coverage Areas */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Areas We Cover in ${location}
                </h3>
                <p className="text-gray-600 mb-4">
                  We provide comprehensive roofing services throughout ${location} and surrounding areas, 
                  covering all ${postcodes.join(', ')} postcodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600
  };
};`;

// Create pages for each location
Object.entries(serviceAreas).forEach(([countyKey, county]) => {
  county.mainTowns.forEach(location => {
    const fileName = `roofers-in-${location.toLowerCase().replace(/\s+/g, '-')}.tsx`;
    const filePath = path.join(process.cwd(), 'pages', fileName);
    
    const postcodes = county.postcodes;
    const content = template(location, county.name, countyKey, postcodes);
    
    fs.writeFileSync(filePath, content);
    console.log(`Created page for ${location}`);
  });
});

console.log('All location pages generated successfully!');
