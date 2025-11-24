'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { UTILITY_EASEMENT_ANALYZER_CONTENT } from '@/content/tools/utility-easement-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const UtilityEasementAnalyzerPage = () => {
  return (
    <CalculatorLayout content={UTILITY_EASEMENT_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={UTILITY_EASEMENT_ANALYZER_CONTENT.title}
        slug="utility-easement-analyzer"
        category="Easements & Rights"
        description={UTILITY_EASEMENT_ANALYZER_CONTENT.description}
        inputs={UTILITY_EASEMENT_ANALYZER_CONTENT.calculator.fields}
        results={UTILITY_EASEMENT_ANALYZER_CONTENT.calculator.results}
        calculation={UTILITY_EASEMENT_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default UtilityEasementAnalyzerPage;
