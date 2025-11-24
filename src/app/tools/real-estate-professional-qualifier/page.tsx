export async function generateMetadata() {
  return {
    title: 'Real Estate Professional (Tax) Qualifier Tool | Property Tools',
    description: 'Determine if you qualify as a real estate professional under IRS rules. Unlock the ability to deduct unlimited rental losses against ordinary income.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { REAL_ESTATE_PROFESSIONAL_QUALIFIER_CONTENT } from '@/content/tools/real-estate-professional-qualifier';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const RealEstateProfessionalQualifier = () => {
  return (
    <CalculatorLayout content={REAL_ESTATE_PROFESSIONAL_QUALIFIER_CONTENT}>
      <EnhancedCalculator
        title={REAL_ESTATE_PROFESSIONAL_QUALIFIER_CONTENT.title}
        slug={REAL_ESTATE_PROFESSIONAL_QUALIFIER_CONTENT.slug}
        category={REAL_ESTATE_PROFESSIONAL_QUALIFIER_CONTENT.category}
        description={REAL_ESTATE_PROFESSIONAL_QUALIFIER_CONTENT.description}
        inputs={REAL_ESTATE_PROFESSIONAL_QUALIFIER_CONTENT.calculator.fields}
        results={REAL_ESTATE_PROFESSIONAL_QUALIFIER_CONTENT.calculator.results}
        calculation={REAL_ESTATE_PROFESSIONAL_QUALIFIER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default RealEstateProfessionalQualifier;
