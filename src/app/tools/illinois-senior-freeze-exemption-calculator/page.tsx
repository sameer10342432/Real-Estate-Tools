'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ILLINOIS_SENIOR_FREEZE_EXEMPTION_CALCULATOR_CONTENT } from '@/content/tools/illinois-senior-freeze-exemption-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const IllinoisSeniorFreezeExemptionCalculatorPage = () => {
  return (
    <CalculatorLayout content={ILLINOIS_SENIOR_FREEZE_EXEMPTION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ILLINOIS_SENIOR_FREEZE_EXEMPTION_CALCULATOR_CONTENT.title}
        slug="illinois-senior-freeze-exemption-calculator"
        category="State-Specific"
        description={ILLINOIS_SENIOR_FREEZE_EXEMPTION_CALCULATOR_CONTENT.description}
        inputs={ILLINOIS_SENIOR_FREEZE_EXEMPTION_CALCULATOR_CONTENT.calculator.fields}
        results={ILLINOIS_SENIOR_FREEZE_EXEMPTION_CALCULATOR_CONTENT.calculator.results}
        calculation={ILLINOIS_SENIOR_FREEZE_EXEMPTION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default IllinoisSeniorFreezeExemptionCalculatorPage;