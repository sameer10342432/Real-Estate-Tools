'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HAWAII_LEASEHOLD_VS_FEE_SIMPLE_CALCULATOR_CONTENT } from '@/content/tools/hawaii-leasehold-vs-fee-simple-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HawaiiLeaseholdVsFeeSimpleCalculatorPage = () => {
  return (
    <CalculatorLayout content={HAWAII_LEASEHOLD_VS_FEE_SIMPLE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HAWAII_LEASEHOLD_VS_FEE_SIMPLE_CALCULATOR_CONTENT.title}
        slug="hawaii-leasehold-vs-fee-simple-calculator"
        category="Buyer Tools"
        description={HAWAII_LEASEHOLD_VS_FEE_SIMPLE_CALCULATOR_CONTENT.description}
        inputs={HAWAII_LEASEHOLD_VS_FEE_SIMPLE_CALCULATOR_CONTENT.calculator.fields}
        results={HAWAII_LEASEHOLD_VS_FEE_SIMPLE_CALCULATOR_CONTENT.calculator.results}
        calculation={HAWAII_LEASEHOLD_VS_FEE_SIMPLE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HawaiiLeaseholdVsFeeSimpleCalculatorPage;
