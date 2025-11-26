import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exit Strategy Calculator for House Flippers | Compare Flip Exit Strategies',
  description: 'Free exit strategy calculator for house flippers. Compare quick sale, market sale, rental conversion, and wholesale assignment options to maximize your flip profits and ROI.',
  keywords: 'exit strategy calculator, house flip exit strategy, flip calculator, real estate exit strategy, wholesale assignment, rental conversion, quick sale calculator, fix and flip ROI',
  openGraph: {
    title: 'Exit Strategy Calculator for House Flippers',
    description: 'Compare different exit strategies for your fix-and-flip investment properties to maximize profits and minimize risk.',
    type: 'website',
  },
};

export default function ExitStrategyFlipperCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
