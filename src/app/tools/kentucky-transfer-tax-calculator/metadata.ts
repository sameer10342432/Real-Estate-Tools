import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kentucky Deed Tax Calculator - Transfer Tax & Recording Fees | Property Tools',
  description: 'Calculate Kentucky deed tax (0.10%) and recording fees. Free calculator for Kentucky real estate transfer costs. No mortgage tax in Kentucky.',
  keywords: [
    'kentucky deed tax',
    'kentucky transfer tax',
    'kentucky recording fees',
    'kentucky real estate tax',
    'kentucky closing costs',
    'deed tax calculator',
    'kentucky seller costs',
    'kentucky buyer costs',
    'kentucky property transfer',
    'kentucky deed recording',
    'no mortgage tax kentucky',
    'louisville deed tax'
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
    canonical: '/tools/kentucky-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Kentucky Deed Tax Calculator - Transfer Tax Calculator',
    description: 'Calculate Kentucky deed tax and recording fees. 0.10% deed tax, no mortgage tax. Detailed cost breakdown.',
    url: '/tools/kentucky-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-kentucky-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Kentucky Deed Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kentucky Deed Tax Calculator - 0.10% Transfer Tax',
    description: 'Calculate Kentucky deed tax (0.10%) and recording fees. No mortgage tax in Kentucky.',
    images: ['/og-kentucky-transfer-tax.jpg'],
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
