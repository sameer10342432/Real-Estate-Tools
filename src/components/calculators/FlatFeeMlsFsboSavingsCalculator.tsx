'use client';

import { FLAT_FEE_MLS_FSBO_SAVINGS_CONTENT } from '@/content/tools/flat-fee-mls-fsbo-savings';
import { Calculator } from '@/components/calculators';

export const FlatFeeMlsFsboSavingsCalculator = () => {
  return (
    <Calculator
      title={FLAT_FEE_MLS_FSBO_SAVINGS_CONTENT.title}
      description={FLAT_FEE_MLS_FSBO_SAVINGS_CONTENT.description}
      inputs={FLAT_FEE_MLS_FSBO_SAVINGS_CONTENT.calculator.fields}
      results={FLAT_FEE_MLS_FSBO_SAVINGS_CONTENT.calculator.results}
      calculation={FLAT_FEE_MLS_FSBO_SAVINGS_CONTENT.calculator.calculate}
    />
  );
};
