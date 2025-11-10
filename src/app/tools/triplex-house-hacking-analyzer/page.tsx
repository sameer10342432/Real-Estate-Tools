'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TRIPLEX_HOUSE_HACKING_ANALYZER_CONTENT } from '@/content/tools/triplex-house-hacking-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TriplexHouseHackingAnalyzerPage = () => {
  return (
    <CalculatorLayout content={TRIPLEX_HOUSE_HACKING_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={TRIPLEX_HOUSE_HACKING_ANALYZER_CONTENT.title}
        slug="triplex-house-hacking-analyzer"
        category="Rental & Income"
        description={TRIPLEX_HOUSE_HACKING_ANALYZER_CONTENT.description}
        inputs={TRIPLEX_HOUSE_HACKING_ANALYZER_CONTENT.calculator.fields}
        results={TRIPLEX_HOUSE_HACKING_ANALYZER_CONTENT.calculator.results}
        calculation={TRIPLEX_HOUSE_HACKING_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TriplexHouseHackingAnalyzerPage;
