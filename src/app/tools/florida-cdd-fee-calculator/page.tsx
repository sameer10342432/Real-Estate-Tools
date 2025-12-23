'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FLORIDA_CDD_FEE_CALCULATOR_CONTENT } from '@/content/tools/florida-cdd-fee-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const _metadata = {
  title: 'Florida CDD Fee Calculator | Community Development District Costs',
  description: 'Calculate Florida Community Development District (CDD) fees, bonds, and assessments. Estimate annual costs and lifetime CDD expenses for your property.',
};

const FloridaCddFeeCalculatorPage = () => {
  return (
    <CalculatorLayout content={FLORIDA_CDD_FEE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FLORIDA_CDD_FEE_CALCULATOR_CONTENT.title}
        slug="florida-cdd-fee-calculator"
        category="Fee Calculators"
        description={FLORIDA_CDD_FEE_CALCULATOR_CONTENT.description}
        inputs={FLORIDA_CDD_FEE_CALCULATOR_CONTENT.calculator.fields}
        results={FLORIDA_CDD_FEE_CALCULATOR_CONTENT.calculator.results}
        calculation={FLORIDA_CDD_FEE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FloridaCddFeeCalculatorPage;
