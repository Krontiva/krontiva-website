"use client";

import { useState } from "react";
import Header from "../components/layout/Header";
import CookieConsent from "../components/ui/CookieConsent";

export default function CookiesPage() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <main className="bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">
          Cookie Settings
        </h1>
        <div className="prose max-w-3xl">
          <p className="text-xl text-gray-600 mb-12">
            We use cookies to enhance your browsing experience, serve personalized content, 
            and analyze our traffic. Here you can adjust your cookie preferences.
          </p>
          
          {/* Cookie Categories */}
          <div className="space-y-8">
            <div className="p-6 border border-gray-100 rounded-xl">
              <h3 className="text-xl font-display font-bold mb-4">Essential Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies are necessary for the website to function and cannot be switched off.
              </p>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked 
                  disabled 
                  className="w-4 h-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-500">Always Active</label>
              </div>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl">
              <h3 className="text-xl font-display font-bold mb-4">Analytics Cookies</h3>
              <p className="text-gray-600 mb-4">
                Help us understand how visitors interact with our website.
              </p>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-600">Enable Analytics</label>
              </div>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl">
              <h3 className="text-xl font-display font-bold mb-4">Marketing Cookies</h3>
              <p className="text-gray-600 mb-4">
                Used to track visitors across websites for marketing purposes.
              </p>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-600">Enable Marketing</label>
              </div>
            </div>
          </div>
        </div>

        {showBanner && <CookieConsent />}
      </div>
    </main>
  );
} 