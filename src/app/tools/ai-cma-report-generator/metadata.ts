import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI CMA Report Generator | Comparative Market Analysis Tool for Realtors',
  description: 'Generate professional CMA reports instantly with AI. Create comprehensive comparative market analyses with pricing recommendations and market insights.',
  keywords: [
    'AI CMA generator',
    'comparative market analysis',
    'CMA report tool',
    'AI market analysis',
    'real estate CMA',
    'automated CMA',
    'AI pricing tool',
    'market analysis generator',
    'CMA automation',
    'AI real estate report',
    'property valuation CMA',
    'listing presentation tool',
    'AI comp analysis',
    'market report generator',
    'realtor CMA tool'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/ai-cma-report-generator',
  },
  openGraph: {
    title: 'AI CMA Report Generator',
    description: 'Create professional comparative market analysis reports instantly with AI. Generate CMAs with pricing recommendations and market insights.',
    url: '/tools/ai-cma-report-generator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI CMA Report Generator',
    description: 'Generate professional CMA reports with AI-powered market analysis.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
