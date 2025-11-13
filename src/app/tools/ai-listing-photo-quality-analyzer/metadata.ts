import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Listing Photo Quality Analyzer | Real Estate Photography Analysis',
  description: 'Evaluate real estate listing photos using AI. Get detailed quality scores for composition, lighting, staging, and coverage with actionable improvement recommendations.',
  keywords: [
    'AI photo analyzer',
    'real estate photography',
    'listing photo quality',
    'property photo analysis',
    'AI photography tool',
    'real estate photos',
    'listing photography',
    'photo quality checker',
    'property photography',
    'AI image analysis',
    'real estate imaging',
    'listing photo tips',
    'photography evaluation',
    'property photo quality',
    'AI photo assessment'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/ai-listing-photo-quality-analyzer',
  },
  openGraph: {
    title: 'AI Listing Photo Quality Analyzer',
    description: 'Analyze listing photo quality with AI. Get scores and recommendations to improve your real estate photography.',
    url: '/tools/ai-listing-photo-quality-analyzer',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Listing Photo Quality Analyzer',
    description: 'Evaluate and improve real estate listing photos with AI-powered analysis.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
