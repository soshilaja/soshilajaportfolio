"use client"; // Add this at the top of the file

import React from "react";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ServerIcon,
  // PaintBrushIcon,
  ChartBarIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

const skillCategories = [
  {
    name: "Frontend",
    icon: <CodeBracketIcon className="h-12 w-12 text-blue-500" />,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    name: "Backend",
    icon: <ServerIcon className="h-12 w-12 text-green-500" />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "GraphQL", level: 65 },
    ],
  },
  // {
  //   name: "Design",
  //   icon: <PaintBrushIcon className="h-12 w-12 text-purple-500" />,
  //   skills: [
  //     { name: "Figma", level: 85 },
  //     { name: "Adobe XD", level: 70 },
  //     { name: "Photoshop", level: 65 },
  //     { name: "Illustrator", level: 60 },
  //   ],
  // },
  {
    name: "Content Management Systems (CMS)",
    icon: <GlobeAltIcon className="h-12 w-12 text-purple-500" />,
    skills: [
      { name: "WordPress", level: 90 },
      { name: "Wix", level: 85 },
      { name: "Shopify", level: 80 },
      { name: "Squarespace", level: 80 },
    ],
  },
  {
    name: "Tools & Platforms",
    icon: <ChartBarIcon className="h-12 w-12 text-red-500" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Netlify", level: 80 },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-text">
          Professional Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold ml-4 text-brand-text">
                  {category.name}
                </h3>
              </div>

              {category.skills.map((skill) => (
                <div key={skill.name} className="mb-4">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
