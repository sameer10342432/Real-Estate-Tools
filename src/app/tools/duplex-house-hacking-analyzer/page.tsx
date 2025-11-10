'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DUPLEX_HOUSE_HACKING_ANALYZER_CONTENT } from '@/content/tools/duplex-house-hacking-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DuplexHouseHackingAnalyzerPage = () => {
  return (
    <CalculatorLayout content={DUPLEX_HOUSE_HACKING_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={DUPLEX_HOUSE_HACKING_ANALYZER_CONTENT.title}
        slug="duplex-house-hacking-analyzer"
        category="Rental & Income"
        description={DUPLEX_HOUSE_HACKING_ANALYZER_CONTENT.description}
        inputs={DUPLEX_HOUSE_HACKING_ANALYZER_CONTENT.calculator.fields}
        results={DUPLEX_HOUSE_HACKING_ANALYZER_CONTENT.calculator.results}
        calculation={DUPLEX_HOUSE_HACKING_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DuplexHouseHackingAnalyzerPage;
