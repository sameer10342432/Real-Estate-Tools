import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Co-op Board Approval Analyzer - Check Requirements & Approval Odds | Property Tools',
  description: 'Analyze co-op board approval requirements including DTI ratio, post-closing liquidity, and down payment adequacy. Calculate your approval probability for NYC co-ops.',
  keywords: [
    'co-op board approval',
    'co-op approval calculator',
    'co-op DTI requirements',
    'co-op liquidity requirements',
    'NYC co-op approval',
    'co-op board package',
    'co-op financial requirements',
    'co-op approval probability',
    'co-op down payment',
    'co-op purchase requirements',
    'co-op board interview',
    'cooperative approval',
    'co-op application analyzer',
    'co-op qualification calculator',
    'co-op approval odds'
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
    canonical: '/tools/co-op-board-approval-analyzer',
  },
  openGraph: {
    title: 'Co-op Board Approval Analyzer - Check Requirements & Approval Odds',
    description: 'Analyze co-op board approval requirements including DTI, liquidity, and down payment. Calculate approval probability.',
    url: '/tools/co-op-board-approval-analyzer',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-co-op-board-approval-analyzer.jpg',
        width: 1200,
        height: 630,
        alt: 'Co-op Board Approval Analyzer Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Co-op Board Approval Analyzer - Check Requirements & Approval Odds',
    description: 'Analyze co-op board approval requirements and calculate your approval probability.',
    images: ['/og-co-op-board-approval-analyzer.jpg'],
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
