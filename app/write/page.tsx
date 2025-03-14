"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import { Lock, Mail, Eye, EyeOff, Pencil, Trash2 } from "lucide-react";
import ArticleEditor from '../components/editor/ArticleEditor';
import Image from "next/image";

// Update the Article interface to match the API response
interface Article {
  id: string;  // Changed from number to string
  title: string;
  category: string;
  date: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: Array<{ tag: string }>;
  image: {
    url: string;
    name: string;
  };
  authors: Array<{
    id: string;
    name: string;
    email: string;
  }>;
}

// Update the UserData interface to match the actual API response
interface UserData {
  id: string;
  name: string;  // If the API returns a single 'name' field instead of first_name/last_name
  email: string;
  role: string;
}

export default function WritePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('UPDATES');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [slug, setSlug] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [fetchError, setFetchError] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  const fetchUserDetails = useCallback(async (token: string) => {
    try {
      const response = await fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        throw new Error('Failed to fetch user details');
      }
    } catch {
      handleSignOut();
    }
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.authToken) {
        localStorage.setItem('authToken', data.authToken);
        await fetchUserDetails(data.authToken);
        setIsAuthenticated(true);
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch {
      setError('Unable to sign in at this time. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUserData(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      fetchUserDetails(token);
      setIsAuthenticated(true);
    }
  }, [fetchUserDetails]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')         // Replace spaces with hyphens
      .replace(/-+/g, '-')          // Remove consecutive hyphens
      .trim();                      // Trim hyphens from start and end
  };

  const handleEditArticle = (article: Article) => {
    setSelectedArticle(article);
    setTitle(article.title);
    setSlug(article.slug);
    setCategory(article.category);
    setExcerpt(article.excerpt);
    setContent(article.content);
    setTags(article.tags ? article.tags.map(t => t.tag) : []);
    setIsEditMode(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const tag = tagInput.trim();
      if (tag && !tags.includes(tag)) {
        setTags([...tags, tag]);
        setTagInput('');
      }
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('No authentication token found');
      }

      // Format tags as objects
      const formattedTags = tags.map(tag => ({ tag }));

      const formData = new FormData();
      formData.append('title', title);
      formData.append('slug', slug);
      formData.append('category', category);
      formData.append('excerpt', excerpt);
      formData.append('content', content);
      formData.append('date', new Date().toISOString());
      formData.append('tags', JSON.stringify(formattedTags));
      
      if (userData?.id) {
        formData.append('authors_id', userData.id.toString());
      }
      
      if (image) {
        formData.append('photo', image);
      }

      const url = isEditMode && selectedArticle 
        ? `/api/articles/${selectedArticle.id}`
        : '/api/articles';

      const method = isEditMode ? 'PATCH' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || `Failed to ${isEditMode ? 'update' : 'publish'} article`);
      }

      // Reset form
      setTitle('');
      setCategory('UPDATES');
      setExcerpt('');
      setContent('');
      setTags([]);
      setTagInput('');
      setImage(null);
      setSelectedArticle(null);
      setIsEditMode(false);

      // Reset file input and editor
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
      const editor = document.querySelector('.ProseMirror');
      if (editor) editor.innerHTML = '';

      // Refresh articles list
      await fetchArticles();

      alert(`Article ${isEditMode ? 'updated' : 'published'} successfully!`);

    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : `Failed to ${isEditMode ? 'update' : 'publish'} article`);
      
      if (err instanceof Error && err.message.includes('authentication')) {
        handleSignOut();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchArticles = async () => {
    setIsLoading(true);
    setFetchError('');
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('/api/articles', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data && Array.isArray(data)) {
          setArticles(data);
        } else {
          setArticles([]);
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch articles');
      }
    } catch (error) {
      setFetchError('Failed to load articles');
      setArticles([]);
      // Log error only in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Development mode - Error fetching articles:', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this article?')) return;
    
    setIsDeleting(true);
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/articles/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        await fetchArticles();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete article');
      }
    } catch (error) {
      setSubmitError('Failed to delete article. Please try again.');
      // Log error only in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Development mode - Error deleting article:', error);
      }
    } finally {
      setIsDeleting(false);
    }
  };

  // Add useEffect to fetch articles on mount
  useEffect(() => {
    if (isAuthenticated) {
      fetchArticles();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <main className="bg-white min-h-screen">
        <Header />
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="max-w-md w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-display font-bold mb-4">
                Sign in to write
              </h1>
              <p className="text-gray-600">
                Please sign in with your admin credentials to access the writing interface.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSignIn}
              className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100"
            >
              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="block w-full pl-10 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                    focus:ring-green-200 focus:border-green-500 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="admin@krontiva.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                    className="block w-full pl-10 pr-12 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                    focus:ring-green-200 focus:border-green-500 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-green-500 text-white rounded-lg font-semibold 
                hover:bg-green-600 transition-colors disabled:bg-green-400 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </motion.form>
          </div>
        </div>
      </main>
    );
  }

  // Writing Interface after authentication
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-6 pt-32 mb-16">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-display font-bold">
            {isEditMode ? 'Edit Article' : 'Write New Article'}
          </h1>
          <div className="flex items-center gap-4">
            {userData && (
              <span className="text-gray-600">
                Welcome, {userData.name}
              </span>
            )}
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {submitError && (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                  {submitError}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setSlug(generateSlug(e.target.value));
                  }}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                  focus:ring-green-200 focus:border-green-500 transition-colors"
                  placeholder="Article title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  URL Slug
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(generateSlug(e.target.value))}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                  focus:ring-green-200 focus:border-green-500 transition-colors"
                  placeholder="url-friendly-title"
                />
                <p className="mt-1 text-sm text-gray-500">
                  This will be the URL of your article: /news/{slug}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                  focus:ring-green-200 focus:border-green-500 transition-colors"
                >
                  <option value="UPDATES">Updates</option>
                  <option value="INSIGHTS">Insights</option>
                  <option value="NEWS">News</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                  focus:ring-green-200 focus:border-green-500 transition-colors"
                  placeholder="Brief summary of the article"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <ArticleEditor 
                  content={content}
                  onChange={setContent}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                  focus:ring-green-200 focus:border-green-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-2 text-green-500 hover:text-green-700"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleAddTag}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                    focus:ring-green-200 focus:border-green-500 transition-colors"
                    placeholder="Add tags (press Enter or comma to add)"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Press Enter or comma (,) to add a tag
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  disabled={isSubmitting}
                  className="px-8 py-4 border border-gray-200 text-gray-600 rounded-lg font-semibold 
                  hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-green-500 text-white rounded-lg font-semibold 
                  hover:bg-green-600 transition-colors disabled:bg-green-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (isEditMode ? 'Updating...' : 'Publishing...') : (isEditMode ? 'Update' : 'Publish')}
                </button>
              </div>
            </form>
          </div>

          {/* Articles List */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-display font-bold mb-6">Published Articles</h2>
            
            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto mb-4"></div>
                <p className="text-gray-500">Loading articles...</p>
              </div>
            )}

            {/* Error State */}
            {fetchError && (
              <div className="text-center py-8 text-red-600">
                <p>{fetchError}</p>
                <button 
                  onClick={fetchArticles}
                  className="mt-4 px-4 py-2 text-sm bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Articles List */}
            {!isLoading && !fetchError && (
              <div className="space-y-4">
                {articles.map((article) => (
                  <div 
                    key={article.id}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4">
                      {/* Article Image */}
                      {article.image && (
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={article.image.url}
                            alt={article.title}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                      )}
                      
                      {/* Article Content */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-gray-900 line-clamp-2">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-2 ml-4">
                            <button
                              onClick={() => handleEditArticle(article)}
                              className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Edit article"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteArticle(article.id)}
                              disabled={isDeleting}
                              className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                              title="Delete article"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Article Meta */}
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="px-2 py-1 bg-gray-100 rounded">
                            {article.category}
                          </span>
                          <span>
                            {new Date(article.date).toLocaleDateString()}
                          </span>
                          {article.authors?.[0] && (
                            <span className="text-gray-500">
                              by {article.authors[0].name}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {articles.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No articles published yet
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 