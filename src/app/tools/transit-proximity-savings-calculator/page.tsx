'use client';
async function _generateMetadata() {
  return {
    title: 'Transit Proximity Savings Calculator - Public Transportation Benefits',
    description: 'Calculate financial benefits of living near quality public transportation. Analyze property premiums, transportation savings, and total cost of living.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TRANSIT_PROXIMITY_SAVINGS_CALCULATOR_CONTENT } from '@/content/tools/transit-proximity-savings-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TransitProximitySavingsCalculatorPage = () => {
  return (
    <CalculatorLayout content={TRANSIT_PROXIMITY_SAVINGS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TRANSIT_PROXIMITY_SAVINGS_CALCULATOR_CONTENT.title}
        slug="transit-proximity-savings-calculator"
        category="Sustainability"
        description={TRANSIT_PROXIMITY_SAVINGS_CALCULATOR_CONTENT.description}
        inputs={TRANSIT_PROXIMITY_SAVINGS_CALCULATOR_CONTENT.calculator.fields}
        results={TRANSIT_PROXIMITY_SAVINGS_CALCULATOR_CONTENT.calculator.results}
        calculation={TRANSIT_PROXIMITY_SAVINGS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TransitProximitySavingsCalculatorPage;
