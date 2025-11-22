'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WHERE_CAN_I_AFFORD_TO_LIVE_MAP_CONTENT } from '@/content/tools/where-can-i-afford-to-live-map';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WhereCanIAffordToLiveMapPage = () => {
  return (
    <CalculatorLayout content={WHERE_CAN_I_AFFORD_TO_LIVE_MAP_CONTENT}>
      <EnhancedCalculator
        title={WHERE_CAN_I_AFFORD_TO_LIVE_MAP_CONTENT.title}
        slug="where-can-i-afford-to-live-map"
        category="Financial Planning"
        description={WHERE_CAN_I_AFFORD_TO_LIVE_MAP_CONTENT.description}
        inputs={WHERE_CAN_I_AFFORD_TO_LIVE_MAP_CONTENT.calculator.fields}
        results={WHERE_CAN_I_AFFORD_TO_LIVE_MAP_CONTENT.calculator.results}
        calculation={WHERE_CAN_I_AFFORD_TO_LIVE_MAP_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WhereCanIAffordToLiveMapPage;
