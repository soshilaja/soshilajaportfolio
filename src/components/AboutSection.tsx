"use client"; // Add this at the top of the file

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "UI/UX Design", level: 65 },
    { name: "Backend Development", level: 70 },
  ];

  const companies = [
    "/logos/gtl_logo_crop.jpg",
    "/logos/marys_african.png",
    "/logos/dal_logo.png",
  ];

  return (
    <section id="about" ref={ref} className="py-16 bg-white">
      <div className="container p-8 mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-text">
            About Me
          </h2>

          <div className="space-y-4 text-gray-600">
            <p>
              I&#39;m a passionate web application developer with a keen eye for creating
              intuitive and engaging digital experiences. With over a decade of
              experience in servicing clients and half a decade of web development, I specialize in transforming
              complex ideas into elegant, user-friendly solutions.
            </p>
            <p>
              My journey began with a curiosity for how softwares, websites and web applications work and has
              evolved into a mission to build technology that makes meaningful
              impact in the lives of users. I love solving challenging problems and continuously
              learning new technologies.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Professional Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-gray-700">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-brand-primary h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial & Companies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <p className="italic text-gray-600 mb-4">
              &#34;An exceptional professional who consistently delivers
              high-quality work with creativity and precision. Highly
              recommended!&#34;
            </p>
            <div className="flex items-center">
              <Image
                src="/images/chris_panton.jpg"
                alt="Testimonial Avatar"
                width={300}
                height={300}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Chris Panton</h4>
                <p className="text-gray-500 text-sm">
                  Owner, Golden Touch Landscaping
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Trusted By
            </h3>
            <div className="flex justify-around items-center opacity-70">
              {companies.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  width={300}
                  height={300}
                  alt={`Company Logo ${index + 1}`}
                  className="w-20 h-auto grayscale hover:grayscale-0 transition-all"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
