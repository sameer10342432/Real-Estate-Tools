import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iowa Transfer Tax Calculator - Real Estate Transfer Tax | Property Tools',
  description: 'Calculate Iowa real estate transfer tax ($0.80 per $500) with first $500 exemption. Free calculator for Iowa transfer costs with 50/50 buyer/seller split.',
  keywords: [
    'iowa transfer tax',
    'iowa real estate tax',
    'iowa recording fees',
    'iowa closing costs',
    'iowa seller costs',
    'iowa buyer costs',
    'des moines transfer tax',
    'iowa property transfer',
    'iowa deed recording',
    'iowa transfer tax exemption',
    '$500 exemption iowa',
    'iowa attorney fees'
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
    canonical: '/tools/iowa-transfer-tax-calculator',
  },
  openGraph: {
    title: 'Iowa Transfer Tax Calculator - First $500 Exempt',
    description: 'Calculate Iowa real estate transfer tax with first $500 exemption. 50/50 buyer/seller split.',
    url: '/tools/iowa-transfer-tax-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-iowa-transfer-tax.jpg',
        width: 1200,
        height: 630,
        alt: 'Iowa Transfer Tax Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iowa Transfer Tax Calculator - $0.80 per $500',
    description: 'Calculate Iowa real estate transfer tax with first $500 exemption and 50/50 split.',
    images: ['/og-iowa-transfer-tax.jpg'],
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
