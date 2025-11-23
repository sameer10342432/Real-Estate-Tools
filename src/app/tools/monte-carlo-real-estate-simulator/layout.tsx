import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Monte Carlo Simulator (Real Estate) | Investment Risk Analysis Tool',
  description: 'Run thousands of simulations to understand the range of possible real estate investment outcomes and risk probabilities. Free Monte Carlo analysis tool.',
};

export default function ToolLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
