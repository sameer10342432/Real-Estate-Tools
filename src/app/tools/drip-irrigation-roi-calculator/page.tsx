'use client';
async function _generateMetadata() {
  return {
    title: 'Drip Irrigation ROI Calculator - Efficient Watering System Savings',
    description: 'Calculate the cost and water savings of converting from spray irrigation to drip irrigation, reducing water use by 30-50% and improving plant health.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { DRIP_IRRIGATION_ROI_CALCULATOR_CONTENT } from '@/content/tools/drip-irrigation-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const DripIrrigationRoiCalculatorPage = () => {
  return (
    <CalculatorLayout content={DRIP_IRRIGATION_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={DRIP_IRRIGATION_ROI_CALCULATOR_CONTENT.title}
        slug="drip-irrigation-roi-calculator"
        category="Water Conservation"
        description={DRIP_IRRIGATION_ROI_CALCULATOR_CONTENT.description}
        inputs={DRIP_IRRIGATION_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={DRIP_IRRIGATION_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={DRIP_IRRIGATION_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default DripIrrigationRoiCalculatorPage;
