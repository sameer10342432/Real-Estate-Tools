"use client";
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MORTGAGE_INTEREST_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT } from '@/content/tools/mortgage-interest-deductibility-cap-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MortgageInterestDeductibilityCapCalculator = () => {
  return (
    <CalculatorLayout content={MORTGAGE_INTEREST_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MORTGAGE_INTEREST_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.title}
        slug={MORTGAGE_INTEREST_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.slug}
        category={MORTGAGE_INTEREST_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.category}
        description={MORTGAGE_INTEREST_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.description}
        inputs={MORTGAGE_INTEREST_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.calculator.fields}
        results={MORTGAGE_INTEREST_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.calculator.results}
        calculation={MORTGAGE_INTEREST_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MortgageInterestDeductibilityCapCalculator;
