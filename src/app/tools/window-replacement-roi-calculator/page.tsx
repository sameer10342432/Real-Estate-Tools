'use client';
async function _generateMetadata() {
  return {
    title: 'Window Replacement ROI Calculator - Calculate Return on New Windows',
    description: 'Calculate the return on investment for window replacement including energy savings, home value increase, and payback period.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WINDOW_REPLACEMENT_ROI_CALCULATOR_CONTENT } from '@/content/tools/window-replacement-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WindowReplacementRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={WINDOW_REPLACEMENT_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={WINDOW_REPLACEMENT_ROI_CALCULATOR_CONTENT.title}
        slug="window-replacement-roi-calculator"
        category="Home Improvement"
        description={WINDOW_REPLACEMENT_ROI_CALCULATOR_CONTENT.description}
        inputs={WINDOW_REPLACEMENT_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={WINDOW_REPLACEMENT_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={WINDOW_REPLACEMENT_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WindowReplacementRoiCalculatorPage;
