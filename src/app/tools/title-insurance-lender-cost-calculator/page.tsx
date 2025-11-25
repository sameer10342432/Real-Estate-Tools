'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { TITLE_INSURANCE_LENDER_COST_CALCULATOR_CONTENT } from '@/content/tools/title-insurance-lender-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const TitleInsuranceLenderCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={TITLE_INSURANCE_LENDER_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={TITLE_INSURANCE_LENDER_COST_CALCULATOR_CONTENT.title}
        slug="title-insurance-lender-cost-calculator"
        category="Insurance & Protection"
        description={TITLE_INSURANCE_LENDER_COST_CALCULATOR_CONTENT.description}
        inputs={TITLE_INSURANCE_LENDER_COST_CALCULATOR_CONTENT.calculator.fields}
        results={TITLE_INSURANCE_LENDER_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={TITLE_INSURANCE_LENDER_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default TitleInsuranceLenderCostCalculatorPage;
