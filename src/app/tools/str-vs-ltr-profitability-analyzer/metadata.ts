import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'STR vs LTR Calculator - Short-Term vs Long-Term Rental Profitability Comparison | Property Tools',
  description: 'Compare short-term rental (Airbnb/VRBO) vs. long-term rental profitability. Analyze cash flow, ROI, and income differences. Free STR vs LTR comparison calculator.',
  keywords: [
    'STR vs LTR',
    'short-term vs long-term rental',
    'Airbnb vs traditional rental',
    'rental strategy comparison',
    'STR profitability',
    'LTR profitability',
    'rental income comparison',
    'vacation rental vs lease',
    'rental investment strategy',
    'cash flow comparison'
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
    canonical: '/tools/str-vs-ltr-profitability-analyzer',
  },
  openGraph: {
    title: 'STR vs LTR Profitability Analyzer - Rental Comparison',
    description: 'Free calculator to compare short-term rental vs. long-term rental profitability and cash flow.',
    url: '/tools/str-vs-ltr-profitability-analyzer',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STR vs LTR Profitability Analyzer - Rental Comparison',
    description: 'Compare Airbnb vs. traditional rental profitability with our free calculator.',
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