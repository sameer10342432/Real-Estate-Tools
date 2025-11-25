import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Renter's Insurance Cost Calculator - Estimate Coverage Premiums | Property Tools",
  description: "Calculate renter's insurance premiums based on personal property value, liability coverage, deductible, and location. Get accurate premium estimates for tenant coverage nationwide.",
  keywords: [
    "renters insurance cost",
    "renters insurance calculator",
    "tenant insurance premium",
    "apartment insurance cost",
    "renters insurance estimator",
    "personal property coverage cost",
    "liability coverage renters",
    "renters insurance by state",
    "cheap renters insurance",
    "renters insurance deductible",
    "apartment tenant insurance",
    "renters coverage calculator",
    "renters insurance quotes",
    "tenant liability insurance",
    "renters insurance premium",
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
    canonical: '/tools/renters-insurance-cost-calculator',
  },
  openGraph: {
    title: "Renter's Insurance Cost Calculator",
    description: "Estimate renter's insurance costs for your apartment or rental home. Calculate premiums based on coverage limits, deductible, and location risk factors.",
    url: '/tools/renters-insurance-cost-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-renters-insurance.jpg',
        width: 1200,
        height: 630,
        alt: "Renter's Insurance Cost Calculator - Property Tools",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Renter's Insurance Cost Calculator",
    description: "Calculate renter's insurance premiums for personal property and liability coverage. Get accurate estimates based on your location and coverage needs.",
    images: ['/og-renters-insurance.jpg'],
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
