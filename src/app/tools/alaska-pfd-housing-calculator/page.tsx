'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ALASKA_PFD_HOUSING_CALCULATOR_CONTENT } from '@/content/tools/alaska-pfd-housing-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AlaskaPFDHousingCalculatorPage = () => {
  return (
    <CalculatorLayout content={ALASKA_PFD_HOUSING_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ALASKA_PFD_HOUSING_CALCULATOR_CONTENT.title}
        slug="alaska-pfd-housing-calculator"
        category="Tax Calculators"
        description={ALASKA_PFD_HOUSING_CALCULATOR_CONTENT.description}
        inputs={ALASKA_PFD_HOUSING_CALCULATOR_CONTENT.calculator.fields}
        results={ALASKA_PFD_HOUSING_CALCULATOR_CONTENT.calculator.results}
        calculation={ALASKA_PFD_HOUSING_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AlaskaPFDHousingCalculatorPage;
