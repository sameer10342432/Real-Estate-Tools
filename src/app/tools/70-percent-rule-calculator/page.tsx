'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SEVENTY_PERCENT_RULE_CALCULATOR_CONTENT } from '@/content/tools/70-percent-rule-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SeventyPercentRuleCalculatorPage = () => {
  return (
    <CalculatorLayout content={SEVENTY_PERCENT_RULE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SEVENTY_PERCENT_RULE_CALCULATOR_CONTENT.title}
        slug="70-percent-rule-calculator"
        category="Real Estate"
        description={SEVENTY_PERCENT_RULE_CALCULATOR_CONTENT.description}
        inputs={SEVENTY_PERCENT_RULE_CALCULATOR_CONTENT.calculator.fields}
        results={SEVENTY_PERCENT_RULE_CALCULATOR_CONTENT.calculator.results}
        calculation={SEVENTY_PERCENT_RULE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SeventyPercentRuleCalculatorPage;