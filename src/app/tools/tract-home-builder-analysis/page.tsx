'use client'

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TRACT_HOME_BUILDER_ANALYSIS_CONTENT } from '@/content/tools/tract-home-builder-analysis';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TractHomeBuilderAnalysisPage = () => {
  return (
    <CalculatorLayout content={TRACT_HOME_BUILDER_ANALYSIS_CONTENT}>
      <EnhancedCalculator
        title={TRACT_HOME_BUILDER_ANALYSIS_CONTENT.title}
        slug="tract-home-builder-analysis"
        category="Construction & Development"
        description={TRACT_HOME_BUILDER_ANALYSIS_CONTENT.description}
        inputs={TRACT_HOME_BUILDER_ANALYSIS_CONTENT.calculator.fields}
        results={TRACT_HOME_BUILDER_ANALYSIS_CONTENT.calculator.results}
        calculation={TRACT_HOME_BUILDER_ANALYSIS_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TractHomeBuilderAnalysisPage;
