import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Build Warranty Calculator - Compare Builder Warranty Coverage & Costs | Property Tools',
  description: 'Calculate and compare new construction warranty coverage including builder warranty, structural warranty, and extended protection plans. Understand 1-2-10 warranty coverage.',
  keywords: [
    'new build warranty',
    'builder warranty calculator',
    'new construction warranty',
    '1-2-10 warranty',
    'builder warranty cost',
    'structural warranty coverage',
    'third-party builder warranty',
    '2-10 home warranty',
    'new home warranty protection',
    'builder warranty claims',
    'insured builder warranty',
    'new construction coverage',
    'builder warranty vs home warranty',
    'extended builder warranty',
    'new home protection plan',
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
    canonical: '/tools/new-build-warranty-calculator',
  },
  openGraph: {
    title: 'New Build Warranty Calculator',
    description: 'Calculate new construction warranty coverage and costs. Compare builder warranties, third-party insured programs, and extended protection plans.',
    url: '/tools/new-build-warranty-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-new-build-warranty.jpg',
        width: 1200,
        height: 630,
        alt: 'New Build Warranty Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Build Warranty Calculator',
    description: 'Calculate new construction warranty coverage including 1-2-10 year builder warranties and extended protection plans.',
    images: ['/og-new-build-warranty.jpg'],
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
