import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Short-Term Rental Occupancy Rate Calculator - STR Performance Analyzer | Property Tools',
  description: 'Calculate STR occupancy rates for Airbnb and VRBO properties. Analyze booking performance, revenue efficiency, and benchmark against industry standards. Free occupancy calculator.',
  keywords: [
    'STR occupancy rate',
    'short-term rental occupancy',
    'Airbnb occupancy calculator',
    'VRBO occupancy rate',
    'vacation rental occupancy',
    'booking performance',
    'STR metrics',
    'occupancy percentage',
    'rental performance',
    'revenue efficiency'
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
    canonical: '/tools/str-occupancy-rate-calculator',
  },
  openGraph: {
    title: 'STR Occupancy Rate Calculator - Performance Analyzer',
    description: 'Free calculator to analyze short-term rental occupancy rates and booking performance.',
    url: '/tools/str-occupancy-rate-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STR Occupancy Rate Calculator - Performance Analyzer',
    description: 'Calculate and optimize your short-term rental occupancy rate.',
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