import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'South Carolina Transfer Tax Calculator - Deed Recording Fee Calculator | Property Tools',
  description: 'Calculate South Carolina deed recording fees ($1.85 per $500), transfer tax, and closing costs. Free calculator for SC real estate transfer costs including state and county portions.',
  keywords: [
    'south carolina transfer tax',
    'south carolina deed recording fee',
    'south carolina deed stamps',
    'sc transfer tax',
    'sc deed recording fee',
    'south carolina closing costs',
    'deed stamps calculator',
    'south carolina seller costs',
    'sc real estate tax',
    'documentary stamps south carolina',
    'charleston transfer tax',
    'greenville deed stamps'
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
    canonical: '/tools/south-carolina-transfer-tax-calculator',
  },
  openGraph: {
    title: 'South Carolina Transfer Tax Calculator - Deed Recording Fees',
    description: 'Calculate South Carolina deed recording fees, transfer tax breakdown, and total closing costs. Includes state and county portions.',
    url: '/tools/south-carolina-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-south-carolina-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'South Carolina Transfer Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'South Carolina Transfer Tax Calculator - Deed Recording Fee',
    description: 'Calculate South Carolina deed recording fees ($1.85 per $500) and total transfer costs for real estate transactions.',
    images: ['/og-south-carolina-transfer-tax.jpg'],
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
