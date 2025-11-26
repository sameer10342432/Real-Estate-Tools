import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificate of Occupancy Checklist - CO Requirements & Inspections | Property Tools',
  description: 'Track requirements for obtaining a Certificate of Occupancy including required inspections, documentation, and timeline estimates. Free tool for builders, developers, and property owners.',
  keywords: [
    'certificate of occupancy',
    'CO checklist',
    'building permit inspections',
    'occupancy permit requirements',
    'final inspection checklist',
    'building code compliance',
    'construction inspections',
    'CO timeline',
    'occupancy certificate',
    'building department requirements',
    'construction permit',
    'inspection requirements'
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
    canonical: '/tools/certificate-of-occupancy-checklist',
  },
  openGraph: {
    title: 'Certificate of Occupancy Checklist - CO Requirements & Inspections',
    description: 'Track requirements for obtaining a Certificate of Occupancy including required inspections, documentation, and timeline estimates.',
    url: '/tools/certificate-of-occupancy-checklist',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-certificate-of-occupancy-checklist.jpg',
        width: 1200,
        height: 630,
        alt: 'Certificate of Occupancy Checklist - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certificate of Occupancy Checklist - CO Requirements & Inspections',
    description: 'Track requirements for obtaining a Certificate of Occupancy including required inspections and documentation.',
    images: ['/og-certificate-of-occupancy-checklist.jpg'],
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
