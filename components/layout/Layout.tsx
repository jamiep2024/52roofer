import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Metadata } from "next";
import MobileOptimizer from "../optimization/MobileOptimizer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const metadata: Metadata = {
  title: "52roofer.com - Find Local Trusted Roofers",
  description:
    "Find trusted local roofers in Oxfordshire, Gloucestershire, Wiltshire, and Berkshire. Quick, reliable roofing services at 52roofer.com",
  viewport:
    "width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1",
  themeColor: "#1a365d",
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1"
        />
        <meta name="theme-color" content="#1a365d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      <MobileOptimizer />

      <div className="min-h-screen flex flex-col bg-background text-text antialiased overscroll-none">
        <Header />
        <main className="flex-grow mobile-container safe-padding smooth-scroll">
          <div className="w-full mx-auto">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
