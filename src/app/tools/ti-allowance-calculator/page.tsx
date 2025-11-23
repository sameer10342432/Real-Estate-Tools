'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TI_ALLOWANCE_CALCULATOR_CONTENT } from '@/content/tools/ti-allowance-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TIAllowanceCalculatorPage = () => {
  return (
    <CalculatorLayout content={TI_ALLOWANCE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TI_ALLOWANCE_CALCULATOR_CONTENT.title}
        slug="ti-allowance-calculator"
        category="Commercial Real Estate"
        description={TI_ALLOWANCE_CALCULATOR_CONTENT.description}
        inputs={TI_ALLOWANCE_CALCULATOR_CONTENT.calculator.fields}
        results={TI_ALLOWANCE_CALCULATOR_CONTENT.calculator.results}
        calculation={TI_ALLOWANCE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TIAllowanceCalculatorPage;
