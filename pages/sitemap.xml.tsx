import { GetServerSideProps } from 'next';
import { serviceAreas } from '../data/serviceAreas';
import { locationData } from '../data/locationData';

const DOMAIN = 'https://www.52roofer.com';

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Location pages from our URL check
  const locationPages = [
    'abingdon', 'aldershot', 'amersham', 'andover', 'ascot', 'aylesbury',
    'banbury', 'basingstoke', 'beaconsfield', 'bicester', 'blackbird-leys-oxford',
    'bognor-regis', 'botley-oxford', 'bracknell', 'bradford-on-avon-wiltshire',
    'buckingham', 'burgess-hill', 'calne-wiltshire', 'calne', 'camberley',
    'cheltenham', 'chesham', 'chichester', 'chippenham-wiltshire', 'chippenham',
    'chipping-norton', 'cirencester', 'corsham', 'cowley-oxford', 'crawley',
    'devizes-wiltshire', 'devizes', 'didcot', 'dorking', 'dursley',
    'east-grinstead', 'eastleigh', 'epsom', 'fairford', 'fareham', 'farnborough',
    'farnham', 'gerrards-cross', 'gloucester', 'gosport', 'guildford',
    'haywards-heath', 'headington-oxford', 'henley-on-thames', 'high-wycombe',
    'horsham', 'hungerford', 'iffley-oxford', 'jericho-oxford', 'leatherhead',
    'littlehampton', 'maidenhead', 'marlborough-wiltshire', 'marlborough',
    'marlow', 'marston-oxford', 'melksham-wiltshire', 'melksham', 'milton-keynes',
    'moreton-in-marsh', 'newbury', 'oxford', 'portsmouth', 'princes-risborough',
    'reading', 'redhill', 'reigate', 'rose-hill-oxford', 'salisbury-wiltshire',
    'salisbury', 'shoreham-by-sea', 'slough', 'southampton', 'staines',
    'stow-on-the-wold', 'stroud', 'summertown-oxford', 'swindon', 'tetbury',
    'tewkesbury', 'thame', 'thatcham', 'trowbridge-wiltshire', 'trowbridge',
    'wallingford', 'warminster-wiltshire', 'warminster', 'westbury-wiltshire',
    'winchester', 'windsor', 'witney', 'woking', 'wokingham', 'wolvercote-oxford',
    'worthing'
  ];

  const pages = [
    // Core pages
    '',
    '/about',
    '/contact',
    '/find-roofer',
    '/locations',
    '/services',
    
    // Blog posts
    '/blog',
    '/blog/choosing-right-roofing-material',
    '/blog/complete-guide-to-roof-maintenance',
    '/blog/energy-efficient-roofing',
    '/blog/new-roof-cost-guide',
    '/blog/professional-roof-inspection-guide',
    '/blog/signs-you-need-roof-replacement',
    '/blog/slate-roofs-complete-guide',
    '/blog/uk-weather-roofing-problems',
    '/blog/ultimate-roof-ventilation-guide',

    // Resources
    '/resources',
    '/resources/guides/slate-roofs',
    '/resources/roofing-faq',

    // Standard Services
    '/services/commercial-roofing',
    '/services/residential-roofing',
    '/services/emergency-roof-repair',
    '/services/gutter-service',
    '/services/roof-inspection',
    '/services/roof-installation',
    '/services/roof-maintenance',
    '/services/roof-ventilation',
    '/services/skylight-installation',
    '/services/new-roof-near-me',
    '/services/roof-cost-near-me',
    '/services/emergency-roofing',
    '/services/roof-estimate',
    '/services/flat-roof',
    '/services/roof-replacement',
    '/services/local-roofer',

    // Voice-Optimized Services
    '/services/voice-commercial-roofing',
    '/services/voice-residential-roofing',
    '/services/voice-roof-maintenance',
    '/services/voice-roof-inspection',
    '/services/voice-skylight-installation',
    '/services/voice-roof-ventilation',
    '/services/voice-gutter-service',
    '/services/voice-new-roof-near-me',
    '/services/voice-roof-cost-near-me',
    '/services/voice-emergency-roofing',
    '/services/voice-roof-estimate',
    '/services/voice-flat-roof',
    '/services/voice-roof-replacement',
    '/services/voice-local-roofer',
    '/services/voice-roof-installation',
    '/services/voice-roof-repairs',
    '/services/voice-roofing-services',

    // Counties
    '/county/berkshire',
    '/county/buckinghamshire',
    '/county/gloucestershire',
    '/county/hampshire',
    '/county/oxfordshire',
    '/county/surrey',
    '/county/west-sussex',
    '/county/wiltshire',
  ];

  // Add all location pages
  locationPages.forEach(location => {
    pages.push(`/roofers-in-${location}`);
  });

  // All standard services
  const services = [
    'commercial-roofing',
    'residential-roofing',
    'emergency-roof-repair',
    'gutter-service',
    'roof-inspection',
    'roof-installation',
    'roof-maintenance',
    'roof-ventilation',
    'skylight-installation',
    'new-roof-near-me',
    'roof-cost-near-me',
    'emergency-roofing',
    'roof-estimate',
    'flat-roof',
    'roof-replacement',
    'local-roofer'
  ];

  // All voice services
  const voiceServices = [
    'voice-commercial-roofing',
    'voice-residential-roofing',
    'voice-roof-maintenance',
    'voice-roof-inspection',
    'voice-skylight-installation',
    'voice-roof-ventilation',
    'voice-gutter-service',
    'voice-new-roof-near-me',
    'voice-roof-cost-near-me',
    'voice-emergency-roofing',
    'voice-roof-estimate',
    'voice-flat-roof',
    'voice-roof-replacement',
    'voice-local-roofer',
    'voice-roof-installation',
    'voice-roof-repairs',
    'voice-roofing-services'
  ];

  // Add standard service+location combinations
  locationPages.forEach(location => {
    services.forEach(service => {
      pages.push(`/services/${service}/${location}`);
    });
  });

  // Add voice service+location combinations
  locationPages.forEach(location => {
    voiceServices.forEach(service => {
      pages.push(`/services/${service}/${location}`);
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>${DOMAIN}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${
            page.includes('blog') ? 'monthly' : 
            page.startsWith('/services/') ? 'weekly' :
            'weekly'
          }</changefreq>
          <priority>${
            page === '' ? '1.0' : 
            page.startsWith('/services/voice-') ? '0.9' :
            page.startsWith('/services/') ? '0.8' :
            page.startsWith('/blog/') ? '0.7' :
            page.startsWith('/roofers-in-') ? '0.7' :
            page.startsWith('/county/') ? '0.6' :
            '0.5'
          }</priority>
        </url>
      `).join('')}
    </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
