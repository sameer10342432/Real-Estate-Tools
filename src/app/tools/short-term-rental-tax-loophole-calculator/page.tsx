'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SHORT_TERM_RENTAL_TAX_LOOPHOLE_CALCULATOR_CONTENT } from '@/content/tools/short-term-rental-tax-loophole-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ShortTermRentalTaxLoopholeCalculator = () => {
  return (
    <CalculatorLayout content={SHORT_TERM_RENTAL_TAX_LOOPHOLE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SHORT_TERM_RENTAL_TAX_LOOPHOLE_CALCULATOR_CONTENT.title}
        slug={SHORT_TERM_RENTAL_TAX_LOOPHOLE_CALCULATOR_CONTENT.slug}
        category={SHORT_TERM_RENTAL_TAX_LOOPHOLE_CALCULATOR_CONTENT.category}
        description={SHORT_TERM_RENTAL_TAX_LOOPHOLE_CALCULATOR_CONTENT.description}
        inputs={SHORT_TERM_RENTAL_TAX_LOOPHOLE_CALCULATOR_CONTENT.calculator.fields}
        results={SHORT_TERM_RENTAL_TAX_LOOPHOLE_CALCULATOR_CONTENT.calculator.results}
        calculation={SHORT_TERM_RENTAL_TAX_LOOPHOLE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ShortTermRentalTaxLoopholeCalculator;
