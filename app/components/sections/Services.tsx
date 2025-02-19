"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Customer Transformation",
    description: "Enhance your customer experience and engagement through digital solutions.",
    image: "/customer-transform.jpg",
    href: "/services/customer-transformation"
  },
  {
    title: "Operational Transformation",
    description: "Streamline and optimize your business operations for maximum efficiency.",
    image: "/operational-transform.jpg",
    href: "/services/operational-transformation"
  },
  {
    title: "Financial Transformation",
    description: "Modernize your financial processes and payment systems.",
    image: "/financial-transform.jpg",
    href: "/services/financial-transformation"
  },
  {
    title: "Workforce Transformation",
    description: "Build and empower high-performing teams for the digital age.",
    image: "/workforce-transform.jpg",
    href: "/services/workforce-transformation"
  }
];

export default function Services() {
  // Remove unused variables
  useScroll();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re here to help you navigate the complexities of digital transformation and build a stronger, more resilient business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={service.href}>
                <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-200">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors group"
          >
            View all services
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 