import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fourplex House Hacking Calculator - 4-Unit Investment Analyzer | Property Tools',
  description: 'Analyze fourplex house hacking deals. Calculate maximum cash flow from living in one unit and renting three others. Free quadplex calculator with ROI analysis.',
  keywords: [
    'fourplex house hacking',
    'quadplex calculator',
    '4-unit property',
    'fourplex investment',
    'four-family house',
    'fourplex rental income',
    'owner-occupied fourplex',
    'quadplex cash flow',
    'FHA 4-plex loan',
    'multi-family property'
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
    canonical: '/tools/quadplex-house-hacking-analyzer',
  },
  openGraph: {
    title: 'Fourplex House Hacking Calculator - 4-Unit Investment Analyzer',
    description: 'Free calculator to analyze fourplex house hacking. Calculate maximum cash flow and ROI from 4-unit properties.',
    url: '/tools/quadplex-house-hacking-analyzer',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fourplex House Hacking Calculator - 4-Unit Analyzer',
    description: 'Analyze fourplex house hacking opportunities with our free calculator.',
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