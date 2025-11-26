import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spec Home vs Custom Home Comparison Calculator - Which Option is Right for You? | Property Tools',
  description: 'Compare spec homes versus custom-built homes. Analyze costs, timelines, and customization options to make the best decision for your new home purchase.',
  keywords: [
    'spec home vs custom home',
    'production home comparison',
    'custom built home cost',
    'spec house advantages',
    'move-in ready home',
    'custom home timeline',
    'builder comparison',
    'new construction options',
    'spec home calculator',
    'custom home budget',
    'home building comparison',
    'production vs custom home'
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
    canonical: '/tools/spec-home-vs-custom-home-comparison',
  },
  openGraph: {
    title: 'Spec Home vs Custom Home Comparison - Find Your Best Option',
    description: 'Free calculator to compare spec homes and custom-built homes. Evaluate costs, timelines, and pros/cons to make an informed home buying decision.',
    url: '/tools/spec-home-vs-custom-home-comparison',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-spec-vs-custom-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Spec Home vs Custom Home Comparison - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spec Home vs Custom Home Comparison - Find Your Best Option',
    description: 'Free calculator to compare spec homes and custom-built homes. Evaluate costs, timelines, and pros/cons.',
    images: ['/og-spec-vs-custom-home.jpg'],
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
