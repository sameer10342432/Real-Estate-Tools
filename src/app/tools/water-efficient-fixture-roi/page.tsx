'use client';
async function _generateMetadata() {
  return {
    title: 'Water-Efficient Fixture ROI Calculator',
    description: 'Calculate savings from installing water-efficient toilets, faucets, and showerheads with payback period and environmental impact. Free online tool for real estate professionals, investors, and homeowners.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WATER_EFFICIENT_FIXTURE_ROI_CONTENT } from '@/content/tools/water-efficient-fixture-roi';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WaterEfficientFixtureROIPage = () => {
  return (
    <CalculatorLayout content={WATER_EFFICIENT_FIXTURE_ROI_CONTENT}>
      <EnhancedCalculator
        title={WATER_EFFICIENT_FIXTURE_ROI_CONTENT.title}
        slug="water-efficient-fixture-roi"
        category="Green & Sustainable"
        description={WATER_EFFICIENT_FIXTURE_ROI_CONTENT.description}
        inputs={WATER_EFFICIENT_FIXTURE_ROI_CONTENT.calculator.fields}
        results={WATER_EFFICIENT_FIXTURE_ROI_CONTENT.calculator.results}
        calculation={WATER_EFFICIENT_FIXTURE_ROI_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WaterEfficientFixtureROIPage;
