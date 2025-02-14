"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/layout/Header";
import { MessageSquare, Utensils, Ticket, UserCheck } from 'lucide-react';

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

        {/* Approach Section - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32 relative w-screen left-1/2 right-1/2 -mx-[50vw]"
        >
          <div className="absolute inset-0 bg-black/90" />
          <div className="relative z-10 px-8 py-24 md:py-32">
            <div className="max-w-7xl mx-auto">
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
          </div>
        </motion.div>

        {/* Mission Section */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
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
                  Driven by a strong work ethic and a belief in creating meaningful change, we continue to push boundaries and redefine what's possible in the digital transformation space.
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
                    src="/customer-transform.jpg"
                    alt="Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/herobg.jpg"
                    alt="Technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/hero-bg.jpg"
                    alt="Collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/customer-transform.jpg"
                    alt="Impact"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Products & Services Section */}
        <div className="py-32 border-t border-gray-100">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Products & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Krontiva Africa, we are dedicated to providing innovative digital solutions that enhance business operations and customer experiences. Our products are designed to streamline processes, improve efficiency, and drive growth across various industries.
            </p>
          </motion.div>

          {/* Products Section */}
          <div className="mb-32">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-display font-bold mb-12"
            >
              Our Products
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  label: "Commerce",
                  title: "EngageEase",
                  description: "A seamless conversational commerce platform that simplifies buying, selling, and deliveries on WhatsApp, enabling businesses to connect with customers effortlessly.",
                  bgColor: "bg-blue-50",
                  icon: MessageSquare,
                  iconColor: "text-blue-600"
                },
                {
                  label: "Food Tech",
                  title: "Delika",
                  description: "A food-tech solution designed to enhance restaurant management, improve customer engagement, and optimize food delivery services.",
                  bgColor: "bg-green-50",
                  icon: Utensils,
                  iconColor: "text-green-600"
                },
                {
                  label: "Ticketing",
                  title: "Tickrfly",
                  description: "A smart ticketing platform for purchasing event and flight tickets, as well as booking and reservations, ensuring a smooth and hassle-free experience for users.",
                  bgColor: "bg-purple-50",
                  icon: Ticket,
                  iconColor: "text-purple-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group ${item.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium uppercase tracking-wider text-gray-600">
                        {item.label}
                      </span>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div className="h-px bg-gray-200" />
                    <div className="space-y-4">
                      <h4 className="text-2xl font-display font-bold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services Section - Full Width */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-gradient-to-br from-green-300 via-green-400 to-green-600 py-24"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Left Column - Header */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-1/3"
                >
                  <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                    Our Services
                  </h3>
                  <p className="text-xl text-white/80 leading-relaxed">
                    We provide comprehensive solutions tailored to meet your business needs, ensuring seamless experiences for both organizers and users.
                  </p>
                </motion.div>

                {/* Right Column - Services Cards */}
                <div className="lg:w-2/3 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors group"
                  >
                    <div className="flex items-start gap-6">

                      <div>
                        <h4 className="text-2xl font-display font-bold mb-4 text-white">
                          Attendee Registration
                        </h4>
                        <p className="text-lg leading-relaxed text-white/80">
                          Offering seamless event registration and check-in solutions for organizers. Our platform ensures smooth processing and management of attendee data.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors group relative"
                  >
                    <div className="absolute -top-3 right-4">
                      <span className="inline-block px-4 py-2 bg-white text-green-600 text-sm font-medium rounded-full">
                        Coming Soon
                      </span>
                    </div>
                    <div className="flex items-start gap-6">

                      <div>
                        <h4 className="text-2xl font-display font-bold mb-4 text-white">
                          Ticketing & Reservations
                        </h4>
                        <p className="text-lg leading-relaxed text-white/80">
                          Expanding into ticket booking and reservation services to make event and travel planning more convenient. A comprehensive solution for all your booking needs.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Closing Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto text-center mt-20"
          >
            At Krontiva Africa, we are committed to innovation, efficiency, and customer satisfaction. Our goal is to simplify complex processes and create solutions that make everyday transactions effortless.
          </motion.p>
        </div>
      </div>
    </main>
  );
} 