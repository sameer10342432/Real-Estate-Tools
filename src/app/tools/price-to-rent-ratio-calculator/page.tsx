'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PRICE_TO_RENT_RATIO_CALCULATOR_CONTENT } from '@/content/tools/price-to-rent-ratio-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PriceToRentRatioCalculatorPage = () => {
  return (
    <CalculatorLayout content={PRICE_TO_RENT_RATIO_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PRICE_TO_RENT_RATIO_CALCULATOR_CONTENT.title}
        slug="price-to-rent-ratio-calculator"
        category="Market Analysis"
        description={PRICE_TO_RENT_RATIO_CALCULATOR_CONTENT.description}
        inputs={PRICE_TO_RENT_RATIO_CALCULATOR_CONTENT.calculator.fields}
        results={PRICE_TO_RENT_RATIO_CALCULATOR_CONTENT.calculator.results}
        calculation={PRICE_TO_RENT_RATIO_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PriceToRentRatioCalculatorPage;
