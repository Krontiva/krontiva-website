"use client";

import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 overflow-y-auto z-[101] px-4">
            <div className="flex min-h-full items-center justify-center py-8">
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                className="w-full max-w-2xl bg-white rounded-xl shadow-2xl relative"
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-900">
                      Get in Touch
                    </h2>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Two Column Grid - Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Name Field */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 
                          focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 
                          focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 
                          focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                          placeholder="+233 (0) XX XXX XXXX"
                        />
                      </div>

                      {/* Organisation Field */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                          Organisation
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 
                          focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    {/* Message Field - Full Width */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 
                        focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-lg 
                      font-semibold hover:bg-green-600 transition-colors text-sm sm:text-base"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
} 