export async function generateMetadata() {
  return {
    title: 'Houseboat vs Condo Cost Calculator - Compare Waterfront Living | Property Tools',
    description: 'Compare the costs of houseboat living vs condo ownership. Analyze purchase price, moorage fees, maintenance, utilities, insurance, and unique considerations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HouseboatVsCondoCostContent } from '@/content/tools/houseboat-vs-condo-cost';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HouseboatVsCondoCostPage = () => {
  return (
    <CalculatorLayout content={HouseboatVsCondoCostContent}>
      <EnhancedCalculator
        title={HouseboatVsCondoCostContent.title}
        slug="houseboat-vs-condo-cost"
        category="Additional Tools"
        description={HouseboatVsCondoCostContent.description}
        inputs={HouseboatVsCondoCostContent.calculator.fields}
        results={HouseboatVsCondoCostContent.calculator.results}
        calculation={HouseboatVsCondoCostContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HouseboatVsCondoCostPage;
