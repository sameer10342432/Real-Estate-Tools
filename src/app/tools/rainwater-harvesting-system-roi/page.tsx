'use client';
async function _generateMetadata() {
  return {
    title: 'Rainwater Harvesting System ROI Calculator - Water Collection Investment',
    description: 'Calculate the cost and ROI of installing a rainwater harvesting system including tanks, filtration, plumbing, water bill savings, and utility rebates.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { RAINWATER_HARVESTING_SYSTEM_ROI_CONTENT } from '@/content/tools/rainwater-harvesting-system-roi';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RainwaterHarvestingSystemRoiPage = () => {
  return (
    <CalculatorLayout content={RAINWATER_HARVESTING_SYSTEM_ROI_CONTENT}>
      <EnhancedCalculator
        title={RAINWATER_HARVESTING_SYSTEM_ROI_CONTENT.title}
        slug="rainwater-harvesting-system-roi"
        category="Water Conservation"
        description={RAINWATER_HARVESTING_SYSTEM_ROI_CONTENT.description}
        inputs={RAINWATER_HARVESTING_SYSTEM_ROI_CONTENT.calculator.fields}
        results={RAINWATER_HARVESTING_SYSTEM_ROI_CONTENT.calculator.results}
        calculation={RAINWATER_HARVESTING_SYSTEM_ROI_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RainwaterHarvestingSystemRoiPage;
