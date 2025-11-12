import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oregon Transfer Tax Calculator - Recording Fees & Washington County | Property Tools',
  description: 'Calculate Oregon recording fees and Washington County 0.1% transfer tax. No state transfer tax in Oregon. Free calculator for Oregon real estate costs.',
  keywords: [
    'oregon transfer tax',
    'oregon recording fees',
    'washington county transfer tax',
    'oregon escrow fees',
    'oregon real estate tax',
    'oregon closing costs',
    'portland recording fees',
    'oregon seller costs',
    'oregon buyer costs',
    'no transfer tax oregon',
    'oregon deed recording',
    'beaverton transfer tax'
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
    canonical: '/tools/oregon-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Oregon Transfer Tax Calculator - Recording Fees',
    description: 'Calculate Oregon recording fees. No state transfer tax except Washington County 0.1%.',
    url: '/tools/oregon-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-oregon-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Oregon Transfer Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oregon Transfer Tax Calculator - Recording Fees',
    description: 'Calculate Oregon recording fees. No state transfer tax except Washington County 0.1%.',
    images: ['/og-oregon-transfer-tax.jpg'],
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
