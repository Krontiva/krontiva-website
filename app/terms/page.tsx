"use client";

import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Image from "next/image";

const TermsPage = () => {
  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-screen h-[70vh] overflow-hidden">
        <Image
          src="/terms-hero.jpg"
          alt="Terms of Service"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6">
          <div className="h-full flex flex-col justify-center max-w-3xl pt-32">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-green-400 font-medium mb-4"
            >
              Terms of Service
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
            >
              Terms & Conditions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl"
            >
              Please read these terms carefully before using our services. By accessing or using our services, you agree to be bound by these terms.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="prose prose-lg">
          {/* Agreement */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">1. Agreement to Terms</h2>
            <p className="mb-6">
              By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-gray-600">
                These terms apply to all users, visitors, and others who access or use our services.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">2. Use of Services</h2>
            <p className="mb-6">Our services include but are not limited to:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Business and technology consulting
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Software development and implementation
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Digital transformation solutions
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Training and support services
              </li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">3. Intellectual Property Rights</h2>
            <p className="mb-6">
              The Service and its original content, features, and functionality are owned by Krontiva Africa Limited and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-gray-600">
                You may not modify, reproduce, or create derivative works based on our services without express written consent.
              </p>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">4. User Responsibilities</h2>
            <p className="mb-6">As a user of our services, you agree to:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Provide accurate and complete information
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Maintain the confidentiality of your account
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Use the services legally and appropriately
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Respect intellectual property rights
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">5. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="font-bold mb-4">Krontiva Africa Limited</p>
              <ul className="space-y-2">
                <li>Email: support@krontiva.africa</li>
                <li>Phone: +233 303599169</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <p className="text-gray-600">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsPage; 