import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About 52Roofer</h1>
        <div className="prose max-w-3xl">
          <p className="text-lg mb-4">
            52Roofer is a trusted roofing company with years of experience in residential and commercial roofing.
          </p>
          <p className="text-lg mb-4">
            Our team of certified professionals is dedicated to providing high-quality roofing services with a focus on
            customer satisfaction and long-lasting results.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Services</h2>
          <ul className="list-disc pl-6">
            <li>Roof installation</li>
            <li>Roof repair</li>
            <li>Roof maintenance</li>
            <li>Emergency roofing services</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
