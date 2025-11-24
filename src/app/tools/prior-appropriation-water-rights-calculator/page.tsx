'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PRIOR_APPROPRIATION_WATER_RIGHTS_CALCULATOR_CONTENT } from '@/content/tools/prior-appropriation-water-rights-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PriorAppropriationWaterRightsCalculatorPage = () => {
  return (
    <CalculatorLayout content={PRIOR_APPROPRIATION_WATER_RIGHTS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PRIOR_APPROPRIATION_WATER_RIGHTS_CALCULATOR_CONTENT.title}
        slug="prior-appropriation-water-rights-calculator"
        category="Legal & Compliance"
        description={PRIOR_APPROPRIATION_WATER_RIGHTS_CALCULATOR_CONTENT.description}
        inputs={PRIOR_APPROPRIATION_WATER_RIGHTS_CALCULATOR_CONTENT.calculator.fields}
        results={PRIOR_APPROPRIATION_WATER_RIGHTS_CALCULATOR_CONTENT.calculator.results}
        calculation={PRIOR_APPROPRIATION_WATER_RIGHTS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PriorAppropriationWaterRightsCalculatorPage;
