'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CO_OP_POST_CLOSING_LIQUIDITY_CALCULATOR_CONTENT } from '@/content/tools/co-op-post-closing-liquidity-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CoOpPostClosingLiquidityCalculatorPage = () => {
  return (
    <CalculatorLayout content={CO_OP_POST_CLOSING_LIQUIDITY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CO_OP_POST_CLOSING_LIQUIDITY_CALCULATOR_CONTENT.title}
        slug="co-op-post-closing-liquidity-calculator"
        category="Real Estate"
        description={CO_OP_POST_CLOSING_LIQUIDITY_CALCULATOR_CONTENT.description}
        inputs={CO_OP_POST_CLOSING_LIQUIDITY_CALCULATOR_CONTENT.calculator.fields}
        results={CO_OP_POST_CLOSING_LIQUIDITY_CALCULATOR_CONTENT.calculator.results}
        calculation={CO_OP_POST_CLOSING_LIQUIDITY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CoOpPostClosingLiquidityCalculatorPage;

