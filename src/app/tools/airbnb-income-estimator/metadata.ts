import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Airbnb Income Calculator - Short-Term Rental Revenue Estimator | Property Tools',
  description: 'Calculate monthly and annual Airbnb rental income. Estimate revenue based on nightly rates, occupancy, cleaning fees, and platform costs. Free STR income calculator.',
  keywords: [
    'Airbnb income calculator',
    'Airbnb revenue calculator',
    'short-term rental income',
    'STR calculator',
    'Airbnb earnings estimator',
    'vacation rental income',
    'Airbnb profit calculator',
    'nightly rental income',
    'Airbnb occupancy calculator',
    'STR revenue estimator'
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
    canonical: '/tools/airbnb-income-estimator',
  },
  openGraph: {
    title: 'Airbnb Income Calculator - STR Revenue Estimator',
    description: 'Free calculator to estimate Airbnb rental income. Calculate monthly and annual revenue with occupancy and fees.',
    url: '/tools/airbnb-income-estimator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airbnb Income Calculator - STR Revenue Estimator',
    description: 'Calculate Airbnb rental income based on nightly rates and occupancy.',
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