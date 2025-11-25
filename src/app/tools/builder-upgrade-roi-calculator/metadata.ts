import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Builder Upgrade ROI Calculator - New Construction Upgrade Value Analysis | Property Tools',
  description: 'Calculate ROI for new construction builder upgrades. Determine which upgrades recoup costs at resale including structural, kitchen, flooring, and energy efficiency.',
  keywords: [
    'builder upgrade roi',
    'new construction upgrades',
    'builder upgrade value',
    'new home upgrade cost',
    'builder upgrade worth it',
    'construction upgrade roi',
    'builder options calculator',
    'new home upgrade resale value',
    'builder markup calculator',
    'structural upgrade roi',
    'kitchen upgrade value',
    'flooring upgrade roi',
    'energy efficiency upgrade',
    'builder upgrade vs diy',
    'new construction options',
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
    canonical: '/tools/builder-upgrade-roi-calculator',
  },
  openGraph: {
    title: 'Builder Upgrade ROI Calculator',
    description: 'Calculate return on investment for new construction builder upgrades. Analyze which upgrades provide best resale value by market segment and time horizon.',
    url: '/tools/builder-upgrade-roi-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-builder-upgrade-roi.jpg',
        width: 1200,
        height: 630,
        alt: 'Builder Upgrade ROI Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Builder Upgrade ROI Calculator',
    description: 'Calculate ROI for new construction upgrades. Determine which builder options provide best resale value and which to skip or DIY.',
    images: ['/og-builder-upgrade-roi.jpg'],
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
