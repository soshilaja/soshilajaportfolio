"use client"; // Add this at the top of the file

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDoubleLeftIcon, BackwardIcon, ForwardIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const testimonialsData = [
  {
    name: "Niki Power",
    position: "Scholarships, Liaison Officer, FGS",
    company: "Dalhousie University",
    quote:
      "Stephen is a star! Despite constant demands on their time and expertise, Stephen never fails to respond quickly and accurately to frequent last minute, time-sensitive requests for updates to our public facing and internal sites.",
    avatar: "/images/niki_power.jpeg",
  },
  {
    name: "Chris Panton",
    position: "Owner,",
    company: "Golden Touch Landscaping",
    quote:
      "A true problem solver who brings technical expertise and innovative thinking to every project. Highly recommended!",
    avatar: "/images/chris_panton.jpg",
  },
  {
    name: "Mary Nkurumah",
    position: "Owner,",
    company: "Mary's African Cuisine",
    quote:
      "Collaborative, skilled, and always goes the extra mile. Their ability to understand complex requirements is remarkable.",
    avatar: "/images/mary_nkurumah.png",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const testimonial = testimonialsData[currentTestimonial];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-text">
          Client Testimonials
        </h2>

        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 rounded-lg p-8 shadow-md relative"
        >
          <ChevronDoubleLeftIcon className="absolute top-4 left-4 text-brand-primary opacity-20 h-16 w-16" />

          <p className="text-xl italic text-gray-700 mb-6 text-center relative z-10">
            &#34;{testimonial.quote}&#34;
          </p>

          <div className="flex items-center justify-center">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={300}
              height={300}
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
            <div>
              <h3 className="font-semibold text-brand-text">
                {testimonial.name}
              </h3>
              <p className="text-gray-600">
                {testimonial.position} at {testimonial.company}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-48">
            <button
              onClick={prevTestimonial}
              className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
            >
              {/* Previous */}
              <BackwardIcon className="h-12 w-12 text-blue-500  hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
            >
              {/* Next */}
              <ForwardIcon className="h-12 w-12 text-blue-500  hover:text-white transition-colors" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
