
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Duplex House Hacking Analyzer',
    description: 'Analyze duplex house hacking - live in one unit, rent the other for reduced costs. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
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
