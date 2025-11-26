'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { EXIT_STRATEGY_FLIPPER_CALCULATOR_CONTENT } from '@/content/tools/exit-strategy-flipper-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

export default function ExitStrategyFlipperCalculatorPage() {
  return (
    <CalculatorLayout content={EXIT_STRATEGY_FLIPPER_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={EXIT_STRATEGY_FLIPPER_CALCULATOR_CONTENT.title}
        slug="exit-strategy-flipper-calculator"
        category="Investment Analysis"
        description={EXIT_STRATEGY_FLIPPER_CALCULATOR_CONTENT.description}
        inputs={EXIT_STRATEGY_FLIPPER_CALCULATOR_CONTENT.calculator.fields}
        results={EXIT_STRATEGY_FLIPPER_CALCULATOR_CONTENT.calculator.results}
        calculation={EXIT_STRATEGY_FLIPPER_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
}
