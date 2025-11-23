'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BREAKEVEN_VACANCY_RATE_CONTENT } from '@/content/tools/breakeven-vacancy-rate';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BreakevenVacancyRatePage = () => {
  return (
    <CalculatorLayout content={BREAKEVEN_VACANCY_RATE_CONTENT}>
      <EnhancedCalculator
        title={BREAKEVEN_VACANCY_RATE_CONTENT.title}
        slug="breakeven-vacancy-rate"
        category="Real Estate"
        description={BREAKEVEN_VACANCY_RATE_CONTENT.description}
        inputs={BREAKEVEN_VACANCY_RATE_CONTENT.calculator.fields}
        results={BREAKEVEN_VACANCY_RATE_CONTENT.calculator.results}
        calculation={BREAKEVEN_VACANCY_RATE_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BreakevenVacancyRatePage;
