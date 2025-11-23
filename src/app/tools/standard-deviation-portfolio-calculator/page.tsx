'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GenericCalculator } from '@/components/calculators/GenericCalculator';
import { STANDARD_DEVIATION_PORTFOLIO_CALCULATOR_CONTENT } from '@/content/tools/standard-deviation-portfolio-calculator';

export default function StandardDeviationPortfolioCalculatorPage() {
  return (
    <CalculatorLayout content={STANDARD_DEVIATION_PORTFOLIO_CALCULATOR_CONTENT}>
      <GenericCalculator content={STANDARD_DEVIATION_PORTFOLIO_CALCULATOR_CONTENT} />
    </CalculatorLayout>
  );
}
