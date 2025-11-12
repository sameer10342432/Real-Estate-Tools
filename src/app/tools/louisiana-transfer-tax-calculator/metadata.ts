import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Louisiana Transfer Tax Calculator - Parish Recording Fees | Property Tools',
  description: 'Calculate Louisiana parish recording fees and Orleans Parish $325 transfer tax. Free calculator for Louisiana real estate transfer costs including notary and title fees.',
  keywords: [
    'louisiana transfer tax',
    'louisiana recording fees',
    'orleans parish transfer tax',
    'louisiana notary fees',
    'louisiana real estate tax',
    'louisiana closing costs',
    'parish recording fees',
    'louisiana seller costs',
    'louisiana buyer costs',
    'new orleans transfer tax',
    'louisiana deed recording',
    'act of sale louisiana'
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
    canonical: '/tools/louisiana-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Louisiana Transfer Tax Calculator - Parish Recording Fees',
    description: 'Calculate Louisiana parish recording fees and Orleans Parish transfer tax. No state transfer tax except Orleans Parish.',
    url: '/tools/louisiana-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-louisiana-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Louisiana Transfer Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Louisiana Transfer Tax Calculator - Parish Recording Fees',
    description: 'Calculate Louisiana recording fees. No state transfer tax except Orleans Parish $325 flat fee.',
    images: ['/og-louisiana-transfer-tax.jpg'],
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
