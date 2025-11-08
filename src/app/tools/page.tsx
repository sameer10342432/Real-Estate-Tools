'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allTools, categories, getToolsByCategory, getCategoryCount, getTotalToolsCount } from '@/data/tools';

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = allTools.filter(tool => {
    const matchesCategory = selectedCategory === 'All Tools' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalTools = getTotalToolsCount();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real Estate Tools & Calculators
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Professional property analysis tools for investors, buyers, and real estate professionals
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <div className="text-5xl font-bold">{totalTools}</div>
            <div className="text-lg opacity-90">Professional Tools Available</div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category} ({getCategoryCount(category)})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <Link
                key={index}
                href={tool.path}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {tool.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                        {tool.category}
                      </span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <div className="text-gray-400 text-lg mb-4">No tools found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('All Tools');
                  setSearchTerm('');
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Analyze Your Property Investment?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Start with our most popular calculators and make informed real estate decisions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tools/mortgage-calculator"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Mortgage Calculator
            </Link>
            <Link
              href="/tools/roi-calculator"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              ROI Calculator
            </Link>
            <Link
              href="/tools/property-valuation"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Property Valuation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
