import type { Metadata } from 'next';
import { HARD_MONEY_LTV_CALCULATOR_CONTENT } from '@/content/tools/hard-money-ltv-calculator';
import HardMoneyLtvCalculatorClient from './client';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: HARD_MONEY_LTV_CALCULATOR_CONTENT.metaTitle || HARD_MONEY_LTV_CALCULATOR_CONTENT.title,
    description: HARD_MONEY_LTV_CALCULATOR_CONTENT.metaDescription || HARD_MONEY_LTV_CALCULATOR_CONTENT.description,
  };
}

export default function HardMoneyLtvCalculatorPage() {
  return <HardMoneyLtvCalculatorClient />;
}
