"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: {
      highlight: "Customer",
      rest: "Transformation"
    },
    description: "At Krontiva Africa, we empower businesses through innovative technologies and data-driven strategies, we help organizations enhance engagement, build loyalty, and drive sustainable growth—bridging the gap between businesses and their audiences in Africa and beyond.",
    href: "/services/customer-transformation"
  },
  {
    number: "02",
    title: {
      highlight: "Financial",
      rest: "Transformation"
    },
    description: "At Krontiva Africa, we don't just adapt to change—we drive it. Our mission is to help businesses streamline and optimize their operations, making them not only more efficient but more resilient in an ever-evolving market.",
    href: "/services/financial-transformation"
  },
  {
    number: "03",
    title: {
      highlight: "Operational",
      rest: "Transformation"
    },
    description: "Our approach to operational transformation is built on innovation, cutting-edge technology, and a deep understanding of the African business landscape.",
    href: "/services/operational-transformation"
  },
  {
    number: "04",
    title: {
      highlight: "Workforce",
      rest: "Transformation"
    },
    description: "Our Workforce Transformation services are designed to help businesses build agile, high-performing teams by leveraging digital tools, data-driven insights, and innovative workforce strategies.",
    href: "/services/workforce-transformation"
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Sticky Image */}
        <div className="lg:w-1/2 h-[300px] lg:h-screen lg:sticky lg:top-0">
          <div className="relative h-full">
            <Image
              src="/customer-transform.jpg"
              alt="Business meeting"
              fill
              className="object-cover"
              priority
            />
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* Right Side - Scrolling Content */}
        <div className="lg:w-1/2 px-4 sm:px-6 lg:px-20 py-12 lg:py-24 lg:pl-32">
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Header with Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-medium">
                what can we offer
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8 lg:mb-16"
            >
              Services we&apos;re<br />offering
            </motion.h2>

            {/* Service Cards */}
            <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 lg:gap-12">
                    {/* Large Number */}
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-200">
                      {service.number}
                    </div>
                    
                    {/* Service Content */}
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight"
                        whileHover="hover"
                      >
                        <motion.span 
                          className="text-green-500 block"
                          variants={{
                            hover: {
                              x: 20,
                              transition: { duration: 0.3, ease: "easeInOut" }
                            }
                          }}
                        >
                          {service.title.highlight}
                        </motion.span>
                        <motion.span 
                          className="text-gray-900 block"
                          variants={{
                            hover: {
                              x: 20,
                              transition: { duration: 0.3, delay: 0.1, ease: "easeInOut" }
                            }
                          }}
                        >
                          {service.title.rest}
                        </motion.span>
                      </motion.h3>
                      <p className="text-base sm:text-lg text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <Link 
                        href={service.href}
                        className="inline-flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors group/link"
                      >
                        <span className="mr-2">Learn more</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < services.length - 1 && (
                    <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 h-px bg-gray-200" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 