'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FIXED_ASSET_TURNOVER_CALCULATOR_CONTENT } from '@/content/tools/fixed-asset-turnover-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FixedAssetTurnoverCalculatorPage = () => {
  return (
    <CalculatorLayout content={FIXED_ASSET_TURNOVER_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FIXED_ASSET_TURNOVER_CALCULATOR_CONTENT.title}
        slug="fixed-asset-turnover-calculator"
        category="Financial"
        description={FIXED_ASSET_TURNOVER_CALCULATOR_CONTENT.description}
        inputs={FIXED_ASSET_TURNOVER_CALCULATOR_CONTENT.calculator.fields}
        results={FIXED_ASSET_TURNOVER_CALCULATOR_CONTENT.calculator.results}
        calculation={FIXED_ASSET_TURNOVER_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FixedAssetTurnoverCalculatorPage;