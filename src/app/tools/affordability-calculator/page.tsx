
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Affordability Calculator',
    description: 'Determine how much house you can afford based on your income. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HOME_AFFORDABILITY_CALCULATOR_CONTENT } from '@/content/tools/home-affordability-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AffordabilityCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_AFFORDABILITY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_AFFORDABILITY_CALCULATOR_CONTENT.title}
        slug="affordability-calculator"
        category="Mortgage"
        description={HOME_AFFORDABILITY_CALCULATOR_CONTENT.description}
        inputs={HOME_AFFORDABILITY_CALCULATOR_CONTENT.calculator.fields}
        results={HOME_AFFORDABILITY_CALCULATOR_CONTENT.calculator.results}
        calculation={HOME_AFFORDABILITY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AffordabilityCalculatorPage;