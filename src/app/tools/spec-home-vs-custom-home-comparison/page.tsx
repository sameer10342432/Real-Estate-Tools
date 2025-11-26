'use client'

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SPEC_HOME_VS_CUSTOM_HOME_COMPARISON_CONTENT } from '@/content/tools/spec-home-vs-custom-home-comparison';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SpecHomeVsCustomHomeComparisonPage = () => {
  return (
    <CalculatorLayout content={SPEC_HOME_VS_CUSTOM_HOME_COMPARISON_CONTENT}>
      <EnhancedCalculator
        title={SPEC_HOME_VS_CUSTOM_HOME_COMPARISON_CONTENT.title}
        slug="spec-home-vs-custom-home-comparison"
        category="Construction & Development"
        description={SPEC_HOME_VS_CUSTOM_HOME_COMPARISON_CONTENT.description}
        inputs={SPEC_HOME_VS_CUSTOM_HOME_COMPARISON_CONTENT.calculator.fields}
        results={SPEC_HOME_VS_CUSTOM_HOME_COMPARISON_CONTENT.calculator.results}
        calculation={SPEC_HOME_VS_CUSTOM_HOME_COMPARISON_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SpecHomeVsCustomHomeComparisonPage;
