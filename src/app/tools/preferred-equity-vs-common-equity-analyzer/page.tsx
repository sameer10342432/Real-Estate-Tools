'use client';
async function _generateMetadata() {
  return {
    title: 'Preferred Equity vs. Common Equity Analyzer - Compare Real Estate Equity Returns | Property Tools',
    description: 'Compare preferred equity and common equity returns to determine the best investment structure for your real estate deal. Analyze IRR, equity multiples, and cash flow distributions.',
  };
}

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PREFERRED_EQUITY_VS_COMMON_EQUITY_ANALYZER_CONTENT } from '@/content/tools/preferred-equity-vs-common-equity-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PreferredEquityVsCommonEquityAnalyzerPage = () => {
  return (
    <CalculatorLayout content={PREFERRED_EQUITY_VS_COMMON_EQUITY_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={PREFERRED_EQUITY_VS_COMMON_EQUITY_ANALYZER_CONTENT.title}
        slug="preferred-equity-vs-common-equity-analyzer"
        category="Investment Analysis"
        description={PREFERRED_EQUITY_VS_COMMON_EQUITY_ANALYZER_CONTENT.description}
        inputs={PREFERRED_EQUITY_VS_COMMON_EQUITY_ANALYZER_CONTENT.calculator.fields}
        results={PREFERRED_EQUITY_VS_COMMON_EQUITY_ANALYZER_CONTENT.calculator.results}
        calculation={PREFERRED_EQUITY_VS_COMMON_EQUITY_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PreferredEquityVsCommonEquityAnalyzerPage;
