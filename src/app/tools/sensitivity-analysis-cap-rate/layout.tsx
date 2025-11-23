import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Sensitivity Analysis (Cap Rate) | Property Valuation Tool',
  description: 'Analyze how changes in cap rate affect property valuation and investment returns. Free sensitivity analysis calculator for real estate investors.',
};

export default function ToolLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
