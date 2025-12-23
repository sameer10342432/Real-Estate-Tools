'use client';
async function _generateMetadata() {
  return {
    title: 'Home Electrification Cost Calculator - Gas to Electric Conversion ROI',
    description: 'Calculate the cost and ROI of converting your home from gas to all-electric appliances including HVAC, water heater, stove, and dryer with rebates and incentives.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HOME_ELECTRIFICATION_COST_CALCULATOR_CONTENT } from '@/content/tools/home-electrification-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeElectrificationCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_ELECTRIFICATION_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_ELECTRIFICATION_COST_CALCULATOR_CONTENT.title}
        slug="home-electrification-cost-calculator"
        category="Energy Efficiency"
        description={HOME_ELECTRIFICATION_COST_CALCULATOR_CONTENT.description}
        inputs={HOME_ELECTRIFICATION_COST_CALCULATOR_CONTENT.calculator.fields}
        results={HOME_ELECTRIFICATION_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={HOME_ELECTRIFICATION_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeElectrificationCostCalculatorPage;
