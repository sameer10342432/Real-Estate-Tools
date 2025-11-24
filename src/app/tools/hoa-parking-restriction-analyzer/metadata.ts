import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HOA Parking Restriction Analyzer - Check Parking Rules & Guest Limits | Property Tools',
  description: 'Analyze HOA parking restrictions, guest parking limits, and vehicle rules. Calculate parking adequacy, violation costs, and extra parking spot expenses.',
  keywords: [
    'HOA parking restrictions',
    'parking restriction analyzer',
    'guest parking limits',
    'HOA parking rules',
    'assigned parking calculator',
    'street parking ban',
    'RV parking restrictions',
    'commercial vehicle ban',
    'parking violation fines',
    'extra parking cost',
    'HOA parking compliance',
    'visitor parking limits',
    'parking permit requirements',
    'garage usage rules',
    'parking adequacy checker'
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
    canonical: '/tools/hoa-parking-restriction-analyzer',
  },
  openGraph: {
    title: 'HOA Parking Restriction Analyzer - Check Parking Rules & Guest Limits',
    description: 'Analyze HOA parking restrictions, guest parking limits, and vehicle rules. Calculate parking adequacy and violation costs.',
    url: '/tools/hoa-parking-restriction-analyzer',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-hoa-parking-restriction-analyzer.jpg',
        width: 1200,
        height: 630,
        alt: 'HOA Parking Restriction Analyzer Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOA Parking Restriction Analyzer - Check Parking Rules & Guest Limits',
    description: 'Analyze HOA parking restrictions, guest parking limits, and vehicle rules. Calculate parking adequacy.',
    images: ['/og-hoa-parking-restriction-analyzer.jpg'],
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
