'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { RENTERS_INSURANCE_COST_CALCULATOR_CONTENT } from '@/content/tools/renters-insurance-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RentersInsuranceCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={RENTERS_INSURANCE_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={RENTERS_INSURANCE_COST_CALCULATOR_CONTENT.title}
        slug="renters-insurance-cost-calculator"
        category="Insurance & Protection"
        description={RENTERS_INSURANCE_COST_CALCULATOR_CONTENT.description}
        inputs={RENTERS_INSURANCE_COST_CALCULATOR_CONTENT.calculator.fields}
        results={RENTERS_INSURANCE_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={RENTERS_INSURANCE_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RentersInsuranceCostCalculatorPage;
