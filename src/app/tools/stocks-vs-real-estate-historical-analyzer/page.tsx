'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { STOCKS_VS_REAL_ESTATE_HISTORICAL_ANALYZER_CONTENT } from '@/content/tools/stocks-vs-real-estate-historical-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Stocks vs Real Estate Historical Returns Calculator - Historical Performance Comparison',
    description: 'Analyze and compare historical investment returns between S&P 500 stocks and real estate properties. See how $100k would have grown over 10, 20, or 30 years in each asset class.',
  };
}

const StocksVsRealEstateHistoricalAnalyzerPage = () => {
  return (
    <CalculatorLayout content={STOCKS_VS_REAL_ESTATE_HISTORICAL_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={STOCKS_VS_REAL_ESTATE_HISTORICAL_ANALYZER_CONTENT.title}
        slug="stocks-vs-real-estate-historical-analyzer"
        category="Investment Analysis"
        description={STOCKS_VS_REAL_ESTATE_HISTORICAL_ANALYZER_CONTENT.description}
        inputs={STOCKS_VS_REAL_ESTATE_HISTORICAL_ANALYZER_CONTENT.calculator.fields}
        results={STOCKS_VS_REAL_ESTATE_HISTORICAL_ANALYZER_CONTENT.calculator.results}
        calculation={STOCKS_VS_REAL_ESTATE_HISTORICAL_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default StocksVsRealEstateHistoricalAnalyzerPage;