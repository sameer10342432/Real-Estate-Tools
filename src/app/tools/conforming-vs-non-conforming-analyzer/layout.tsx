import { ReactNode } from 'react';
import { metadata as pageMetadata } from './metadata';
import { Metadata } from 'next';

export const metadata: Metadata = pageMetadata;

export default function ToolLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
