'use client';

import { EXCLUSIONARY_ZONING_CONTENT } from '@/content/tools/exclusionary-zoning';
import { Calculator } from '@/components/calculators';

export const ExclusionaryZoningCalculator = () => {
  return (
    <Calculator
      title={EXCLUSIONARY_ZONING_CONTENT.title}
      description={EXCLUSIONARY_ZONING_CONTENT.description}
      inputs={EXCLUSIONARY_ZONING_CONTENT.calculator.fields}
      results={EXCLUSIONARY_ZONING_CONTENT.calculator.results}
      calculation={EXCLUSIONARY_ZONING_CONTENT.calculator.calculate}
    />
  );
};
