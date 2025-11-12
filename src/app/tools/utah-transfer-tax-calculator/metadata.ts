import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utah Transfer Tax Calculator - NO Transfer Tax | Property Tools',
  description: 'Utah has NO state transfer tax. Calculate Utah recording fees only. One of 13 states with $0 transfer tax. Free calculator for Utah real estate costs.',
  keywords: [
    'utah transfer tax',
    'utah recording fees',
    'no transfer tax utah',
    'utah real estate tax',
    'utah closing costs',
    'utah seller costs',
    'utah buyer costs',
    'salt lake city transfer tax',
    'utah property transfer',
    'utah deed recording',
    'zero transfer tax',
    'utah escrow fees'
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
    canonical: '/tools/utah-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Utah Transfer Tax Calculator - NO Transfer Tax',
    description: 'Utah has NO state transfer tax. Calculate recording fees only. One of 13 states with $0 transfer tax.',
    url: '/tools/utah-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-utah-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Utah Transfer Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utah Transfer Tax Calculator - NO Transfer Tax',
    description: 'Utah has NO state transfer tax. Calculate recording fees only.',
    images: ['/og-utah-transfer-tax.jpg'],
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
