'use client';
async function _generateMetadata() {
  return {
    title: 'HVAC Replacement ROI Calculator - Calculate Return on New HVAC System',
    description: 'Calculate the return on investment for HVAC replacement including energy savings, comfort improvements, and home value increase.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HVAC_REPLACEMENT_ROI_CALCULATOR_CONTENT } from '@/content/tools/hvac-replacement-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HvacReplacementRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={HVAC_REPLACEMENT_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HVAC_REPLACEMENT_ROI_CALCULATOR_CONTENT.title}
        slug="hvac-replacement-roi-calculator"
        category="Home Improvement"
        description={HVAC_REPLACEMENT_ROI_CALCULATOR_CONTENT.description}
        inputs={HVAC_REPLACEMENT_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={HVAC_REPLACEMENT_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={HVAC_REPLACEMENT_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HvacReplacementRoiCalculatorPage;
