'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { STR_VS_LTR_PROFITABILITY_ANALYZER_CONTENT } from '@/content/tools/str-vs-ltr-profitability-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const StrVsLtrProfitabilityAnalyzerPage = () => {
  return (
    <CalculatorLayout content={STR_VS_LTR_PROFITABILITY_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={STR_VS_LTR_PROFITABILITY_ANALYZER_CONTENT.title}
        slug="str-vs-ltr-profitability-analyzer"
        category="Rental & Income"
        description={STR_VS_LTR_PROFITABILITY_ANALYZER_CONTENT.description}
        inputs={STR_VS_LTR_PROFITABILITY_ANALYZER_CONTENT.calculator.fields}
        results={STR_VS_LTR_PROFITABILITY_ANALYZER_CONTENT.calculator.results}
        calculation={STR_VS_LTR_PROFITABILITY_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default StrVsLtrProfitabilityAnalyzerPage;
