'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { WASHINGTON_STATE_REET_CALCULATOR_CONTENT } from '@/content/tools/washington-state-reet-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const WashingtonStateREETCalculatorPage = () => {
  return (
    <CalculatorLayout content={WASHINGTON_STATE_REET_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={WASHINGTON_STATE_REET_CALCULATOR_CONTENT.title}
        slug="washington-state-reet-calculator"
        category="Tax Calculators"
        description={WASHINGTON_STATE_REET_CALCULATOR_CONTENT.description}
        inputs={WASHINGTON_STATE_REET_CALCULATOR_CONTENT.calculator.fields}
        results={WASHINGTON_STATE_REET_CALCULATOR_CONTENT.calculator.results}
        calculation={WASHINGTON_STATE_REET_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default WashingtonStateREETCalculatorPage;
