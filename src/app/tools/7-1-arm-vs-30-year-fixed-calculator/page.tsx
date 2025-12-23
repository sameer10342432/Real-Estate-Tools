'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ARM_7_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT } from '@/content/tools/7-1-arm-vs-30-year-fixed-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ARM71vs30YearFixedCalculatorPage = () => {
  return (
    <CalculatorLayout content={ARM_7_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ARM_7_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT.title}
        slug="7-1-arm-vs-30-year-fixed-calculator"
        category="Mortgage"
        description={ARM_7_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT.description}
        inputs={ARM_7_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT.calculator.fields}
        results={ARM_7_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT.calculator.results}
        calculation={ARM_7_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ARM71vs30YearFixedCalculatorPage;
