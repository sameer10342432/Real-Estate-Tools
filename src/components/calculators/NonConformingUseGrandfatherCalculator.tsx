'use client';

import { NON_CONFORMING_USE_GRANDFATHER_CONTENT } from '@/content/tools/non-conforming-use-grandfather';
import { Calculator } from '@/components/calculators';

export const NonConformingUseGrandfatherCalculator = () => {
  return (
    <Calculator
      title={NON_CONFORMING_USE_GRANDFATHER_CONTENT.title}
      description={NON_CONFORMING_USE_GRANDFATHER_CONTENT.description}
      inputs={NON_CONFORMING_USE_GRANDFATHER_CONTENT.calculator.fields}
      results={NON_CONFORMING_USE_GRANDFATHER_CONTENT.calculator.results}
      calculation={NON_CONFORMING_USE_GRANDFATHER_CONTENT.calculator.calculate}
    />
  );
};
