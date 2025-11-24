'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { OIL_GAS_SPLIT_ESTATE_ANALYZER_CONTENT } from '@/content/tools/oil-gas-split-estate-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const OilGasSplitEstateAnalyzerPage = () => {
  return (
    <CalculatorLayout content={OIL_GAS_SPLIT_ESTATE_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={OIL_GAS_SPLIT_ESTATE_ANALYZER_CONTENT.title}
        slug="oil-gas-split-estate-analyzer"
        category="Legal & Compliance"
        description={OIL_GAS_SPLIT_ESTATE_ANALYZER_CONTENT.description}
        inputs={OIL_GAS_SPLIT_ESTATE_ANALYZER_CONTENT.calculator.fields}
        results={OIL_GAS_SPLIT_ESTATE_ANALYZER_CONTENT.calculator.results}
        calculation={OIL_GAS_SPLIT_ESTATE_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default OilGasSplitEstateAnalyzerPage;
