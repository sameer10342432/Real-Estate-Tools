'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CONFORMING_VS_NON_CONFORMING_ANALYZER_CONTENT } from '@/content/tools/conforming-vs-non-conforming-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ConformingVsNonConformingAnalyzerPage = () => {
  return (
    <CalculatorLayout content={CONFORMING_VS_NON_CONFORMING_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={CONFORMING_VS_NON_CONFORMING_ANALYZER_CONTENT.title}
        slug="conforming-vs-non-conforming-analyzer"
        category="Mortgage"
        description={CONFORMING_VS_NON_CONFORMING_ANALYZER_CONTENT.description}
        inputs={CONFORMING_VS_NON_CONFORMING_ANALYZER_CONTENT.calculator.fields}
        results={CONFORMING_VS_NON_CONFORMING_ANALYZER_CONTENT.calculator.results}
        calculation={CONFORMING_VS_NON_CONFORMING_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ConformingVsNonConformingAnalyzerPage;
