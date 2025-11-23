import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sortino Ratio Calculator for Real Estate - Downside Risk Analysis | Property Tools',
  description: 'Calculate the Sortino Ratio for real estate investments. Unlike Sharpe Ratio, Sortino only penalizes downside volatility, making it ideal for real estate analysis.',
  keywords: [
    'Sortino ratio calculator',
    'real estate Sortino ratio',
    'downside risk analysis',
    'downside deviation',
    'real estate risk metrics',
    'investment performance',
    'risk-adjusted returns',
    'portfolio analysis',
    'real estate volatility',
    'asymmetric risk'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Sortino Ratio Calculator for Real Estate Investments',
    description: 'Calculate downside risk-adjusted returns with Sortino Ratio. Free calculator for property investors.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sortino Ratio Calculator for Real Estate Investments',
    description: 'Calculate downside risk-adjusted returns with Sortino Ratio.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/tools/sortino-ratio-real-estate-calculator',
  },
  category: 'Risk Management Tools',
};
