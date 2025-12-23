'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Garage Conversion (ADU) Cost Calculator | Property Tools',
    description: 'Estimate the cost of converting your garage into an Accessory Dwelling Unit (ADU) or additional living space. Calculate rental income potential and ROI.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { GARAGE_CONVERSION_ADU_COST_CALCULATOR_CONTENT } from '@/content/tools/garage-conversion-adu-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GarageConversionAduCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={GARAGE_CONVERSION_ADU_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={GARAGE_CONVERSION_ADU_COST_CALCULATOR_CONTENT.title}
        slug="garage-conversion-adu-cost-calculator"
        category="Home Improvement"
        description={GARAGE_CONVERSION_ADU_COST_CALCULATOR_CONTENT.description}
        inputs={GARAGE_CONVERSION_ADU_COST_CALCULATOR_CONTENT.calculator.fields}
        results={GARAGE_CONVERSION_ADU_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={GARAGE_CONVERSION_ADU_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GarageConversionAduCostCalculatorPage;
