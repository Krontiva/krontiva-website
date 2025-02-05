"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CustomerTransform = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div 
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-[40px] lg:text-[64px] leading-[1.1] font-display font-bold text-gray-900">
              <span className="text-green-500">Customer</span>
              <br />
              Transformation
            </h2>
            <div className="space-y-4 lg:space-y-6">
              <p className="text-b1 text-gray-600 font-display max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis
              </p>
              <p className="text-b1 text-gray-600 font-display max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/customer-transformation"
                className="inline-flex items-center text-green-500 hover:text-green-600 transition-colors group"
              >
                <span className="font-display text-b1">Learn more</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/customer-transform.jpg"
                alt="Person wearing VR headset"
                fill
                className="object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-[url('/sphere-pattern.png')] bg-no-repeat bg-right-top mix-blend-screen"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTransform; 