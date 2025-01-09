import { ReactNode } from 'react';
import Head from 'next/head';

interface MetaData {
  title: string;
  description: string;
  canonical: string;
  schema: Record<string, any>;
}

interface ServiceLayoutProps {
  children: ReactNode;
  meta: MetaData;
}

const ServiceLayout = ({ children, meta }: ServiceLayoutProps) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(meta.schema) }}
        />
      </Head>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </>
  );
};

export default ServiceLayout;
