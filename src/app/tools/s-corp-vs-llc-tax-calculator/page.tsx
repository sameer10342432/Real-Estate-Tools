import { S_CORP_VS_LLC_TAX_CALCULATOR_CONTENT } from '@/content/tools/s-corp-vs-llc-tax-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { SCorpVsLLCTaxCalculator } from '@/components/calculators/SCorpVsLLCTaxCalculator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'S-Corp vs LLC Tax Calculator | Real Estate Agent Tax Comparison',
    description: 'Compare S-Corporation and LLC tax structures for real estate agents. Calculate self-employment tax savings, QBI deduction, and total tax liability to determine the best entity for your business.',
  };
}

const SCorpVsLLCTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={S_CORP_VS_LLC_TAX_CALCULATOR_CONTENT}>
      <SCorpVsLLCTaxCalculator />
    </CalculatorLayout>
  );
};

export default SCorpVsLLCTaxCalculatorPage;
