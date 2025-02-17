"use client";

import React from 'react';
import { motion } from "framer-motion";
import Header from "../../components/layout/Header";
import Image from "next/image";
import { Wallet, BarChart3, FileCheck, CreditCard } from "lucide-react";

const features = [
  {
    icon: <Wallet className="w-6 h-6 stroke-green-500" />,
    title: "Automated Financial Reconciliation",
    description: "Reduce manual errors and ensure accurate financial reporting with our reconciliation tools."
  },
  {
    icon: <BarChart3 className="w-6 h-6 stroke-green-500" />,
    title: "Optimized Revenue Collection",
    description: "Implement efficient billing and invoicing systems to track payments and improve collections."
  },
  {
    icon: <FileCheck className="w-6 h-6 stroke-green-500" />,
    title: "Data-Driven Financial Insights",
    description: "Gain real-time visibility into your financial performance with advanced analytics and reporting."
  },
  {
    icon: <CreditCard className="w-6 h-6 stroke-green-500" />,
    title: "Scalable Payment Solutions",
    description: "Enable multiple payment methods, including mobile money, cards, and bank transfers, to cater to diverse customer preferences."
  }
];

export default function FinancialTransformationPage() {
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
              Financial Transformation
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-[80px] font-display font-bold text-gray-900 mb-8"
            >
              Financial<br />
              <span className="text-green-500">Transformation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl"
            >
              At Krontiva Africa, we empower businesses with innovative financial transformation solutions designed to optimize financial operations, enhance transparency, and drive sustainable growth. As organizations evolve, the need for streamlined financial processes, secure transactions, and scalable payment solutions becomes crucial. Our financial transformation services help businesses embrace digital finance, automate financial workflows, and implement smart payment systems to improve efficiency and customer experience.
            </motion.p>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="relative h-[70vh] w-screen mb-24">
          <Image
            src="/financial-transform.jpg"
            alt="Financial Transformation"
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
              Digital Payment Solutions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              We provide businesses with integrated digital payment solutions that enable them to accept payments effortlessly across multiple channels. With secure, automated, and user-friendly payment processing, companies can enhance their revenue streams while delivering a smooth experience to customers. Our approach also focuses on financial data insights, allowing businesses to track transactions in real time, optimize cash flow, and make data-driven decisions. By leveraging innovative financial technology, we help organizations improve reconciliation, enhance security, and reduce the complexities of managing digital payments. With our expertise, businesses can transition from traditional financial systems to modern, agile, and customer-friendly solutions—ensuring financial stability, improved transaction experiences, and sustainable business growth.
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
                Beyond Payments
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Beyond payments, our financial transformation services include automated financial reconciliation to reduce manual errors and ensure accurate financial reporting, optimized revenue collection through efficient billing and invoicing systems, data-driven financial insights for real-time visibility, and scalable payment solutions enabling multiple payment methods to cater to diverse customer preferences.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Digital Transformation Journey
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                With Krontiva Africa, businesses can transition from traditional financial processes to modern, agile, and technology-driven financial systems. Our solutions are designed to reduce operational costs, improve compliance, and enhance overall financial management, positioning businesses for long-term success in an increasingly digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 