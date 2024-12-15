"use client"; // Add this at the top of the file

import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle = "Your Name - Portfolio",
}) => {
  return (
    <div className="min-h-screen bg-brand-background text-brand-text font-sans">
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Professional portfolio showcasing skills and projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
