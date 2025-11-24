"use client";
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { GIFT_TAX_REAL_ESTATE_CALCULATOR_CONTENT } from '@/content/tools/gift-tax-real-estate-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const GiftTaxRealEstateCalculator = () => {
  return (
    <CalculatorLayout content={GIFT_TAX_REAL_ESTATE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={GIFT_TAX_REAL_ESTATE_CALCULATOR_CONTENT.title}
        slug={GIFT_TAX_REAL_ESTATE_CALCULATOR_CONTENT.slug}
        category={GIFT_TAX_REAL_ESTATE_CALCULATOR_CONTENT.category}
        description={GIFT_TAX_REAL_ESTATE_CALCULATOR_CONTENT.description}
        inputs={GIFT_TAX_REAL_ESTATE_CALCULATOR_CONTENT.calculator.fields}
        results={GIFT_TAX_REAL_ESTATE_CALCULATOR_CONTENT.calculator.results}
        calculation={GIFT_TAX_REAL_ESTATE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default GiftTaxRealEstateCalculator;
