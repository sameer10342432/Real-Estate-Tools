import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Duplex House Hacking Calculator - 2-Unit Investment Analyzer | Property Tools',
  description: 'Analyze duplex house hacking opportunities. Calculate net housing costs when living in one unit and renting the other. Free 2-unit property investment calculator with cash flow analysis.',
  keywords: [
    'duplex house hacking',
    'duplex calculator',
    '2-unit property',
    'duplex investment',
    'two-family house',
    'duplex rental income',
    'owner-occupied duplex',
    'FHA duplex loan',
    'live in duplex',
    'duplex cash flow'
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
    canonical: '/tools/duplex-house-hacking-analyzer',
  },
  openGraph: {
    title: 'Duplex House Hacking Calculator - 2-Unit Investment Analyzer',
    description: 'Free calculator to analyze duplex house hacking. Calculate net housing costs and rental income from 2-unit properties.',
    url: '/tools/duplex-house-hacking-analyzer',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duplex House Hacking Calculator - 2-Unit Analyzer',
    description: 'Analyze duplex house hacking opportunities with our free calculator.',
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