'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Exterior Siding Replacement Cost Calculator | Property Tools',
    description: 'Calculate the cost of replacing your home\'s siding with different materials including vinyl, fiber cement, wood, and more. Get accurate estimates for your project.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { EXTERIOR_SIDING_REPLACEMENT_COST_CALCULATOR_CONTENT } from '@/content/tools/exterior-siding-replacement-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ExteriorSidingReplacementCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={EXTERIOR_SIDING_REPLACEMENT_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={EXTERIOR_SIDING_REPLACEMENT_COST_CALCULATOR_CONTENT.title}
        slug="exterior-siding-replacement-cost-calculator"
        category="Home Improvement"
        description={EXTERIOR_SIDING_REPLACEMENT_COST_CALCULATOR_CONTENT.description}
        inputs={EXTERIOR_SIDING_REPLACEMENT_COST_CALCULATOR_CONTENT.calculator.fields}
        results={EXTERIOR_SIDING_REPLACEMENT_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={EXTERIOR_SIDING_REPLACEMENT_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ExteriorSidingReplacementCostCalculatorPage;
