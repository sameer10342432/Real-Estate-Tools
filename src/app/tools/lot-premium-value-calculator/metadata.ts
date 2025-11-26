import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lot Premium Value Calculator - Calculate Corner, Cul-de-Sac & Waterfront Lot Premiums | Property Tools',
  description: 'Free lot premium calculator to determine the added value of premium lot positions. Calculate corner lot, cul-de-sac, waterfront, and view premiums for new construction homes.',
  keywords: [
    'lot premium calculator',
    'corner lot value',
    'cul-de-sac premium',
    'waterfront lot price',
    'view premium',
    'lot position value',
    'new construction lots',
    'builder lot pricing',
    'lot size calculator',
    'premium lot cost',
    'real estate lot value',
    'home lot premium'
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
    canonical: '/tools/lot-premium-value-calculator',
  },
  openGraph: {
    title: 'Lot Premium Value Calculator - Determine Premium Lot Pricing',
    description: 'Calculate how much extra you should pay for premium lot positions including corner lots, cul-de-sac locations, waterfront properties, and view lots.',
    url: '/tools/lot-premium-value-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-lot-premium-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Lot Premium Value Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lot Premium Value Calculator - Determine Premium Lot Pricing',
    description: 'Calculate how much extra you should pay for premium lot positions including corner lots, cul-de-sac locations, and waterfront properties.',
    images: ['/og-lot-premium-calculator.jpg'],
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
