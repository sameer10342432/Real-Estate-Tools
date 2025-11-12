import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oklahoma Documentary Stamp Tax Calculator - Transfer Tax | Property Tools',
  description: 'Calculate Oklahoma documentary stamp tax (0.15%) and recording fees. Free calculator for Oklahoma real estate transfer costs.',
  keywords: [
    'oklahoma documentary stamp tax',
    'oklahoma transfer tax',
    'oklahoma recording fees',
    'oklahoma real estate tax',
    'oklahoma closing costs',
    'stamp tax calculator',
    'oklahoma seller costs',
    'oklahoma buyer costs',
    'oklahoma property transfer',
    'oklahoma deed recording',
    'oklahoma city transfer tax',
    'tulsa transfer tax'
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
    canonical: '/tools/oklahoma-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Oklahoma Documentary Stamp Tax Calculator - Transfer Tax',
    description: 'Calculate Oklahoma documentary stamp tax (0.15%) and recording fees. Detailed cost breakdown.',
    url: '/tools/oklahoma-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-oklahoma-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Oklahoma Documentary Stamp Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Documentary Stamp Tax Calculator - 0.15%',
    description: 'Calculate Oklahoma documentary stamp tax (0.15%) and recording fees.',
    images: ['/og-oklahoma-transfer-tax.jpg'],
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
