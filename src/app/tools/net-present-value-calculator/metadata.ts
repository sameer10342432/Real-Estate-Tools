import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Net Present Value (NPV) Calculator - Real Estate Investment Analysis | Property Tools',
  description: 'Calculate the Net Present Value of your real estate investment. NPV helps you determine if an investment will be profitable by comparing the present value of cash inflows to outflows.',
  keywords: [
    'NPV calculator',
    'net present value',
    'real estate NPV',
    'investment analysis',
    'discount rate calculator',
    'present value calculator',
    'real estate valuation',
    'property investment NPV',
    'cash flow analysis',
    'real estate returns'
  ],
  authors: [{ name: 'Property Tools' }],
  openGraph: {
    title: 'Net Present Value (NPV) Calculator for Real Estate',
    description: 'Calculate NPV to determine if a real estate investment is worth more than what you pay. Free NPV calculator.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Net Present Value (NPV) Calculator for Real Estate',
    description: 'Calculate NPV to determine real estate investment profitability.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/tools/net-present-value-calculator',
  },
  category: 'Investment Analysis Tools',
};
