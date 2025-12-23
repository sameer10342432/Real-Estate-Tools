'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Lead Paint Disclosure Calculator | Property Tools',
    description: 'Calculate lead paint testing and disclosure requirements for homes built before 1978. Essential tool for buyers, sellers, and landlords to ensure compliance with federal law.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { LEAD_PAINT_DISCLOSURE_CALCULATOR_CONTENT } from '@/content/tools/lead-paint-disclosure-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const LeadPaintDisclosureCalculatorPage = () => {
  return (
    <CalculatorLayout content={LEAD_PAINT_DISCLOSURE_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={LEAD_PAINT_DISCLOSURE_CALCULATOR_CONTENT.title}
        slug="lead-paint-disclosure-calculator"
        category="Home Inspection"
        description={LEAD_PAINT_DISCLOSURE_CALCULATOR_CONTENT.description}
        inputs={LEAD_PAINT_DISCLOSURE_CALCULATOR_CONTENT.calculator.fields}
        results={LEAD_PAINT_DISCLOSURE_CALCULATOR_CONTENT.calculator.results}
        calculation={LEAD_PAINT_DISCLOSURE_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default LeadPaintDisclosureCalculatorPage;
