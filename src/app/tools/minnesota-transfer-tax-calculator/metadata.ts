import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minnesota Transfer Tax Calculator - Deed Tax & Recording Fees | Property Tools',
  description: 'Calculate Minnesota deed tax (0.33-0.34%), recording fees, well disclosure, and agricultural conservation fees. Free calculator for Minnesota real estate transfer costs including Hennepin and Ramsey County rates.',
  keywords: [
    'minnesota transfer tax',
    'minnesota deed tax',
    'minnesota recording fees',
    'hennepin county deed tax',
    'ramsey county deed tax',
    'minnesota real estate tax',
    'minnesota closing costs',
    'deed tax calculator',
    'minnesota seller costs',
    'minnesota buyer costs',
    'well disclosure fee minnesota',
    'agricultural conservation fee',
    'certificate of real estate value'
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
    canonical: '/tools/minnesota-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Minnesota Transfer Tax Calculator - Deed Tax & Transfer Costs',
    description: 'Calculate Minnesota deed tax, recording fees, and well disclosure. Includes Hennepin/Ramsey County rates and detailed cost breakdown for buyers and sellers.',
    url: '/tools/minnesota-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-minnesota-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Minnesota Transfer Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minnesota Transfer Tax Calculator - Deed Tax & Recording Fees',
    description: 'Calculate Minnesota deed tax, recording fees, well disclosure, and agricultural conservation fees with county-specific rates.',
    images: ['/og-minnesota-transfer-tax.jpg'],
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
