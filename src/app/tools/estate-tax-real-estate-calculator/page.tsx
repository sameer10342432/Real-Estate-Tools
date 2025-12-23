'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { ESTATE_TAX_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/estate-tax-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const EstateTaxRealEstateCalculator = () => {
  return (
    <CalculatorLayout content={ESTATE_TAX_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ESTATE_TAX_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug={ESTATE_TAX_REAL_ESTATE_CALCULATOR_CONTENT.slug}
        category={ESTATE_TAX_REAL_ESTATE_CALCULATOR_CONTENT.category}
        description={ESTATE_TAX_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={ESTATE_TAX_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={ESTATE_TAX_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={ESTATE_TAX_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default EstateTaxRealEstateCalculator;
