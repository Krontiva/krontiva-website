"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "../../components/layout/Header";

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
  slug: string;
  created_at: number;
  image: {
    url: string;
    meta: any;
    mime: string;
    name: string;
    path: string;
    size: number;
    type: string;
    access: string;
  };
}

export default function NewsDetail() {
  const params = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!params.slug) return;
      
      try {
        // Just fetch directly by ID
        const response = await fetch(`https://api-server.krontiva.africa/api:eUI59reW/krontiva_articles/${params.slug}`);
        
        if (response.ok) {
          const data = await response.json();
          setArticle(data);
        }
      } catch (error) {
        console.error('Failed to fetch article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [params.slug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
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
            <span>by {article.authors?.[0]?.name}</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>

        {article.image && (
          <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src={article.image.url}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        )}

        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </main>
  );
} 