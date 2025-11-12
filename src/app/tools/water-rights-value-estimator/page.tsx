export async function generateMetadata() {
  return {
    title: 'Water Rights Value Estimator - Calculate Water Rights Valuation | Property Tools',
    description: 'Estimate the value of water rights for agricultural, commercial, or municipal use based on acre-feet, priority date, and market conditions.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WATER_RIGHTS_VALUE_ESTIMATOR_CONTENT } from '@/content/tools/water-rights-value-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WaterRightsValueEstimatorPage = () => {
  return (
    <CalculatorLayout content={WATER_RIGHTS_VALUE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={WATER_RIGHTS_VALUE_ESTIMATOR_CONTENT.title}
        slug="water-rights-value-estimator"
        category="Investment Analysis"
        description={WATER_RIGHTS_VALUE_ESTIMATOR_CONTENT.description}
        inputs={WATER_RIGHTS_VALUE_ESTIMATOR_CONTENT.calculator.fields}
        results={WATER_RIGHTS_VALUE_ESTIMATOR_CONTENT.calculator.results}
        calculation={WATER_RIGHTS_VALUE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WaterRightsValueEstimatorPage;
