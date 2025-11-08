'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ONE_PERCENT_RULE_CALCULATOR_CONTENT } from '@/content/tools/1-percent-rule-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const OnePercentRuleCalculatorPage = () => {
  return (
    <CalculatorLayout content={ONE_PERCENT_RULE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ONE_PERCENT_RULE_CALCULATOR_CONTENT.title}
        slug="1-percent-rule-calculator"
        category="Real Estate"
        description={ONE_PERCENT_RULE_CALCULATOR_CONTENT.description}
        inputs={ONE_PERCENT_RULE_CALCULATOR_CONTENT.calculator.fields}
        results={ONE_PERCENT_RULE_CALCULATOR_CONTENT.calculator.results}
        calculation={ONE_PERCENT_RULE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default OnePercentRuleCalculatorPage;