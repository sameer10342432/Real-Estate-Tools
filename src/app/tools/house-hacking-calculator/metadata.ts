import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'House Hacking Calculator - Calculate Net Housing Costs & Rental Income | Property Tools',
  description: 'Calculate your net monthly housing cost with house hacking. See how rental income from extra units can cover your mortgage, taxes, and insurance. Free house hacking calculator with detailed analysis.',
  keywords: [
    'house hacking calculator',
    'house hack calculator',
    'multi-family house hacking',
    'rental income calculator',
    'live rent free',
    'duplex house hacking',
    'triplex house hacking',
    'fourplex calculator',
    'owner-occupied rental',
    'real estate investment',
    'mortgage offset calculator'
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
    canonical: '/tools/house-hacking-calculator',
  },
  openGraph: {
    title: 'House Hacking Calculator - Calculate Net Housing Costs',
    description: 'Free calculator to analyze house hacking opportunities. Calculate net housing costs after rental income from multi-family properties.',
    url: '/tools/house-hacking-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Hacking Calculator - Calculate Net Housing Costs',
    description: 'Free calculator to analyze house hacking opportunities and rental income potential.',
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