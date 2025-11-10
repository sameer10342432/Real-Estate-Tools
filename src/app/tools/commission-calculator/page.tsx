
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Commission Calculator',
    description: 'Calculate real estate agent commissions and fees. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

import { COMMISSION_CALCULATOR_CONTENT } from '@/content/tools/commission-calculator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { CommissionCalculator } from '@/components/calculators/CommissionCalculator';

const CommissionCalculatorPage = () => {
  return (
    <CalculatorLayout content={COMMISSION_CALCULATOR_CONTENT}>
      <CommissionCalculator />
    </CalculatorLayout>
  );
};

export default CommissionCalculatorPage;