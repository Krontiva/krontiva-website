"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "76+",
    label: "Projects completed successfully"
  },
  {
    number: "23+",
    label: "Industry experts & consultants"
  },
  {
    number: "2+",
    label: "Years of excellence"
  }
];

export default function Stats() {
  return (
    <section className="py-24 bg-green-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left side - Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Delivering
              <br />
              transformative
              <br />
              business solutions
            </h2>
          </motion.div>

          {/* Right side - Stats */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <span className="text-5xl md:text-6xl font-display font-bold text-white mb-2 block">
                      {stat.number}
                    </span>
                    {/* Decorative line */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-px bg-white/20" />
                  </div>
                  <p className="mt-6 text-white text-lg">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 