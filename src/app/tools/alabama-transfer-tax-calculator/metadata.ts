import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alabama Transfer Tax Calculator - Deed & Mortgage Tax | Property Tools',
  description: 'Calculate Alabama transfer tax (0.10%) and mortgage tax (0.15%). Free calculator for Alabama real estate transfer costs including deed recording fees and mortgage taxes.',
  keywords: [
    'alabama transfer tax',
    'alabama mortgage tax',
    'alabama deed tax',
    'alabama recording fees',
    'alabama real estate tax',
    'alabama closing costs',
    'deed tax calculator',
    'alabama seller costs',
    'alabama buyer costs',
    'mortgage recording tax alabama',
    'alabama property transfer',
    'alabama deed recording'
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
    canonical: '/tools/alabama-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Alabama Transfer Tax Calculator - Deed & Mortgage Tax',
    description: 'Calculate Alabama transfer tax, mortgage tax, and recording fees. Detailed cost breakdown for buyers and sellers.',
    url: '/tools/alabama-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-alabama-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Alabama Transfer Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alabama Transfer Tax Calculator - Deed & Mortgage Tax',
    description: 'Calculate Alabama transfer tax (0.10%) and mortgage tax (0.15%) with detailed breakdowns.',
    images: ['/og-alabama-transfer-tax.jpg'],
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
