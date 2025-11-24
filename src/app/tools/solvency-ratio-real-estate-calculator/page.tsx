'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SOLVENCY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/solvency-ratio-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SolvencyRatioRealEstateCalculatorPage = () => {
  return (
    <CalculatorLayout content={SOLVENCY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SOLVENCY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="solvency-ratio-real-estate-calculator"
        category="Real Estate"
        description={SOLVENCY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={SOLVENCY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={SOLVENCY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={SOLVENCY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SolvencyRatioRealEstateCalculatorPage;