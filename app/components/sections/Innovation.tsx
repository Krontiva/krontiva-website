"use client";

import Link from 'next/link';
import { Eye, Target, ArrowRight, Star, Crown, Lightbulb, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Innovation = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Grid Background with Vignette */}
      <div className="absolute inset-0">
        {/* Base Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <motion.div 
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0px 0px", "100px 100px"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              background: 'radial-gradient(circle at center, rgba(74, 222, 128, 0.03) 0%, rgba(74, 222, 128, 0.05) 35%, transparent 70%)',
            }}
          />
        </div>
        
        {/* Larger Vignette Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, transparent 30%, rgba(255,255,255,0.95) 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-[56px] md:text-[72px] lg:text-[96px] leading-[1.1] font-display font-bold text-gray-900 mb-6">
            <span className="text-green-500">Krontiva</span> Africa
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-display">
            Transform your business with our comprehensive solutions while maintaining full control over your digital assets.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Vision Card */}
          <motion.div 
            className="relative bg-green-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Dots Pattern */}
            <div className="absolute top-6 right-6">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-green-100" />
                ))}
              </div>
            </div>
            
            {/* Header with Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex p-3 bg-green-100 rounded-xl">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-h4 font-display font-bold text-gray-900">Vision</h3>
            </div>

            {/* Content */}
            <p className="text-b2 text-gray-600 font-display">
            To create a digitally connected Africa where financial and retail services are accessible, affordable, and secure, while empowering the continent's business ecosystem with seamless connectivity and transformative technologies for innovation, inclusivity, and sustainable growth.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            className="relative bg-green-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Dots Pattern */}
            <div className="absolute top-6 right-6">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-green-100" />
                ))}
              </div>
            </div>
            
            {/* Header with Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex p-3 bg-green-100 rounded-xl">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-h4 font-display font-bold text-gray-900">Mission</h3>
            </div>

            {/* Content */}
            <p className="text-b2 text-gray-600 font-display">
              Our mission is to bridge the gaps within Africa's business landscape by providing turn key technology services.
            </p>
          </motion.div>

          {/* Services Card */}
          <motion.div 
            className="relative bg-green-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Dots Pattern */}
            <div className="absolute top-6 right-6">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-green-100" />
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div className="h-full flex flex-col">
              <div className="flex-grow">
                <h3 className="text-h4 font-display font-bold text-gray-900 mb-4">About Krontiva</h3>
                <p className="text-b2 text-gray-600 font-display">
                  At Krontiva Africa, we are a leading transformation company driven by the belief that businesses must evolve beyond digital to thrive in a fast-changing world.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center mt-6 text-green-500 hover:text-green-600 transition-colors group"
              >
                <span className="font-display">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Core Values Card */}
        <motion.div 
          className="relative bg-green-50 p-8 rounded-2xl mt-16 hover:shadow-lg transition-shadow"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Dots Pattern */}
          <div className="absolute top-6 right-6">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-green-100" />
              ))}
            </div>
          </div>

          {/* Core Values Header */}
          <h3 className="text-h3 font-display font-bold text-gray-900 mb-8">Core Values</h3>

          {/* Values Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {/* Excellence */}
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 bg-green-100 rounded-xl">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-h4 font-display font-bold text-gray-900 mb-2">Excellence</h4>
                <p className="text-b2 text-gray-600 font-display">
                  Striving for the highest standards in everything we do
                </p>
              </div>
            </div>

            {/* Leadership */}
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 bg-green-100 rounded-xl">
                <Crown className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-h4 font-display font-bold text-gray-900 mb-2">Leadership</h4>
                <p className="text-b2 text-gray-600 font-display">
                  Guiding with vision and empowering through action
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 bg-green-100 rounded-xl">
                <Lightbulb className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-h4 font-display font-bold text-gray-900 mb-2">Innovation</h4>
                <p className="text-b2 text-gray-600 font-display">
                  Pioneering solutions for tomorrow's challenges
                </p>
              </div>
            </div>

            {/* Value Addition */}
            <div className="flex items-start gap-4">
              <div className="inline-flex p-3 bg-green-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-h4 font-display font-bold text-gray-900 mb-2">Value Addition</h4>
                <p className="text-b2 text-gray-600 font-display">
                  Creating lasting impact through meaningful solutions
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>    
    </section>
  );
};

export default Innovation; 