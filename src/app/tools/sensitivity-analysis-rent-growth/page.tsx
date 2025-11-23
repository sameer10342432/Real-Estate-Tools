'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SENSITIVITY_ANALYSIS_RENT_GROWTH_CONTENT } from '@/content/tools/sensitivity-analysis-rent-growth';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SensitivityAnalysisRentGrowthPage = () => {
  return (
    <CalculatorLayout content={SENSITIVITY_ANALYSIS_RENT_GROWTH_CONTENT}>
      <EnhancedCalculator
        title={SENSITIVITY_ANALYSIS_RENT_GROWTH_CONTENT.title}
        slug="sensitivity-analysis-rent-growth"
        category="Real Estate"
        description={SENSITIVITY_ANALYSIS_RENT_GROWTH_CONTENT.description}
        inputs={SENSITIVITY_ANALYSIS_RENT_GROWTH_CONTENT.calculator.fields}
        results={SENSITIVITY_ANALYSIS_RENT_GROWTH_CONTENT.calculator.results}
        calculation={SENSITIVITY_ANALYSIS_RENT_GROWTH_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SensitivityAnalysisRentGrowthPage;
