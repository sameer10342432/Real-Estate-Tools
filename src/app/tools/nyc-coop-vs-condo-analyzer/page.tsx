'use client';
import { NYC_COOP_VS_CONDO_ANALYZER_CONTENT } from '@/content/tools/nyc-coop-vs-condo-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const NYCCoopVsCondoAnalyzerPage = () => {
  return (
    <CalculatorLayout content={NYC_COOP_VS_CONDO_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={NYC_COOP_VS_CONDO_ANALYZER_CONTENT.title}
        slug="nyc-coop-vs-condo-analyzer"
        category="Location-Specific Calculators"
        description={NYC_COOP_VS_CONDO_ANALYZER_CONTENT.description}
        inputs={NYC_COOP_VS_CONDO_ANALYZER_CONTENT.calculator.fields}
        results={NYC_COOP_VS_CONDO_ANALYZER_CONTENT.calculator.results}
        calculation={NYC_COOP_VS_CONDO_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NYCCoopVsCondoAnalyzerPage;
