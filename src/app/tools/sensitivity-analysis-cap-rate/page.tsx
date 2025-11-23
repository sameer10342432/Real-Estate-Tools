'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SENSITIVITY_ANALYSIS_CAP_RATE_CONTENT } from '@/content/tools/sensitivity-analysis-cap-rate';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SensitivityAnalysisCapRatePage = () => {
  return (
    <CalculatorLayout content={SENSITIVITY_ANALYSIS_CAP_RATE_CONTENT}>
      <EnhancedCalculator
        title={SENSITIVITY_ANALYSIS_CAP_RATE_CONTENT.title}
        slug="sensitivity-analysis-cap-rate"
        category="Real Estate"
        description={SENSITIVITY_ANALYSIS_CAP_RATE_CONTENT.description}
        inputs={SENSITIVITY_ANALYSIS_CAP_RATE_CONTENT.calculator.fields}
        results={SENSITIVITY_ANALYSIS_CAP_RATE_CONTENT.calculator.results}
        calculation={SENSITIVITY_ANALYSIS_CAP_RATE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SensitivityAnalysisCapRatePage;
