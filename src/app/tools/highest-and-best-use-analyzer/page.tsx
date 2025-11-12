export async function generateMetadata() {
  return {
    title: 'Highest and Best Use Analyzer (Land) - Determine Most Profitable Land Use | Property Tools',
    description: 'Determine the most profitable use for raw land by comparing residential, commercial, industrial, and agricultural development scenarios.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HIGHEST_AND_BEST_USE_ANALYZER_CONTENT } from '@/content/tools/highest-and-best-use-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HighestAndBestUseAnalyzerPage = () => {
  return (
    <CalculatorLayout content={HIGHEST_AND_BEST_USE_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={HIGHEST_AND_BEST_USE_ANALYZER_CONTENT.title}
        slug="highest-and-best-use-analyzer"
        category="Investment Analysis"
        description={HIGHEST_AND_BEST_USE_ANALYZER_CONTENT.description}
        inputs={HIGHEST_AND_BEST_USE_ANALYZER_CONTENT.calculator.fields}
        results={HIGHEST_AND_BEST_USE_ANALYZER_CONTENT.calculator.results}
        calculation={HIGHEST_AND_BEST_USE_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HighestAndBestUseAnalyzerPage;
