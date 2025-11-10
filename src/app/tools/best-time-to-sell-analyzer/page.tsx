
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Time to Sell Analyzer',
    description: 'Analyze market conditions and personal factors to determine the optimal time to sell your home. Free online tool for real estate professionals, investors, an...',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { BEST_TIME_TO_SELL_ANALYZER_CONTENT } from '@/content/tools/best-time-to-sell-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BestTimeToSellAnalyzerPage = () => {
  return (
    <CalculatorLayout content={BEST_TIME_TO_SELL_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={BEST_TIME_TO_SELL_ANALYZER_CONTENT.title}
        slug="best-time-to-sell-analyzer"
        category="Seller Tools"
        description={BEST_TIME_TO_SELL_ANALYZER_CONTENT.description}
        inputs={BEST_TIME_TO_SELL_ANALYZER_CONTENT.calculator.fields}
        results={BEST_TIME_TO_SELL_ANALYZER_CONTENT.calculator.results}
        calculation={BEST_TIME_TO_SELL_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BestTimeToSellAnalyzerPage;
