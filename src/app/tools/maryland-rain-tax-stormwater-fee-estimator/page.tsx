'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MARYLAND_RAIN_TAX_STORMWATER_FEE_ESTIMATOR_CONTENT } from '@/content/tools/maryland-rain-tax-stormwater-fee-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MarylandRainTaxStormwaterFeeEstimatorPage = () => {
  return (
    <CalculatorLayout content={MARYLAND_RAIN_TAX_STORMWATER_FEE_ESTIMATOR_CONTENT}>
      <EnhancedCalculator
        title={MARYLAND_RAIN_TAX_STORMWATER_FEE_ESTIMATOR_CONTENT.title}
        slug="maryland-rain-tax-stormwater-fee-estimator"
        category="Tax Calculators"
        description={MARYLAND_RAIN_TAX_STORMWATER_FEE_ESTIMATOR_CONTENT.description}
        inputs={MARYLAND_RAIN_TAX_STORMWATER_FEE_ESTIMATOR_CONTENT.calculator.fields}
        results={MARYLAND_RAIN_TAX_STORMWATER_FEE_ESTIMATOR_CONTENT.calculator.results}
        calculation={MARYLAND_RAIN_TAX_STORMWATER_FEE_ESTIMATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MarylandRainTaxStormwaterFeeEstimatorPage;
