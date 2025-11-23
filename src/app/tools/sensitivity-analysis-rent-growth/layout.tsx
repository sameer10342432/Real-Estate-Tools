import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Sensitivity Analysis (Rent Growth) | Real Estate Projection Tool',
  description: 'Project future rental income and property value under different rent growth scenarios. Free sensitivity analysis tool for rental property investors.',
};

export default function ToolLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
