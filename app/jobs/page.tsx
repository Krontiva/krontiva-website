"use client";

import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import { ArrowRight, MoveRight, Heart, Eye, Users, BookOpen, Zap, Target, AlertCircle } from "lucide-react";
import Image from "next/image";

const JobsPage = () => {
  return (
    <main className="bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-6 pt-32">
        {/* Hero Section */}
        <div className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-[80px] font-display font-bold leading-tight mb-12"
          >
            <br />
            Work Culture at<br />
            Krontiva Africa
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

        {/* Open Positions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl mb-32 group"
        >
          <div className="absolute inset-0">
            <Image
              src="/team-meeting.jpg"
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
                While we don't have any open positions right now, we're always interested in meeting talented people who share our passion for innovation and excellence.
              </p>
              <div className="flex flex-col items-center gap-6">
                <button 
                  onClick={() => window.location.href = 'mailto:careers@krontiva.com'} 
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-green-500 hover:text-white transition-colors group"
                >
                  Send us your CV <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-white/60 text-sm">
                  <AlertCircle className="w-4 h-4 inline-block mr-2" />
                  No current openings, but we'd love to know you
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default JobsPage; 