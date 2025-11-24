'use client';

import { COLORADO_METRO_DISTRICT_TAX_ESTIMATOR_CONTENT } from '@/content/tools/colorado-metro-district-tax-estimator';
import { Calculator } from '@/components/calculators';

export const ColoradoMetroDistrictTaxEstimator = () => {
  return (
    <Calculator
      title={COLORADO_METRO_DISTRICT_TAX_ESTIMATOR_CONTENT.title}
      description={COLORADO_METRO_DISTRICT_TAX_ESTIMATOR_CONTENT.description}
      inputs={COLORADO_METRO_DISTRICT_TAX_ESTIMATOR_CONTENT.calculator.fields}
      results={COLORADO_METRO_DISTRICT_TAX_ESTIMATOR_CONTENT.calculator.results}
      calculation={COLORADO_METRO_DISTRICT_TAX_ESTIMATOR_CONTENT.calculator.calculate}
    />
  );
};
