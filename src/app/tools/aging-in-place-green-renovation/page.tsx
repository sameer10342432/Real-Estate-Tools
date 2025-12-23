'use client';
async function _generateMetadata() {
  return {
    title: 'Aging in Place Green Renovation Calculator - Accessible Home Upgrades',
    description: 'Calculate costs and benefits of eco-friendly home modifications for aging in place. Compare renovation costs vs assisted living expenses.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { AGING_IN_PLACE_GREEN_RENOVATION_CONTENT } from '@/content/tools/aging-in-place-green-renovation';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AgingInPlaceGreenRenovationPage = () => {
  return (
    <CalculatorLayout content={AGING_IN_PLACE_GREEN_RENOVATION_CONTENT}>
      <EnhancedCalculator
        title={AGING_IN_PLACE_GREEN_RENOVATION_CONTENT.title}
        slug="aging-in-place-green-renovation"
        category="Sustainability"
        description={AGING_IN_PLACE_GREEN_RENOVATION_CONTENT.description}
        inputs={AGING_IN_PLACE_GREEN_RENOVATION_CONTENT.calculator.fields}
        results={AGING_IN_PLACE_GREEN_RENOVATION_CONTENT.calculator.results}
        calculation={AGING_IN_PLACE_GREEN_RENOVATION_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AgingInPlaceGreenRenovationPage;
