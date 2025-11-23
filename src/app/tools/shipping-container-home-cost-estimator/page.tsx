export async function generateMetadata() {
  return {
    title: 'Shipping Container Home Cost Estimator - Build Budget Calculator | Property Tools',
    description: 'Estimate the total cost to build a shipping container home. Calculate container purchase, modifications, foundation, utilities, permits, and finishing costs.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ShippingContainerHomeCostEstimatorContent } from '@/content/tools/shipping-container-home-cost-estimator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ShippingContainerHomeCostEstimatorPage = () => {
  return (
    <CalculatorLayout content={ShippingContainerHomeCostEstimatorContent}>
      <EnhancedCalculator
        title={ShippingContainerHomeCostEstimatorContent.title}
        slug="shipping-container-home-cost-estimator"
        category="Additional Tools"
        description={ShippingContainerHomeCostEstimatorContent.description}
        inputs={ShippingContainerHomeCostEstimatorContent.calculator.fields}
        results={ShippingContainerHomeCostEstimatorContent.calculator.results}
        calculation={ShippingContainerHomeCostEstimatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ShippingContainerHomeCostEstimatorPage;
