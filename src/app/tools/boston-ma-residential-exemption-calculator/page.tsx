'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { BOSTON_MA_RESIDENTIAL_EXEMPTION_CALCULATOR_CONTENT } from '@/content/tools/boston-ma-residential-exemption-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const BostonMAResidentialExemptionCalculatorPage = () => {
  return (
    <CalculatorLayout content={BOSTON_MA_RESIDENTIAL_EXEMPTION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={BOSTON_MA_RESIDENTIAL_EXEMPTION_CALCULATOR_CONTENT.title}
        slug="boston-ma-residential-exemption-calculator"
        category="Tax Calculators"
        description={BOSTON_MA_RESIDENTIAL_EXEMPTION_CALCULATOR_CONTENT.description}
        inputs={BOSTON_MA_RESIDENTIAL_EXEMPTION_CALCULATOR_CONTENT.calculator.fields}
        results={BOSTON_MA_RESIDENTIAL_EXEMPTION_CALCULATOR_CONTENT.calculator.results}
        calculation={BOSTON_MA_RESIDENTIAL_EXEMPTION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default BostonMAResidentialExemptionCalculatorPage;
