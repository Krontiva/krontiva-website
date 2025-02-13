"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Marketing Strategy",
    description: "We have spent 31+ year of servicing consulting & advising solutions and learned what makes",
    image: "/herobg.jpg",
    alt: "Marketing strategy meeting"
  },
  {
    title: "Generations Campaign",
    description: "We have spent 31+ year of servicing consulting & advising solutions and learned what makes",
    image: "/generations-campaign.jpg",
    alt: "Team collaboration"
  },
  {
    title: "Optimizing Websites",
    description: "We have spent 31+ year of servicing consulting & advising solutions and learned what makes",
    image: "/optimizing-websites.jpg",
    alt: "Website optimization"
  },
  {
    title: "Digital Solutions",
    description: "We have spent 31+ year of servicing consulting & advising solutions and learned what makes",
    image: "/digital-solutions.jpg",
    alt: "Digital solutions meeting"
  }
];

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 mb-4"
          >
            Our Industries
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900"
          >
            Where can we<br />help you?
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {industry.description}
              </p>
              <div className="flex items-center text-gray-900 font-semibold group">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 