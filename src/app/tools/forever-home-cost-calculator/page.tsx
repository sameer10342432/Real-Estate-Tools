'use client';
import { FOREVER_HOME_COST_CALCULATOR_CONTENT } from '@/content/tools/forever-home-cost-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const ForeverHomeCostCalculatorPage = () => {
  return (
    <CalculatorLayout content={FOREVER_HOME_COST_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FOREVER_HOME_COST_CALCULATOR_CONTENT.title}
        slug="forever-home-cost-calculator"
        category="Lifestyle & Housing"
        description={FOREVER_HOME_COST_CALCULATOR_CONTENT.description}
        inputs={FOREVER_HOME_COST_CALCULATOR_CONTENT.calculator.fields}
        results={FOREVER_HOME_COST_CALCULATOR_CONTENT.calculator.results}
        calculation={FOREVER_HOME_COST_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ForeverHomeCostCalculatorPage;
