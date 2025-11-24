'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SOLO_401K_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/solo-401k-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const Solo401kRealEstateCalculatorPage = () => {
  return (
    <CalculatorLayout content={SOLO_401K_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SOLO_401K_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="solo-401k-real-estate-calculator"
        category="Tax Planning"
        description={SOLO_401K_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={SOLO_401K_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={SOLO_401K_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={SOLO_401K_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default Solo401kRealEstateCalculatorPage;
