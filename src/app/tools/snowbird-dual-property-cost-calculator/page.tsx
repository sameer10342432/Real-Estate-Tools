'use client';
import { snowbirdDualPropertyCostCalculator } from '@/content/tools/snowbird-dual-property-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const SnowbirdDualPropertyCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={snowbirdDualPropertyCostCalculator}>
      <EnhancedCalculator
        title={snowbirdDualPropertyCostCalculator.title}
        slug="snowbird-dual-property-cost-calculator"
        category="Lifestyle & Housing"
        description={snowbirdDualPropertyCostCalculator.description}
        inputs={snowbirdDualPropertyCostCalculator.calculator.fields}
        results={snowbirdDualPropertyCostCalculator.calculator.results}
        calculation={snowbirdDualPropertyCostCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SnowbirdDualPropertyCostCalculatorPage;
