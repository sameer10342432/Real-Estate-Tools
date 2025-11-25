import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Title Insurance (Lender\'s) Cost Calculator - Loan Policy Premium Estimator | Property Tools',
  description: 'Calculate lender\'s title insurance premium based on loan amount, state regulations, and transaction type. Get accurate refinance and purchase cost estimates.',
  keywords: [
    'lender\'s title insurance cost',
    'loan policy calculator',
    'lender\'s policy premium',
    'refinance title insurance',
    'title insurance loan amount',
    'lender policy cost',
    'simultaneous issue discount',
    'reissue rate refinance',
    'title insurance lender',
    'closing cost title',
    'mortgage title insurance',
    'lender title policy price',
    'refinance title cost',
    'title insurance required',
    'lender\'s coverage premium',
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
    canonical: '/tools/title-insurance-lender-cost-calculator',
  },
  openGraph: {
    title: 'Title Insurance (Lender\'s) Cost Calculator',
    description: 'Estimate lender\'s title insurance premiums for purchase and refinance. Calculate loan policy costs with simultaneous issue and reissue discounts.',
    url: '/tools/title-insurance-lender-cost-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-title-insurance-lender.jpg',
        width: 1200,
        height: 630,
        alt: 'Title Insurance (Lender\'s) Cost Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Title Insurance (Lender\'s) Cost Calculator',
    description: 'Calculate lender\'s title insurance costs for purchase and refinance. Get accurate loan policy premium estimates by state.',
    images: ['/og-title-insurance-lender.jpg'],
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
