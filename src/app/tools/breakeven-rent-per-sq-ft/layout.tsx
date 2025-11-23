import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Breakeven Rent Per Sq. Ft. Calculator | Commercial Real Estate Tool',
  description: 'Calculate the minimum rent per square foot needed to achieve breakeven or target cash flow. Free tool for commercial and residential property analysis.',
};

export default function ToolLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
