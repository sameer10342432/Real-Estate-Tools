'use client';
async function _generateMetadata() {
  return {
    title: 'Roof Replacement ROI Calculator - Calculate Return on New Roof',
    description: 'Calculate the return on investment for roof replacement including home value increase, insurance savings, and resale impact.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ROOF_REPLACEMENT_ROI_CALCULATOR_CONTENT } from '@/content/tools/roof-replacement-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RoofReplacementRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={ROOF_REPLACEMENT_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ROOF_REPLACEMENT_ROI_CALCULATOR_CONTENT.title}
        slug="roof-replacement-roi-calculator"
        category="Home Improvement"
        description={ROOF_REPLACEMENT_ROI_CALCULATOR_CONTENT.description}
        inputs={ROOF_REPLACEMENT_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={ROOF_REPLACEMENT_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={ROOF_REPLACEMENT_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RoofReplacementRoiCalculatorPage;
