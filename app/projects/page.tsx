"use client";

import React from 'react';
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Digital Banking Transformation",
    category: "Financial Services",
    description: "Complete digital transformation of a leading African bank's core systems and customer-facing platforms.",
    image: "/projects/banking.jpg",
    href: "/projects/digital-banking",
    stats: [
      { label: "Increase in Digital Transactions", value: "200%" },
      { label: "Customer Satisfaction", value: "98%" },
      { label: "Cost Reduction", value: "40%" }
    ]
  },
  {
    title: "Supply Chain Optimization",
    category: "Manufacturing",
    description: "End-to-end supply chain optimization for a major manufacturing company using AI and IoT.",
    image: "/projects/supply-chain.jpg",
    href: "/projects/supply-chain",
    stats: [
      { label: "Inventory Turnover Improvement", value: "85%" },
      { label: "Operational Efficiency", value: "60%" },
      { label: "Cost Savings", value: "45%" }
    ]
  },
  {
    title: "Healthcare Analytics Platform",
    category: "Healthcare",
    description: "Advanced analytics platform development for healthcare providers to improve patient care.",
    image: "/projects/healthcare.jpg",
    href: "/projects/healthcare-analytics",
    stats: [
      { label: "Patient Outcomes Improved", value: "75%" },
      { label: "Resource Utilization", value: "90%" },
      { label: "Data Processing Speed", value: "300%" }
    ]
  }
];

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-green-600 text-lg font-medium mb-4 block"
            >
              Our Projects
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-7xl font-display font-medium text-gray-900 mb-8"
            >
              Transforming ideas<br />
              into <span className="text-green-500">reality</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl"
            >
              Explore our portfolio of successful transformations across various industries, 
              delivering measurable impact and sustainable growth.
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image Section */}
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:pl-8">
                    <h2 className="text-3xl font-display font-medium text-gray-900 mb-6">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 mb-8">
                      {project.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-8 mb-8">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-3xl font-display font-medium text-green-500 mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={project.href}
                      className="inline-flex items-center px-6 py-3 bg-green-100 text-green-700 
                      font-medium hover:bg-green-200 transition-all group/link rounded-lg"
                    >
                      <span className="mr-2">View case study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-500 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our proven expertise and innovative solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
} 