import HomePageTemplate from '../components/HomePageTemplate'

export default function Home() {
  const phoneNumber = '0800 123 4567'
  
  const serviceAreas = [
    { name: 'Berkshire', link: '/locations/berkshire' },
    { name: 'Surrey', link: '/locations/surrey' },
    { name: 'Hampshire', link: '/locations/hampshire' }
  ]

  const reviews = [
    {
      name: 'John Smith',
      rating: 5,
      review: 'Excellent service from start to finish!'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      review: 'Professional team and high quality work.'
    }
  ]

  const services = [
    { name: 'Residential Roofing', link: '/services/residential-roofing' },
    { name: 'Commercial Roofing', link: '/services/commercial-roofing' },
    { name: 'Roof Repairs', link: '/services/roof-repairs' }
  ]

  return (
    <HomePageTemplate 
      phoneNumber={phoneNumber}
      serviceAreas={serviceAreas}
      reviews={reviews}
      services={services}
    />
  )
}
