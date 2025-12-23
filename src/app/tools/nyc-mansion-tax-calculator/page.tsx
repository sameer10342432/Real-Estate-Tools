'use client';
import { NYC_MANSION_TAX_CALCULATOR_CONTENT } from '@/content/tools/nyc-mansion-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';

const NYCMansionTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={NYC_MANSION_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={NYC_MANSION_TAX_CALCULATOR_CONTENT.title}
        slug="nyc-mansion-tax-calculator"
        category="Tax Calculators"
        description={NYC_MANSION_TAX_CALCULATOR_CONTENT.description}
        inputs={NYC_MANSION_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={NYC_MANSION_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={NYC_MANSION_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default NYCMansionTaxCalculatorPage;
