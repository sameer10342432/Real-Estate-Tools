
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Homestead Exemption Calculator',
    description: 'Calculate property tax savings from homestead exemptions across different states. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { HOMESTEAD_EXEMPTION_CALCULATOR_CONTENT } from '@/content/tools/homestead-exemption-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const HomesteadExemptionCalculatorPage = () => {
  return (
    <CalculatorLayout content={HOMESTEAD_EXEMPTION_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={HOMESTEAD_EXEMPTION_CALCULATOR_CONTENT.title}
        slug="homestead-exemption-calculator"
        category="Financial Planning"
        description={HOMESTEAD_EXEMPTION_CALCULATOR_CONTENT.description}
        inputs={HOMESTEAD_EXEMPTION_CALCULATOR_CONTENT.calculator.fields}
        results={HOMESTEAD_EXEMPTION_CALCULATOR_CONTENT.calculator.results}
        calculation={HOMESTEAD_EXEMPTION_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default HomesteadExemptionCalculatorPage;
