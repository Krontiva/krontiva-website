"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!mounted) return null;

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-[100]"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-b2 text-gray-300 font-sans">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <button
              onClick={acceptCookies}
              className="whitespace-nowrap px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-display"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 