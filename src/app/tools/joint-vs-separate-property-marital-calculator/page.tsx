'use client';
import { jointVsSeparatePropertyMaritalCalculator } from '@/content/tools/joint-vs-separate-property-marital-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const JointVsSeparatePropertyMaritalCalculatorPage = () => {
  return (
    <CalculatorLayout content={jointVsSeparatePropertyMaritalCalculator}>
      <EnhancedCalculator
        title={jointVsSeparatePropertyMaritalCalculator.title}
        slug="joint-vs-separate-property-marital-calculator"
        category="Lifestyle & Housing"
        description={jointVsSeparatePropertyMaritalCalculator.description}
        inputs={jointVsSeparatePropertyMaritalCalculator.calculator.fields}
        results={jointVsSeparatePropertyMaritalCalculator.calculator.results}
        calculation={jointVsSeparatePropertyMaritalCalculator.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default JointVsSeparatePropertyMaritalCalculatorPage;
