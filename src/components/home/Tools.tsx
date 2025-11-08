import Link from 'next/link';
import { toolsContent } from './data';
import { allTools, categories as toolCategories, getTotalToolsCount } from '@/data/tools';

export const Tools = () => {
  const totalTools = getTotalToolsCount();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {toolsContent.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {toolsContent.subtitle}
          </p>
          <div className="mt-6">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
              {totalTools} Professional Tools Available
            </span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {toolCategories.filter(cat => cat !== 'All Tools').map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allTools.map((tool, index) => (
            <Link 
              key={index}
              href={tool.path}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group block"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3 group-hover:scale-110 transition-transform">{tool.icon}</div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {tool.category}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {tool.description}
              </p>
              <div className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm">
                Try Now
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Tools Button */}
        <div className="mt-12 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All {totalTools} Tools
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};