'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Radon Test Cost Calculator | Property Tools',
    description: 'Calculate radon testing and mitigation costs for homes. Essential for health safety and property transactions in radon-prone areas.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { RADON_TEST_COST_CALCULATOR_CONTENT } from '@/content/tools/radon-test-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RadonTestCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={RADON_TEST_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={RADON_TEST_COST_CALCULATOR_CONTENT.title}
        slug="radon-test-cost-calculator"
        category="Home Inspection"
        description={RADON_TEST_COST_CALCULATOR_CONTENT.description}
        inputs={RADON_TEST_COST_CALCULATOR_CONTENT.calculator.fields}
        results={RADON_TEST_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={RADON_TEST_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RadonTestCostCalculatorPage;
