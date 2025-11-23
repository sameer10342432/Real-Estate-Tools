'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CAM_FEE_CALCULATOR_CONTENT } from '@/content/tools/cam-fee-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CAMFeeCalculatorPage = () => {
  return (
    <CalculatorLayout content={CAM_FEE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CAM_FEE_CALCULATOR_CONTENT.title}
        slug="cam-fee-calculator"
        category="Commercial Real Estate"
        description={CAM_FEE_CALCULATOR_CONTENT.description}
        inputs={CAM_FEE_CALCULATOR_CONTENT.calculator.fields}
        results={CAM_FEE_CALCULATOR_CONTENT.calculator.results}
        calculation={CAM_FEE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CAMFeeCalculatorPage;
