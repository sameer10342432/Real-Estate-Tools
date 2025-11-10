
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Energy Savings Calculator',
    description: 'Calculate energy efficiency savings and costs. Free online tool for real estate professionals, investors, and homebuyers. Make informed property decisions with accurate calculations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ENERGY_SAVINGS_CALCULATOR_CONTENT } from '@/content/tools/energy-savings-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const EnergySavingsCalculatorPage = () => {
  return (
    <CalculatorLayout content={ENERGY_SAVINGS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ENERGY_SAVINGS_CALCULATOR_CONTENT.title}
        slug="energy-savings-calculator"
        category="Home Improvement"
        description={ENERGY_SAVINGS_CALCULATOR_CONTENT.description}
        inputs={ENERGY_SAVINGS_CALCULATOR_CONTENT.calculator.fields}
        results={ENERGY_SAVINGS_CALCULATOR_CONTENT.calculator.results}
        calculation={ENERGY_SAVINGS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EnergySavingsCalculatorPage;