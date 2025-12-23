'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { REAL_ESTATE_PORTFOLIO_DIVERSIFICATION_SCORE_CONTENT } from '@/content/tools/real-estate-portfolio-diversification-score';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Portfolio Diversification Calculator - Analyze Investment Risk & Balance',
    description: 'Calculate your real estate portfolio diversification score. Assess risk across property types, geographic locations, tenant classes, and price ranges. Get recommendations to improve portfolio balance.',
  };
}

const RealEstatePortfolioDiversificationScorePage = () => {
  return (
    <CalculatorLayout content={REAL_ESTATE_PORTFOLIO_DIVERSIFICATION_SCORE_CONTENT}>
      <EnhancedCalculator
        title={REAL_ESTATE_PORTFOLIO_DIVERSIFICATION_SCORE_CONTENT.title}
        slug="real-estate-portfolio-diversification-score"
        category="Investment Analysis"
        description={REAL_ESTATE_PORTFOLIO_DIVERSIFICATION_SCORE_CONTENT.description}
        inputs={REAL_ESTATE_PORTFOLIO_DIVERSIFICATION_SCORE_CONTENT.calculator.fields}
        results={REAL_ESTATE_PORTFOLIO_DIVERSIFICATION_SCORE_CONTENT.calculator.results}
        calculation={REAL_ESTATE_PORTFOLIO_DIVERSIFICATION_SCORE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RealEstatePortfolioDiversificationScorePage;