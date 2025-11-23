import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Loan Constant Calculator | Mortgage Comparison Tool',
  description: 'Calculate annual debt service as a percentage of loan amount to evaluate financing terms and leverage. Free loan constant calculator for real estate.',
};

export default function ToolLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
