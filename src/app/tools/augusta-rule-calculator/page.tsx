export async function generateMetadata() {
  return {
    title: 'Augusta Rule (14-Day Rental) Tax Calculator | Property Tools',
    description: 'Calculate tax-free rental income using the Augusta Rule (Section 280A). Rent your home for up to 14 days per year without paying taxes on the income.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { AUGUSTA_RULE_CALCULATOR_CONTENT } from '@/content/tools/augusta-rule-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AugustaRuleCalculator = () => {
  return (
    <CalculatorLayout content={AUGUSTA_RULE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={AUGUSTA_RULE_CALCULATOR_CONTENT.title}
        slug={AUGUSTA_RULE_CALCULATOR_CONTENT.slug}
        category={AUGUSTA_RULE_CALCULATOR_CONTENT.category}
        description={AUGUSTA_RULE_CALCULATOR_CONTENT.description}
        inputs={AUGUSTA_RULE_CALCULATOR_CONTENT.calculator.fields}
        results={AUGUSTA_RULE_CALCULATOR_CONTENT.calculator.results}
        calculation={AUGUSTA_RULE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AugustaRuleCalculator;
