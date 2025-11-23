'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { RENTABLE_VS_USABLE_SQFT_CALCULATOR_CONTENT } from '@/content/tools/rentable-vs-usable-sqft-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RentableVsUsableSqftCalculatorPage = () => {
  return (
    <CalculatorLayout content={RENTABLE_VS_USABLE_SQFT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={RENTABLE_VS_USABLE_SQFT_CALCULATOR_CONTENT.title}
        slug="rentable-vs-usable-sqft-calculator"
        category="Commercial Real Estate"
        description={RENTABLE_VS_USABLE_SQFT_CALCULATOR_CONTENT.description}
        inputs={RENTABLE_VS_USABLE_SQFT_CALCULATOR_CONTENT.calculator.fields}
        results={RENTABLE_VS_USABLE_SQFT_CALCULATOR_CONTENT.calculator.results}
        calculation={RENTABLE_VS_USABLE_SQFT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RentableVsUsableSqftCalculatorPage;
