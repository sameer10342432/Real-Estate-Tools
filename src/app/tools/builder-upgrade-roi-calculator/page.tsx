'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BUILDER_UPGRADE_ROI_CALCULATOR_CONTENT } from '@/content/tools/builder-upgrade-roi-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BuilderUpgradeROICalculatorPage = () => {
  return (
    <CalculatorLayout content={BUILDER_UPGRADE_ROI_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BUILDER_UPGRADE_ROI_CALCULATOR_CONTENT.title}
        slug="builder-upgrade-roi-calculator"
        category="Insurance & Protection"
        description={BUILDER_UPGRADE_ROI_CALCULATOR_CONTENT.description}
        inputs={BUILDER_UPGRADE_ROI_CALCULATOR_CONTENT.calculator.fields}
        results={BUILDER_UPGRADE_ROI_CALCULATOR_CONTENT.calculator.results}
        calculation={BUILDER_UPGRADE_ROI_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BuilderUpgradeROICalculatorPage;
