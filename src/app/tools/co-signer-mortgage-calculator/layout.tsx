import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Co-Signer Mortgage Calculator | Calculate Joint Mortgage Qualification & DTI Ratios',
  description: 'Free co-signer mortgage calculator to estimate loan amounts, monthly payments, combined DTI ratios, and qualification scenarios. Understand how a co-signer affects your mortgage approval chances and total loan costs.',
};

export default function CoSignerMortgageCalculatorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
