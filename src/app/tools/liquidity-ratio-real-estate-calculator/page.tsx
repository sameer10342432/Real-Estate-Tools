'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LIQUIDITY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/liquidity-ratio-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LiquidityRatioRealEstateCalculatorPage = () => {
  return (
    <CalculatorLayout content={LIQUIDITY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={LIQUIDITY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="liquidity-ratio-real-estate-calculator"
        category="Real Estate"
        description={LIQUIDITY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={LIQUIDITY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={LIQUIDITY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={LIQUIDITY_RATIO_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LiquidityRatioRealEstateCalculatorPage;