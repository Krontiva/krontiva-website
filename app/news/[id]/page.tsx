"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "../../components/layout/Header";
import Link from "next/link";
import { motion } from "framer-motion";

interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
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

export default function NewsDetail() {
  const params = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [moreArticles, setMoreArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!params.id) return;
      
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/krontiva_articles/${params.id}`);
        
        if (response.ok) {
          const data = await response.json();
          setArticle(data);
          
          // Fetch more articles
          const allArticlesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/krontiva_articles`);
          if (allArticlesResponse.ok) {
            const allArticles = await allArticlesResponse.json();
            const otherArticles = allArticles
              .filter((a: Article) => a.id !== params.id)
              .sort((a: Article, b: Article) => 
                new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .slice(0, 3);
            setMoreArticles(otherArticles);
          }
        }
      } catch (error) {
        console.error('Failed to fetch article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (isLoading) {
    return <div>Loading...</div>; // Add a proper loading state UI
  }

  if (!article) {
    return <div>Article not found</div>; // Add a proper error state UI
  }

  return (
    <main className="bg-white">
      <Header />
      <article className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-4">
            {article.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-500">
            <span>by {article.authors?.[0]?.name || 'Unknown Author'}</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>

        {article.image && (
          <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src={article.image.url}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div 
          className="prose max-w-none prose-p:mb-6 prose-headings:mb-6 prose-ul:mb-6 prose-ol:mb-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* More Articles Section */}
      <section className="border-t border-gray-100 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12">
            More Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {moreArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/news/${article.id}`}>
                  <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
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
                    <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-green-500 
                      transition-colors">
                      {article.title}
                    </h3>
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