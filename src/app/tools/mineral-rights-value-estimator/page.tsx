export async function generateMetadata() {
  return {
    title: 'Mineral Rights Value Estimator - Calculate Subsurface Resource Value | Property Tools',
    description: 'Estimate the value of mineral rights including oil, gas, coal, and other subsurface resources based on reserves, production, and royalty rates.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MINERAL_RIGHTS_VALUE_ESTIMATOR_CONTENT } from '@/content/tools/mineral-rights-value-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MineralRightsValueEstimatorPage = () => {
  return (
    <CalculatorLayout content={MINERAL_RIGHTS_VALUE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={MINERAL_RIGHTS_VALUE_ESTIMATOR_CONTENT.title}
        slug="mineral-rights-value-estimator"
        category="Investment Analysis"
        description={MINERAL_RIGHTS_VALUE_ESTIMATOR_CONTENT.description}
        inputs={MINERAL_RIGHTS_VALUE_ESTIMATOR_CONTENT.calculator.fields}
        results={MINERAL_RIGHTS_VALUE_ESTIMATOR_CONTENT.calculator.results}
        calculation={MINERAL_RIGHTS_VALUE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MineralRightsValueEstimatorPage;
