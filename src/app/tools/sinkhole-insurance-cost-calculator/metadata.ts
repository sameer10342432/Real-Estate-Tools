import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sinkhole Insurance Cost Calculator - Estimate Coverage Premiums | Property Tools',
  description: 'Calculate sinkhole insurance costs based on property value, location risk, coverage type (Full, CGCC, Endorsement), and deductible. Get premium estimates for high-risk areas including Sinkhole Alley.',
  keywords: [
    'sinkhole insurance cost',
    'sinkhole insurance calculator',
    'sinkhole coverage premium',
    'catastrophic ground cover collapse',
    'CGCC insurance cost',
    'sinkhole alley insurance',
    'ground collapse insurance',
    'sinkhole insurance estimator',
    'karst region insurance',
    'subsidence insurance cost',
    'sinkhole protection cost',
    'limestone bedrock insurance',
    'sinkhole insurance deductible',
    'full sinkhole coverage',
    'sinkhole endorsement cost',
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
    canonical: '/tools/sinkhole-insurance-cost-calculator',
  },
  openGraph: {
    title: 'Sinkhole Insurance Cost Calculator',
    description: 'Estimate sinkhole insurance premiums for your property. Calculate costs for full coverage, CGCC, and optional endorsements based on your location risk level.',
    url: '/tools/sinkhole-insurance-cost-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-sinkhole-insurance.jpg',
        width: 1200,
        height: 630,
        alt: 'Sinkhole Insurance Cost Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sinkhole Insurance Cost Calculator',
    description: 'Calculate sinkhole insurance costs for properties in high-risk areas. Get premium estimates for full coverage, CGCC, and endorsements.',
    images: ['/og-sinkhole-insurance.jpg'],
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
