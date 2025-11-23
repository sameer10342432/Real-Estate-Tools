'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MONTE_CARLO_REAL_ESTATE_SIMULATOR_CONTENT } from '@/content/tools/monte-carlo-real-estate-simulator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MonteCarloRealEstateSimulatorPage = () => {
  return (
    <CalculatorLayout content={MONTE_CARLO_REAL_ESTATE_SIMULATOR_CONTENT}>
      <EnhancedCalculator
        title={MONTE_CARLO_REAL_ESTATE_SIMULATOR_CONTENT.title}
        slug="monte-carlo-real-estate-simulator"
        category="Real Estate"
        description={MONTE_CARLO_REAL_ESTATE_SIMULATOR_CONTENT.description}
        inputs={MONTE_CARLO_REAL_ESTATE_SIMULATOR_CONTENT.calculator.fields}
        results={MONTE_CARLO_REAL_ESTATE_SIMULATOR_CONTENT.calculator.results}
        calculation={MONTE_CARLO_REAL_ESTATE_SIMULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MonteCarloRealEstateSimulatorPage;
