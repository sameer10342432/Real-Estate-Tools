import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lien Waiver Generator - Create Construction Lien Release Documents | Property Tools',
  description: 'Generate lien waiver documents for construction projects. Create conditional and unconditional lien waivers for progress and final payments. Free tool for contractors, property owners, and construction managers.',
  keywords: [
    'lien waiver generator',
    'lien waiver form',
    'construction lien waiver',
    'mechanic lien waiver',
    'conditional lien waiver',
    'unconditional lien waiver',
    'progress payment waiver',
    'final payment waiver',
    'lien release form',
    'construction payment',
    'contractor lien waiver',
    'subcontractor waiver'
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
    canonical: '/tools/lien-waiver-generator',
  },
  openGraph: {
    title: 'Lien Waiver Generator - Create Construction Lien Release Documents',
    description: 'Free lien waiver generator for construction projects. Create conditional and unconditional waivers for progress and final payments. Protect your property rights.',
    url: '/tools/lien-waiver-generator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-lien-waiver-generator.jpg',
        width: 1200,
        height: 630,
        alt: 'Lien Waiver Generator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lien Waiver Generator - Create Construction Lien Release Documents',
    description: 'Free lien waiver generator for construction projects. Create conditional and unconditional waivers for progress and final payments.',
    images: ['/og-lien-waiver-generator.jpg'],
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
