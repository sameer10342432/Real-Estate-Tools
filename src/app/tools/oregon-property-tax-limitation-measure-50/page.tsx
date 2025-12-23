'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { OREGON_PROPERTY_TAX_LIMITATION_MEASURE_50_CONTENT } from '@/content/tools/oregon-property-tax-limitation-measure-50';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const OregonPropertyTaxLimitationMeasure50Page = () => {
  return (
    <CalculatorLayout content={OREGON_PROPERTY_TAX_LIMITATION_MEASURE_50_CONTENT}>
      <EnhancedCalculator
        title={OREGON_PROPERTY_TAX_LIMITATION_MEASURE_50_CONTENT.title}
        slug="oregon-property-tax-limitation-measure-50"
        category="Tax Calculators"
        description={OREGON_PROPERTY_TAX_LIMITATION_MEASURE_50_CONTENT.description}
        inputs={OREGON_PROPERTY_TAX_LIMITATION_MEASURE_50_CONTENT.calculator.fields}
        results={OREGON_PROPERTY_TAX_LIMITATION_MEASURE_50_CONTENT.calculator.results}
        calculation={OREGON_PROPERTY_TAX_LIMITATION_MEASURE_50_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default OregonPropertyTaxLimitationMeasure50Page;
