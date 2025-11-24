'use client';

import { SPOT_ZONING_ANALYZER_CONTENT } from '@/content/tools/spot-zoning-analyzer';
import { Calculator } from '@/components/calculators';

export const SpotZoningAnalyzerCalculator = () => {
  return (
    <Calculator
      title={SPOT_ZONING_ANALYZER_CONTENT.title}
      description={SPOT_ZONING_ANALYZER_CONTENT.description}
      inputs={SPOT_ZONING_ANALYZER_CONTENT.calculator.fields}
      results={SPOT_ZONING_ANALYZER_CONTENT.calculator.results}
      calculation={SPOT_ZONING_ANALYZER_CONTENT.calculator.calculate}
    />
  );
};
