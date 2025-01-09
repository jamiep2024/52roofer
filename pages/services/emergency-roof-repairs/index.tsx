import { GetStaticProps } from "next";
import Layout from "../../components/layout/Layout";
import SEO from "../../components/seo/SEO";
import LocalBusinessSchema from "../../components/seo/LocalBusinessSchema";

const EmergencyRoofRepairs = () => {
  return (
    <Layout>
      <SEO
        title="24/7 Emergency Roof Repairs | Fast Response Roofing Services"
        description="Professional emergency roof repair services available 24/7. Quick response for storm damage, leaks & urgent repairs. Local experts ready to help. ☎️ Call Now!"
      />
      <LocalBusinessSchema />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Emergency Roof Repairs</h1>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            24/7 Emergency Roofing Services
          </h2>
          <p>
            When you're faced with a roofing emergency, every minute counts. Our
            emergency roof repair service is available 24 hours a day, 7 days a
            week, to protect your property from further damage.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            We Handle All Emergency Situations:
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Storm damage repairs</li>
            <li>Urgent leak fixes</li>
            <li>Fallen tree damage</li>
            <li>Wind damage repairs</li>
            <li>Emergency temporary repairs</li>
            <li>Water damage mitigation</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Why Choose Our Emergency Service:
          </h3>
          <ul className="list-disc pl-6 mb-6">
            <li>24/7 availability</li>
            <li>Rapid response times</li>
            <li>Experienced emergency teams</li>
            <li>Professional damage assessment</li>
            <li>Temporary and permanent solutions</li>
            <li>Insurance claim assistance</li>
          </ul>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">
              Emergency? Follow These Steps:
            </h3>
            <ol className="list-decimal pl-6">
              <li className="mb-2">Call our emergency number immediately</li>
              <li className="mb-2">Safely document the damage if possible</li>
              <li className="mb-2">
                Prevent interior water damage where possible
              </li>
              <li className="mb-2">Wait for our rapid response team</li>
              <li>We'll assess and begin repairs promptly</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default EmergencyRoofRepairs;
