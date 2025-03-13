"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/layout/Header";

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

export default function NewsPage() {
  const [news, setNews] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/krontiva_articles`);
        if (response.ok) {
          const data = await response.json();
          const sortedNews = data.sort((a: Article, b: Article) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setNews(sortedNews);
          setError(null);
        } else {
          throw new Error('Failed to fetch articles');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Unable to load articles at this time');
        setNews([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) {
    return (
      <main className="bg-white min-h-screen">
        <Header />
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="bg-white min-h-screen">
        <Header />
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-600 
              text-sm font-medium mb-6">
              News & Insights
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-8">
              Latest Articles
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Stay informed about the latest developments in technology, business transformation, 
              and industry insights through our curated articles and analysis.
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {news.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/news/${article.id}`}>
                  <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={article.image.url}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-green-600 font-medium uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-gray-900 group-hover:text-green-500 
                      transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>by {article.authors?.[0]?.name || 'Unknown Author'}</span>
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 