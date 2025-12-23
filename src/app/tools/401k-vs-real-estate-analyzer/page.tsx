'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { FOUR_ZERO_ONE_K_VS_REAL_ESTATE_ANALYZER_CONTENT } from '@/content/tools/401k-vs-real-estate-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: '401k vs Real Estate Calculator - Compare Retirement Investment Returns',
    description: 'Analyze and compare long-term returns between 401k retirement accounts and rental property investments. Includes employer match, tax advantages, appreciation, and cash flow analysis.',
  };
}

const FourZeroOneKVsRealEstateAnalyzerPage = () => {
  return (
    <CalculatorLayout content={FOUR_ZERO_ONE_K_VS_REAL_ESTATE_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={FOUR_ZERO_ONE_K_VS_REAL_ESTATE_ANALYZER_CONTENT.title}
        slug="401k-vs-real-estate-analyzer"
        category="Investment Analysis"
        description={FOUR_ZERO_ONE_K_VS_REAL_ESTATE_ANALYZER_CONTENT.description}
        inputs={FOUR_ZERO_ONE_K_VS_REAL_ESTATE_ANALYZER_CONTENT.calculator.fields}
        results={FOUR_ZERO_ONE_K_VS_REAL_ESTATE_ANALYZER_CONTENT.calculator.results}
        calculation={FOUR_ZERO_ONE_K_VS_REAL_ESTATE_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FourZeroOneKVsRealEstateAnalyzerPage;