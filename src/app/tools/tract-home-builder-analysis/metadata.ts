import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tract Home Builder Analysis Calculator - Evaluate Builder Costs & Upgrades | Property Tools',
  description: 'Free tract home builder analysis tool. Calculate total costs including base price, upgrades, HOA fees, lot premiums, and builder incentives. Compare production home builders.',
  keywords: [
    'tract home calculator',
    'production home cost',
    'builder upgrade calculator',
    'HOA fee calculator',
    'builder incentives',
    'new construction analysis',
    'tract housing costs',
    'home builder comparison',
    'upgrade cost calculator',
    'tract home pricing',
    'builder analysis tool',
    'new home cost breakdown'
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
    canonical: '/tools/tract-home-builder-analysis',
  },
  openGraph: {
    title: 'Tract Home Builder Analysis - Calculate True New Construction Costs',
    description: 'Analyze tract home purchases with our free calculator. Evaluate base prices, upgrades, fees, and incentives to find the true cost of your new construction home.',
    url: '/tools/tract-home-builder-analysis',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-tract-home-builder.jpg',
        width: 1200,
        height: 630,
        alt: 'Tract Home Builder Analysis - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tract Home Builder Analysis - Calculate True New Construction Costs',
    description: 'Analyze tract home purchases with our free calculator. Evaluate base prices, upgrades, fees, and incentives.',
    images: ['/og-tract-home-builder.jpg'],
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
