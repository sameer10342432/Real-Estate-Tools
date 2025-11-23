import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Correlation Calculator (Real Estate vs. Bonds) | Free Investment Tool',
  description: 'Analyze the correlation between real estate and bond investments to optimize your portfolio diversification. Free tool for investors and financial professionals.',
};

export default function ToolLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
