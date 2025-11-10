
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'BRRRR Calculator',
    description: 'Analyze Buy, Rehab, Rent, Refinance, and Repeat (BRRRR) deals. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

import { BRRRR_METHOD_CALCULATOR_CONTENT } from '@/content/tools/brrrr-method-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { BrrrrCalculator } from '@/components/calculators/BrrrrCalculator';

const BrrrrCalculatorPage = () => {
  return (
    <CalculatorLayout content={BRRRR_METHOD_CALCULATOR_CONTENT}>
      <BrrrrCalculator />
    </CalculatorLayout>
  );
};

export default BrrrrCalculatorPage;