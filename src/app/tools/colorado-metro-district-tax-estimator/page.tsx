import { COLORADO_METRO_DISTRICT_TAX_ESTIMATOR_CONTENT } from '@/content/tools/colorado-metro-district-tax-estimator';
import type { Metadata } from 'next';
import { CalculatorLayout } from '@/components/calculators';
import { ColoradoMetroDistrictTaxEstimator } from '@/components/calculators/ColoradoMetroDistrictTaxEstimator';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Colorado Metro District Tax Estimator | Metropolitan District Calculator',
    description: 'Calculate Colorado Metropolitan District taxes and fees. Estimate annual metro district mill levy costs for Colorado properties in special districts.',
  };
}

const ColoradoMetroDistrictTaxEstimatorPage = () => {
  return (
    <CalculatorLayout content={COLORADO_METRO_DISTRICT_TAX_ESTIMATOR_CONTENT}>
      <ColoradoMetroDistrictTaxEstimator />
    </CalculatorLayout>
  );
};

export default ColoradoMetroDistrictTaxEstimatorPage;
