
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Property Tax Appeal Analyzer',
    description: 'Determine if appealing your property tax assessment will save you money. Free online tool for real estate professionals, investors, and homebuyers.',
  };
}

'use client'
import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import type { Metadata } from 'next';
import { PROPERTY_TAX_APPEAL_ANALYZER_CONTENT } from '@/content/tools/property-tax-appeal-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PropertyTaxAppealAnalyzerPage = () => {
  return (
    <CalculatorLayout content={PROPERTY_TAX_APPEAL_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={PROPERTY_TAX_APPEAL_ANALYZER_CONTENT.title}
        slug="property-tax-appeal-analyzer"
        category="Financial Planning"
        description={PROPERTY_TAX_APPEAL_ANALYZER_CONTENT.description}
        inputs={PROPERTY_TAX_APPEAL_ANALYZER_CONTENT.calculator.fields}
        results={PROPERTY_TAX_APPEAL_ANALYZER_CONTENT.calculator.results}
        calculation={PROPERTY_TAX_APPEAL_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PropertyTaxAppealAnalyzerPage;
