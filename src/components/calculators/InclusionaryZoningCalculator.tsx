'use client';

import { INCLUSIONARY_ZONING_CONTENT } from '@/content/tools/inclusionary-zoning';
import { Calculator } from '@/components/calculators';

export const InclusionaryZoningCalculator = () => {
  return (
    <Calculator
      title={INCLUSIONARY_ZONING_CONTENT.title}
      description={INCLUSIONARY_ZONING_CONTENT.description}
      inputs={INCLUSIONARY_ZONING_CONTENT.calculator.fields}
      results={INCLUSIONARY_ZONING_CONTENT.calculator.results}
      calculation={INCLUSIONARY_ZONING_CONTENT.calculator.calculate}
    />
  );
};
