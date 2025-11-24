'use client';

import { PENNSYLVANIA_ACT_319_CALCULATOR_CONTENT } from '@/content/tools/pennsylvania-act-319-calculator';
import { Calculator } from '@/components/calculators';

export const PennsylvaniaAct319Calculator = () => {
  return (
    <Calculator
      title={PENNSYLVANIA_ACT_319_CALCULATOR_CONTENT.title}
      description={PENNSYLVANIA_ACT_319_CALCULATOR_CONTENT.description}
      inputs={PENNSYLVANIA_ACT_319_CALCULATOR_CONTENT.calculator.fields}
      results={PENNSYLVANIA_ACT_319_CALCULATOR_CONTENT.calculator.results}
      calculation={PENNSYLVANIA_ACT_319_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
