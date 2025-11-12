import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connecticut Conveyance Tax Calculator - Tiered Transfer Tax | Property Tools',
  description: 'Calculate Connecticut tiered conveyance tax (0.75-2.25%) and municipal transfer tax (0.25-0.50%). Free calculator for Connecticut real estate transfer costs.',
  keywords: [
    'connecticut conveyance tax',
    'connecticut transfer tax',
    'connecticut municipal tax',
    'connecticut real estate tax',
    'connecticut closing costs',
    'tiered transfer tax',
    'connecticut seller costs',
    'connecticut buyer costs',
    'greenwich transfer tax',
    'fairfield county transfer tax',
    'westport conveyance tax',
    'stamford transfer tax'
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
    canonical: '/tools/connecticut-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Connecticut Conveyance Tax Calculator - Tiered Transfer Tax',
    description: 'Calculate Connecticut tiered conveyance tax and municipal transfer tax. Complex tier system with detailed breakdowns.',
    url: '/tools/connecticut-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-connecticut-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Connecticut Conveyance Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connecticut Conveyance Tax Calculator - Tiered Rates',
    description: 'Calculate Connecticut tiered conveyance tax (0.75-2.25%) and municipal tax (0.25-0.50%).',
    images: ['/og-connecticut-transfer-tax.jpg'],
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
