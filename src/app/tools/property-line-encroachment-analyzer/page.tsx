'use client';
async function _generateMetadata() {
  return {
    title: 'Property Line (Encroachment) Analyzer',
    description: 'Identify and assess potential property line encroachment issues including fences, structures, driveways, and trees that cross boundary lines. Free online tool for real estate professionals, investors, and homeowners.',
  };
}


import { CalculatorLayout } from '@/components/calculators/CalculatorLayout';
import { PROPERTY_LINE_ENCROACHMENT_ANALYZER_CONTENT } from '@/content/tools/property-line-encroachment-analyzer';
import { EnhancedCalculator } from '@/components/calculators/EnhancedCalculator';

const PropertyLineEncroachmentAnalyzerPage = () => {
  return (
    <CalculatorLayout content={PROPERTY_LINE_ENCROACHMENT_ANALYZER_CONTENT}>
      <EnhancedCalculator
        title={PROPERTY_LINE_ENCROACHMENT_ANALYZER_CONTENT.title}
        slug="property-line-encroachment-analyzer"
        category="Legal & Compliance"
        description={PROPERTY_LINE_ENCROACHMENT_ANALYZER_CONTENT.description}
        inputs={PROPERTY_LINE_ENCROACHMENT_ANALYZER_CONTENT.calculator.fields}
        results={PROPERTY_LINE_ENCROACHMENT_ANALYZER_CONTENT.calculator.results}
        calculation={PROPERTY_LINE_ENCROACHMENT_ANALYZER_CONTENT.calculator.calculate}
      />
    </CalculatorLayout>
  );
};

export default PropertyLineEncroachmentAnalyzerPage;
