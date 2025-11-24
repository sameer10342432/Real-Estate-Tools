'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CAPITAL_GAINS_VS_ORDINARY_INCOME_CALCULATOR_CONTENT } from '@/content/tools/capital-gains-vs-ordinary-income-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const CapitalGainsVsOrdinaryIncomeCalculator = () => {
  return (
    <CalculatorLayout content={CAPITAL_GAINS_VS_ORDINARY_INCOME_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CAPITAL_GAINS_VS_ORDINARY_INCOME_CALCULATOR_CONTENT.title}
        slug={CAPITAL_GAINS_VS_ORDINARY_INCOME_CALCULATOR_CONTENT.slug}
        category={CAPITAL_GAINS_VS_ORDINARY_INCOME_CALCULATOR_CONTENT.category}
        description={CAPITAL_GAINS_VS_ORDINARY_INCOME_CALCULATOR_CONTENT.description}
        inputs={CAPITAL_GAINS_VS_ORDINARY_INCOME_CALCULATOR_CONTENT.calculator.fields}
        results={CAPITAL_GAINS_VS_ORDINARY_INCOME_CALCULATOR_CONTENT.calculator.results}
        calculation={CAPITAL_GAINS_VS_ORDINARY_INCOME_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default CapitalGainsVsOrdinaryIncomeCalculator;
