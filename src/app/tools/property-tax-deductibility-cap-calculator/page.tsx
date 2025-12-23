'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PROPERTY_TAX_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT } from '@/content/tools/property-tax-deductibility-cap-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PropertyTaxDeductibilityCapCalculator = () => {
  return (
    <CalculatorLayout content={PROPERTY_TAX_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={PROPERTY_TAX_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.title}
        slug={PROPERTY_TAX_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.slug}
        category={PROPERTY_TAX_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.category}
        description={PROPERTY_TAX_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.description}
        inputs={PROPERTY_TAX_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.calculator.fields}
        results={PROPERTY_TAX_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.calculator.results}
        calculation={PROPERTY_TAX_DEDUCTIBILITY_CAP_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PropertyTaxDeductibilityCapCalculator;
