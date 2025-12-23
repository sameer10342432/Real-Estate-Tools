'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ARM_5_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT } from '@/content/tools/5-1-arm-vs-30-year-fixed-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ARM51vs30YearFixedCalculatorPage = () => {
  return (
    <CalculatorLayout content={ARM_5_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ARM_5_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT.title}
        slug="5-1-arm-vs-30-year-fixed-calculator"
        category="Mortgage"
        description={ARM_5_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT.description}
        inputs={ARM_5_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT.calculator.fields}
        results={ARM_5_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT.calculator.results}
        calculation={ARM_5_1_VS_30_YEAR_FIXED_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ARM51vs30YearFixedCalculatorPage;
