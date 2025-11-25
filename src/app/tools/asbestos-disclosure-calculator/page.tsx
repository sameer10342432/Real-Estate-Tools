
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Asbestos Disclosure Calculator | Property Tools',
    description: 'Calculate asbestos testing and abatement costs for homes built before 1980. Essential for property transactions, renovations, and compliance with EPA regulations.',
  };
}

'use client';

import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { ASBESTOS_DISCLOSURE_CALCULATOR_CONTENT } from '@/content/tools/asbestos-disclosure-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const AsbestosDisclosureCalculatorPage = () => {
  return (
    <CalculatorLayout content={ASBESTOS_DISCLOSURE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={ASBESTOS_DISCLOSURE_CALCULATOR_CONTENT.title}
        slug="asbestos-disclosure-calculator"
        category="Home Inspection"
        description={ASBESTOS_DISCLOSURE_CALCULATOR_CONTENT.description}
        inputs={ASBESTOS_DISCLOSURE_CALCULATOR_CONTENT.calculator.fields}
        results={ASBESTOS_DISCLOSURE_CALCULATOR_CONTENT.calculator.results}
        calculation={ASBESTOS_DISCLOSURE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default AsbestosDisclosureCalculatorPage;
