'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HURDLE_RATE_REAL_ESTATE_CONTENT } from '@/content/tools/hurdle-rate-real-estate';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HurdleRateRealEstatePage = () => {
  return (
    <CalculatorLayout content={HURDLE_RATE_REAL_ESTATE_CONTENT}>
      <EnhancedCalculator
        title={HURDLE_RATE_REAL_ESTATE_CONTENT.title}
        slug="hurdle-rate-real-estate"
        category="Real Estate"
        description={HURDLE_RATE_REAL_ESTATE_CONTENT.description}
        inputs={HURDLE_RATE_REAL_ESTATE_CONTENT.calculator.fields}
        results={HURDLE_RATE_REAL_ESTATE_CONTENT.calculator.results}
        calculation={HURDLE_RATE_REAL_ESTATE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HurdleRateRealEstatePage;
