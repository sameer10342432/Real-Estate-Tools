import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Home Punch List Generator - Construction Walkthrough Checklist | Property Tools',
  description: 'Generate comprehensive punch lists for new home construction walkthroughs. Identify defects, track warranty items, and document issues room-by-room. Free tool for homebuyers, builders, and inspectors.',
  keywords: [
    'punch list generator',
    'new home walkthrough',
    'construction punch list',
    'final walkthrough checklist',
    'home inspection checklist',
    'new construction defects',
    'builder punch list',
    'snag list generator',
    'home warranty checklist',
    'pre-closing inspection',
    'new home defects',
    'construction quality'
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
    canonical: '/tools/new-home-punch-list-generator',
  },
  openGraph: {
    title: 'New Home Punch List Generator - Construction Walkthrough Checklist',
    description: 'Generate comprehensive punch lists for new home construction walkthroughs. Identify defects, track warranty items, and document issues room-by-room.',
    url: '/tools/new-home-punch-list-generator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-new-home-punch-list-generator.jpg',
        width: 1200,
        height: 630,
        alt: 'New Home Punch List Generator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Home Punch List Generator - Construction Walkthrough Checklist',
    description: 'Generate comprehensive punch lists for new home construction walkthroughs. Identify defects and track warranty items.',
    images: ['/og-new-home-punch-list-generator.jpg'],
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
