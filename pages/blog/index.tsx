import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { serviceAreas } from '../../data/serviceAreas';

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to Roof Maintenance',
    slug: 'complete-guide-to-roof-maintenance',
    excerpt: "Learn essential roof maintenance tips to extend your roof's lifespan and prevent costly repairs.",
    category: 'Maintenance',
    date: '2024-01-05'
  },
  {
    id: 2,
    title: '10 Signs You Need a Roof Replacement',
    slug: 'signs-you-need-roof-replacement',
    excerpt: 'Discover the key warning signs that indicate your roof may need replacement.',
    category: 'Replacement',
    date: '2024-01-10'
  },
  {
    id: 3,
    title: 'Choosing the Right Roofing Material',
    slug: 'choosing-right-roofing-material',
    excerpt: 'A comprehensive guide to different roofing materials and their benefits.',
    category: 'Materials',
    date: '2024-01-15'
  },
  {
    id: 4,
    title: 'Professional Roof Inspection Guide',
    slug: 'professional-roof-inspection-guide',
    excerpt: 'Understanding what to expect during a professional roof inspection.',
    category: 'Inspection',
    date: '2024-01-20'
  }
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "52roofer.com Roofing Blog",
  "description": "Expert roofing advice, maintenance tips, and industry insights from trusted roofing professionals.",
  "publisher": {
    "@type": "Organization",
    "name": "52roofer.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.52roofer.com/images/logo.png"
    }
  }
};

// Get array of area names for display
const areaNames = Object.values(serviceAreas).map(area => area.name);

const BlogIndex = () => {
  return (
    <>
      <Head>
        <title>Roofing Tips & Advice | Expert Roofing Blog | 52roofer.com</title>
        <meta name="description" content="Expert roofing advice, maintenance tips, and industry insights. Learn about roof repairs, maintenance, materials, and more from trusted roofing professionals." />
        <meta name="keywords" content="roofing blog, roof maintenance tips, roofing advice, roof repair guide, roofing materials, professional roofers" />
        <link rel="canonical" href="https://www.52roofer.com/blog" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Roofing Tips & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert roofing advice and guides from trusted professionals across {areaNames.join(', ')}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {post.date} • {post.category}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
