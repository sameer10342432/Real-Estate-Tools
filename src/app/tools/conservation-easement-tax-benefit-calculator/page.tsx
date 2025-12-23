'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { CONSERVATION_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT } from '@/content/tools/conservation-easement-tax-benefit-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ConservationEasementTaxBenefitCalculator = () => {
  return (
    <CalculatorLayout content={CONSERVATION_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={CONSERVATION_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.title}
        slug={CONSERVATION_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.slug}
        category={CONSERVATION_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.category}
        description={CONSERVATION_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.description}
        inputs={CONSERVATION_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.calculator.fields}
        results={CONSERVATION_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.calculator.results}
        calculation={CONSERVATION_EASEMENT_TAX_BENEFIT_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ConservationEasementTaxBenefitCalculator;
