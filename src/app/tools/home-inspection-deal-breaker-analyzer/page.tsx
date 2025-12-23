'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Inspection Deal Breaker Analyzer | Should I Walk Away or Negotiate?',
    description: 'Analyze home inspection findings to determine if issues are deal-breakers or negotiable. Calculate repair costs and decide whether to walk away, negotiate, or proceed with purchase.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HOME_INSPECTION_DEAL_BREAKER_ANALYZER_CONTENT } from '@/content/tools/home-inspection-deal-breaker-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomeInspectionDealBreakerPage = () => {
  return (
    <CalculatorLayout content={HOME_INSPECTION_DEAL_BREAKER_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={HOME_INSPECTION_DEAL_BREAKER_ANALYZER_CONTENT.title}
        slug="home-inspection-deal-breaker-analyzer"
        category="Real Estate"
        description={HOME_INSPECTION_DEAL_BREAKER_ANALYZER_CONTENT.description}
        inputs={HOME_INSPECTION_DEAL_BREAKER_ANALYZER_CONTENT.calculator.fields}
        results={HOME_INSPECTION_DEAL_BREAKER_ANALYZER_CONTENT.calculator.results}
        calculation={HOME_INSPECTION_DEAL_BREAKER_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeInspectionDealBreakerPage;
