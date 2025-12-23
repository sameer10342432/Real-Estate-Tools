'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { SOUTH_CAROLINA_PROPERTY_TAX_CALCULATOR_CONTENT } from '@/content/tools/south-carolina-property-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SouthCarolinaPropertyTaxCalculatorPage = () => {
  return (
    <CalculatorLayout content={SOUTH_CAROLINA_PROPERTY_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SOUTH_CAROLINA_PROPERTY_TAX_CALCULATOR_CONTENT.title}
        slug="south-carolina-property-tax-calculator"
        category="Tax Calculators"
        description={SOUTH_CAROLINA_PROPERTY_TAX_CALCULATOR_CONTENT.description}
        inputs={SOUTH_CAROLINA_PROPERTY_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={SOUTH_CAROLINA_PROPERTY_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={SOUTH_CAROLINA_PROPERTY_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SouthCarolinaPropertyTaxCalculatorPage;
