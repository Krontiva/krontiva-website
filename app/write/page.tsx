"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import ArticleEditor from '../components/editor/ArticleEditor';

export default function WritePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<{ 
    author_name: string;
    id: number;
  } | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('NEWS');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [slug, setSlug] = useState('');

  const fetchUserDetails = async (token: string) => {
    try {
      const response = await fetch('https://api-server.krontiva.africa/api:eUI59reW/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User data:', data);
        setUserData(data);
      }
    } catch (err) {
      console.error('Failed to fetch user details:', err);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch('https://api-server.krontiva.africa/api:eUI59reW/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (response.ok && data.authToken) {
        localStorage.setItem('authToken', data.authToken);
        await fetchUserDetails(data.authToken);
        setIsAuthenticated(true);
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to connect to the server. Please try again.');
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
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const token = localStorage.getItem('authToken');
      console.log('Stored token:', token);

      if (!token) {
        throw new Error('No authentication token found');
      }

      const formData = new FormData();
      formData.append('title', title);
      formData.append('slug', slug);
      formData.append('category', category);
      formData.append('excerpt', excerpt);
      formData.append('content', content);
      formData.append('date', new Date().toISOString());
      
      if (userData?.id) {
        formData.append('authors_id', userData.id.toString());
      }
      
      if (image) {
        formData.append('photo', image);
      }

      const response = await fetch('https://api-server.krontiva.africa/api:eUI59reW/krontiva_articles', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const responseData = await response.json();
      console.log('Submission response:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to publish article');
      }

      // Reset all form fields
      setTitle('');
      setCategory('NEWS');
      setExcerpt('');
      setContent('');
      setImage(null);
      // Reset the file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
      // Reset the editor content
      const editor = document.querySelector('.ProseMirror');
      if (editor) {
        editor.innerHTML = '';
      }

      alert('Article published successfully!');

    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError(err instanceof Error ? err.message : 'Failed to publish article');
      
      // If token is invalid, log out the user
      if (err instanceof Error && err.message.includes('authentication')) {
        handleSignOut();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-display font-bold">
            Write New Article
          </h1>
          <div className="flex items-center gap-4">
            {userData && (
              <span className="text-gray-600">
                Welcome, {userData.author_name}
              </span>
            )}
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

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
            <div className="flex gap-2">
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(generateSlug(e.target.value))}
                required
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                focus:ring-green-200 focus:border-green-500 transition-colors"
                placeholder="url-friendly-title"
              />
              <button
                type="button"
                onClick={() => setSlug(generateSlug(title))}
                className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Regenerate
              </button>
            </div>
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
              <option value="NEWS">News</option>
              <option value="INSIGHTS">Insights</option>
              <option value="ANALYSIS">Analysis</option>
              <option value="SECURITY">Security</option>
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
              {isSubmitting ? 'Publishing...' : 'Publish'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
} 