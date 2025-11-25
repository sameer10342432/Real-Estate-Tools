'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SINKHOLE_INSURANCE_COST_CALCULATOR_CONTENT } from '@/content/tools/sinkhole-insurance-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SinkholeInsuranceCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={SINKHOLE_INSURANCE_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SINKHOLE_INSURANCE_COST_CALCULATOR_CONTENT.title}
        slug="sinkhole-insurance-cost-calculator"
        category="Insurance & Protection"
        description={SINKHOLE_INSURANCE_COST_CALCULATOR_CONTENT.description}
        inputs={SINKHOLE_INSURANCE_COST_CALCULATOR_CONTENT.calculator.fields}
        results={SINKHOLE_INSURANCE_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={SINKHOLE_INSURANCE_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SinkholeInsuranceCostCalculatorPage;
