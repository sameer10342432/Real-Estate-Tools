import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Hurdle Rate Calculator (Real Estate) | Investment Return Tool',
  description: 'Calculate the minimum acceptable return rate for real estate investments based on risk and opportunity cost. Free hurdle rate analysis tool.',
};

export default function ToolLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
