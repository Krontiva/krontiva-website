"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/layout/Header";
import { Mail, Phone, MapPin, ArrowRight, X } from "lucide-react";
import ContactForm from "../components/forms/ContactForm";
import FAQ from "../components/sections/FAQ";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 stroke-green-500" />,
    title: "Email",
    details: "info@krontiva.com",
    description: "Send us an email anytime",
    href: "mailto:info@krontiva.com"
  },
  {
    icon: <Phone className="w-6 h-6 stroke-green-500" />,
    title: "Phone",
    details: "+233 (0)30 395 5169",
    description: "Mon-Fri from 9am to 5pm",
    href: "tel:+233303955169"
  },
  {
    icon: <MapPin className="w-6 h-6 stroke-green-500" />,
    title: "Office",
    details: "The Octagon, Accra, Ghana",
    description: "Come say hello at our office",
    href: "https://maps.google.com"
  }
];

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-[80px] font-display font-bold text-gray-900 mb-8"
            >
              Let's start a<br />
              <span className="text-green-500">conversation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl"
            >
              Hello there! We value your feedback, inquiries, and any concerns you may have. Feel free to reach out to us using the contact details below. Whether you have a question, need assistance, or wish to explore partnership opportunities, we are here to help. Let us connect!.
            </motion.p>
          </div>

          {/* Contact Form Modal */}
          <ContactForm 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-gray-100 rounded-lg bg-gradient-to-b from-white to-gray-50/50 
                hover:border-green-100 hover:from-green-50/50 hover:to-white transition-colors"
              >
                <div className="mb-6 p-3 rounded-lg bg-green-50 group-hover:bg-green-100 transition-colors 
                shadow-sm inline-block">
                  {info.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  {info.details}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {info.description}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center text-green-600 font-medium group-hover:text-green-700"
                >
                  <span className="mr-2">Contact us</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Map Section */}
      <section className="h-[400px] w-screen relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9735392120244!2d-0.19724792414645952!3d5.5760374334748545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a5f12e8b5d1%3A0x6b25433ef94c5f7f!2sThe%20Octagon!5e0!3m2!1sen!2sgh!4v1709829097051!5m2!1sen!2sgh"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </section>
    </main>
  );
} 