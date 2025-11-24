import { FLAT_FEE_MLS_FSBO_SAVINGS_CONTENT } from '@/content/tools/flat-fee-mls-fsbo-savings';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { FlatFeeMlsFsboSavingsCalculator } from '@/components/calculators/FlatFeeMlsFsboSavingsCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Flat Fee MLS (FSBO) Savings Calculator - Property Tools',
    description: 'Calculate potential savings from using Flat Fee MLS for For Sale By Owner listings, compare costs versus traditional agents, and understand service trade-offs',
  };
}

const FlatFeeMlsFsboSavingsPage = () => {
  return (
    <CalculatorLayout content={FLAT_FEE_MLS_FSBO_SAVINGS_CONTENT}>
      <FlatFeeMlsFsboSavingsCalculator />
    </CalculatorLayout>
  );
};

export default FlatFeeMlsFsboSavingsPage;
