import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Title Insurance (Owner\'s) Cost Calculator - Estimate Premium by State | Property Tools',
  description: 'Calculate owner\'s title insurance premium based on purchase price and state regulations. Compare standard vs enhanced ALTA coverage and get accurate cost estimates.',
  keywords: [
    'owner\'s title insurance cost',
    'title insurance calculator',
    'title insurance premium',
    'ALTA policy cost',
    'title insurance by state',
    'owner\'s policy premium',
    'enhanced title insurance',
    'title insurance estimator',
    'title insurance rates',
    'reissue rate title',
    'simultaneous issue discount',
    'title insurance price',
    'closing cost title insurance',
    'title policy cost',
    'title insurance comparison',
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
    canonical: '/tools/title-insurance-owner-cost-calculator',
  },
  openGraph: {
    title: 'Title Insurance (Owner\'s) Cost Calculator',
    description: 'Estimate owner\'s title insurance premiums by state. Calculate costs for standard and enhanced ALTA policies with simultaneous issue discounts.',
    url: '/tools/title-insurance-owner-cost-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-title-insurance-owner.jpg',
        width: 1200,
        height: 630,
        alt: 'Title Insurance (Owner\'s) Cost Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Title Insurance (Owner\'s) Cost Calculator',
    description: 'Calculate owner\'s title insurance costs by state. Compare standard vs enhanced coverage and get accurate premium estimates.',
    images: ['/og-title-insurance-owner.jpg'],
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
