"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    id: "001",
    title: "CUSTOMER TRANSFORMATION",
    description: "Brand Identity, Strategy & Consult, Position, Rebrand",
    href: "/customer-transformation"
  },
  {
    id: "002",
    title: "FINANCIAL TRANSFORMATION",
    description: "Brand Identity, Strategy & Consult, Position, Rebrand",
    href: "/financial-transformation"
  },
  {
    id: "003",
    title: "OPERATIONAL TRANSFORMATION",
    description: "Brand Identity, Strategy & Consult, Position, Rebrand",
    href: "/operational-transformation"
  },
  {
    id: "004",
    title: "WORKFORCE TRANSFORMATION",
    description: "Brand Identity, Strategy & Consult, Position, Rebrand",
    href: "/workforce-transformation"
  }
];

const TransformationServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                href={service.href}
                className="group block w-full"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between py-8 px-6 md:px-12 rounded-2xl transition-colors hover:bg-[#CCFF00]">
                  <div className="flex items-center gap-8 mb-4 md:mb-0">
                    <span className="text-sm font-display text-gray-500">{service.id}</span>
                    <div className="space-y-2">
                      <h3 className="text-[32px] md:text-[40px] font-display font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-b2 text-gray-600 font-display">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-900 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationServices; 