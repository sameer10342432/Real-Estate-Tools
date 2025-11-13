import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Property Valuation (AVM) Tool | Automated Home Value Estimator',
  description: 'Get instant property valuations using AI-powered automated valuation model (AVM). Estimate home values with confidence scores and detailed market analysis.',
  keywords: [
    'AI property valuation',
    'automated valuation model',
    'AVM tool',
    'home value estimator',
    'property appraisal AI',
    'real estate valuation',
    'AI home appraisal',
    'property value calculator',
    'home worth estimator',
    'AVM software',
    'property pricing tool',
    'AI real estate valuation',
    'home value AI',
    'property assessment',
    'automated home valuation'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/ai-property-valuation-avm',
  },
  openGraph: {
    title: 'AI Property Valuation (AVM) Tool',
    description: 'Estimate property values instantly with AI-powered automated valuation model. Get confidence scores and detailed market analysis.',
    url: '/tools/ai-property-valuation-avm',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Property Valuation (AVM) Tool',
    description: 'Get instant property valuations with AI-powered AVM technology.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
