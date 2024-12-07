import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Metadata } from 'next';

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: '52roofer.com - Find Local Trusted Roofers',
  description: 'Find trusted local roofers in Oxfordshire, Gloucestershire, Wiltshire, and Berkshire. Quick, reliable roofing services at 52roofer.com',
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
