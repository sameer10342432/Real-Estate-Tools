import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Equity Multiple Calculator | Real Estate Investment Return Tool',
  description: 'Calculate total return on investment as a multiple of initial equity invested. Free equity multiple (EM) calculator for real estate syndications and investments.',
};

export default function ToolLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
