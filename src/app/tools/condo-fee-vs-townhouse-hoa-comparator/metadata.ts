import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Condo Fee vs Townhouse HOA Comparator - True Cost Comparison | Property Tools',
  description: 'Compare condo fees versus townhouse HOA dues and analyze true cost of ownership. Calculate total expenses including maintenance reserves and owner responsibilities.',
  keywords: [
    'condo vs townhouse',
    'condo fee calculator',
    'townhouse HOA dues',
    'condo vs townhouse costs',
    'HOA fee comparison',
    'condo ownership costs',
    'townhouse expenses',
    'maintenance fee comparison',
    'condo vs townhouse analysis',
    'true cost of ownership',
    'condo amenities vs townhouse',
    'property comparison tool',
    'condo vs townhouse affordability',
    'HOA vs condo fees',
    'ownership cost calculator'
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
    canonical: '/tools/condo-fee-vs-townhouse-hoa-comparator',
  },
  openGraph: {
    title: 'Condo Fee vs Townhouse HOA Comparator - True Cost Comparison',
    description: 'Compare condo fees versus townhouse HOA dues and analyze true cost of ownership with maintenance reserves.',
    url: '/tools/condo-fee-vs-townhouse-hoa-comparator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-condo-fee-vs-townhouse-hoa-comparator.jpg',
        width: 1200,
        height: 630,
        alt: 'Condo Fee vs Townhouse HOA Comparator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Condo Fee vs Townhouse HOA Comparator - True Cost Comparison',
    description: 'Compare condo fees versus townhouse HOA dues and analyze true cost of ownership.',
    images: ['/og-condo-fee-vs-townhouse-hoa-comparator.jpg'],
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
