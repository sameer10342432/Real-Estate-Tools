export async function generateMetadata() {
  return {
    title: 'Mansion Tax Calculator (NY, NJ, CT) | Property Tools',
    description: 'Calculate mansion tax for luxury property purchases in New York, New Jersey, and Connecticut. Get accurate state-specific mansion tax estimates.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { MANSION_TAX_CALCULATOR_CONTENT } from '@/content/tools/mansion-tax-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const MansionTaxCalculator = () => {
  return (
    <CalculatorLayout content={MANSION_TAX_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={MANSION_TAX_CALCULATOR_CONTENT.title}
        slug={MANSION_TAX_CALCULATOR_CONTENT.slug}
        category={MANSION_TAX_CALCULATOR_CONTENT.category}
        description={MANSION_TAX_CALCULATOR_CONTENT.description}
        inputs={MANSION_TAX_CALCULATOR_CONTENT.calculator.fields}
        results={MANSION_TAX_CALCULATOR_CONTENT.calculator.results}
        calculation={MANSION_TAX_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default MansionTaxCalculator;
