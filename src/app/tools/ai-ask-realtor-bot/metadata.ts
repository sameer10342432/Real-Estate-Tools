import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Ask a US Realtor Bot | Get Free Real Estate Advice Instantly',
  description: 'Ask real estate questions and get instant expert advice. Free AI realtor bot provides answers about buying, selling, investing, financing, and market trends.',
  keywords: [
    'ask a realtor',
    'real estate questions',
    'realtor advice',
    'real estate Q&A',
    'home buying questions',
    'real estate agent bot',
    'AI realtor assistant',
    'real estate expert advice',
    'property questions',
    'realtor chat bot',
    'free real estate advice',
    'home selling questions',
    'real estate help',
    'property advice online',
    'virtual realtor'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/ai-ask-realtor-bot',
  },
  openGraph: {
    title: 'AI Ask a US Realtor Bot | Get Free Real Estate Advice Instantly',
    description: 'Ask real estate questions and get instant expert advice from our AI realtor bot. Get answers about buying, selling, renting, investing, and more.',
    url: '/tools/ai-ask-realtor-bot',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Ask a US Realtor Bot',
    description: 'Get instant answers to your real estate questions from our AI realtor expert.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
