'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LANDLORD_INSURANCE_COST_CALCULATOR_CONTENT } from '@/content/tools/landlord-insurance-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LandlordInsuranceCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={LANDLORD_INSURANCE_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={LANDLORD_INSURANCE_COST_CALCULATOR_CONTENT.title}
        slug="landlord-insurance-cost-calculator"
        category="Insurance & Protection"
        description={LANDLORD_INSURANCE_COST_CALCULATOR_CONTENT.description}
        inputs={LANDLORD_INSURANCE_COST_CALCULATOR_CONTENT.calculator.fields}
        results={LANDLORD_INSURANCE_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={LANDLORD_INSURANCE_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LandlordInsuranceCostCalculatorPage;
