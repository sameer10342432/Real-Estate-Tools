import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modular vs Manufactured Home Comparison Calculator - Compare Costs, Financing & Value | Property Tools',
  description: 'Compare modular homes vs manufactured homes with our free calculator. Analyze total ownership costs, financing options, appreciation potential, and long-term value differences. Understand HUD vs local building codes.',
  keywords: [
    'modular home calculator',
    'manufactured home calculator',
    'modular vs manufactured home',
    'mobile home comparison',
    'prefab home cost',
    'modular home financing',
    'manufactured home financing',
    'HUD code homes',
    'factory built homes',
    'modular home appreciation',
    'manufactured home depreciation',
    'prefabricated homes'
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
    canonical: '/tools/modular-vs-manufactured-home-comparison',
  },
  openGraph: {
    title: 'Modular vs Manufactured Home Comparison Calculator',
    description: 'Compare total ownership costs, financing options, and appreciation potential between modular and manufactured homes. Free calculator with detailed analysis.',
    url: '/tools/modular-vs-manufactured-home-comparison',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-modular-vs-manufactured-home-comparison.jpg',
        width: 1200,
        height: 630,
        alt: 'Modular vs Manufactured Home Comparison Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modular vs Manufactured Home Comparison Calculator',
    description: 'Compare modular homes vs manufactured homes - costs, financing, and long-term value.',
    images: ['/og-modular-vs-manufactured-home-comparison.jpg'],
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
  category: 'Construction Tools',
};
