
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Interest Rate vs Home Price Simulator',
    description: 'Simulate how interest rate changes affect home prices and affordability in real-time. Free online tool for buyers and real estate professionals.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { INTEREST_RATE_HOME_PRICE_SIMULATOR_CONTENT } from '@/content/tools/interest-rate-home-price-simulator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const InterestRateHomePriceSimulatorPage = () => {
  return (
    <CalculatorLayout content={INTEREST_RATE_HOME_PRICE_SIMULATOR_CONTENT}>
      <EnhancedCalculator
        title={INTEREST_RATE_HOME_PRICE_SIMULATOR_CONTENT.title}
        slug="interest-rate-home-price-simulator"
        category="Market Analysis"
        description={INTEREST_RATE_HOME_PRICE_SIMULATOR_CONTENT.description}
        inputs={INTEREST_RATE_HOME_PRICE_SIMULATOR_CONTENT.calculator.fields}
        results={INTEREST_RATE_HOME_PRICE_SIMULATOR_CONTENT.calculator.results}
        calculation={INTEREST_RATE_HOME_PRICE_SIMULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default InterestRateHomePriceSimulatorPage;