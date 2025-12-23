'use client';
async function _generateMetadata() {
  return {
    title: 'Cabinet Refinishing vs Replacement Calculator - Compare Costs & ROI',
    description: 'Compare the cost and return on investment of cabinet refinishing versus full cabinet replacement for kitchen and bathroom renovations.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CABINET_REFINISHING_VS_REPLACEMENT_CALCULATOR_CONTENT } from '@/content/tools/cabinet-refinishing-vs-replacement-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CabinetRefinishingVsReplacementCalculatorPage = () => {
  return (
    <CalculatorLayout content={CABINET_REFINISHING_VS_REPLACEMENT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CABINET_REFINISHING_VS_REPLACEMENT_CALCULATOR_CONTENT.title}
        slug="cabinet-refinishing-vs-replacement-calculator"
        category="Home Improvement"
        description={CABINET_REFINISHING_VS_REPLACEMENT_CALCULATOR_CONTENT.description}
        inputs={CABINET_REFINISHING_VS_REPLACEMENT_CALCULATOR_CONTENT.calculator.fields}
        results={CABINET_REFINISHING_VS_REPLACEMENT_CALCULATOR_CONTENT.calculator.results}
        calculation={CABINET_REFINISHING_VS_REPLACEMENT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CabinetRefinishingVsReplacementCalculatorPage;
