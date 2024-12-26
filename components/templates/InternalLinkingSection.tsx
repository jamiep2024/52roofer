import React from 'react';
import Link from 'next/link';

interface RelatedContent {
  title: string;
  path: string;
  description: string;
}

interface InternalLinkingSectionProps {
  relatedServices?: RelatedContent[];
  relatedBlogPosts?: RelatedContent[];
  relatedLocations?: RelatedContent[];
  countyName?: string;
  countyPath?: string;
}

const InternalLinkingSection: React.FC<InternalLinkingSectionProps> = ({
  relatedServices,
  relatedBlogPosts,
  relatedLocations,
  countyName,
  countyPath
}) => {
  return (
    <div className="space-y-8">
      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary-600 mb-6">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                href={service.path}
                className="block p-6 bg-gradient-to-br from-primary-50 to-accent/5 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related Blog Posts */}
      {relatedBlogPosts && relatedBlogPosts.length > 0 && (
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary-600 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedBlogPosts.map((post, index) => (
              <Link
                key={index}
                href={post.path}
                className="block p-6 bg-gradient-to-br from-primary-50 to-accent/5 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related Locations */}
      {relatedLocations && relatedLocations.length > 0 && (
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary-600 mb-6">
            {countyName ? `Other Areas in ${countyName}` : 'Nearby Locations'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedLocations.map((location, index) => (
              <Link
                key={index}
                href={location.path}
                className="block p-4 bg-gradient-to-br from-primary-50 to-accent/5 rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <span className="text-primary-600 font-medium">{location.title}</span>
              </Link>
            ))}
          </div>
          {countyPath && (
            <div className="mt-6 text-center">
              <Link
                href={countyPath}
                className="inline-flex items-center text-primary-600 hover:text-primary-700"
              >
                View all areas in {countyName} →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InternalLinkingSection;
