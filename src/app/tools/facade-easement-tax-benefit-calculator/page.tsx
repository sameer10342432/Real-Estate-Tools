'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { FACADE_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT } from '@/content/tools/facade-easement-tax-benefit-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const FacadeEasementTaxBenefitCalculator = () => {
  return (
    <CalculatorLayout content={FACADE_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={FACADE_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.title}
        slug={FACADE_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.slug}
        category={FACADE_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.category}
        description={FACADE_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.description}
        inputs={FACADE_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.calculator.fields}
        results={FACADE_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.calculator.results}
        calculation={FACADE_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default FacadeEasementTaxBenefitCalculator;
