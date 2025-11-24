'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { NEW_YORK_CITY_421A_TAX_ABATEMENT_ESTIMATOR_CONTENT } from '@/content/tools/new-york-city-421a-tax-abatement-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const NewYorkCity421aTaxAbatementEstimatorPage = () => {
  return (
    <CalculatorLayout content={NEW_YORK_CITY_421A_TAX_ABATEMENT_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={NEW_YORK_CITY_421A_TAX_ABATEMENT_ESTIMATOR_CONTENT.title}
        slug="new-york-city-421a-tax-abatement-estimator"
        category="State-Specific"
        description={NEW_YORK_CITY_421A_TAX_ABATEMENT_ESTIMATOR_CONTENT.description}
        inputs={NEW_YORK_CITY_421A_TAX_ABATEMENT_ESTIMATOR_CONTENT.calculator.fields}
        results={NEW_YORK_CITY_421A_TAX_ABATEMENT_ESTIMATOR_CONTENT.calculator.results}
        calculation={NEW_YORK_CITY_421A_TAX_ABATEMENT_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NewYorkCity421aTaxAbatementEstimatorPage;