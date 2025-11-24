import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HOA Rental Cap Analyzer - Check Rental Restrictions & Investment Impact | Property Tools',
  description: 'Analyze HOA rental caps, restrictions, and investor impact. Check FHA loan eligibility, rental slot availability, waitlist times, and community owner-occupancy ratios for informed property investment decisions.',
  keywords: [
    'HOA rental cap analyzer',
    'HOA rental restrictions',
    'rental cap calculator',
    'HOA rental limit checker',
    'FHA rental ratio',
    'condo rental restrictions',
    'HOA rental waitlist',
    'owner-occupied percentage',
    'rental cap impact',
    'HOA investment analyzer',
    'rental restriction tool',
    'HOA rental compliance',
    'community rental limits',
    'HOA rental rules',
    'rental cap eligibility'
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
    canonical: '/tools/hoa-rental-cap-analyzer',
  },
  openGraph: {
    title: 'HOA Rental Cap Analyzer - Check Rental Restrictions & Investment Impact',
    description: 'Analyze HOA rental caps, restrictions, and investor impact. Check FHA loan eligibility, rental slot availability, and community owner-occupancy ratios.',
    url: '/tools/hoa-rental-cap-analyzer',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-hoa-rental-cap-analyzer.jpg',
        width: 1200,
        height: 630,
        alt: 'HOA Rental Cap Analyzer Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOA Rental Cap Analyzer - Check Rental Restrictions & Investment Impact',
    description: 'Analyze HOA rental caps, restrictions, and investor impact. Check FHA loan eligibility and rental slot availability.',
    images: ['/og-hoa-rental-cap-analyzer.jpg'],
    creator: '@PropertyTools',
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
  verification: {
    google: 'your-google-verification-code',
  },
};
