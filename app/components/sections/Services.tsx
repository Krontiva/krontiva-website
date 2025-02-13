"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: {
      highlight: "Customer",
      rest: "Transformation"
    },
    description: "Revolutionize your customer experience with data-driven insights and innovative engagement strategies.",
    href: "/services/customer-transformation"
  },
  {
    number: "02",
    title: {
      highlight: "Financial",
      rest: "Transformation"
    },
    description: "Optimize your financial operations and unlock new opportunities for growth and efficiency.",
    href: "/services/financial-transformation"
  },
  {
    number: "03",
    title: {
      highlight: "Operational",
      rest: "Transformation"
    },
    description: "Streamline your business processes and enhance operational effectiveness.",
    href: "/services/operational-transformation"
  },
  {
    number: "04",
    title: {
      highlight: "Workforce",
      rest: "Transformation"
    },
    description: "Empower your team with modern tools and strategies for enhanced productivity.",
    href: "/services/workforce-transformation"
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Sticky Image */}
        <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
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
        <div className="lg:w-1/2 px-6 lg:px-20 py-24 lg:pl-32">
          <div className="max-w-xl">
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
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-16"
            >
              Services we're<br />offering
            </motion.h2>

            {/* Service Cards */}
            <div className="space-y-16 md:space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-12">
                    {/* Large Number */}
                    <div className="text-6xl md:text-7xl font-display font-bold text-gray-200">
                      {service.number}
                    </div>
                    
                    {/* Service Content */}
                    <div>
                      <motion.h3 
                        className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight"
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
                      <p className="text-gray-600 text-lg mb-4">
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
                    <div className="mt-16 md:mt-24 h-px bg-gray-200" />
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