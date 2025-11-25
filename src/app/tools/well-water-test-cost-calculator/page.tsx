
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Well Water Test Cost Calculator | Property Tools',
    description: 'Calculate the cost of well water testing for bacteria, contaminants, and water quality. Essential for home buyers, sellers, and homeowners with private wells.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { WELL_WATER_TEST_COST_CALCULATOR_CONTENT } from '@/content/tools/well-water-test-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WellWaterTestCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={WELL_WATER_TEST_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={WELL_WATER_TEST_COST_CALCULATOR_CONTENT.title}
        slug="well-water-test-cost-calculator"
        category="Home Inspection"
        description={WELL_WATER_TEST_COST_CALCULATOR_CONTENT.description}
        inputs={WELL_WATER_TEST_COST_CALCULATOR_CONTENT.calculator.fields}
        results={WELL_WATER_TEST_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={WELL_WATER_TEST_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WellWaterTestCostCalculatorPage;
