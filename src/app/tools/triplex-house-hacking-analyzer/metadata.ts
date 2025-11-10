import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Triplex House Hacking Calculator - 3-Unit Investment Analyzer | Property Tools',
  description: 'Analyze triplex house hacking opportunities. Calculate cash flow from living in one unit and renting two others. Free 3-unit property calculator with profit analysis.',
  keywords: [
    'triplex house hacking',
    'triplex calculator',
    '3-unit property',
    'triplex investment',
    'three-family house',
    'triplex rental income',
    'owner-occupied triplex',
    'triplex cash flow',
    'live in triplex',
    'multi-family rental'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/triplex-house-hacking-analyzer',
  },
  openGraph: {
    title: 'Triplex House Hacking Calculator - 3-Unit Investment Analyzer',
    description: 'Free calculator to analyze triplex house hacking. Calculate cash flow and profitability from 3-unit properties.',
    url: '/tools/triplex-house-hacking-analyzer',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triplex House Hacking Calculator - 3-Unit Analyzer',
    description: 'Analyze triplex house hacking opportunities with our free calculator.',
    creator: '@propertytools',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};