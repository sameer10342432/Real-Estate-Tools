import type { Metadata } from 'next';
import { HARD_MONEY_POINTS_CALCULATOR_CONTENT } from '@/content/tools/hard-money-points-calculator';
import HardMoneyPointsCalculatorClient from './client';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: HARD_MONEY_POINTS_CALCULATOR_CONTENT.metaTitle || HARD_MONEY_POINTS_CALCULATOR_CONTENT.title,
    description: HARD_MONEY_POINTS_CALCULATOR_CONTENT.metaDescription || HARD_MONEY_POINTS_CALCULATOR_CONTENT.description,
  };
}

export default function HardMoneyPointsCalculatorPage() {
  return <HardMoneyPointsCalculatorClient />;
}
