'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { HELOC_INTEREST_DEDUCTIBILITY_CALCULATOR_CONTENT } from '@/content/tools/heloc-interest-deductibility-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HelOCInterestDeductibilityCalculator = () => {
  return (
    <CalculatorLayout content={HELOC_INTEREST_DEDUCTIBILITY_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HELOC_INTEREST_DEDUCTIBILITY_CALCULATOR_CONTENT.title}
        slug={HELOC_INTEREST_DEDUCTIBILITY_CALCULATOR_CONTENT.slug}
        category={HELOC_INTEREST_DEDUCTIBILITY_CALCULATOR_CONTENT.category}
        description={HELOC_INTEREST_DEDUCTIBILITY_CALCULATOR_CONTENT.description}
        inputs={HELOC_INTEREST_DEDUCTIBILITY_CALCULATOR_CONTENT.calculator.fields}
        results={HELOC_INTEREST_DEDUCTIBILITY_CALCULATOR_CONTENT.calculator.results}
        calculation={HELOC_INTEREST_DEDUCTIBILITY_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HelOCInterestDeductibilityCalculator;
