'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PrivateIslandAffordabilityCalculatorContent } from '@/content/tools/private-island-affordability-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PrivateIslandAffordabilityCalculatorPage = () => {
  return (
    <CalculatorLayout content={PrivateIslandAffordabilityCalculatorContent}>
      <EnhancedCalculator
        title={PrivateIslandAffordabilityCalculatorContent.title}
        slug="private-island-affordability-calculator"
        category="Additional Tools"
        description={PrivateIslandAffordabilityCalculatorContent.description}
        inputs={PrivateIslandAffordabilityCalculatorContent.calculator.fields}
        results={PrivateIslandAffordabilityCalculatorContent.calculator.results}
        calculation={PrivateIslandAffordabilityCalculatorContent.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PrivateIslandAffordabilityCalculatorPage;
