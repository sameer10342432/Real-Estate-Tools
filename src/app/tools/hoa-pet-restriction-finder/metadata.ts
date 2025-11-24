import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HOA Pet Restriction Finder - Check Pet Policies, Breed Bans & Size Limits | Property Tools',
  description: 'Analyze HOA pet restrictions, breed bans, weight limits, and pet fees. Check compliance for your pets and calculate total pet ownership costs in HOA communities.',
  keywords: [
    'HOA pet restrictions',
    'pet restriction finder',
    'HOA breed restrictions',
    'pet weight limits',
    'HOA pet fees',
    'pet deposit calculator',
    'condo pet policy',
    'pet friendly HOA',
    'breed ban checker',
    'pet compliance tool',
    'HOA pet rules',
    'dog weight limit',
    'pet quantity limits',
    'HOA pet costs',
    'service animal rights'
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
    canonical: '/tools/hoa-pet-restriction-finder',
  },
  openGraph: {
    title: 'HOA Pet Restriction Finder - Check Pet Policies & Breed Bans',
    description: 'Analyze HOA pet restrictions, breed bans, weight limits, and pet fees. Check compliance and calculate pet ownership costs.',
    url: '/tools/hoa-pet-restriction-finder',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-hoa-pet-restriction-finder.jpg',
        width: 1200,
        height: 630,
        alt: 'HOA Pet Restriction Finder Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOA Pet Restriction Finder - Check Pet Policies & Breed Bans',
    description: 'Analyze HOA pet restrictions, breed bans, weight limits, and pet fees. Check compliance for your pets.',
    images: ['/og-hoa-pet-restriction-finder.jpg'],
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
