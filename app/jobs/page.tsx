"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import { ArrowRight, Heart, Eye, Users, BookOpen, Zap, Target, ChevronDown } from "lucide-react";
import Image from "next/image";

const JobsPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState('belinda');

  return (
    <main className="bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-6 pt-32">
        {/* Hero Section */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2 w-full">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-5xl lg:text-[80px] font-display font-bold leading-tight mb-8 lg:mb-12"
              >
                Work Culture<br />
                <span className="text-green-500">Orientation</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-2xl"
              >
                At Krontiva Africa, our work culture is built on the foundation of teamwork, empathy, and shared growth. We are more than just colleagues—we are a family. Respect, love, and care are at the core of our interactions, fostering a workplace where everyone feels valued and supported. 
              </motion.p>
            </div>

            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative h-[250px] md:h-[300px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/team-culture.jpg"
                  alt="Team Culture"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Culture Values Section */}
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold mb-16 text-center"
          >
            Our Cultural Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "God Factor",
                description: "We put God first in everything we do, guided by faith and ethical principles.",
                icon: Heart,
                gradient: "from-red-500/10 to-red-500/5",
                iconColor: "text-red-500",
                borderColor: "border-red-100"
              },
              {
                title: "Believe in Company's Vision",
                description: "United in our mission to transform businesses through innovative solutions.",
                icon: Eye,
                gradient: "from-blue-500/10 to-blue-500/5",
                iconColor: "text-blue-500",
                borderColor: "border-blue-100"
              },
              {
                title: "Team Involvement",
                description: "Every voice matters, fostering an inclusive environment where ideas flourish.",
                icon: Users,
                gradient: "from-green-500/10 to-green-500/5",
                iconColor: "text-green-500",
                borderColor: "border-green-100"
              },
              {
                title: "Learning & Development",
                description: "Continuous learning and personal growth are central to our culture.",
                icon: BookOpen,
                gradient: "from-purple-500/10 to-purple-500/5",
                iconColor: "text-purple-500",
                borderColor: "border-purple-100"
              },
              {
                title: "Efficiency",
                description: "Smart work and innovative solutions drive our operational excellence.",
                icon: Zap,
                gradient: "from-yellow-500/10 to-yellow-500/5",
                iconColor: "text-yellow-500",
                borderColor: "border-yellow-100"
              },
              {
                title: "Results Focused",
                description: "Committed to delivering measurable impact and exceptional outcomes.",
                icon: Target,
                gradient: "from-indigo-500/10 to-indigo-500/5",
                iconColor: "text-indigo-500",
                borderColor: "border-indigo-100"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-2xl p-8 border ${item.borderColor} bg-gradient-to-br ${item.gradient} hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="absolute -top-5 left-6">
                  <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center ${item.iconColor}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="pt-4 space-y-4">
                  <h4 className="text-xl font-display font-bold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CEO's Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[800px] mb-32 group"
        >
          <div className="absolute inset-0">
            <Image
              src="/ceo-vision.jpg"
              alt="Leadership meeting"
              fill
              className="object-cover transition-transform duration-700 group-hover:grayscale"
            />
          </div>
          
          {/* Content Card */}
          <div className="absolute bottom-0 right-0 z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white backdrop-blur-sm p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-3xl font-display uppercase tracking-wider text-gray-900">
                  LEADERSHIP VISION
                </h3>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our CEO strongly champions empathy and emotional intelligence, ensuring that every team member is seen, heard, and uplifted. This deep sense of connection drives not just our internal operations but also the quality of solutions we create for the public.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Three Column Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="grid md:grid-cols-3 divide-x divide-gray-200">
            {/* Culture of Growth */}
            <div className="px-8 first:pl-0 last:pr-0">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                  A Culture of Growth
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that a positive and thriving work environment fuels innovation and productivity. Laughter, learning, and collaboration define our daily experiences, making Krontiva a place where creativity flourishes. We are committed to maintaining a healthy and non-toxic workspace, where negativity has no place, and mutual respect is upheld at all times.
              </p>
            </div>

            {/* Faith at Our Core */}
            <div className="px-8 first:pl-0 last:pr-0">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                  Faith at Our Core
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Above all, faith is at the heart of our journey. As an organization, we believe in God and rely on Him in all our endeavors, drawing strength and guidance to navigate challenges and achieve excellence.
              </p>
            </div>

            {/* Building Relationships */}
            <div className="px-8 first:pl-0 last:pr-0">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                  Building Relationships
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Krontiva Africa, we don&apos;t just build businesses—we build lasting relationships, shared experiences, and a culture that inspires growth and impact.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 md:mb-16 text-center">
            Our Team Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Testimonials Accordion */}
            <div className="space-y-4 order-2 md:order-1">
              {[
                {
                  name: "Belinda",
                  role: "Media Specialist",
                  testimonial: "My time at Krontiva was transformative, enhancing my skills through certified courses and AI tools. I mastered media scheduling, soft skills, and teamwork. Challenges arose, but quick solutions—whether through teamwork or individually—kept work moving. Fun Fridays added a refreshing balance to the experience."
                },
                {
                  name: "Samuel",
                  role: "Customer Success Manager",
                  testimonial: "As a Customer Success Manager at Krontiva Africa, I've spent nearly two years helping clients achieve meaningful results. I work with a passionate team, guiding clients toward success while continuously learning and growing. At Krontiva, we build strong relationships and deliver value every step of the way."
                },
                {
                  name: "Mary",
                  role: "Product Manager",
                  testimonial: "My journey to Krontiva Africa has been transformative, filled with learning, growth, and innovation. Working with a forward-thinking team has strengthened my adaptability and resilience. While juggling multiple responsibilities has been challenging, it has built my confidence and skills. This bittersweet journey continues to shape my career and future goals."
                },
                {
                  name: "Fabrice",
                  role: "Team Lead",
                  testimonial: "As a team lead at Krontiva Africa, I've guided a talented team in bringing innovative projects to life. Streamlining processes and aligning team strengths have been rewarding, and I've gained valuable experience in product design and development. I'm grateful for the growth and impact we've made together."
                },
                {
                  name: "Dzifa",
                  role: "Chief of Staff",
                  testimonial: "Krontiva Africa has been a true learning experience—what we call 'Krontiva University'. The God-factor guides us through uncertainty, reminding us to seek wisdom. I've learned that silence is golden, and our diverse team—from Product to BD to OCCS—makes us stand out. No matter our differences, Krontiva is home."
                }
              ].map((item) => (
                <div key={item.name} className="border-b border-gray-200">
                  <button
                    onClick={() => setActiveTestimonial(item.name.toLowerCase())}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <div>
                      <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">{item.role}</p>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeTestimonial === item.name.toLowerCase() ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {activeTestimonial === item.name.toLowerCase() && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pb-6"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {item.testimonial}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Image Section */}
            <div className="relative h-[400px] md:h-[700px] rounded-2xl overflow-hidden order-1 md:order-2">
              <Image
                src={`/team/${activeTestimonial || 'belinda'}.jpg`}
                alt="Team member"
                fill
                className="object-cover object-top transition-all duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

        {/* NSP Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 md:p-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Image and Label */}
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-64 h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/team/ronald.jpg"
                      alt="Ronald - NSP"
                      width={256}
                      height={256}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-2/3 text-center md:text-left">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-3xl font-display font-bold">
                      Ronald
                    </h3>
                    <span className="inline-block px-4 py-1.5 bg-green-500 text-white text-sm font-medium rounded-full whitespace-nowrap">
                      NSP
                    </span>
                  </div>
                  <p className="text-gray-600">Product Team</p>
                </div>
                <div className="relative">
                  <div className="absolute -top-6 -left-8 text-6xl text-green-200">&quot;</div>
                  <p className="text-xl text-gray-600 leading-relaxed relative z-10">
                    Working as an NSP at Krontiva Africa has been a fulfilling experience. I was warmly welcomed and supported by my team, especially the product team. The fast-paced learning challenged me to grow both professionally and personally. Krontiva truly feels like a family, built on support, teamwork, and care.
                  </p>
                  <div className="absolute -bottom-4 -right-8 text-6xl text-green-200 rotate-180">&quot;</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Open Positions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl mb-32 group"
        >
          <div className="absolute inset-0">
            <Image
              src="/team.jpg"
              alt="Team collaboration"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60" />
          </div>
          <div className="relative z-10 p-16 min-h-[500px] flex flex-col items-center justify-center text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Join Our Growing Team
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                At Krontiva Africa, we&apos;re looking for talented individuals to join our team. We offer a competitive salary, flexible work hours, and the opportunity to grow with us. Let&apos;s grow together!
              </p>
              <button 
                disabled
                className="inline-flex items-center px-8 py-4 bg-white/20 text-white rounded-full cursor-not-allowed opacity-80"
              >
                Coming Soon <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default JobsPage; 