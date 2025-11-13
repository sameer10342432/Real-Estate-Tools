import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Home Price Appreciation Forecaster | Property Value Prediction Tool',
  description: 'Forecast future home prices with AI analysis. Predict 1, 5, and 10-year property appreciation based on market trends, economic indicators, and historical data.',
  keywords: [
    'AI home price forecaster',
    'property appreciation predictor',
    'home value forecast',
    'AI price prediction',
    'real estate forecasting',
    'property value growth',
    'home price trends',
    'AI appreciation calculator',
    'future home value',
    'price growth predictor',
    'real estate AI',
    'market forecast tool',
    'property investment forecast',
    'home value predictor',
    'appreciation analysis'
  ],
  authors: [{ name: 'Property Tools' }],
  creator: 'Property Tools',
  publisher: 'Property Tools',
  metadataBase: new URL('https://propertytools.com'),
  alternates: {
    canonical: '/tools/ai-home-price-appreciation-forecaster',
  },
  openGraph: {
    title: 'AI Home Price Appreciation Forecaster',
    description: 'Predict future home values with AI. Forecast 1, 5, and 10-year appreciation based on market analysis and economic trends.',
    url: '/tools/ai-home-price-appreciation-forecaster',
    siteName: 'Property Tools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Home Price Appreciation Forecaster',
    description: 'Forecast future home prices and appreciation with AI-powered analysis.',
    creator: '@PropertyTools',
  },
  robots: {
    index: true,
    follow: true,
  },
};
