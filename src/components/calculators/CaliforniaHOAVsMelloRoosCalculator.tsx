'use client';

import { CALIFORNIA_HOA_VS_MELLO_ROOS_CALCULATOR_CONTENT } from '@/content/tools/california-hoa-vs-mello-roos-calculator';
import { Calculator } from '@/components/calculators';

export const CaliforniaHOAVsMelloRoosCalculator = () => {
  return (
    <Calculator
      title={CALIFORNIA_HOA_VS_MELLO_ROOS_CALCULATOR_CONTENT.title}
      description={CALIFORNIA_HOA_VS_MELLO_ROOS_CALCULATOR_CONTENT.description}
      inputs={CALIFORNIA_HOA_VS_MELLO_ROOS_CALCULATOR_CONTENT.calculator.fields}
      results={CALIFORNIA_HOA_VS_MELLO_ROOS_CALCULATOR_CONTENT.calculator.results}
      calculation={CALIFORNIA_HOA_VS_MELLO_ROOS_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
