"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface BlogPost {
  category: string;
  date: string;
  title: string;
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    category: "CATEGORY",
    date: "JUNE 2023",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    href: "/blog/post-1"
  },
  {
    category: "CATEGORY",
    date: "JUNE 2023",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    href: "/blog/post-2"
  },
  {
    category: "CATEGORY",
    date: "JUNE 2023",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    href: "/blog/post-3"
  }
];

const LatestNews = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-12 lg:gap-20">
          {/* Left Side */}
          <div className="space-y-6">
            <motion.h2 
              className="text-[64px] leading-[1.1] font-display font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Updates
            </motion.h2>
            <motion.p 
              className="text-b1 text-gray-600 font-display max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/blog"
                className="inline-flex items-center px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-display"
              >
                View All News
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Blog Posts */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Link 
                  href={post.href}
                  className="block p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-display text-green-500">{post.category}</span>
                      <span className="text-sm font-display text-gray-400">{post.date}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-green-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="text-h4 font-display text-gray-900">{post.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews; 