'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GIFT_OF_EQUITY_CALCULATOR_CONTENT } from '@/content/tools/gift-of-equity-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GiftOfEquityCalculatorPage = () => {
  return (
    <CalculatorLayout content={GIFT_OF_EQUITY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={GIFT_OF_EQUITY_CALCULATOR_CONTENT.title}
        slug="gift-of-equity-calculator"
        category="Mortgage Calculators"
        description={GIFT_OF_EQUITY_CALCULATOR_CONTENT.description}
        inputs={GIFT_OF_EQUITY_CALCULATOR_CONTENT.calculator.fields}
        results={GIFT_OF_EQUITY_CALCULATOR_CONTENT.calculator.results}
        calculation={GIFT_OF_EQUITY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GiftOfEquityCalculatorPage;
