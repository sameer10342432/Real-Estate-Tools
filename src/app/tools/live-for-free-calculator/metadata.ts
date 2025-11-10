import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live for Free Calculator - House Hacking Strategy to Eliminate Housing Costs | Property Tools',
  description: 'Calculate how to live rent-free using house hacking. Determine if rental income from rooms, basement suites, or ADUs can cover your entire mortgage and expenses. Free calculator with cash flow analysis.',
  keywords: [
    'live for free calculator',
    'house hacking live free',
    'rent room calculator',
    'basement suite income',
    'ADU rental income',
    'room rental calculator',
    'zero housing costs',
    'house hack strategy',
    'rent by room',
    'owner-occupied rental'
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
    canonical: '/tools/live-for-free-calculator',
  },
  openGraph: {
    title: 'Live for Free Calculator - House Hacking Strategy',
    description: 'Calculate how to eliminate housing costs by renting out extra space in your home. Free live-for-free calculator.',
    url: '/tools/live-for-free-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live for Free Calculator - House Hacking Strategy',
    description: 'Calculate how to live rent-free by renting out rooms, basement suites, or ADUs.',
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