
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'VRBO Income Calculator',
    description: 'Calculate VRBO vacation rental income with commission and subscription fees. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { VRBO_INCOME_CALCULATOR_CONTENT } from '@/content/tools/vrbo-income-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const VrboIncomeCalculatorPage = () => {
  return (
    <CalculatorLayout content={VRBO_INCOME_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={VRBO_INCOME_CALCULATOR_CONTENT.title}
        slug="vrbo-income-calculator"
        category="Rental & Income"
        description={VRBO_INCOME_CALCULATOR_CONTENT.description}
        inputs={VRBO_INCOME_CALCULATOR_CONTENT.calculator.fields}
        results={VRBO_INCOME_CALCULATOR_CONTENT.calculator.results}
        calculation={VRBO_INCOME_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default VrboIncomeCalculatorPage;
