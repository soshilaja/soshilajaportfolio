"use client"; // Add this at the top of the file

import { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink?: string;
  liveLink?: string;
  category: string;
}

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web", "Mobile"];

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "An e-commerce solution with advanced product management and payment integration.",
      technologies: ["HTML5", "JavaScript", "CSS3", "Wix Data", "Stripe"],
      imageUrl: "/images/marys_fp.webp",
      // githubLink: "https://github.com/yourusername/project1",
      liveLink: "https://www.marysafricancuisine.com/shop",
      category: "Web",
    },
    {
      id: 2,
      title: "Business Website with Contact Form",
      description:
        "Business website designed to showcase service offerings. The homepage features a clean, modern layout with high-quality images of completed projects.",
      technologies: ["React.js", "TypeScript", "Tailwind", "Cloudinary"],
      imageUrl: "/images/gtl_fp.webp",
      // githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://www.goldentouchlandscaping.ca/",
      category: "Web",
    },
    {
      id: 3,
      title: "Restaurant mobile application",
      description:
        "A mobile solution with advanced product management and payment integration.",
      technologies: [
        "React.js",
        "Nodejs",
        "Webview",
        "Tailwind",
        "Airtable",
        "Firebase",
        "Google Cloud Platform",
      ],
      imageUrl: "/images/marys_mobile.webp",
      // githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://marys-african-cuisine.glideapp.io/dl/0f5325",
      category: "Mobile",
    },
    {
      id: 4,
      title: "Blog site",
      description:
        "A blog site that features research-inspired articles written by PhD students from various academic disciplines. The goal of the blog is to inspire readers.",
      technologies: ["WordPress", "JavaScript", "HTML5", "CSS3"],
      imageUrl: "/images/dal_otfp.webp",
      // githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://blogs.dal.ca/openthink/",
      category: "Web",
    },
    {
      id: 5,
      title: "Construction Company website",
      description:
        "A Construction company website, where visions are turned into reality with unmatched quality and modern design.",
      technologies: ["WordPress", "JavaScript", "HTML5", "CSS3"],
      imageUrl: "/images/lcp_fp.webp",
      // githubLink: "https://github.com/yourusername/project2",
      liveLink: "http://lawrencoconstruction.com/",
      category: "Web",
    },
    {
      id: 6,
      title: "Therapy Business Website",
      description:
        "Anahata Therapy is a holistic healing practice that offers clinical hypnotherapy and integrative therapeutic services to support emotional, mental, and physical well-being.",
      technologies: ["WordPress", "JavaScript", "HTML5", "CSS3"],
      imageUrl: "/images/anahataSexTherapy.webp",
      // githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://www.anahatatherapy.ca/",
      category: "Web",
    },
    {
      id: 7,
      title: "Non-profit Website",
      description:
        "HAAC.ca is the official website of the Health Association of African Canadians (HAAC)—a community-driven organization based in Nova Scotia that champions health equity for African Nova Scotian and African ancestry communities.",
      technologies: ["WordPress", "JavaScript", "HTML5", "CSS3"],
      imageUrl: "/images/healthassocofac.webp",
      // githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://haac.ca/",
      category: "Web",
    },
    {
      id: 8,
      title: "Logistics Web Application",
      description:
        "EcoDelivery is a modern, eco-conscious delivery platform designed to revolutionize local logistics with sustainability at its core.",
      technologies: [
        "React/Next.js",
        "JavaScript",
        "HTML5",
        "Tailwind CSS",
        "Firebase",
        "Google Cloud Platform",
      ],
      imageUrl: "/images/ecodeliveryweb.webp",
      // githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://ecodelivery.vercel.app",
      category: "Web",
    },
    {
      id: 9,
      title: "Driver Web Application",
      description:
        "The EcoDelivery Driver App is a streamlined, mobile-first interface designed for eco-conscious delivery drivers. Built to complement the EcoDelivery platform, this app helps drivers manage their routes, track deliveries, and contribute to a more sustainable logistics ecosystem.",
      technologies: [
        "React/Next.js",
        "JavaScript",
        "HTML5",
        "Tailwind CSS",
        "Firebase",
        "Google Cloud Platform",
      ],
      imageUrl: "/images/ecodeliverydriver.webp",
      // githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://ecodelivery-driver-app.vercel.app/",
      category: "Web",
    },
    {
      id: 10,
      title: "Logistics Dashboard Application",
      description:
        "The EcoDelivery Dashboard is a web-based control panel designed for fleet managers, dispatchers, and business owners to monitor and optimize their green delivery operations. It provides real-time insights, operational tools, and sustainability metrics to ensure every delivery aligns with environmental goals.",
      technologies: [
        "React/Next.js",
        "JavaScript",
        "HTML5",
        "Tailwind CSS",
        "Firebase",
        "Google Cloud Platform",
      ],
      imageUrl: "/images/ecodeliverydash.webp",
      // githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://ecodelivery-dashboard.vercel.app/",
      category: "Web",
    },
    {
      id: 11,
      title: "Find the perfect service for your hair",
      description:
        "To build a vibrant online community that empowers talented hairdressers and accessory designers, offering customers a seamless and trustworthy platform to discover and book high-quality hair care services and unique accessories—all in one place.",
      technologies: [
        "React/Next.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "SCSS",
        "MongoDB",
        "Express.js",
      ],
      imageUrl: "/images/hairly_hero.png",
      // githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://hairly-ten.vercel.app/",
      category: "Web",
    },
    // Add more projects as needed
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-text">
          My Portfolio
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-brand-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full hover:bg-brand-primary hover:text-white"
                    >
                      <EyeIcon className="h-6 w-6" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full hover:bg-brand-primary hover:text-white"
                    >
                      <CodeBracketIcon className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-brand-text">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
