'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LITTORAL_RIGHTS_LAKE_ANALYZER_CONTENT } from '@/content/tools/littoral-rights-lake-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LittoralRightsLakeAnalyzerPage = () => {
  return (
    <CalculatorLayout content={LITTORAL_RIGHTS_LAKE_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={LITTORAL_RIGHTS_LAKE_ANALYZER_CONTENT.title}
        slug="littoral-rights-lake-analyzer"
        category="Legal & Compliance"
        description={LITTORAL_RIGHTS_LAKE_ANALYZER_CONTENT.description}
        inputs={LITTORAL_RIGHTS_LAKE_ANALYZER_CONTENT.calculator.fields}
        results={LITTORAL_RIGHTS_LAKE_ANALYZER_CONTENT.calculator.results}
        calculation={LITTORAL_RIGHTS_LAKE_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LittoralRightsLakeAnalyzerPage;
