import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Condo (HO6) Insurance Cost Calculator - Estimate Unit Coverage Premiums | Property Tools',
  description: 'Calculate HO6 condo insurance costs based on unit value, personal property, liability coverage, and loss assessment limits. Get premium estimates for walls-in coverage.',
  keywords: [
    'condo insurance cost',
    'ho6 insurance calculator',
    'condo insurance premium',
    'walls-in coverage cost',
    'condo unit insurance',
    'ho6 policy cost',
    'loss assessment coverage',
    'condo liability insurance',
    'condo insurance estimator',
    'dwelling coverage condo',
    'condo insurance vs homeowners',
    'ho6 vs master policy',
    'condo insurance deductible',
    'personal property condo',
    'condo insurance price',
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
    canonical: '/tools/condo-ho6-insurance-cost-calculator',
  },
  openGraph: {
    title: 'Condo (HO6) Insurance Cost Calculator',
    description: 'Estimate HO6 condo insurance premiums for your unit. Calculate costs for dwelling coverage, personal property, liability, and loss assessment protection.',
    url: '/tools/condo-ho6-insurance-cost-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-condo-insurance.jpg',
        width: 1200,
        height: 630,
        alt: 'Condo (HO6) Insurance Cost Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Condo (HO6) Insurance Cost Calculator',
    description: 'Calculate HO6 condo insurance costs based on unit value, personal property, and liability coverage. Get accurate premium estimates.',
    images: ['/og-condo-insurance.jpg'],
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
