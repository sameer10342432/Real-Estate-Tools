'use client';
async function _generateMetadata() {
  return {
    title: 'Xeriscaping (Low-Water) ROI Calculator - Drought-Tolerant Landscaping',
    description: 'Calculate the cost and water savings of converting your lawn to xeriscape with drought-tolerant plants, reducing irrigation needs by 50-75% and lowering bills.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { XERISCAPING_LOW_WATER_ROI_CALCULATOR_CONTENT } from '@/content/tools/xeriscaping-low-water-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const XeriscapingLowWaterRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={XERISCAPING_LOW_WATER_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={XERISCAPING_LOW_WATER_ROI_CALCULATOR_CONTENT.title}
        slug="xeriscaping-low-water-roi-calculator"
        category="Water Conservation"
        description={XERISCAPING_LOW_WATER_ROI_CALCULATOR_CONTENT.description}
        inputs={XERISCAPING_LOW_WATER_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={XERISCAPING_LOW_WATER_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={XERISCAPING_LOW_WATER_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default XeriscapingLowWaterRoiCalculatorPage;
