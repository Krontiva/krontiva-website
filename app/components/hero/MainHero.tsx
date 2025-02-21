"use client";

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-white flex flex-col justify-between overflow-hidden">
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(120deg, rgba(74, 222, 128, 0.08) 0%, rgba(134, 239, 172, 0.03) 100%)',
            animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
        
        {/* Soft overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(45deg, transparent 0%, rgba(74, 222, 128, 0.05) 50%, transparent 100%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8 flex-grow flex items-center">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mb-8 text-center font-display text-5xl font-black tracking-tight text-black sm:text-6xl md:text-7xl lg:text-[90px]"
          >
            <div className="overflow-hidden">
              <motion.span variants={item} className="block">
                We are an
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span variants={item} className="block">
                industry leading
              </motion.span>
            </div>
            <div className="overflow-hidden py-2">
              <motion.span variants={item} className="block">
                transformation company
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.9,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mx-auto max-w-2xl text-lg text-black sm:text-xl font-display"
          >
            Drive your business confidently into the future.
          </motion.p>
        </div>
      </div>

      {/* Bottom Section with Image and Button */}
      <div className="relative">
        {/* Explore Button */}
        <motion.div
          className="absolute bottom-8 right-8 z-10 md:bottom-12 md:right-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="group relative flex h-32 w-32 items-center justify-center rounded-full bg-green-500 text-center font-bold text-white transition-all duration-300 hover:shadow-lg md:h-40 md:w-40"
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ gap: '12px' }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-lg font-display">Explore</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Image */}
        <div className="relative h-[200px] w-full">
          <Image
            src="/hero-bg.jpg"
            alt="People collaborating in office"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

