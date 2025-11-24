'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { UDFI_CALCULATOR_CONTENT } from '@/content/tools/udfi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const UdfiCalculatorPage = () => {
  return (
    <CalculatorLayout content={UDFI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={UDFI_CALCULATOR_CONTENT.title}
        slug="udfi-calculator"
        category="Tax Planning"
        description={UDFI_CALCULATOR_CONTENT.description}
        inputs={UDFI_CALCULATOR_CONTENT.calculator.fields}
        results={UDFI_CALCULATOR_CONTENT.calculator.results}
        calculation={UDFI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default UdfiCalculatorPage;
