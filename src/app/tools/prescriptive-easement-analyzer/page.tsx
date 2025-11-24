'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PRESCRIPTIVE_EASEMENT_ANALYZER_CONTENT } from '@/content/tools/prescriptive-easement-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PrescriptiveEasementAnalyzerPage = () => {
  return (
    <CalculatorLayout content={PRESCRIPTIVE_EASEMENT_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={PRESCRIPTIVE_EASEMENT_ANALYZER_CONTENT.title}
        slug="prescriptive-easement-analyzer"
        category="Easements & Rights"
        description={PRESCRIPTIVE_EASEMENT_ANALYZER_CONTENT.description}
        inputs={PRESCRIPTIVE_EASEMENT_ANALYZER_CONTENT.calculator.fields}
        results={PRESCRIPTIVE_EASEMENT_ANALYZER_CONTENT.calculator.results}
        calculation={PRESCRIPTIVE_EASEMENT_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PrescriptiveEasementAnalyzerPage;
