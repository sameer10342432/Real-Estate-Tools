
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Quadplex House Hacking Analyzer',
    description: 'Analyze fourplex deals - maximum rental income from 4-unit house hacking. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { QUADPLEX_HOUSE_HACKING_ANALYZER_CONTENT } from '@/content/tools/quadplex-house-hacking-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const QuadplexHouseHackingAnalyzerPage = () => {
  return (
    <CalculatorLayout content={QUADPLEX_HOUSE_HACKING_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={QUADPLEX_HOUSE_HACKING_ANALYZER_CONTENT.title}
        slug="quadplex-house-hacking-analyzer"
        category="Rental & Income"
        description={QUADPLEX_HOUSE_HACKING_ANALYZER_CONTENT.description}
        inputs={QUADPLEX_HOUSE_HACKING_ANALYZER_CONTENT.calculator.fields}
        results={QUADPLEX_HOUSE_HACKING_ANALYZER_CONTENT.calculator.results}
        calculation={QUADPLEX_HOUSE_HACKING_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default QuadplexHouseHackingAnalyzerPage;
