'use client';
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { COLORADO_GALLAGHER_AMENDMENT_TAX_IMPACT_CONTENT } from '@/content/tools/colorado-gallagher-amendment-tax-impact';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const ColoradoGallagherAmendmentTaxImpactPage = () => {
  return (
    <CalculatorLayout content={COLORADO_GALLAGHER_AMENDMENT_TAX_IMPACT_CONTENT}>
      <EnhancedCalculator
        title={COLORADO_GALLAGHER_AMENDMENT_TAX_IMPACT_CONTENT.title}
        slug="colorado-gallagher-amendment-tax-impact"
        category="Tax Calculators"
        description={COLORADO_GALLAGHER_AMENDMENT_TAX_IMPACT_CONTENT.description}
        inputs={COLORADO_GALLAGHER_AMENDMENT_TAX_IMPACT_CONTENT.calculator.fields}
        results={COLORADO_GALLAGHER_AMENDMENT_TAX_IMPACT_CONTENT.calculator.results}
        calculation={COLORADO_GALLAGHER_AMENDMENT_TAX_IMPACT_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default ColoradoGallagherAmendmentTaxImpactPage;
