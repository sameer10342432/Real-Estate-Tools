import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Comp Selection Tool | Comparable Property Finder for Appraisals',
  description: 'Find the best comparable properties (comps) for appraisals with AI. Get intelligent comp selection criteria based on subject property characteristics.',
  keywords: [
    'AI comp selection',
    'comparable property finder',
    'appraisal comps AI',
    'comp selection tool',
    'AI property comparison',
    'real estate comps',
    'appraisal tool',
    'comparable analysis',
    'AI comp finder',
    'property comps selector',
    'appraisal comparables',
    'AI real estate appraisal',
    'comp criteria tool',
    'comparable property AI',
    'appraisal automation'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/ai-comp-selection-tool',
  },
  openGraph: {
    title: 'AI Comp Selection Tool',
    description: 'Find the best comparable properties for appraisals with AI. Get intelligent comp selection criteria and analysis.',
    url: '/tools/ai-comp-selection-tool',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Comp Selection Tool',
    description: 'Select the best comps for property appraisals with AI-powered analysis.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
