'use client';

import { ARIZONA_CFD_CALCULATOR_CONTENT } from '@/content/tools/arizona-cfd-calculator';
import { Calculator } from '@/components/calculators';

export const ArizonaCFDCalculator = () => {
  return (
    <Calculator
      title={ARIZONA_CFD_CALCULATOR_CONTENT.title}
      description={ARIZONA_CFD_CALCULATOR_CONTENT.description}
      inputs={ARIZONA_CFD_CALCULATOR_CONTENT.calculator.fields}
      results={ARIZONA_CFD_CALCULATOR_CONTENT.calculator.results}
      calculation={ARIZONA_CFD_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
