'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GENERATION_SKIPPING_TAX_CALCULATOR_CONTENT } from '@/content/tools/generation-skipping-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GenerationSkippingTaxCalculator = () => {
  return (
    <CalculatorLayout content={GENERATION_SKIPPING_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={GENERATION_SKIPPING_TAX_CALCULATOR_CONTENT.title}
        slug={GENERATION_SKIPPING_TAX_CALCULATOR_CONTENT.slug}
        category={GENERATION_SKIPPING_TAX_CALCULATOR_CONTENT.category}
        description={GENERATION_SKIPPING_TAX_CALCULATOR_CONTENT.description}
        inputs={GENERATION_SKIPPING_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={GENERATION_SKIPPING_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={GENERATION_SKIPPING_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GenerationSkippingTaxCalculator;
