'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
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