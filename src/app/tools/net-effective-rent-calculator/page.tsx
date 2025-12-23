'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NET_EFFECTIVE_RENT_CALCULATOR_CONTENT } from '@/content/tools/net-effective-rent-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NetEffectiveRentCalculatorPage = () => {
  return (
    <CalculatorLayout content={NET_EFFECTIVE_RENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NET_EFFECTIVE_RENT_CALCULATOR_CONTENT.title}
        slug="net-effective-rent-calculator"
        category="Commercial Real Estate"
        description={NET_EFFECTIVE_RENT_CALCULATOR_CONTENT.description}
        inputs={NET_EFFECTIVE_RENT_CALCULATOR_CONTENT.calculator.fields}
        results={NET_EFFECTIVE_RENT_CALCULATOR_CONTENT.calculator.results}
        calculation={NET_EFFECTIVE_RENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NetEffectiveRentCalculatorPage;
