'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { LIVE_FOR_FREE_CALCULATOR_CONTENT } from '@/content/tools/live-for-free-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LiveForFreeCalculatorPage = () => {
  return (
    <CalculatorLayout content={LIVE_FOR_FREE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={LIVE_FOR_FREE_CALCULATOR_CONTENT.title}
        slug="live-for-free-calculator"
        category="Rental & Income"
        description={LIVE_FOR_FREE_CALCULATOR_CONTENT.description}
        inputs={LIVE_FOR_FREE_CALCULATOR_CONTENT.calculator.fields}
        results={LIVE_FOR_FREE_CALCULATOR_CONTENT.calculator.results}
        calculation={LIVE_FOR_FREE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LiveForFreeCalculatorPage;
