'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FLORIDA_COASTAL_CONSTRUCTION_CONTROL_LINE_CALCULATOR_CONTENT } from '@/content/tools/florida-coastal-construction-control-line-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FloridaCoastalConstructionControlLineCalculatorPage = () => {
  return (
    <CalculatorLayout content={FLORIDA_COASTAL_CONSTRUCTION_CONTROL_LINE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FLORIDA_COASTAL_CONSTRUCTION_CONTROL_LINE_CALCULATOR_CONTENT.title}
        slug="florida-coastal-construction-control-line-calculator"
        category="Legal & Compliance"
        description={FLORIDA_COASTAL_CONSTRUCTION_CONTROL_LINE_CALCULATOR_CONTENT.description}
        inputs={FLORIDA_COASTAL_CONSTRUCTION_CONTROL_LINE_CALCULATOR_CONTENT.calculator.fields}
        results={FLORIDA_COASTAL_CONSTRUCTION_CONTROL_LINE_CALCULATOR_CONTENT.calculator.results}
        calculation={FLORIDA_COASTAL_CONSTRUCTION_CONTROL_LINE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FloridaCoastalConstructionControlLineCalculatorPage;
