'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BREAKEVEN_RENT_PER_SQ_FT_CONTENT } from '@/content/tools/breakeven-rent-per-sq-ft';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BreakevenRentPerSqFtPage = () => {
  return (
    <CalculatorLayout content={BREAKEVEN_RENT_PER_SQ_FT_CONTENT}>
      <EnhancedCalculator
        title={BREAKEVEN_RENT_PER_SQ_FT_CONTENT.title}
        slug="breakeven-rent-per-sq-ft"
        category="Real Estate"
        description={BREAKEVEN_RENT_PER_SQ_FT_CONTENT.description}
        inputs={BREAKEVEN_RENT_PER_SQ_FT_CONTENT.calculator.fields}
        results={BREAKEVEN_RENT_PER_SQ_FT_CONTENT.calculator.results}
        calculation={BREAKEVEN_RENT_PER_SQ_FT_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BreakevenRentPerSqFtPage;
