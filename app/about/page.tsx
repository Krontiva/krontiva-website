"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/layout/Header";
import { UserCheck, LineChart, Settings, Users, ArrowRight } from 'lucide-react';
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-6 pt-32">
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
            className="lg:w-1/2 w-full"
          >
            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/ron.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
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

        {/* Approach Section - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32 relative w-full md:w-screen left-0 md:left-1/2 right-0 md:right-1/2 md:-mx-[50vw]"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero-bg.jpg"
              alt="Our approach"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          
          <div className="relative z-10 px-8 py-24 md:py-32">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-lg font-medium text-white">03</span>
                </div>
                <span className="text-xl font-display text-white uppercase tracking-wider">OUR APPROACH</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-xl leading-relaxed text-gray-300">
                    What sets us apart is our commitment to excellence, collaboration, and continuous innovation. At Krontiva, we embrace challenges as opportunities and work closely with our clients to develop solutions tailored to their unique needs. Our customer-centric approach ensures that every business we support is equipped to adapt, scale, and succeed in today&apos;s dynamic digital landscape.
                  </p>
                </div>
                
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/team-collaboration.jpg"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-lg font-medium">04</span>
                </div>
                <span className="text-xl font-display uppercase tracking-wider">OUR MISSION</span>
              </div>
              <div className="max-w-xl">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                  Driven by a strong work ethic and a belief in creating meaningful change, we continue to push boundaries and redefine what&apos;s possible in the digital transformation space.
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1]">
                  Welcome to Krontiva Africa—<br />
                  <span className="text-green-500">where innovation meets impact.</span>
                </h2>
              </div>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/nanaengage.jpg"
                    alt="Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/nana-sammy.jpg"
                    alt="Technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/joe-mettle-praise.jpg"
                    alt="Collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/engageeaseglobal.jpg"
                    alt="Impact"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>



          {/* Services Section - Full Width */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-screen left-0 md:left-1/2 right-0 md:right-1/2 md:-mx-[50vw]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/transform-services.jpg"
                alt="Services Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/95 to-green-900/90" />
            </div>

            <div className="relative z-10 px-8 py-24 md:py-32">
              <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white text-center">
                    Our Transformation Services
                  </h3>
                  <p className="text-xl text-white/90 leading-relaxed text-center max-w-3xl mx-auto">
                    We provide comprehensive transformation solutions tailored to meet your business needs, ensuring seamless experiences and sustainable growth.
                  </p>
                </motion.div>

                {/* Services Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {[
                    {
                      title: "Customer Transformation",
                      description: "Enhance customer experiences and engagement through digital solutions and data-driven insights.",
                      icon: "users",
                      href: "/services/customer-transformation"
                    },
                    {
                      title: "Financial Transformation",
                      description: "Optimize financial processes and systems to improve efficiency and decision-making.",
                      icon: "chart",
                      href: "/services/financial-transformation"
                    },
                    {
                      title: "Operational Transformation",
                      description: "Streamline operations and processes to increase productivity and reduce costs.",
                      icon: "settings",
                      href: "/services/operational-transformation"
                    },
                    {
                      title: "Workforce Transformation",
                      description: "Empower your workforce with digital tools and skills for the future.",
                      icon: "people",
                      href: "/services/workforce-transformation"
                    }
                  ].map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link 
                        href={service.href}
                        className="block h-full group"
                      >
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full
                          transition-all duration-300 hover:bg-white/20 flex flex-col">
                          <div className="w-12 h-12 rounded-xl bg-white/20 flex-shrink-0 flex items-center justify-center 
                            group-hover:scale-110 transition-transform duration-300 mb-6">
                            {service.icon === "users" && <UserCheck className="w-6 h-6 text-white" />}
                            {service.icon === "chart" && <LineChart className="w-6 h-6 text-white" />}
                            {service.icon === "settings" && <Settings className="w-6 h-6 text-white" />}
                            {service.icon === "people" && <Users className="w-6 h-6 text-white" />}
                          </div>
                          
                          <h4 className="text-2xl font-display font-bold mb-4 text-white">
                            {service.title}
                          </h4>
                          <p className="text-lg leading-relaxed text-white/90 mb-6">
                            {service.description}
                          </p>
                          <div className="mt-auto flex items-center text-white font-medium">
                            <span>Learn more</span>
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
              
              </div>
            </div>
          </motion.div>
        </div>
    </main>
  );
} 