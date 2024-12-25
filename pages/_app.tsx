import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import MobileOptimizer from "../components/optimization/MobileOptimizer";
import PerformanceOptimizer from "../components/optimization/PerformanceOptimizer";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Register service worker for PWA
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("ServiceWorker registration successful");
          },
          function (err) {
            console.log("ServiceWorker registration failed: ", err);
          },
        );
      });
    }
  }, []);

  return (
    <>
      <MobileOptimizer />
      <PerformanceOptimizer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
