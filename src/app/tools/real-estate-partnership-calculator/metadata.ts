import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Partnership Calculator - Equity Splits & Profit Distributions | Property Tools',
  description: 'Calculate partnership splits, equity percentages, and profit distributions for real estate investments. Analyze LP, LLC, and JV structures with preferred returns and waterfall distributions.',
  keywords: [
    'real estate partnership calculator',
    'equity split calculator',
    'profit distribution calculator',
    'partnership investment calculator',
    'real estate LLC calculator',
    'joint venture calculator',
    'limited partnership calculator',
    'capital contribution calculator',
    'preferred return calculator',
    'waterfall distribution',
    'investment partnership',
    'real estate syndication'
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
    canonical: '/tools/real-estate-partnership-calculator',
  },
  openGraph: {
    title: 'Real Estate Partnership Calculator - Equity Splits & Profit Distributions',
    description: 'Calculate partnership splits, equity percentages, and profit distributions for real estate investments. Analyze LP, LLC, and JV structures.',
    url: '/tools/real-estate-partnership-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-real-estate-partnership-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Real Estate Partnership Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Partnership Calculator - Equity Splits & Profit Distributions',
    description: 'Calculate partnership splits, equity percentages, and profit distributions for real estate investments.',
    images: ['/og-real-estate-partnership-calculator.jpg'],
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
