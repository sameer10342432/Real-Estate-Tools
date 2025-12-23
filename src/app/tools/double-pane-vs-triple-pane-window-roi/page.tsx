'use client';
async function _generateMetadata() {
  return {
    title: 'Double-Pane vs Triple-Pane Window ROI Calculator - Energy Savings Comparison',
    description: 'Compare the cost and energy savings of double-pane vs triple-pane windows to determine which offers better ROI for your climate, budget, and comfort needs.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DOUBLE_PANE_VS_TRIPLE_PANE_WINDOW_ROI_CONTENT } from '@/content/tools/double-pane-vs-triple-pane-window-roi';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DoublePaneVsTriplePaneWindowRoiPage = () => {
  return (
    <CalculatorLayout content={DOUBLE_PANE_VS_TRIPLE_PANE_WINDOW_ROI_CONTENT}>
      <EnhancedCalculator
        title={DOUBLE_PANE_VS_TRIPLE_PANE_WINDOW_ROI_CONTENT.title}
        slug="double-pane-vs-triple-pane-window-roi"
        category="Energy Efficiency"
        description={DOUBLE_PANE_VS_TRIPLE_PANE_WINDOW_ROI_CONTENT.description}
        inputs={DOUBLE_PANE_VS_TRIPLE_PANE_WINDOW_ROI_CONTENT.calculator.fields}
        results={DOUBLE_PANE_VS_TRIPLE_PANE_WINDOW_ROI_CONTENT.calculator.results}
        calculation={DOUBLE_PANE_VS_TRIPLE_PANE_WINDOW_ROI_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DoublePaneVsTriplePaneWindowRoiPage;
