'use client';

import { FORM_4797_SALE_CALCULATOR_CONTENT } from '@/content/tools/form-4797-sale-calculator';
import { Calculator } from '@/components/calculators';

export const Form4797SaleCalculator = () => {
  return (
    <Calculator
      title={FORM_4797_SALE_CALCULATOR_CONTENT.title}
      description={FORM_4797_SALE_CALCULATOR_CONTENT.description}
      inputs={FORM_4797_SALE_CALCULATOR_CONTENT.calculator.fields}
      results={FORM_4797_SALE_CALCULATOR_CONTENT.calculator.results}
      calculation={FORM_4797_SALE_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
