import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Sensitivity Analysis (Vacancy Rate) | Cash Flow Analysis Tool',
  description: 'Analyze how different vacancy rates impact net operating income and cash flow. Free tool for rental property analysis and risk assessment.',
};

export default function ToolLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
