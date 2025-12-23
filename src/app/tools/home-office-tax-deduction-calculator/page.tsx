'use client';
import { HOME_OFFICE_TAX_DEDUCTION_CALCULATOR_CONTENT } from '@/content/tools/home-office-tax-deduction-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const HomeOfficeTaxDeductionCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOME_OFFICE_TAX_DEDUCTION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOME_OFFICE_TAX_DEDUCTION_CALCULATOR_CONTENT.title}
        slug="home-office-tax-deduction-calculator"
        category="Tax Calculators"
        description={HOME_OFFICE_TAX_DEDUCTION_CALCULATOR_CONTENT.description}
        inputs={HOME_OFFICE_TAX_DEDUCTION_CALCULATOR_CONTENT.calculator.fields}
        results={HOME_OFFICE_TAX_DEDUCTION_CALCULATOR_CONTENT.calculator.results}
        calculation={HOME_OFFICE_TAX_DEDUCTION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomeOfficeTaxDeductionCalculatorPage;
