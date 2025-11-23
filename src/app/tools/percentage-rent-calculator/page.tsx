'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PERCENTAGE_RENT_CALCULATOR_CONTENT } from '@/content/tools/percentage-rent-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PercentageRentCalculatorPage = () => {
  return (
    <CalculatorLayout content={PERCENTAGE_RENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PERCENTAGE_RENT_CALCULATOR_CONTENT.title}
        slug="percentage-rent-calculator"
        category="Commercial Real Estate"
        description={PERCENTAGE_RENT_CALCULATOR_CONTENT.description}
        inputs={PERCENTAGE_RENT_CALCULATOR_CONTENT.calculator.fields}
        results={PERCENTAGE_RENT_CALCULATOR_CONTENT.calculator.results}
        calculation={PERCENTAGE_RENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PercentageRentCalculatorPage;
