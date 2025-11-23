import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Breakeven Vacancy Rate Calculator | Rental Property Risk Tool',
  description: 'Calculate the maximum vacancy rate your property can sustain before becoming cash flow negative. Free breakeven analysis tool for landlords and investors.',
};

export default function ToolLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
