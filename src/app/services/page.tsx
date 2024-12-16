"use client"; // Add this at the top of the file

import React from "react";
import { motion } from "framer-motion";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";

const servicesData = [
  {
    icon: <DevicePhoneMobileIcon className="h-12 w-12 text-blue-500" />,
    title: "Mobile App Development",
    description:
      "Create responsive and intuitive mobile applications using React Native and modern frameworks.",
    services: [
      "Cross-platform development",
      "UI/UX design",
      "Performance optimization",
    ],
  },
  {
    icon: <ComputerDesktopIcon className="h-12 w-12 text-green-500" />,
    title: "Web Development",
    description:
      "Build scalable and performant web applications using cutting-edge technologies.",
    services: [
      "Frontend development",
      "Backend integration",
      "Full-stack solutions",
    ],
  },
  {
    icon: <GlobeAltIcon className="h-12 w-12 text-purple-500" />,
    title: "UI/UX Design",
    description:
      "Design user-centric interfaces that are both beautiful and functional.",
    services: ["Wireframing", "Prototyping", "User research"],
  },
  {
    icon: <PresentationChartLineIcon className="h-12 w-12 text-red-500" />,
    title: "Consulting",
    description:
      "Provide expert guidance to help businesses leverage technology effectively.",
    services: [
      "Technical strategy",
      "Architecture design",
      "Technology assessment",
    ],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-text">
          What I Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all group"
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>

              <h3 className="text-xl font-semibold text-center mb-4 text-brand-text group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>

              <ul className="space-y-2 text-center text-gray-700">
                {service.services.map((item) => (
                  <li key={item} className="flex items-center justify-center">
                    <svg
                      className="h-4 w-4 mr-2 text-brand-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
