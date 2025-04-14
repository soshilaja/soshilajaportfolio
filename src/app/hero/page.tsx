"use client"; // Add this at the top of the file

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownTrayIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";

const HeroSection: React.FC = () => {
  const downloadResume = () => {
    // In a real implementation, link to actual resume PDF
    window.open(
      "https://drive.google.com/file/d/1qZvSNn7_fj6mwnUnr0Rg8YTTznGS_r6r/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Personal Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text">
            Hi, I&#39;m{" "}
            <span className="text-brand-primary">Stephen Oshilaja</span>
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            A Creative Web Application Developer Transforming Ideas into Digital
            Experiences
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <button
              onClick={downloadResume}
              className="btn btn-primary flex items-center space-x-2 bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span>Download CV</span>
            </button>

            <Link
              href="/#contact"
              className="btn btn-outline flex items-center space-x-2 border border-brand-primary text-brand-primary px-6 py-3 rounded-lg hover:bg-brand-primary hover:text-white transition-colors"
            >
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
              <span>Let&#39;s Talk</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-brand-primary">
            <Image
              src="/images/stephen_oshilaja.jpg" // Replace with your actual image
              alt="Your Profile"
              width={600}
              height={600}
              // layout="fill"
              style={{ objectFit: "cover" }} // Use CSS style instead
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
