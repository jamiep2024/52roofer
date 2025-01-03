import Head from 'next/head';
import { ReactNode } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema?: Record<string, any>;
  children?: ReactNode;
}

export default function SEO({ title, description, canonical, schema, children }: SEOProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Schema.org */}
        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}
      </Head>
      {children}
    </>
  );
}
