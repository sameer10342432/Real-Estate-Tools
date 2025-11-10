import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Airbnb Arbitrage Calculator - Rental Arbitrage Profit Calculator | Property Tools',
  description: 'Calculate Airbnb arbitrage profits by subletting long-term rentals as short-term rentals. Analyze ROI, breakeven occupancy, and monthly cash flow. Free rental arbitrage calculator.',
  keywords: [
    'Airbnb arbitrage',
    'rental arbitrage calculator',
    'Airbnb sublet calculator',
    'rental arbitrage profit',
    'STR arbitrage',
    'subletting calculator',
    'Airbnb master lease',
    'rental arbitrage ROI',
    'vacation rental arbitrage',
    'Airbnb business calculator'
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
    canonical: '/tools/airbnb-arbitrage-calculator',
  },
  openGraph: {
    title: 'Airbnb Arbitrage Calculator - Rental Arbitrage Profit',
    description: 'Free calculator to analyze Airbnb arbitrage opportunities. Calculate profit from subletting rentals as STRs.',
    url: '/tools/airbnb-arbitrage-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airbnb Arbitrage Calculator - Rental Arbitrage Profit',
    description: 'Calculate Airbnb arbitrage profits with our free rental arbitrage calculator.',
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