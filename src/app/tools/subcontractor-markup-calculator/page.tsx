'use client';

async function _generateMetadata(): Promise<Metadata> {
  return {
    title: 'Subcontractor Markup Calculator | Property Tools',
    description: 'Calculate appropriate markup on subcontractor labor and materials for general contractors and construction managers. Estimate fair pricing and profit margins.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { SUBCONTRACTOR_MARKUP_CALCULATOR_CONTENT } from '@/content/tools/subcontractor-markup-calculator';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const SubcontractorMarkupCalculatorPage = () => {
  return (
    <CalculatorLayout content={SUBCONTRACTOR_MARKUP_CALCULATOR_CONTENT}>
      <EnhancedCalculator
        title={SUBCONTRACTOR_MARKUP_CALCULATOR_CONTENT.title}
        slug="subcontractor-markup-calculator"
        category="Home Improvement"
        description={SUBCONTRACTOR_MARKUP_CALCULATOR_CONTENT.description}
        inputs={SUBCONTRACTOR_MARKUP_CALCULATOR_CONTENT.calculator.fields}
        results={SUBCONTRACTOR_MARKUP_CALCULATOR_CONTENT.calculator.results}
        calculation={SUBCONTRACTOR_MARKUP_CALCULATOR_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default SubcontractorMarkupCalculatorPage;
