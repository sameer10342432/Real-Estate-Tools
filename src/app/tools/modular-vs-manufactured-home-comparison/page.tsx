'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MODULAR_VS_MANUFACTURED_HOME_COMPARISON_CONTENT } from '@/content/tools/modular-vs-manufactured-home-comparison';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ModularVsManufacturedHomeComparisonPage = () => {
  return (
    <CalculatorLayout content={MODULAR_VS_MANUFACTURED_HOME_COMPARISON_CONTENT}>
      <EnhancedCalculator
        title={MODULAR_VS_MANUFACTURED_HOME_COMPARISON_CONTENT.title}
        slug="modular-vs-manufactured-home-comparison"
        category="Construction & Development"
        description={MODULAR_VS_MANUFACTURED_HOME_COMPARISON_CONTENT.description}
        inputs={MODULAR_VS_MANUFACTURED_HOME_COMPARISON_CONTENT.calculator.fields}
        results={MODULAR_VS_MANUFACTURED_HOME_COMPARISON_CONTENT.calculator.results}
        calculation={MODULAR_VS_MANUFACTURED_HOME_COMPARISON_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ModularVsManufacturedHomeComparisonPage;
