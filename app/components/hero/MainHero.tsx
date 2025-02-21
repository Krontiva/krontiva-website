"use client";

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MainHero() {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Background Grid with Gradient */}
      <div className="absolute inset-0">
        {/* Grid Pattern - Half Height */}
        <div 
          className="absolute inset-x-0 top-0 h-[70%] opacity-[0.50]" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 2px),
              linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 2px)
            `,
            backgroundSize: '64px 54px',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent)'
          }}
        />
        
        {/* Subtle Overlay Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(10, 10, 10, 0) 0%, #0A0A0A 90%)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-white/80 font-medium">
              Empowering businesses.
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-8"
            >
              We&apos;re an industry
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                leading transformation company
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-white/70 max-w-lg mb-12"
            >
              Drive your business confidently into the future.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg 
                font-medium hover:bg-green-600 transition-all group"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white 
                px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all"
              >
                Learn More
              </Link>
            </motion.div>


          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[700px] hidden lg:block"
          >
            {/* Main Image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="/hero-corporate.jpg"
                alt="Corporate Innovation"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
            </div>

            {/* Floating Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.3,
              }}
              className="absolute -bottom-8 -right-8 w-72 h-48 rounded-xl overflow-hidden shadow-2xl"
              style={{
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              <Image
                src="/hero-secondary.jpg"
                alt="Innovation in Action"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 288px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -right-8 top-1/4 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Krontiva Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <div className="font-medium">Krontiva Africa</div>
                  <div className="text-sm text-gray-600">Enterprise Solutions</div>
                </div>
              </div>
            </motion.div>

            {/* Success Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -left-8 bottom-1/4 bg-green-500 p-6 rounded-xl shadow-xl text-white"
            >
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

