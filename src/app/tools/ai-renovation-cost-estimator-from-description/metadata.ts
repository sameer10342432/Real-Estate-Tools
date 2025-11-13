import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Renovation Cost Estimator | Instant Project Cost Analysis',
  description: 'Estimate renovation costs instantly using AI. Get detailed breakdowns with labor and material costs, timelines, and budget ranges for any renovation project.',
  keywords: [
    'AI renovation cost',
    'renovation estimator',
    'remodel cost calculator',
    'AI cost estimator',
    'renovation budget',
    'remodeling costs',
    'AI construction cost',
    'renovation calculator',
    'home renovation cost',
    'AI remodel estimator',
    'renovation pricing',
    'construction estimator',
    'remodel budget tool',
    'AI renovation tool',
    'cost estimation AI'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/ai-renovation-cost-estimator-from-description',
  },
  openGraph: {
    title: 'AI Renovation Cost Estimator',
    description: 'Get instant renovation cost estimates with AI. Detailed breakdowns for labor, materials, and timeline.',
    url: '/tools/ai-renovation-cost-estimator-from-description',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Renovation Cost Estimator',
    description: 'Estimate renovation costs instantly with AI-powered detailed breakdowns.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
