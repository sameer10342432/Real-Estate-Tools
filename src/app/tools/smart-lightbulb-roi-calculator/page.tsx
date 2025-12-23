'use client';
async function _generateMetadata() {
  return {
    title: 'Smart Lightbulb ROI Calculator - LED Smart Bulb Savings & Payback',
    description: 'Calculate the cost and energy savings of replacing traditional bulbs with smart LED bulbs, reducing lighting costs by 75-92% with automation features.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SMART_LIGHTBULB_ROI_CALCULATOR_CONTENT } from '@/content/tools/smart-lightbulb-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SmartLightbulbRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={SMART_LIGHTBULB_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SMART_LIGHTBULB_ROI_CALCULATOR_CONTENT.title}
        slug="smart-lightbulb-roi-calculator"
        category="Energy Efficiency"
        description={SMART_LIGHTBULB_ROI_CALCULATOR_CONTENT.description}
        inputs={SMART_LIGHTBULB_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={SMART_LIGHTBULB_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={SMART_LIGHTBULB_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SmartLightbulbRoiCalculatorPage;
