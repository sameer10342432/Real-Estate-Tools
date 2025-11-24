'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { VIEW_EASEMENT_VALUE_CALCULATOR_CONTENT } from '@/content/tools/view-easement-value-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ViewEasementValueCalculatorPage = () => {
  return (
    <CalculatorLayout content={VIEW_EASEMENT_VALUE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={VIEW_EASEMENT_VALUE_CALCULATOR_CONTENT.title}
        slug="view-easement-value-calculator"
        category="Easements & Rights"
        description={VIEW_EASEMENT_VALUE_CALCULATOR_CONTENT.description}
        inputs={VIEW_EASEMENT_VALUE_CALCULATOR_CONTENT.calculator.fields}
        results={VIEW_EASEMENT_VALUE_CALCULATOR_CONTENT.calculator.results}
        calculation={VIEW_EASEMENT_VALUE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ViewEasementValueCalculatorPage;
