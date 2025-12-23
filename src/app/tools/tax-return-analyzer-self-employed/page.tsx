'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TAX_RETURN_ANALYZER_SELF_EMPLOYED_CONTENT } from '@/content/tools/tax-return-analyzer-self-employed';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TaxReturnAnalyzerSelfEmployedPage = () => {
  return (
    <CalculatorLayout content={TAX_RETURN_ANALYZER_SELF_EMPLOYED_CONTENT}>
      <EnhancedCalculator
        title={TAX_RETURN_ANALYZER_SELF_EMPLOYED_CONTENT.title}
        slug="tax-return-analyzer-self-employed"
        category="Self-Employed Loans"
        description={TAX_RETURN_ANALYZER_SELF_EMPLOYED_CONTENT.description}
        inputs={TAX_RETURN_ANALYZER_SELF_EMPLOYED_CONTENT.calculator.fields}
        results={TAX_RETURN_ANALYZER_SELF_EMPLOYED_CONTENT.calculator.results}
        calculation={TAX_RETURN_ANALYZER_SELF_EMPLOYED_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TaxReturnAnalyzerSelfEmployedPage;
