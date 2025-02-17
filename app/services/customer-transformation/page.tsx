"use client";

import React from 'react';
import { motion } from "framer-motion";
import Header from "../../components/layout/Header";
import Image from "next/image";
import { Users, ChartBar, Target, Heart } from "lucide-react";

const features = [
  {
    icon: <Users className="w-6 h-6 stroke-green-500" />,
    title: "Valuable insight and data",
    description: "At Krontiva Africa, we harness valuable insights and data to drive meaningful change for our clients. By analyzing customer behaviors, market trends, and operational metrics, we uncover opportunities that empower businesses to make informed decisions. Our data-driven approach ensures that every strategy we design is not only innovative but also rooted in actionable intelligence, helping our clients stay ahead in a competitive landscape."
  },
  {
    icon: <ChartBar className="w-6 h-6 stroke-green-500" />,
    title: "A pulse on the present and an eye on the future",
    description: "Krontiva Africa maintains a pulse on the present and an eye on the future, enabling businesses to stay agile in an ever-evolving marketplace. Our customer transformation services are grounded in understanding current customer behaviors and needs while anticipating future trends. By blending real-time insights with forward-thinking strategies, we empower organizations to adapt, innovate, and create customer experiences that not only meet today's expectations but also set the standard for tomorrow."
  },
  {
    icon: <Target className="w-6 h-6 stroke-green-500" />,
    title: "Outcome obsessed",
    description: "Krontiva Africa is outcome-obsessed, ensuring every solution we deliver drives measurable success for our clients. Our customer transformation services are designed with clear objectives in mind, focusing on tangible results such as enhanced customer engagement, improved loyalty, and sustained growth. We collaborate closely with businesses to set ambitious yet achievable goals, leveraging innovative tools and strategies to exceed expectations. For us, success isn't just about the process—it's about delivering outcomes that make a real difference."
  },
  {
    icon: <Heart className="w-6 h-6 stroke-green-500" />,
    title: "Customer attraction",
    description: "At Krontiva Africa, we recognize the vital role of attracting new customers to drive business success. We craft compelling value propositions that align with the needs and aspirations of our target audience. By understanding their challenges and expectations, we design tailored messaging and innovative solutions that effectively address their pain points, ensuring our approach resonates and inspires meaningful connections."
  }
];

export default function CustomerTransformationPage() {
  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-green-600 text-lg font-medium mb-4 block"
            >
              Transform Your Customer Experience
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-[80px] font-display font-bold text-gray-900 mb-8"
            >
              Customer<br />
              <span className="text-green-500">Transformation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl"
            >
              At Krontiva Africa, we empower businesses to deliver exceptional, seamless, and personalized customer experiences. Through innovative technologies and data-driven strategies, we help organizations enhance engagement, build loyalty, and drive sustainable growth—bridging the gap between businesses and their audiences in Africa and beyond.
            </motion.p>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="relative h-[70vh] w-screen mb-24">
          <Image
            src="/customer-transform.jpg"
            alt="Customer Transformation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
              Customer-Centric Transformation: The Heart of Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Customer transformation is at the heart of our mission to empower businesses with innovative solutions. We recognize that today's customers are more informed, connected, and demanding than ever. To thrive in this dynamic environment, businesses must reimagine their customer experiences, putting their needs and expectations at the center of every interaction. Our customer transformation services are designed to help organizations adapt to this shift by delivering exceptional, seamless, and personalized experiences that resonate with their target audiences.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 border border-gray-100 rounded-lg bg-gradient-to-b from-white to-gray-50/50 
                hover:border-green-100 hover:from-green-50/50 hover:to-white transition-colors h-full">
                  <div className="mb-6 p-3 rounded-lg bg-green-50 group-hover:bg-green-100 transition-colors 
                  shadow-sm inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-3xl space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Tailored Strategies for Unique Challenges
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our approach focuses on understanding the unique challenges and opportunities faced by each client. We leverage advanced technologies, data-driven insights, and customer-centric strategies to design solutions that enhance engagement, build loyalty, and drive long-term success. Whether it's streamlining customer service processes, adopting cutting-edge communication tools, or creating immersive digital experiences, we work closely with businesses to ensure that their customers feel valued and understood at every touchpoint.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Transforming Customer Experiences to Drive Growth
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                By prioritizing customer transformation, Krontiva Africa aims to bridge the gap between businesses and their audiences. We believe that putting customers first not only enhances satisfaction but also fuels sustainable growth. Our solutions are not just about meeting expectations; they are about exceeding them, creating meaningful connections that drive lasting impact in Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 