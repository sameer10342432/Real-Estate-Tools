import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Floor Plan Generator | Optimized Layout Design Tool',
  description: 'Create optimized floor plan concepts with AI. Generate detailed layouts, room dimensions, and flow descriptions for any property type and size.',
  keywords: [
    'AI floor plan',
    'floor plan generator',
    'layout design AI',
    'floor plan tool',
    'AI home layout',
    'floor plan creator',
    'house layout AI',
    'floor plan design',
    'AI architecture',
    'room layout tool',
    'floor plan AI',
    'home design layout',
    'AI floor designer',
    'layout generator',
    'floor plan software'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/ai-floor-plan-generator',
  },
  openGraph: {
    title: 'AI Floor Plan Generator',
    description: 'Generate optimized floor plan concepts with AI. Get detailed layouts and room dimensions for any property.',
    url: '/tools/ai-floor-plan-generator',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Floor Plan Generator',
    description: 'Create professional floor plan concepts with AI-powered layout generation.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
