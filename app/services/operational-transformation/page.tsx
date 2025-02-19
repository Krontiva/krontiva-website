"use client";

import React from 'react';
import { motion } from "framer-motion";
import Header from "../../components/layout/Header";
import Image from "next/image";
import { Settings, LineChart, Cpu, Leaf } from "lucide-react";

const features = [
  {
    icon: <Settings className="w-6 h-6 stroke-green-500" />,
    title: "Optimize Processes",
    description: "Enhance efficiency and productivity through streamlined workflows and digital solutions."
  },
  {
    icon: <LineChart className="w-6 h-6 stroke-green-500" />,
    title: "Drive Growth & Resilience",
    description: "Implement future-proof strategies that sustain revenue and adapt to market changes."
  },
  {
    icon: <Cpu className="w-6 h-6 stroke-green-500" />,
    title: "Integrate Smart Technologies",
    description: "Leverage automation, AI, and data analytics to enhance operational performance."
  },
  {
    icon: <Leaf className="w-6 h-6 stroke-green-500" />,
    title: "Enhance Sustainability & Compliance",
    description: "Align operations with ethical, social, and environmental responsibilities."
  }
];

export default function OperationalTransformationPage() {
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
              Operational Transformation
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[80px] font-display font-bold text-gray-900 mb-8"
            >
              Harness Technology to<br />
              <span className="text-green-500">Build Resilient Operations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl"
            >
              At Krontiva Africa, we don&apos;t just adapt to change—we drive it. Our mission is to help businesses streamline and optimize their operations, making them not only more efficient but more resilient in an ever-evolving market. Our approach to operational transformation is built on innovation, cutting-edge technology, and a deep understanding of the African business landscape.
            </motion.p>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="relative h-[300px] md:h-[50vh] lg:h-[70vh] w-full md:w-screen mb-16 md:mb-24">
          <Image
            src="/operational-transform.jpg"
            alt="Operational Transformation"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6 md:mb-8">
              Future-Ready Operations
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
              At Krontiva Africa, we help businesses reimagine their operations by leveraging cutting-edge technology to drive efficiency, resilience, and long-term value. In today&apos;s fast-evolving business landscape, operations teams face challenges that go beyond traditional efficiency goals. Workforce shortages, supply chain disruptions, and the increasing demand for sustainable and socially responsible practices require a new approach to operational strategy.
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
                Enhancing Internal Processes
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether it&apos;s through enhancing internal processes, improving supply chain management, or implementing smart business systems, we are dedicated to empowering businesses to unlock their full potential.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Partnership for Growth
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                By partnering with Krontiva Africa, businesses can redefine their operational framework, stay ahead of disruptions, and unlock new growth opportunities. Let&apos;s transform your operations for a more agile and sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 