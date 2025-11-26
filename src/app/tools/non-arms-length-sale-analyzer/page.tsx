'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NON_ARMS_LENGTH_SALE_ANALYZER_CONTENT } from '@/content/tools/non-arms-length-sale-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NonArmsLengthSaleAnalyzerPage = () => {
  return (
    <CalculatorLayout content={NON_ARMS_LENGTH_SALE_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={NON_ARMS_LENGTH_SALE_ANALYZER_CONTENT.title}
        slug="non-arms-length-sale-analyzer"
        category="Real Estate Compliance"
        description={NON_ARMS_LENGTH_SALE_ANALYZER_CONTENT.description}
        inputs={NON_ARMS_LENGTH_SALE_ANALYZER_CONTENT.calculator.fields}
        results={NON_ARMS_LENGTH_SALE_ANALYZER_CONTENT.calculator.results}
        calculation={NON_ARMS_LENGTH_SALE_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NonArmsLengthSaleAnalyzerPage;
