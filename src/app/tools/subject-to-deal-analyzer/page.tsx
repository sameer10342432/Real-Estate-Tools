import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Subject-To Deal Analyzer - Free Real Estate Tool',
    description: 'Use our free subject-to deal analyzer to make informed real estate investment decisions. Calculate accurate results instantly.',
  };
}

export default function SubjectToDealAnalyzerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Subject-To Deal Analyzer</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-600 mb-4">
            This tool is currently under development. Check back soon for the complete calculator.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Coming Soon</h2>
            <p className="text-sm text-gray-700">
              We're working on bringing you this comprehensive tool to help with your real estate calculations.
            </p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <h2>About This Tool</h2>
          <p>
            The Subject-To Deal Analyzer will help you analyze and calculate important real estate metrics
            to make informed investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
