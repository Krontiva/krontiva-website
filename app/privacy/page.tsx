"use client";

import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Image from "next/image";

const PrivacyPage = () => {
  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-screen h-[70vh] overflow-hidden">
        <Image
          src="/privacy-hero.jpg"
          alt="Privacy Policy"
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
              Privacy Policy
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
            >
              Data Protection & Privacy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl"
            >
              Krontiva Africa Limited, a business and technology consulting firm operating in Ghana, is committed to respecting and protecting your privacy.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">
            Privacy Policy for Krontiva Africa Limited
          </h1>

          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">1. Introduction</h2>
            <p className="mb-6">
              Krontiva Africa Limited, a business and technology consulting firm operating in Ghana, is committed to respecting and protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information in compliance with applicable privacy laws.
            </p>
          </div>

          {/* Information Collection */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">2. Information We Collect</h2>
            <p className="mb-6">
              We may collect personal information such as your name, email address, phone number, business name, industry, and other contact details when you visit our website, fill out a form, or communicate with us.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Name and contact information
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Business and professional details
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                IP address and device information
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Browsing history and preferences
              </li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-gray-600">
                We may also collect your geographical location based on your device's location settings, with your consent.
              </p>
            </div>
          </div>

          {/* Information Usage */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">3. How We Use Your Information</h2>
            <p className="mb-6">We may use your personal information to:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Communicate with you
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Provide and manage our services
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Improve our website, products, and services
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Comply with legal and regulatory obligations
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Conduct analytics and market research
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Manage and personalize your user experience
              </li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-gray-600">
                With your consent, we may also use your information for marketing purposes, such as sending you newsletters, promotional emails, and targeted advertisements. You have the right to opt-out at any time.
              </p>
            </div>
          </div>

          {/* Disclosure Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">4. Disclosure of Your Information</h2>
            <p className="mb-6">We may share your personal information with:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Our affiliates and subsidiaries
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Trusted third-party service providers and business partners
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Government agencies, regulatory authorities, or legal entities
              </li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-gray-600">
                We require all third parties to respect the security of your personal information and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes.
              </p>
            </div>
          </div>

          {/* Security Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">5. Security of Your Information</h2>
            <p className="mb-6">
              We take industry-standard measures to protect your personal information from unauthorized access, use, or disclosure. These measures include encryption, secure servers, and regular security assessments.
            </p>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-gray-600">
                In the unlikely event of a data breach that could affect your personal information, we will notify you promptly in accordance with applicable laws and regulations.
              </p>
            </div>
          </div>

          {/* Rights Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">6. Your Rights</h2>
            <p className="mb-6">Under Ghanaian and regional privacy laws, you have the following rights:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Access: You may request access to the personal data we hold about you
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Correction: You can request corrections to any inaccurate or incomplete information
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Deletion: You may request that we delete your personal information
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Objection: You may object to the processing of your personal information
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                Data Portability: You have the right to request the transfer of your personal information
              </li>
            </ul>
          </div>

          {/* Retention Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">7. Retention of Your Information</h2>
            <p className="mb-6">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. Once your information is no longer needed, we will securely delete or anonymize it.
            </p>
          </div>

          {/* Changes Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">8. Changes to Our Policy</h2>
            <p className="mb-6">
              We may occasionally update this Privacy Policy to reflect changes in our practices, technology, legal requirements, or other relevant factors.
            </p>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-gray-600">
                If we make substantial changes to how we handle your personal data, we will notify you in advance. Your continued use of our services after these changes are posted signifies your acceptance of the updated terms.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">9. Contact Us</h2>
            <p className="mb-6">
              If you have any questions, concerns, or requests regarding our Privacy Policy or how we handle your personal information, please contact us at:
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
              By using our website and services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
