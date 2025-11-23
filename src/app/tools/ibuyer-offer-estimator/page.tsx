'use client'


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { IBUYER_OFFER_ESTIMATOR_CONTENT } from '@/content/tools/ibuyer-offer-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const IBuyerOfferEstimatorPage = () => {
  return (
    <CalculatorLayout content={IBUYER_OFFER_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={IBUYER_OFFER_ESTIMATOR_CONTENT.title}
        slug="ibuyer-offer-estimator"
        category="Real Estate"
        description={IBUYER_OFFER_ESTIMATOR_CONTENT.description}
        inputs={IBUYER_OFFER_ESTIMATOR_CONTENT.calculator.fields}
        results={IBUYER_OFFER_ESTIMATOR_CONTENT.calculator.results}
        calculation={IBUYER_OFFER_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default IBuyerOfferEstimatorPage;
