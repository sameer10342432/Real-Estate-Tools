import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Change Order Cost Calculator - Track Construction Change Order Costs & Markups | Property Tools',
  description: 'Calculate construction change order costs including materials, labor, and contractor markups. Track cumulative change orders, percentage increases, and total project cost impact. Free tool for contractors, homeowners, and project managers.',
  keywords: [
    'change order calculator',
    'construction change order',
    'change order cost',
    'contractor markup calculator',
    'construction cost tracking',
    'project cost calculator',
    'change order markup',
    'construction budget calculator',
    'building cost changes',
    'renovation change orders',
    'construction project management',
    'change order tracking'
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
    canonical: '/tools/change-order-cost-calculator',
  },
  openGraph: {
    title: 'Change Order Cost Calculator - Track Construction Costs & Markups',
    description: 'Free change order calculator to track construction costs, contractor markups, and project budget impact. Calculate cumulative change orders and percentage increases.',
    url: '/tools/change-order-cost-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-change-order-cost-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Change Order Cost Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Change Order Cost Calculator - Track Construction Costs & Markups',
    description: 'Free change order calculator to track construction costs, contractor markups, and project budget impact.',
    images: ['/og-change-order-cost-calculator.jpg'],
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
