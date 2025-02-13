"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-[80px] font-display font-bold leading-tight mb-12"
          >
            At Krontiva Africa, we are <br />
            more than just a technology<br />
            consulting company
          </motion.h1>

          {/* About Section Number and Description */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-lg font-medium">01</span>
              </div>
              <span className="text-xl font-display uppercase tracking-wider">ABOUT US</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-600 max-w-2xl"
            >
              We are innovators, problem-solvers, and partners in transformation. Our mission is to empower businesses with cutting-edge digital solutions that drive efficiency, enhance customer experiences, and foster sustainable growth. 
            </motion.p>
          </div>
        </div>

        {/* Vision Section - Split Design */}
        <div className="mb-32 flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/customer-transform.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                  <span className="text-lg font-medium text-green-600">02</span>
                </div>
                <span className="text-xl font-display uppercase tracking-wider">OUR EXPERTISE</span>
              </div>
              <p className="text-xl leading-relaxed text-gray-600">
                With a team of forward-thinking professionals, we specialize in business transformation across various sectors, including customer engagement, financial solutions, operational efficiency, and workforce development. We believe in the power of technology to unlock new opportunities, streamline operations, and create lasting impact.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Approach Section - Dark Background */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/90" />
          <div className="relative z-10 px-8 py-24 md:p-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-lg font-medium text-white">03</span>
              </div>
              <span className="text-xl font-display text-white uppercase tracking-wider">OUR APPROACH</span>
            </div>
            <p className="text-xl leading-relaxed text-gray-300 max-w-3xl">
              What sets us apart is our commitment to excellence, collaboration, and continuous innovation. At Krontiva, we embrace challenges as opportunities and work closely with our clients to develop solutions tailored to their unique needs. Our customer-centric approach ensures that every business we support is equipped to adapt, scale, and succeed in today's dynamic digital landscape.
            </p>
          </div>
        </motion.div>

        {/* Mission Section - Grid Design */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-lg font-medium">04</span>
              </div>
              <span className="text-xl font-display uppercase tracking-wider">OUR MISSION</span>
            </div>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-600">
                Driven by a strong work ethic and a belief in creating meaningful change, we continue to push boundaries and redefine what's possible in the digital transformation space.
              </p>
              <p className="text-2xl font-display font-bold text-gray-900">
                Welcome to Krontiva Africa—where innovation meets impact.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 grid grid-cols-2 gap-4"
          >
            <div className="aspect-square bg-green-50 rounded-2xl" />
            <div className="aspect-square bg-gray-100 rounded-2xl" />
            <div className="aspect-square bg-gray-900 rounded-2xl" />
            <div className="aspect-square bg-green-100 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </main>
  );
} 