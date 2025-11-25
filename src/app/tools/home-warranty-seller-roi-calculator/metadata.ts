import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Warranty (Seller-Paid) ROI Calculator - Should You Offer Warranty? | Property Tools',
  description: 'Calculate the ROI of offering a seller-paid home warranty. Determine if providing warranty helps sell faster and avoid repair negotiations.',
  keywords: [
    'seller-paid home warranty',
    'home warranty roi seller',
    'seller warranty cost',
    'home warranty selling strategy',
    'should seller offer warranty',
    'home warranty resale value',
    'seller warranty benefit',
    'home warranty faster sale',
    'listing period coverage',
    'seller warranty negotiation',
    'home warranty marketing tool',
    'seller protection warranty',
    'home warranty roi calculator',
    'sell home with warranty',
    'home warranty closing cost',
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
    canonical: '/tools/home-warranty-seller-roi-calculator',
  },
  openGraph: {
    title: 'Home Warranty (Seller-Paid) ROI Calculator',
    description: 'Calculate if offering a seller-paid home warranty provides positive ROI. Analyze holding cost savings, avoided repair credits, and faster sale benefits.',
    url: '/tools/home-warranty-seller-roi-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-home-warranty-seller.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Warranty (Seller-Paid) ROI Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Warranty (Seller-Paid) ROI Calculator',
    description: 'Should you offer a seller-paid home warranty? Calculate ROI based on holding costs, repair negotiations, and faster sale potential.',
    images: ['/og-home-warranty-seller.jpg'],
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
