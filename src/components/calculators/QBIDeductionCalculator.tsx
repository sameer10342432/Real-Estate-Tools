'use client';

import { QBI_DEDUCTION_CALCULATOR_CONTENT } from '@/content/tools/qbi-deduction-calculator';
import { Calculator } from '@/components/calculators';

export const QBIDeductionCalculator = () => {
  return (
    <Calculator
      title={QBI_DEDUCTION_CALCULATOR_CONTENT.title}
      description={QBI_DEDUCTION_CALCULATOR_CONTENT.description}
      inputs={QBI_DEDUCTION_CALCULATOR_CONTENT.calculator.fields}
      results={QBI_DEDUCTION_CALCULATOR_CONTENT.calculator.results}
      calculation={QBI_DEDUCTION_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
