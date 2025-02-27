"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import { Mail, Phone, MapPin } from "lucide-react";
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
    href: "https://www.google.com/maps/place/The+Octagon/@5.5760374,-0.1972479,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9a5f12e8b5d1:0x6b25433ef94c5f7f!8m2!3d5.5760374!4d-0.1946676!16s%2Fg%2F11c1z4_4m9?entry=ttu"
  }
];

export default function ContactPage() {
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
              className="text-5xl md:text-7xl lg:text-[80px] font-display font-bold text-gray-900 mb-8"
            >
              Let&apos;s start a<br />
              <span className="text-green-500">conversation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl"
            >
              Have a question or want to discuss a project? We'd love to hear from you. 
              Get in touch with us using any of the methods below.
            </motion.p>
          </div>

          {/* Contact Section - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Email and Phone in one row */}
              <div className="grid grid-cols-2 gap-6">
                {contactInfo.slice(0, 2).map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="group block p-8 border border-gray-100 rounded-lg bg-gradient-to-b from-white to-gray-50/50 
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
                    <p className="text-gray-600 text-sm">
                      {info.description}
                    </p>
                  </a>
                ))}
              </div>

              {/* Office card full width */}
              <a
                href={contactInfo[2].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 border border-gray-100 rounded-lg bg-gradient-to-b from-white to-gray-50/50 
                hover:border-green-100 hover:from-green-50/50 hover:to-white transition-colors"
              >
                <div className="mb-6 p-3 rounded-lg bg-green-50 group-hover:bg-green-100 transition-colors 
                shadow-sm inline-block">
                  {contactInfo[2].icon}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {contactInfo[2].title}
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  {contactInfo[2].details}
                </p>
                <p className="text-gray-600 text-sm">
                  {contactInfo[2].description}
                </p>
              </a>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8"
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                  required
                />
                <textarea
                  placeholder="Your message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
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