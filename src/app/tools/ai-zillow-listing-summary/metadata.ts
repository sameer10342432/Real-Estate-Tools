import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Zillow Listing Summary Tool | Analyze Real Estate Listings Instantly',
  description: 'Generate comprehensive summaries of Zillow property listings. Extract key details, analyze pricing, identify pros/cons, and make faster buying decisions.',
  keywords: [
    'Zillow listing analyzer',
    'AI property summary',
    'Zillow analysis tool',
    'real estate listing summary',
    'property evaluation tool',
    'Zillow listing reader',
    'home listing analyzer',
    'property investment analysis',
    'real estate AI tool',
    'Zillow property review',
    'listing summary generator',
    'home buyer tool',
    'property comparison tool',
    'real estate analysis',
    'investment property analyzer',
    'Zillow listing evaluation',
    'property pros and cons',
    'home pricing analysis',
    'real estate decision tool',
    'listing details extractor'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/ai-zillow-listing-summary',
  },
  openGraph: {
    title: 'AI Zillow Listing Summary Tool | Analyze Real Estate Listings Instantly',
    description: 'Generate comprehensive summaries of Zillow property listings. Extract key details, analyze pricing, identify pros/cons, and make faster buying decisions.',
    url: '/tools/ai-zillow-listing-summary',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Zillow Listing Summary Tool',
    description: 'Analyze Zillow listings instantly with AI. Get investment scores, pricing analysis, and comprehensive summaries.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
