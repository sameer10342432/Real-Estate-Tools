'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalCategories: number;
  totalTags: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalCategories: 0,
    totalTags: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [postsRes, categoriesRes, tagsRes] = await Promise.all([
        fetch('/api/blog/posts?includeUnpublished=true'),
        fetch('/api/blog/categories'),
        fetch('/api/blog/tags'),
      ]);

      const [postsData, categoriesData, tagsData] = await Promise.all([
        postsRes.json(),
        categoriesRes.json(),
        tagsRes.json(),
      ]);

      const posts = postsData.posts || [];
      setStats({
        totalPosts: posts.length,
        publishedPosts: posts.filter((p: any) => p.status === 'published').length,
        draftPosts: posts.filter((p: any) => p.status === 'draft').length,
        totalCategories: categoriesData.categories?.length || 0,
        totalTags: tagsData.tags?.length || 0,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { label: 'Total Posts', value: stats.totalPosts, icon: '📝', color: 'bg-blue-500' },
    { label: 'Published', value: stats.publishedPosts, icon: '✅', color: 'bg-green-500' },
    { label: 'Drafts', value: stats.draftPosts, icon: '📄', color: 'bg-yellow-500' },
    { label: 'Categories', value: stats.totalCategories, icon: '📁', color: 'bg-purple-500' },
    { label: 'Tags', value: stats.totalTags, icon: '🏷️', color: 'bg-pink-500' },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome to your blog management system</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {statCards.map((card) => (
                <div
                  key={card.label}
                  className="bg-white rounded-lg shadow p-6 border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{card.icon}</span>
                    <div className={`${card.color} text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center`}>
                      {card.value}
                    </div>
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium">{card.label}</h3>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link
                    href="/admin/blog/posts/new"
                    className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    ✍️ Create New Post
                  </Link>
                  <Link
                    href="/admin/blog/posts"
                    className="block w-full bg-gray-100 text-gray-700 text-center py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    📋 Manage Posts
                  </Link>
                  <Link
                    href="/blog"
                    target="_blank"
                    className="block w-full bg-gray-100 text-gray-700 text-center py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    👁️ View Blog
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">System Info</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Blog System</span>
                    <span className="font-medium text-green-600">Active</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Rich Text Editor</span>
                    <span className="font-medium">Enabled</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">SEO Features</span>
                    <span className="font-medium">Enabled</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">WordPress-like Features</span>
                    <span className="font-medium">✅ All Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
