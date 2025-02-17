"use client";

import React from 'react';
import { motion } from "framer-motion";
import Header from "../../components/layout/Header";
import Image from "next/image";
import { Users2, Heart, GraduationCap, Target } from "lucide-react";

const features = [
  {
    icon: <Users2 className="w-6 h-6 stroke-green-500" />,
    title: "Digital Workforce Enablement",
    description: "Equipping teams with modern tools and technologies to enhance collaboration and efficiency."
  },
  {
    icon: <Heart className="w-6 h-6 stroke-green-500" />,
    title: "Employee Experience & Engagement",
    description: "Implementing strategies that improve workplace satisfaction, retention, and overall productivity."
  },
  {
    icon: <GraduationCap className="w-6 h-6 stroke-green-500" />,
    title: "Skills Development & Training",
    description: "Providing customized learning and development programs to upskill teams and keep them competitive."
  },
  {
    icon: <Target className="w-6 h-6 stroke-green-500" />,
    title: "Performance & Talent Management",
    description: "Leveraging data-driven HR solutions to attract, retain, and develop top talent."
  }
];

export default function WorkforceTransformationPage() {
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
              Workforce Transformation
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-[80px] font-display font-bold text-gray-900 mb-8"
            >
              Transform your<br />
              <span className="text-green-500">workforce potential</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl"
            >
              At Krontiva Africa, we recognize that a company's greatest asset is its people. Our Workforce Transformation services are designed to help businesses build agile, high-performing teams by leveraging digital tools, data-driven insights, and innovative workforce strategies. As businesses evolve, so do the expectations of employees. Organizations must adopt new ways of working, enhance employee engagement, and create environments that foster productivity and growth.
            </motion.p>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="relative h-[70vh] w-screen mb-24">
          <Image
            src="/workforce-transform.jpg"
            alt="Workforce Transformation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
              Building Future-Ready Teams
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              By integrating smart workforce solutions, businesses can future-proof their teams, adapt to changing market dynamics, and create a resilient and highly motivated workforce. At Krontiva Africa, we help companies transition into the digital era by ensuring their employees are empowered, engaged, and equipped for success.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 border border-gray-100 rounded-lg bg-gradient-to-b from-white to-gray-50/50 
                hover:border-green-100 hover:from-green-50/50 hover:to-white transition-colors h-full">
                  <div className="mb-6 p-3 rounded-lg bg-green-50 group-hover:bg-green-100 transition-colors 
                  shadow-sm inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-3xl space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Digital Era Transition
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our Workforce Transformation services are designed to help businesses build agile, high-performing teams by leveraging digital tools, data-driven insights, and innovative workforce strategies.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Employee-Centric Approach
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Organizations must adopt new ways of working, enhance employee engagement, and create environments that foster productivity and growth. We help companies transition into the digital era by ensuring their employees are empowered, engaged, and equipped for success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 