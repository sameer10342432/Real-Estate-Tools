import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Draw Schedule Calculator - Calculate Loan Draws & Interest Costs | Property Tools',
  description: 'Calculate construction loan draw schedules with our free calculator. Plan phase disbursements for foundation, framing, mechanical, finishing, and completion. Estimate interest costs during construction.',
  keywords: [
    'construction draw schedule',
    'construction loan calculator',
    'draw schedule calculator',
    'construction financing',
    'construction loan draws',
    'building loan schedule',
    'construction interest calculator',
    'new home construction loan',
    'construction phase disbursement',
    'construction loan interest',
    'builder financing',
    'construction to permanent loan'
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
    canonical: '/tools/construction-draw-schedule-calculator',
  },
  openGraph: {
    title: 'Construction Draw Schedule Calculator - Plan Your Construction Loan Disbursements',
    description: 'Free calculator to plan construction loan draw schedules. Calculate phase disbursements for foundation, framing, mechanical, and finishing. Estimate total interest costs.',
    url: '/tools/construction-draw-schedule-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-construction-draw-schedule-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Construction Draw Schedule Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Draw Schedule Calculator',
    description: 'Calculate construction loan draw schedules and interest costs for new home builds.',
    images: ['/og-construction-draw-schedule-calculator.jpg'],
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
  category: 'Construction Tools',
};
