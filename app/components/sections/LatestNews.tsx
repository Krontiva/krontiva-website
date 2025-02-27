"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  authors_id: string;
  authors?: Array<{
    id: string;
    name: string;
    email: string;
    created_at: number;
  }>;
  image: {
    url: string;
  };
}

export default function LatestNews() {
  const [news, setNews] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://api-server.krontiva.africa/api:eUI59reW/krontiva_articles');
        if (response.ok) {
          const data = await response.json();
          console.log('News articles:', data.map((a: Article) => ({ 
            id: a.id, 
            slug: a.slug,
            title: a.title 
          })));
          
          const sortedNews = data.sort((a: Article, b: Article) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          ).slice(0, 3);
          setNews(sortedNews);
        }
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Add a proper loading state UI
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-32">
          {/* Left Side - Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start mb-8 sm:mb-12 lg:mb-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-medium mb-4 sm:mb-6"
            >
              Latest Updates
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 sm:mb-6"
            >
              News & <br />
              Updates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8"
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
            <div className="space-y-8 sm:space-y-12">
              {news.map((item) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group border-b border-gray-200 pb-8 sm:pb-12 last:border-0"
                >
                  <Link 
                    href={`/news/${item.id}`}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8"
                  >
                    <div className="relative w-full sm:w-48 h-48 sm:h-32 flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.image.url}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <span className="text-sm text-green-600 font-medium uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-green-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 mb-2 sm:mb-3 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>by {item.authors?.[0]?.name || 'Unknown Author'}</span>
                        <span>{new Date(item.date).toLocaleDateString()}</span>
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