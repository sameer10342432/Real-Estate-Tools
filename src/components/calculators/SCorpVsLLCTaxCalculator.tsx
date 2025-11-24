'use client';

import { S_CORP_VS_LLC_TAX_CALCULATOR_CONTENT } from '@/content/tools/s-corp-vs-llc-tax-calculator';
import { Calculator } from '@/components/calculators';

export const SCorpVsLLCTaxCalculator = () => {
  return (
    <Calculator
      title={S_CORP_VS_LLC_TAX_CALCULATOR_CONTENT.title}
      description={S_CORP_VS_LLC_TAX_CALCULATOR_CONTENT.description}
      inputs={S_CORP_VS_LLC_TAX_CALCULATOR_CONTENT.calculator.fields}
      results={S_CORP_VS_LLC_TAX_CALCULATOR_CONTENT.calculator.results}
      calculation={S_CORP_VS_LLC_TAX_CALCULATOR_CONTENT.calculator.calculate}
    />
  );
};
