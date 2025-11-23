'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HousePriceComparisonZestimateVsRedfinContent } from '@/content/tools/house-price-comparison-zestimate-vs-redfin';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HousePriceComparisonZestimateVsRedfinPage = () => {
  return (
    <CalculatorLayout content={HousePriceComparisonZestimateVsRedfinContent}>
      <EnhancedCalculator
        title={HousePriceComparisonZestimateVsRedfinContent.title}
        slug="house-price-comparison-zestimate-vs-redfin"
        category="Additional Tools"
        description={HousePriceComparisonZestimateVsRedfinContent.description}
        inputs={HousePriceComparisonZestimateVsRedfinContent.calculator.fields}
        results={HousePriceComparisonZestimateVsRedfinContent.calculator.results}
        calculation={HousePriceComparisonZestimateVsRedfinContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HousePriceComparisonZestimateVsRedfinPage;
