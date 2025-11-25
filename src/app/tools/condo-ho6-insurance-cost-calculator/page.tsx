'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CONDO_HO6_INSURANCE_COST_CALCULATOR_CONTENT } from '@/content/tools/condo-ho6-insurance-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CondoHO6InsuranceCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={CONDO_HO6_INSURANCE_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CONDO_HO6_INSURANCE_COST_CALCULATOR_CONTENT.title}
        slug="condo-ho6-insurance-cost-calculator"
        category="Insurance & Protection"
        description={CONDO_HO6_INSURANCE_COST_CALCULATOR_CONTENT.description}
        inputs={CONDO_HO6_INSURANCE_COST_CALCULATOR_CONTENT.calculator.fields}
        results={CONDO_HO6_INSURANCE_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={CONDO_HO6_INSURANCE_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CondoHO6InsuranceCostCalculatorPage;
