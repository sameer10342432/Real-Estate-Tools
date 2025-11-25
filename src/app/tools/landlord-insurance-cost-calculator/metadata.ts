import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landlord Insurance Cost Calculator - Rental Property Coverage | Property Tools',
  description: 'Calculate landlord insurance premiums for rental properties. Estimate costs for property damage, liability coverage, loss of rental income, and legal expenses based on property type and coverage level.',
  keywords: [
    'landlord insurance cost',
    'rental property insurance calculator',
    'dwelling fire insurance cost',
    'landlord insurance premium',
    'rental property coverage',
    'landlord liability insurance',
    'loss of rental income coverage',
    'DP-1 insurance cost',
    'DP-2 insurance cost',
    'DP-3 insurance cost',
    'investment property insurance',
    'rental property protection',
    'landlord insurance estimator',
    'multi-family insurance cost',
    'vacation rental insurance',
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
    canonical: '/tools/landlord-insurance-cost-calculator',
  },
  openGraph: {
    title: 'Landlord Insurance Cost Calculator',
    description: 'Calculate landlord insurance premiums for single-family, duplex, triplex, and vacation rentals. Get estimates for DP-1, DP-2, and DP-3 coverage levels.',
    url: '/tools/landlord-insurance-cost-calculator',
    siteName: 'Property Tools',
    images: [
      {
        url: '/og-landlord-insurance.jpg',
        width: 1200,
        height: 630,
        alt: 'Landlord Insurance Cost Calculator - Property Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landlord Insurance Cost Calculator',
    description: 'Estimate landlord insurance costs for rental properties including liability, loss of income, and property damage coverage.',
    images: ['/og-landlord-insurance.jpg'],
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
