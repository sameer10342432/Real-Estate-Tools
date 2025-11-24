import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Co-op Flip Tax Calculator - Calculate NYC Co-op Seller Closing Costs | Property Tools',
  description: 'Calculate co-op flip tax, seller closing costs, and net proceeds. Analyze different flip tax structures and estimate total resale costs for NYC cooperatives.',
  keywords: [
    'co-op flip tax',
    'flip tax calculator',
    'co-op seller costs',
    'NYC flip tax',
    'cooperative flip tax',
    'co-op closing costs',
    'co-op resale tax',
    'flip tax NYC',
    'co-op seller proceeds',
    'flip tax percentage',
    'co-op exit fee',
    'cooperative resale fee',
    'co-op transfer fee',
    'flip tax impact',
    'co-op seller calculator'
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
    canonical: '/tools/co-op-flip-tax-calculator',
  },
  openGraph: {
    title: 'Co-op Flip Tax Calculator - Calculate Seller Closing Costs',
    description: 'Calculate co-op flip tax, seller closing costs, and net proceeds for NYC cooperatives.',
    url: '/tools/co-op-flip-tax-calculator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-co-op-flip-tax-calculator.jpg',
        width: 1200,
        height: 630,
        alt: 'Co-op Flip Tax Calculator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Co-op Flip Tax Calculator - Calculate Seller Closing Costs',
    description: 'Calculate co-op flip tax and seller closing costs for NYC cooperatives.',
    images: ['/og-co-op-flip-tax-calculator.jpg'],
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
