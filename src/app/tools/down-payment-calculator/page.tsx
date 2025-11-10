
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Down Payment Calculator',
    description: 'Calculate required down payment and savings timeline. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { DOWN_PAYMENT_CALCULATOR_CONTENT } from '@/content/tools/down-payment-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DownPaymentCalculatorPage = () => {
  return (
    <CalculatorLayout content={DOWN_PAYMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={DOWN_PAYMENT_CALCULATOR_CONTENT.title}
        slug="down-payment-calculator"
        category="Mortgage"
        description={DOWN_PAYMENT_CALCULATOR_CONTENT.description}
        inputs={DOWN_PAYMENT_CALCULATOR_CONTENT.calculator.fields}
        results={DOWN_PAYMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={DOWN_PAYMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DownPaymentCalculatorPage;