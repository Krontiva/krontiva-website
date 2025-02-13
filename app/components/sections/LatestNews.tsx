"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const news = [
  {
    title: "Latest Audio Gear for Supreme Sound Quality",
    date: "February 5, 2023",
    category: "NEWS",
    author: "Mary Arthur",
    image: "/customer-transform.jpg",
    href: "/news/latest-audio-gear"
  },
  {
    title: "AI: Changing Retail Landscape in 2024",
    date: "July 31, 2023",
    category: "NEWS",
    author: "Abigail Bright-Davies",
    image: "/hero-bg.jpg",
    href: "/news/ai-retail-landscape"
  },
  {
    title: "Tech Transforming Education in 2024: Revolutionising Learning",
    date: "July 18, 2023",
    category: "NEWS",
    author: "Samuel Quartey",
    image: "/herobg.jpg",
    href: "/news/tech-education"
  }
];

export default function LatestNews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:gap-32">
          {/* Left Side - Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start mb-12 lg:mb-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-medium mb-6"
            >
              Latest Updates
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
            >
              News & <br />
              Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg mb-8"
            >
              Stay updated with the latest trends and insights in business transformation and technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                href="/news"
                className="inline-flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors group"
              >
                View all articles
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Side - News Cards */}
          <div className="lg:w-2/3">
            <div className="space-y-12">
              {news.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border-b border-gray-200 pb-12 last:border-0"
                >
                  <Link href={item.href} className="flex gap-8">
                    {/* Image */}
                    <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-green-600 font-medium uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-green-500 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>by {item.author}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 