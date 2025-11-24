import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Closing Costs (Deductible) Calculator | Property Tools',
    description: 'Calculate which closing costs are tax deductible vs capitalized. Understand points, fees, and prepaid interest with our free closing costs calculator.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CLOSING_COSTS_DEDUCTIBLE_CALCULATOR_CONTENT } from '@/content/tools/closing-costs-deductible-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ClosingCostsDeductiblePage = () => {
  return (
    <CalculatorLayout content={CLOSING_COSTS_DEDUCTIBLE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CLOSING_COSTS_DEDUCTIBLE_CALCULATOR_CONTENT.title}
        slug="closing-costs-deductible-calculator"
        category="Tax Strategy & Entity Planning"
        description={CLOSING_COSTS_DEDUCTIBLE_CALCULATOR_CONTENT.description}
        inputs={CLOSING_COSTS_DEDUCTIBLE_CALCULATOR_CONTENT.calculator.fields}
        results={CLOSING_COSTS_DEDUCTIBLE_CALCULATOR_CONTENT.calculator.results}
        calculation={CLOSING_COSTS_DEDUCTIBLE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ClosingCostsDeductiblePage;
