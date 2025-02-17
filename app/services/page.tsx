"use client";

import React from 'react';
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Link from "next/link";
import { Box, LineChart, Settings, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const services = [
  {
    title: {
      line1: "Customer",
      line2: "Transformation"
    },
    icon: <Box className="w-10 h-10 stroke-green-500" />,
    href: "/services/customer-transformation",
    features: [
      "Customer Experience Design",
      "Digital Channel Optimization",
      "Customer Analytics & Insights",
      "CRM Implementation"
    ]
  },
  {
    title: {
      line1: "Financial",
      line2: "Transformation"
    },
    icon: <LineChart className="w-10 h-10 stroke-green-500" />,
    href: "/services/financial-transformation",
    features: [
      "Financial Process Optimization",
      "Cost Management Solutions",
      "Revenue Enhancement",
      "Financial Technology Integration"
    ]
  },
  {
    title: {
      line1: "Operational",
      line2: "Transformation"
    },
    icon: <Settings className="w-10 h-10 stroke-green-500" />,
    href: "/services/operational-transformation",
    features: [
      "Process Reengineering",
      "Supply Chain Optimization",
      "Quality Management Systems",
      "Operational Excellence"
    ]
  },
  {
    title: {
      line1: "Workforce",
      line2: "Transformation"
    },
    icon: <Users className="w-10 h-10 stroke-green-500" />,
    href: "/services/workforce-transformation",
    features: [
      "Digital Workplace Solutions",
      "Talent Management",
      "Change Management",
      "Learning & Development"
    ]
  }
];

const heroImages = [
  {
    src: "/hero-bg.jpg",
    alt: "Business Transformation"
  },
  {
    src: "/herobg.jpg",
    alt: "Digital Innovation"
  },
  {
    src: "/ceo-meeting.jpg",
    alt: "Technology Solutions"
  }
];

export default function ServicesPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-[80px] font-display font-bold text-gray-900 mb-8"
            >
              Transforming businesses<br />
              for the <span className="text-green-500">digital age</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl"
            >
              We provide comprehensive transformation solutions that help organizations 
              adapt, innovate, and thrive in today's rapidly evolving business landscape.
            </motion.p>
          </div>
        </div>

        {/* Full Width Hero Image Slider */}
        <div className="relative h-[70vh] w-screen mb-24">
          {heroImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentImage === index ? 1 : 0,
                scale: currentImage === index ? 1 : 1.1
              }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
            </motion.div>
          ))}

          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImage === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="flex flex-wrap">
            {services.map((service, index) => (
              <div 
                key={service.title.line1} 
                className="w-full lg:w-1/4 group relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 h-full border border-gray-100 group-hover:border-green-100 transition-colors bg-gradient-to-b from-white to-gray-50/50 group-hover:from-green-50/50 group-hover:to-white rounded-sm relative"
                >
                  {/* Icon with circle background */}
                  <div className="mb-8 inline-block">
                    <div className="p-3 rounded-lg bg-green-50 group-hover:bg-green-100 transition-colors shadow-sm">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[28px] font-display font-bold text-gray-900 mb-6 leading-tight group-hover:text-green-800 transition-colors">
                    {service.title.line1}<br />
                    {service.title.line2}
                  </h3>

                  {/* Features list */}
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li 
                        key={feature}
                        className="text-gray-600 group-hover:text-gray-700 text-[15px] flex items-center gap-2 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-700 opacity-60 group-hover:opacity-100 transition-all" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Add Learn More link */}
                  <div className="mt-8 pt-4 border-t border-gray-100 group-hover:border-green-100 transition-colors">
                    <Link 
                      href={service.href}
                      className="flex items-center justify-between w-full px-6 py-3 bg-green-100 text-green-700 
                      font-medium hover:bg-green-200 transition-all group/link"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>

                {/* Divider (except for last item) */}
                {index < services.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 bottom-8 w-[1px] bg-gray-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-500 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's discuss how our transformation services can help your organization thrive in the digital age.
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