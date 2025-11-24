'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { VERMONT_ACT_250_LAND_USE_ANALYZER_CONTENT } from '@/content/tools/vermont-act-250-land-use-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const VermontAct250LandUseAnalyzerPage = () => {
  return (
    <CalculatorLayout content={VERMONT_ACT_250_LAND_USE_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={VERMONT_ACT_250_LAND_USE_ANALYZER_CONTENT.title}
        slug="vermont-act-250-land-use-analyzer"
        category="Legal & Compliance"
        description={VERMONT_ACT_250_LAND_USE_ANALYZER_CONTENT.description}
        inputs={VERMONT_ACT_250_LAND_USE_ANALYZER_CONTENT.calculator.fields}
        results={VERMONT_ACT_250_LAND_USE_ANALYZER_CONTENT.calculator.results}
        calculation={VERMONT_ACT_250_LAND_USE_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default VermontAct250LandUseAnalyzerPage;
