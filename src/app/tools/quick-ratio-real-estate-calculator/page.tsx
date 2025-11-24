'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { QUICK_RATIO_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/quick-ratio-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const QuickRatioRealEstateCalculatorPage = () => {
  return (
    <CalculatorLayout content={QUICK_RATIO_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={QUICK_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="quick-ratio-real-estate-calculator"
        category="Real Estate"
        description={QUICK_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={QUICK_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={QUICK_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={QUICK_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default QuickRatioRealEstateCalculatorPage;