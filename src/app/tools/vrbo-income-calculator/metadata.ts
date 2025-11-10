import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VRBO Income Calculator - Vacation Rental Revenue Estimator | Property Tools',
  description: 'Calculate VRBO rental income with occupancy rates, nightly rates, and commission fees. Compare subscription vs. per-booking fees. Free vacation rental calculator.',
  keywords: [
    'VRBO income calculator',
    'VRBO revenue calculator',
    'vacation rental income',
    'HomeAway calculator',
    'VRBO earnings estimator',
    'vacation rental profit',
    'VRBO commission calculator',
    'vacation home income',
    'VRBO occupancy calculator',
    'rental property income'
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
    canonical: '/tools/vrbo-income-calculator',
  },
  openGraph: {
    title: 'VRBO Income Calculator - Vacation Rental Revenue',
    description: 'Free calculator to estimate VRBO rental income. Calculate monthly and annual revenue with fees and occupancy.',
    url: '/tools/vrbo-income-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VRBO Income Calculator - Vacation Rental Revenue',
    description: 'Calculate VRBO rental income with our free vacation rental calculator.',
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