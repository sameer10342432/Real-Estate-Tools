'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ZONING_VARIANCE_COST_CALCULATOR_CONTENT } from '@/content/tools/zoning-variance-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ZoningVarianceCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={ZONING_VARIANCE_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ZONING_VARIANCE_COST_CALCULATOR_CONTENT.title}
        slug="zoning-variance-cost-calculator"
        category={ZONING_VARIANCE_COST_CALCULATOR_CONTENT.category}
        description={ZONING_VARIANCE_COST_CALCULATOR_CONTENT.description}
        inputs={ZONING_VARIANCE_COST_CALCULATOR_CONTENT.calculator.fields}
        results={ZONING_VARIANCE_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={ZONING_VARIANCE_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ZoningVarianceCostCalculatorPage;
