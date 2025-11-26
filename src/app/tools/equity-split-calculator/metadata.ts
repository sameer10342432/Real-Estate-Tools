import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equity Split Calculator for Real Estate Partnerships | Free Partnership Equity Tool',
  description: 'Calculate fair equity splits for real estate partnerships. Determine ownership percentages, profit sharing, and total returns based on capital contributions and sweat equity. Free online calculator for LPs, LLCs, and joint ventures.',
  keywords: [
    'equity split calculator',
    'partnership equity',
    'real estate partnership',
    'profit sharing calculator',
    'sweat equity calculator',
    'capital contribution calculator',
    'LP equity split',
    'LLC partnership split',
    'joint venture equity',
    'investment partnership',
    'ownership percentage calculator',
    'real estate investment'
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
    canonical: '/tools/equity-split-calculator',
  },
  openGraph: {
    title: 'Equity Split Calculator - Real Estate Partnership Equity Tool',
    description: 'Free calculator to determine fair equity splits for real estate partnerships based on capital and sweat equity contributions.',
    url: '/tools/equity-split-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-equity-split-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Equity Split Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equity Split Calculator - Real Estate Partnership Equity Tool',
    description: 'Free calculator to determine fair equity splits for real estate partnerships.',
    images: ['/og-equity-split-calculator.jpg'],
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
