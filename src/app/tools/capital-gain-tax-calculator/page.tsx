'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CAPITAL_GAIN_TAX_CALCULATOR_CONTENT } from '@/content/tools/capital-gain-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CapitalGainsTaxCalculator = () => {
  return (
    <CalculatorLayout content={CAPITAL_GAIN_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CAPITAL_GAIN_TAX_CALCULATOR_CONTENT.title}
        slug={CAPITAL_GAIN_TAX_CALCULATOR_CONTENT.slug}
        category={CAPITAL_GAIN_TAX_CALCULATOR_CONTENT.category}
        description={CAPITAL_GAIN_TAX_CALCULATOR_CONTENT.description}
        inputs={CAPITAL_GAIN_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={CAPITAL_GAIN_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={CAPITAL_GAIN_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CapitalGainsTaxCalculator;