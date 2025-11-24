'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TIDELANDS_RIPARIAN_RIGHTS_CALCULATOR_CONTENT } from '@/content/tools/tidelands-riparian-rights-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TidelandsRiparianRightsCalculatorPage = () => {
  return (
    <CalculatorLayout content={TIDELANDS_RIPARIAN_RIGHTS_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TIDELANDS_RIPARIAN_RIGHTS_CALCULATOR_CONTENT.title}
        slug="tidelands-riparian-rights-calculator"
        category="Legal & Compliance"
        description={TIDELANDS_RIPARIAN_RIGHTS_CALCULATOR_CONTENT.description}
        inputs={TIDELANDS_RIPARIAN_RIGHTS_CALCULATOR_CONTENT.calculator.fields}
        results={TIDELANDS_RIPARIAN_RIGHTS_CALCULATOR_CONTENT.calculator.results}
        calculation={TIDELANDS_RIPARIAN_RIGHTS_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TidelandsRiparianRightsCalculatorPage;
