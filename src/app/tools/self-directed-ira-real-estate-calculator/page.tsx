'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SELF_DIRECTED_IRA_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/self-directed-ira-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SelfDirectedIraRealEstateCalculatorPage = () => {
  return (
    <CalculatorLayout content={SELF_DIRECTED_IRA_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SELF_DIRECTED_IRA_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug="self-directed-ira-real-estate-calculator"
        category="Tax Planning"
        description={SELF_DIRECTED_IRA_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={SELF_DIRECTED_IRA_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={SELF_DIRECTED_IRA_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={SELF_DIRECTED_IRA_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SelfDirectedIraRealEstateCalculatorPage;
